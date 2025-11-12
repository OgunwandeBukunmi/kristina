"use client";

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import RenderQuillContent from '@/components/RenderEditorContent';
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
  content: { ops: DeltaOp[] }; // Fixed: Added [] for array type
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
        const value :Post  = findBlogPost(id)!// Assuming this is sync; make async if needed
        setPost(value || []);
        console.log("Fetched post:", value);
        if (!value) { 
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
      <Navbar/>
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500">Loading post...</p>
      </div>
     <Footer/>
      </> 
    );
  }

  if (error || !post) {
    return (
      <>
      <Navbar/>
       <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500">{error || "Post not found"}</p>
      </div>
      <Footer/>

      </>
     
    );
  }

  return (
    <>
    <Navbar/>
    <div className="max-w-4xl mx-auto p-6 min-h-screen">
      <h1 className="text-5xl font-bold text-white mb-4">{post.title}</h1>
      {post.description && (
        <p className="text-gray-300 mb-6 italic">{post.description}</p>
      )}
      <div className="prose prose-invert max-w-none">
        <RenderQuillContent data={post.content} />
      </div>
    </div>
    <Footer/>
    </>
  );
}