"use client";

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import RenderQuillContent from '@/components/RenderEditorContent';
import Link from 'next/link';
import type { DeltaOp } from '@/components/RenderEditorContent';
// Updated import path to match your renderer file
import usePostStore from '@/store/useSpaceStore';

import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export interface Post {
  _id: string;
  space: string;
  title: string;
  description?: string;
  content?: { ops: any[] } | string;
  isExternal?: boolean;
  link?: string;
}

export default function PostPage() { // Renamed for clarity (optional)
  const params = useParams(); // Destructure properly
  const id = params?.id as string; // Safer extraction
  const { findBlogPost } = usePostStore();
  const [post, setPost] = useState<Post | undefined>();
  const [loading, setLoading] = useState(true); // Added for better UX
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("No post ID provided");
      setLoading(false);
      return;
    }

    const fetchPost = async () => {
      try {
        setLoading(true);
        // 1. Try to find in store first
        let value = findBlogPost(id);
        
        // 2. If not in store, it might be a direct navigation or refresh
        if (!value) {
          console.log("Post not in store, fetching from Substack API...");
          const res = await fetch("/api/substack");
          const data = await res.json();
          if (data.success) {
            value = data.data.find((p: any) => p._id === id);
          }
        }

        // 3. If still not found, it might be a database post
        if (!value) {
          // Fallback to existing API logic for database posts if you have one
          // For now, we'll just set it to the found value
        }

        if (value) {
          setPost(value);
        } else {
          setError("Post not found");
        }
      } catch (err) {
        console.error("Error fetching post:", err);
        setError("Failed to load post");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id, findBlogPost]);

  if (loading) {
    return (
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
      </>
    );
  }

  if (error || !post) {
    return (
      <>
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-red-500">{error || "Post not found"}</p>
        </div>
        <Footer />

      </>

    );
  }

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 min-h-screen">
        <Link 
          href="/blogs" 
          className="text-pink-400 hover:text-pink-300 flex items-center gap-2 mb-8 transition-colors group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to all posts
        </Link>
        <h1 className="text-4xl sm:text-6xl font-roboto-slab text-white mb-6 leading-tight">{post.title}</h1>
        {post.description && (
          <p className="text-gray-400 text-xl mb-10 font-roboto-slab opacity-80">{post.description}</p>
        )}
        <div className="prose prose-invert max-w-none blog-content font-roboto-slab text-lg sm:text-xl leading-relaxed text-gray-200">
          {typeof post.content === 'string' ? (
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          ) : (
            <RenderQuillContent data={post.content!} />
          )}
        </div>

        {post.isExternal && post.link && (
          <div className="mt-12 pt-8 border-t border-gray-800 text-start">
            <a 
              href={post.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-8 rounded-full transition-colors"
            >
              View this post on Substack
            </a>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}