"use client";

import React, { useEffect, useRef, useState } from "react";
import type EditorJS from "@editorjs/editorjs";
import type { OutputData } from "@editorjs/editorjs";

export default function AdminDashboard() {
  const editorRef = useRef<EditorJS | null>(null);
  const [currentStep, setCurrentStep] = useState<"admin-login" | "admin-writing">(
    "admin-login"
  );
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [contentFor, setContentFor] = useState<"interviews" | "blogs">("interviews");
  const [title, setTitle] = useState("");

  // ✅ Initialize EditorJS when entering writing mode
  useEffect(() => {
    if (currentStep !== "admin-writing") return;

    let editorInstance: EditorJS | null = null;
    let isMounted = true;

    async function initEditor() {
      const EditorJS = (await import("@editorjs/editorjs")).default;
      const Header = (await import("@editorjs/header")).default;
      const List = (await import("@editorjs/list")).default;
      const Paragraph = (await import("@editorjs/paragraph")).default;
      const Marker = (await import("@editorjs/marker")).default;
      const Underline = (await import("@editorjs/underline")).default;
      const { TextColorPlugin } = (await import("editorjs-text-color-plugin")).default;
      const ImageTool = (await import("@editorjs/image")).default;

      if (!isMounted) return;

  editorInstance = new EditorJS({
  holder: "editorjs",
  autofocus: true,
  tools: {
    header: Header,
    list: List,
    paragraph: Paragraph,
    marker: Marker,
    underline: Underline,
    // textColor: {
    //   class: TextColorPlugin,
    //   config: {
    //     colorCollections: ["#FF0000", "#00FF00", "#0000FF"],
    //     defaultColor: "#000",
    //     type: "text",
    //   },
    // },
    image: {
      class: ImageTool,
      config: {
        uploader: {
          async uploadByFile(file: File) {
            const formData = new FormData();
            formData.append("file", file);
            const res = await fetch("/api/upload", { method: "POST", body: formData });
            const result = await res.json();
            return { success: 1, file: { url: result.url } };
          },
        },
      },
    },
  },
});


      editorRef.current = editorInstance;
    }

    initEditor();

    return () => {
      isMounted = false;
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
    if (!title.trim()) return alert("Please add a title before publishing.");

    const savedData: OutputData | undefined = await editorRef.current?.save();
    console.log("✅ Published:", { title, contentFor, savedData });


  };

  // --- Admin Login UI
  if (currentStep === "admin-login") {
    return (
      <div className="min-h-screen bg-gray-50 text-black flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-center text-background mb-8">
            Welcome Back Kristina
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
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

  // --- Editor Dashboard UI
  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white shadow-md border-r border-gray-200 p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold text-background mb-6">Dashboard</h2>
          <nav className="flex flex-col gap-3">
            <button
              onClick={() => setContentFor("interviews")}
              className={`p-2 rounded-lg font-medium transition ${
                contentFor === "interviews"
                  ? "bg-green-100 text-green-700"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              Interviews
            </button>
            <button
              onClick={() => setContentFor("blogs")}
              className={`p-2 rounded-lg font-medium transition ${
                contentFor === "blogs"
                  ? "bg-green-100 text-green-700"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              Blogs
            </button>
          </nav>
        </div>
      </aside>

      {/* Editor Area */}
      <main className="flex-1 p-6 flex flex-col">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Writing for:{" "}
          <span className="text-green-600 capitalize">{contentFor}</span>
        </h1>

        <input
          type="text"
          placeholder="Enter title..."
          className="p-3 border border-gray-300 bg-white text-gray-800 rounded-lg mb-4 w-full max-w-xl focus:ring-2 focus:ring-green-200 outline-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <div
          id="editorjs"
          className="flex-1 bg-white text-gray-800 border border-gray-200 rounded-lg shadow-sm p-6 min-h-[500px]"
        />

        <button
          className="mt-6 self-end bg-green-600 hover:bg-green-500 text-white font-medium py-2 px-6 rounded-lg transition-all"
          onClick={handlePublish}
        >
          Publish
        </button>
      </main>
    </div>
  );
}
