"use client";

import { useEffect, useState } from "react";
import RenderEditorContent from "@/components/RenderEditorContent"; // from earlier
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Image from "next/image";
import usePostStore from "@/store/useSpaceStore";
import type { Post } from "@/store/useSpaceStore";
import Pagination from "@/components/Pagination";

export default function PostsList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const { setBlogPosts } = usePostStore()
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState({ totalPages: 1, hasMore: false });

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        // Fetch internal posts (you might want to paginate these too later)
        const res = await fetch("/api/post/blogs");
        const internalData = await res.json();
        const internalPosts = internalData.data || [];

        // Fetch Substack posts with current page
        let externalPosts = [];
        try {
          const subRes = await fetch(`/api/substack?page=${currentPage}&limit=6`);
          const subData = await subRes.json();
          externalPosts = subData.data || [];
          if (subData.pagination) {
            setPagination({
              totalPages: subData.pagination.pages,
              hasMore: subData.pagination.hasMore
            });
          }
        } catch (e) {
          console.error("Failed to fetch Substack posts", e);
        }

        // Combine and sort by date
        const combined = [...internalPosts, ...externalPosts].sort((a, b) => {
          const dateA = new Date(a.publishedAt || a.createdAt).getTime();
          const dateB = new Date(b.publishedAt || b.createdAt).getTime();
          return dateB - dateA;
        });

        setPosts(combined);
        setBlogPosts(combined);
      } catch (err) {
        console.error("Error fetching posts:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, [setBlogPosts, currentPage]);

  if (loading) return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="loader-container">
          <span className="custom-loader"></span>
          <p className="text-pink-300 font-medium tracking-widest uppercase text-xs animate-pulse">
            Loading Content...
          </p>
        </div>
      </div>
      <Footer />
    </>)
  if (!posts.length)
    return (
      <>
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
          <div className="max-w-2xl">
            <p className="text-xl text-gray-300 leading-relaxed mb-10 italic">
              Here’s where I write just because I want to—fiction, non-fiction, whatever’s calling me. These are the pieces closest to my heart, and I hope they find their way into yours.
            </p>
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-white">No posts found yet</h2>
              <p className="text-pink-300">New Blogs are being prepared. Please check back soon.</p>
            </div>
          </div>
        </div>
        <Footer />
      </>)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-12">
        <header className="mb-16 text-center sm:text-left">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4 tracking-tight">
            The Journal
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl leading-relaxed">
            Exploring the intersections of life, fiction, and the human mind. 
            A collection of thoughts, stories, and observations.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => {
            const href = `/blogs/${encodeURIComponent(post._id)}`;
            const date = new Date(post.publishedAt || post.createdAt || Date.now());
            const formattedDate = date.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            });

            return (
              <Link 
                key={post._id} 
                href={href}
                className="group flex flex-col bg-secondary/40 backdrop-blur-sm border border-white/5 rounded-3xl overflow-hidden hover:border-pink-500/30 transition-all duration-500"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image || "/purpletransparent.png"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs font-medium text-gray-500 mb-4 tracking-wider uppercase">
                    <span>{formattedDate}</span>
                    {post.readingTime && (
                      <>
                        <span className="w-1 h-1 rounded-full bg-gray-700"></span>
                        <span>{post.readingTime}</span>
                      </>
                    )}
                  </div>
                  
                  <h2 className="text-3xl font-roboto-slab text-white mb-4 line-clamp-2 group-hover:text-pink-300 transition-colors leading-tight">
                    {post.title}
                  </h2>
                  
                  {post.description && (
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-8">
                      {post.description}
                    </p>
                  )}

                  <div className="mt-auto flex items-center text-pink-400 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                    Read Story 
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Pagination Control */}
        <Pagination 
          currentPage={currentPage}
          totalPages={pagination.totalPages}
          onPageChange={(page) => {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          hasMore={pagination.hasMore}
        />
      </main>
      <Footer />
    </div>
  );
}
