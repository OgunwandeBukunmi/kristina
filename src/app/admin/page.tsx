"use client";

import React, { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill-new"; // Updated import
import "react-quill-new/dist/quill.snow.css"; // Updated CSS (move to layout.tsx if needed)
import { useMemo } from "react";
type response = {
  name: string,
  email: string,
  projectDetails: string,
  reason: string,
  time: string,
  url: string,
  _id: string
}

type Delta = {
  ops: Array<{
    insert?: string;
    attributes?: {
      header?: number;
      list?: string;
      bold?: boolean;
      italic?: boolean;
      color?: string;
      underline?: boolean;
      code?: boolean;
      background?: string; // For marker/highlight
      script?: string; // For inline code if needed
    };
  }>;
};

export default function AdminDashboard() {
  const quillRef = useRef<ReactQuill>(null);
  const [currentStep, setCurrentStep] = useState<"admin-login" | "admin-writing">(
    "admin-login"
  );
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [contentFor, setContentFor] = useState<"interviews" | "blogs" | "resources" | "responses">("interviews");
  const [error, setError] = useState<string | null>("")
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("")
  const [contactLoading, setContactLoading] = useState(false)
  const [responses, setResponses] = useState<response[]>([])
  const [message, setMessage] = useState("")
  const [shouldRenderEditor, setShouldRenderEditor] = useState(false);

  useEffect(() => {
    async function fetchResponses() {
      setContactLoading(true)
      try {
        const request = await fetch("/api/contact")
        if (!request.ok) return setError("Error, Something Happened")
        const response = await request.json()
        if (!response.data) return
        setContactLoading(false)
        console.log(response.data)
        setResponses(response.data)
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.error(err.message);
          setError(err.message);

        } else {
          console.error(String(err));
          setError("Something went wrong");
        }
      }

    }
    fetchResponses()

  }, [])

  useEffect(() => {
    setShouldRenderEditor(currentStep === "admin-writing" && contentFor !== "responses");
  }, [currentStep, contentFor]);

  // Image upload handler (similar to EditorJS)
  const imageHandler = useMemo(() => {
    if (typeof window === "undefined") return () => {}; // No-op on server
    return () => {
      const input = document.createElement('input');
      input.setAttribute('type', 'file');
      input.setAttribute('accept', 'image/*');
      input.click();

      input.onchange = async () => {
        const file = input.files?.[0];
        if (file) {
          const formData = new FormData();
          formData.append("file", file);
          try {
            const res = await fetch("/api/upload", { method: "POST", body: formData });
            const result = await res.json();
            const range = quillRef.current?.getEditor().getSelection()?.index || 0;
            quillRef.current?.getEditor().insertEmbed(range, 'image', result.url);
          } catch (err) {
            console.error("Image upload failed:", err);
          }
        }
      };
    };
  }, []);

  // Quill modules config (toolbar with all features)
  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, false] }], // Headers
        ['bold', 'italic', 'underline'], // Bold, italic, underline
        [{ 'color': [] }, { 'background': [] }], // Text color and highlight (marker)
        [{ 'list': 'ordered'}, { 'list': 'bullet' }], // Lists
        ['code', 'blockquote'], // Inline code, blockquote (as alt to marker)
        ['image'] // Image
      ],
      handlers: {
        image: imageHandler // Custom image upload
      }
    },
  };

  const formats = [
    'header', 'bold', 'italic', 'underline', 'color', 'background',
    'list', 'bullet', 'code', 'blockquote', 'image'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !password.trim()) return setError("Incomplete Credentials")

    if (name === "Kristina" && password === "kristina123") return setCurrentStep("admin-writing")
    setError("Incorrect Username or Password")
  };

  const handlePublish = async () => {
    if (!title.trim() || !description.trim()) return alert("Please add a title and Description before publishing.");

    if (!quillRef.current) {
      console.error("Editor instance not ready");
      return;
    }

    const savedData = quillRef.current.getEditor().getContents();
    console.log("✅ Published:", savedData);

    try {
      const request = await fetch("/api/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ space: contentFor, title, description, savedData })
      })
      if (request.ok) return setMessage("Published Succesfully ✅")
    } catch (err: unknown) {
      let message = "An unexpected error occurred";
      if (err instanceof Error) message = err.message;

      console.error("❌ Upload failed:", message);
      setError("Something Went Wrong")

    }

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
            {error ? <span className="bg-red-700 text-red-300 p-2 rounded-md font-bold mb-8 w-full">{error}</span> : <></>}
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
            <button
              onClick={() => setContentFor("resources")}
              className={`p-2 rounded-lg font-medium transition ${
                contentFor === "resources"
                  ? "bg-green-100 text-green-700"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              Resources
            </button>
            <button
              onClick={() => setContentFor("responses")}
              className={`p-2 rounded-lg font-medium transition  ${
                contentFor === "responses"
                  ? "bg-green-100 text-green-700"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              Contact Responses
            </button>
          </nav>
        </div>
      </aside>

      {/* Editor Area */}
      {contentFor !== "responses" ? (
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
          <input
            type="text"
            placeholder="Enter description..."
            className="p-3 border border-gray-300 bg-white text-gray-800 rounded-lg mb-4 w-full focus:ring-2 focus:ring-green-200 outline-none"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {message && <span className="p-2 text-green-800 w-full bg-green-300 mb-4">{message}</span>}
          
          {shouldRenderEditor && (
            <div className="flex-1 bg-white text-gray-800 border border-gray-200 rounded-lg shadow-sm p-6 min-h-[500px] flex flex-col">
              <ReactQuill
                ref={quillRef}
                theme="snow"
                modules={modules}
                formats={formats}
                placeholder="Start writing..."
                className="flex-1"
              />
            </div>
          )}

          <button
            className="mt-6 self-end bg-green-600 hover:bg-green-500 text-white font-medium py-2 px-6 rounded-lg transition-all"
            onClick={handlePublish}
          >
            Publish
          </button>
        </main>
      ) : contactLoading ? (
        <div className="text-black">
          <h1>Loading...</h1>
        </div>
      ) : responses.length === 0 ? (
        <div className="text-black">No Responses</div>
      ) : (
        <section className="px-4">
          <h1 className="text-4xl text-black mb-4 font-bold">All the responses from your Contact Form</h1>
          <main></main>
          {responses.map((item) => (
            <div
              key={item._id}
              className="bg-white shadow-md rounded-xl p-5 mb-4 border border-gray-100 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="space-y-2">
                <h2 className="text-lg font-semibold text-gray-900">{item.name}</h2>
                <p className="text-sm text-gray-600">{item.email}</p>

                <div className="mt-3">
                  <p className="text-gray-800">
                    <span className="font-medium text-gray-700">Project Details:</span> {item.projectDetails}
                  </p>
                  <p className="text-gray-800">
                    <span className="font-medium text-gray-700">Reason:</span> {item.reason}
                  </p>
                  <p className="text-gray-800">
                    <span className="font-medium text-gray-700">Time:</span> {item.time}
                  </p>
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-medium underline"
                    >
                      View File
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </section>
      )}

    </div>
  );
}