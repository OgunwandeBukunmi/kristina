"use client";

import React, { useEffect, useRef, useState } from "react";
import type EditorJS from "@editorjs/editorjs";

export default function Page() {
  const editorRef = useRef<EditorJS | null>(null);
  const [currentStep, setCurrentStep] = useState("admin-login");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [contentFor, setContentFor] = useState("interviews");

  useEffect(() => {
    if (currentStep !== "admin-writing") return;

    let editorInstance: EditorJS = null;

    async function initEditor() {
      const EditorJS = (await import("@editorjs/editorjs")).default;
      const Header = (await import("@editorjs/header")).default;
      const List = (await import("@editorjs/list")).default;
      const ImageTool = (await import("@editorjs/image")).default;

      editorInstance = new EditorJS({
        holder: "editorjs",
        tools: {
          header: Header,
          list: List,
          image: {
            class: ImageTool,
            config: {
              endpoints: {
                byFile: "http://localhost:3000/upload", // your backend upload route
              },
            },
          },
        },
      });

      editorRef.current = editorInstance;
    }

    initEditor();

    // Cleanup on component unmount
    return () => {
      if (editorInstance) editorInstance.destroy();
      editorRef.current = null;
    };
  }, [currentStep]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && password.trim()) {
      setCurrentStep("admin-writing");
    }
  };

  const handlePublish = async () => {
    const savedData = await editorRef.current?.save();
    console.log(savedData); // 👈 You’ll see all blocks including images + text
  };

  // --- Admin login view
  if (currentStep === "admin-login") {
    return (
      <div className="min-h-screen bg-background text-black flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-8 border border-gray-100">
          <h2 className="text-3xl font-extrabold text-center text-pink-500 mb-8 tracking-tight">
            Welcome Back
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Username
              </label>
              <input
                type="text"
                id="name"
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-200 transition"
                placeholder="you@example.com"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-200 transition"
                placeholder="••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-pink-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-pink-400 transition duration-200"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }

  // --- Editor view
  return (
    <section className="min-h-screen bg-background text-black flex flex-col items-center justify-center px-4 py-12">
      <h1 className="text-white text-center text-2xl font-semibold mb-6 ">
        Writing for?
        <div className="mt-4 flex gap-4">
          <button
            className="bg-pink-500 hover:bg-pink-400 text-white font-medium py-2 px-4 rounded transition duration-200"
            onClick={() => setContentFor("interviews")}
          >
            Interviews
          </button>
          <button
            className="bg-pink-100 hover:bg-pink-200 text-pink-700 font-medium py-2 px-4 rounded transition duration-200"
            onClick={() => setContentFor("blogs")}
          >
            Blogs
          </button>
        </div>
      </h1>
      <div className="w-full mb-3 mt-2 flex flex-col md:flex-row items-center justify-center">
        <input
          type="text"
          placeholder="Title"
          className="p-3 w-full max-w-md text-black bg-white border-0 outline-0 rounded-md tracking-wider"
        /> 
        <span className="text-xl text-pink-200 p-2 ml-2 underline min-w-sm "> in {contentFor}</span>
      </div>
      <div
        id="editorjs"
        className="w-full max-w-4xl h-screen bg-white border border-gray-300 rounded-lg shadow-md p-6"
      />
      <button
        className="bg-green-700 hover:bg-green-400 self-end mr-20 text-white text-xl font-medium py-2 px-4 rounded transition duration-200 mt-5"
        onClick={handlePublish}
      >
        Publish
      </button>
    </section>
  );
}
