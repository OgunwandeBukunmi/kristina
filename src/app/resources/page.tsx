"use client";

import { useEffect, useState } from "react";
import RenderEditorContent from "@/components/RenderEditorContent"; // from earlier
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Image from "next/image";
import usePostStore from "@/store/useSpaceStore";
import type { Post } from "@/store/useSpaceStore";

export default function PostsList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const { setResourcesPosts } = usePostStore()
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("/api/post/resources"); // your API route that returns all posts
        const data = await res.json();
        setPosts(data.data || []);
        setResourcesPosts(data.data || [])
      } catch (err) {
        console.error("Error fetching posts:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) return (
    <>
      <Navbar />
      <p className="text-center mt-10 min-h-screen">Loading posts...</p>
      <Footer />
    </>)
  if (!posts.length)
    return (
      <>
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
          <div className="max-w-2xl">
            <p className="text-xl text-gray-300 leading-relaxed mb-10 italic">
              I share the tools, lessons, and lightbulb moments that have shaped me as an editor and as a human. Everything here has either helped me grow or increased my efficiency, and I hope it helps you too. </p>
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-white">No posts found yet</h2>
              <p className="text-pink-300">New Resources are being prepared. Please check back soon.</p>
            </div>
          </div>
        </div>
        <Footer />
      </>)

  return (
    <section>
      <Navbar />
      <div className="max-w-5xl mx-auto p-4 sm:p-6 min-h-screen">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-white text-center sm:text-left">All Posts</h1>

        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post._id}
              href={`/resources/${post._id}`}
              className="flex flex-col sm:flex-row bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Left box */}
              <div className="flex flex-col justify-between gap-4 sm:gap-16 bg-white md:w-96 md:h-64  sm:w-56 sm:h-48 sm:h-64 items-center p-6 sm:p-8">
                <h2 className="text-pink-500 font-quintessential text-center text-xl sm:text-3xl">
                  {post.title.toUpperCase()}
                </h2>
                <Image
                  src="/purpletransparent.png"
                  alt="logo"
                  height={80} // smaller on mobile
                  width={80}
                  className="sm:h-36 sm:w-36"
                />
              </div>

              {/* Right side / content */}
              <div className="flex-1 p-4 sm:p-6 flex flex-col gap-2">
                {post.description && (
                  <p className="text-white text-lg sm:text-2xl line-clamp-3 mb-4">
                    {post.description}
                  </p>
                )}


              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </section>


  );
}
