"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import dynamic from "next/dynamic";
import type { Post } from "@/store/useSpaceStore";
import usePostStore from "@/store/useSpaceStore";

// Dynamic import (unchanged)
const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
  loading: () => <p>Loading editor...</p>,
});

import "react-quill-new/dist/quill.snow.css";

// Your original types (unchanged)
type response = {
  name: string;
  email: string;
  projectDetails: string;
  reason: string;
  time: string;
  url: string;
  _id: string;
};

// Best practice: use unknown instead of any
type Delta = unknown;

// Proper interface for the Quill editor instance
interface QuillEditorInstance {
  getEditor(): {
    getContents(): Delta;
    setContents(delta: Delta): void;
    getSelection(): { index: number } | null;
    insertEmbed(index: number, type: string, value: string): void;
    setSelection(index: number, length: number): void;
  };
}

// This is the clean, lint-safe way to make ref work with dynamic import
// No `any`, no lint errors, full TypeScript support
const ReactQuillWithRef = ReactQuill as React.ForwardRefExoticComponent<
  React.RefAttributes<QuillEditorInstance> & {
    theme?: string;
    modules?: Record<string, unknown>;
    formats?: string[];
    placeholder?: string;
    className?: string;
  }
>;

export default function AdminDashboard() {
  // Fully typed ref — no `any`, no errors
  const quillRef = useRef<QuillEditorInstance | null>(null);
  const { findAndDeletePost } = usePostStore()
  const [currentStep, setCurrentStep] = useState<"admin-login" | "admin-writing">("admin-login");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [contentFor, setContentFor] = useState<"interviews" | "blogs" | "resources" | "responses" | "writingSpaces">("interviews");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [contactLoading, setContactLoading] = useState(false);
  const [responses, setResponses] = useState<response[]>([]);
  const [message, setMessage] = useState("");
  const [posts, setPosts] = useState<Post[] | null>(null)
  const [shouldRenderEditor, setShouldRenderEditor] = useState(false);
  const [writingSpaceLoading, setWritingSpaceLoading] = useState(false)
  const [loginError, setLoginError] = useState<string | null>("")
  const [contactError, setContactError] = useState<string | null>("");
  const [writingSpaceError, setWritingSpaceError] = useState<string | null>("")
  const [publishError, setPublishError] = useState<string | null>("")


  useEffect(() => {
    async function fetchResponses() {
      setContactLoading(true);
      try {
        const request = await fetch("/api/contact");
        if (!request.ok) return setContactError(`Request failed with error code: ${request.status}`);
        const response = await request.json();
        if (!response.data) return setContactError(`Error: ${response.message}`);
        setResponses(response.data);
        console.log(response.data)
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.error(err.message);
          setContactError(err.message);
        } else {
          console.error(String(err));
          setContactError(`Error: ${String(err)}`);
        }
      }
      setContactLoading(false);
    }

    async function fetchPosts() {
      setWritingSpaceLoading(true)
      try {
        const request = await fetch("/api/post");

        if (!request.ok) return setWritingSpaceError(`Request failed with error code: ${request.status}`);
        const response = await request.json();
        if (!response.data) return setWritingSpaceError(`Error: ${response.message}`)
        setPosts(response.data);
        setWritingSpaceLoading(false);
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.error(err.message);
          setWritingSpaceError(err.message);
        } else {
          console.error(String(err));
          setWritingSpaceError(`Error: ${String(err)}`);
        }
      }


    }

    fetchResponses();
    fetchPosts();

  }, []);

  useEffect(() => {
    setShouldRenderEditor(currentStep === "admin-writing" && contentFor !== "responses");
  }, [currentStep, contentFor]);

  // Image handler — fully safe and typed
  const imageHandler = useMemo(() => {
    if (typeof window === "undefined") return () => { };
    return () => {
      const input = document.createElement("input");
      input.setAttribute("type", "file");
      input.setAttribute("accept", "image/*");
      input.click();

      input.onchange = async () => {
        const file = input.files?.[0];
        if (file && quillRef.current) {
          const formData = new FormData();
          formData.append("file", file);
          try {
            const res = await fetch("/api/upload", { method: "POST", body: formData });
            const result = await res.json();
            const range = quillRef.current.getEditor().getSelection()?.index || 0;
            quillRef.current.getEditor().insertEmbed(range, "image", result.url);
          } catch (err) {
            console.error("Image upload failed:", err);
          }
        }
      };
    };
  }, []);

  const modules = useMemo(() => {
    if (typeof window === "undefined") {
      return { toolbar: false };
    }
    return {
      toolbar: {
        container: [
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline"],
          [{ color: [] }, { background: [] }],
          [{ list: "ordered" }, { list: "bullet" }],
          ["code", "blockquote"],
          ["image"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    };
  }, [imageHandler]);

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "color",
    "background",
    "list",
    "bullet",
    "code",
    "blockquote",
    "image",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !password.trim()) return setLoginError("Incomplete Credentials");

    if (name === "Kristina" && password === "kristina123") return setCurrentStep("admin-writing");
    setLoginError("Incorrect Username or Password");
  };

  const handlePublish = async () => {
    if (!title.trim() || !description.trim())
      return alert("Please add a title and Description before publishing.");

    if (!quillRef.current) {
      console.error("Editor instance not ready");
      return;
    }

    const savedData = quillRef.current.getEditor().getContents();

    try {
      const request = await fetch("/api/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ space: contentFor, title, description, savedData }),
      });
      if (request.ok) setMessage("Published Succesfully");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something Went Wrong";
      console.error("Upload failed:", message);
      setPublishError(message);
    }
  };

  // Login UI — 100% unchanged
  if (currentStep === "admin-login") {
    return (
      <div className="min-h-screen bg-gray-50 text-black flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-center text-background mb-8">
            Welcome Back Kristina
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {loginError ? (
              <span className="bg-red-700 text-red-300 p-2 rounded-md font-bold mb-8 w-full">{loginError}</span>
            ) : null}
            <div className="mt-4">
              <label className="block text-sm font-medium mb-1">Username</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-200 focus:border-green-300 outline-none"
                placeholder="Admin name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-200 focus:border-green-300 outline-none"
                placeholder="••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-background text-white font-semibold py-2 rounded-lg hover:bg-purple-900 transition-all"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Dashboard UI — only one tiny change: ReactQuill → ReactQuillWithRef
  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white shadow-md border-r border-gray-200 p-6 flex flex-col">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Dashboard
        </h2>

        <nav className="flex flex-col gap-2">
          {(
            [
              "interviews",
              "blogs",
              "resources",
              "responses",
              "writingSpaces",
            ] as const
          ).map((item) => (
            <button
              key={item}
              onClick={() => setContentFor(item)}
              className={`px-3 py-2 rounded-lg text-left font-medium transition
            ${contentFor === item
                  ? "bg-green-100 text-green-700"
                  : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              {item === "writingSpaces"
                ? "Writing Spaces"
                : item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <section className="flex-1 p-6 overflow-y-auto">
        {contentFor === "responses" ? (
          contactLoading ? (
            <div className="flex items-center justify-center h-40 text-gray-500">
              Loading responses...
            </div>
          ) : contactError ? (
            <div className="flex items-center justify-center h-40 text-gray-500">
              {contactError}
            </div>
          ) : (
            <>
              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                Contact Responses
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {responses.map((item) => (
                  <div
                    key={item._id}
                    className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
                  >
                    <div className="flex justify-between mb-4">
                      <div>
                        <h2 className="text-lg font-semibold text-gray-900">
                          {item.name}
                        </h2>
                        <a
                          href={`mailto:${item.email}`}
                          className="text-sm text-green-600 hover:underline"
                        >
                          {item.email}
                        </a>
                      </div>

                      <span className="text-xs text-gray-400">
                        {item.time}
                      </span>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xs font-semibold text-gray-500 uppercase">
                          Project Details
                        </h3>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {item.projectDetails}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xs font-semibold text-gray-500 uppercase">
                          Reason
                        </h3>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {item.reason}
                        </p>
                      </div>
                    </div>

                    {item.url && (
                      <div className="mt-5 pt-4 border-t flex justify-end">
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 text-sm border rounded-lg text-black hover:bg-gray-100"
                        >
                          View Attachment
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )
        ) : contentFor === "writingSpaces" ? (
          writingSpaceLoading ? (
            <div className="flex items-center justify-center h-40 text-gray-500">
              Loading posts...
            </div>
          ) : writingSpaceError ? (
            <div className="flex items-center justify-center h-40 text-gray-500">
              {writingSpaceError}
            </div>
          ) : (
            <>
              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                Posts
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts?.map((post) => (
                  <div
                    key={post._id}
                    className="bg-white border rounded-xl p-5 hover:shadow-md transition cursor-pointer"
                  >
                    <h2 className="title text-lg font-semibold text-gray-900 mb-2">
                      {post.title}
                    </h2>

                    <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                      {post.description}
                    </p>
                    <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                      {post.space}
                    </p>
                    <button
                      onClick={async (e) => {
                        e.stopPropagation();
                        if (!confirm("Are you sure you want to delete this post?")) return;
                        try {
                          const res = await fetch(`/api/post`,
                            {
                              method: "DELETE",
                              headers: {
                                "Content-Type": "application/json"
                              },
                              body: JSON.stringify({ id: post._id })
                            });
                          setPosts(prev => prev ? prev.filter(item => item._id !== post._id) : prev);
                        } catch (err) {
                          alert(`Error failed ${err}`)
                        }
                      }}
                      className="text-sm text-red-600 hover:text-red-800 font-medium mb-3 block"
                    >
                      Delete Post
                    </button>


                    <span className="text-xs text-gray-400">
                      {new Date(post.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                ))}
              </div>
            </>
          )
        ) : (
          <>
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">
              Writing for{" "}
              <span className="text-green-600 capitalize">{contentFor}</span>
            </h1>

            <div className="max-w-3xl space-y-4">
              <input
                type="text"
                placeholder="Enter title..."
                className="w-full bg-white text-gray-900 p-3  rounded-lg focus:ring-2 focus:ring-green-200 outline-none"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <input
                type="text"
                placeholder="Enter description..."
                className="w-full bg-white text-gray-900 p-3  rounded-lg focus:ring-2 focus:ring-green-200 outline-none"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />

              {message && (
                <div className="p-2 bg-green-100 text-green-800 rounded">
                  {message}
                </div>
              )}
              {publishError && (
                <div className="p-2 bg-red-100 text-red-800 rounded">
                  {publishError}
                </div>
              )}



            </div>

            {shouldRenderEditor && (
              <div className="mt-6 bg-white border rounded-lg p-6 min-h-[500px]">
                <ReactQuillWithRef
                  ref={quillRef}
                  theme="snow"
                  modules={modules}
                  formats={formats}
                  placeholder="Start writing..."
                  className="h-full"
                />
              </div>
            )}

            <button
              onClick={handlePublish}
              className="mt-6 bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded-lg"
            >
              Publish
            </button>
          </>
        )}
      </section>
    </div>

  );
}