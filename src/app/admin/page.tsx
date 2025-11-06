"use client";

import React, { useEffect, useRef, useState } from "react";
import type EditorJS from "@editorjs/editorjs";
import type { OutputData } from "@editorjs/editorjs";
import { div, h1 } from "framer-motion/client";

type response = {
  name : "string",
  email : "string",
  projectDetails:"string",
  reason : "string",
  time: "string",
  url : "string",
  _id : "string"

}

export default function AdminDashboard() {
  const editorRef = useRef<EditorJS | null>(null);
  const [currentStep, setCurrentStep] = useState<"admin-login" | "admin-writing">(
    "admin-login"
  );
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [contentFor, setContentFor] = useState<"interviews" | "blogs" | "resources" | "responses">("interviews");
  const[error,setError] = useState<string | null>("")
  const [title, setTitle] = useState("");
  const[contactLoading,setContactLoading] = useState(false)
  const [responses,setResponses] = useState<response[]>([])

useEffect(()=>{
 async function fetchResponses(){
  setContactLoading(true)
  try{
    const request = await fetch("/api/contact")
    if(!request.ok) return setError("Error, Something Happened")
    const response = await request.json()
  if(!response.data) return
  setContactLoading(false)
    console.log(response.data)
     setResponses(response.data)
  }catch (err: unknown) {
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

},[])


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
      // const Marker = (await import("@editorjs/marker")).default;
      const Underline = (await import("@editorjs/underline")).default;
      // const { TextColorPlugin } = (await import("editorjs-text-color-plugin")).default;
      const ImageTool = (await import("@editorjs/image")).default;

      if (!isMounted) return;

  editorInstance = new EditorJS({
  holder: "editorjs",
  autofocus: true,
  tools: {
    header: Header,
    list: List,
    paragraph: Paragraph,
    // marker: Marker,
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
    if (!name.trim() ||  !password.trim()) return setError("Incomplete Credentials") 

    
      if(name === "Kristina" && password === "kristina123"  ) return setCurrentStep("admin-writing")
        setError("Incorrect Username or Password")
  };

  const handlePublish = async () => {
    if (!title.trim()) return alert("Please add a title before publishing.");

    const savedData: OutputData | undefined = await editorRef.current?.save();
    console.log("✅ Published:", savedData);

    try{
      const request = await fetch("/api/post",{
        method : "POST",
        headers:{
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({title,savedData})
      })
    }catch(err :unknown){
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
      {contentFor != "responses" ? (
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
      </main>): contactLoading ? (
        <div className="text-black">
          <h1>Loading...</h1>
        </div>
        ) : responses.length == 0 ? (
          <div className="text-black">No Responses</div>
        ) :( 
      <section className="px-4 ">
        <h1 className="text-4xl text-black mb-4 font-bold">All the responses from your Contact Form</h1>
        <main></main>
        {responses && responses.map((item)=>(
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
