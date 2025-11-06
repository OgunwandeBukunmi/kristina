"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { ChangeEvent, FormEvent, useState } from 'react'
import React from 'react'

export default function page() {
      const [name,setName] = useState<string >("")
      const[email,setEmail] = useState<string >("")
      const[reason,setReason] = useState<string >("")
      const[aboutProject,setaboutProject] = useState<string >("")
       const[time,setTime] = useState<string >("")
       const[error,setError] = useState<string>("")
      const[message,setMessage] = useState("")
       const formData = new FormData()


  async function handleContactFormSubmit(e : FormEvent){
    e.preventDefault()
    formData.append("name",name)
    formData.append("email",email)
    formData.append("reason",reason)
    formData.append("projectDetails",aboutProject)
    formData.append("time",time)
    
    console.log("Contact Data Received")
    try{
      const request = await fetch("/api/contact",{
        method : "POST",
        body : formData
      })
      const response = await request.json()
      console.log(response.message,response.url)
      setMessage(response.message)
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

  return (
    <div> 
        <Navbar/>
            <section
     id="contact"
     className="bg-[#430169] text-white py-16 px-6 md:px-12 lg:px-20 flex flex-col items-center"
   >
     <div className="max-w-2xl w-full">
       <h1 className="text-center text-pink-300 text-3xl md:text-4xl font-semibold mb-4">
         Got a project, question, or wild idea? Tell me all about it!
       </h1>
       <h3 className="text-center text-gray-200 text-base md:text-lg mb-10">
         I read every message personally (yes, really). Fill out the form below,
         and I’ll get back to you soon.
       </h3>
   
       <form className="flex flex-col gap-5" onSubmit={handleContactFormSubmit}>
        {error ? <span className="p-s bg-red-900 text-red-300 rounded-md">{error}</span> : <></> } 
         <input
           type="text"
           placeholder="Your Name"
           required
           className="w-full p-3 rounded-xl bg-[#5d2b8c] border border-transparent focus:border-pink-400 outline-none transition duration-300 placeholder-gray-300"
           onChange={(e)=>setName(e.target.value)}
           value={name}
          
         />
   
         <input
           type="email"
           name="email"
           placeholder="Your Email"
           required
           className="w-full p-3 rounded-xl bg-[#5d2b8c] border border-transparent focus:border-pink-400 outline-none transition duration-300 placeholder-gray-300"
           value={email}
           onChange={(e)=>setEmail(e.target.value)}
         />
   
         <select
         required
           className="w-full p-3 rounded-xl bg-[#5d2b8c] border border-transparent focus:border-pink-400 outline-none text-gray-200 transition duration-300"
           onChange={(e)=>setReason(e.target.value)}
         >
               <option value="" disabled selected>
      What are you reaching out about?
     </option>
           <option>Writing Partnership</option>
           <option>Editing</option>
           <option>LinkedIn/Website Content Writing</option>
           <option>Something else!</option>
         </select>
   
         <textarea
         required
           placeholder="Tell me about your project (project type, genre, word count, expectations, …)"
           rows={5}
           className="w-full p-3 rounded-xl bg-[#5d2b8c] border border-transparent focus:border-pink-400 outline-none transition duration-300 placeholder-gray-300 resize-none"
           value={aboutProject}
           onChange={(e)=>setaboutProject(e.target.value)}
         ></textarea>
   
         <select
         required
           className="w-full p-3 rounded-xl bg-[#5d2b8c] border border-transparent focus:border-pink-400 outline-none text-gray-200 transition duration-300"
           onChange={(e)=>setTime(e.target.value)}
         >
             <option value="" disabled selected>
      How soon are you looking to start?
     </option>
           <option>ASAP</option>
           <option>In the next few weeks</option>
           <option>Just exploring for now</option>
         </select>
   
             <p className="font-semibold"> Book a <span className="text-pink-300">free 20-minute call</span>  to see if we’re the right fit.</p>
             <div >  
               <p>file upload — for manuscripts or briefs(optional)</p>
             <input 
             accept="image/*,application/pdf"
             type="file" className="p-3 border border-transparent bg-white/10 backdrop-blur-md rounded-lg"  
             onChange={async (e: ChangeEvent<HTMLInputElement>) => {
     const files = e.target.files;
     if (!files || files.length === 0) return; // no file selected
     formData.append("file", files[0]);
     console.log("File added:", files[0]);
   }
             }/></div>
           
         <button
           type="submit"
           className="mt-6 bg-pink-400 hover:bg-pink-500 text-white font-medium py-3 px-8 rounded-xl shadow-lg transition duration-300"
         >
           Send Message
         </button>
         {message ? <span className="p-s bg-red-900 text-red-300 rounded-md">{message}</span> : <></> } 
       </form>
     </div>
   </section>
   <Footer/>
   </div>
  
  )
}
