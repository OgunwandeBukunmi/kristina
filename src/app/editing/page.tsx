import Navbar from '@/components/Navbar'
import React from 'react'
// import Link from 'next/link'
import Footer from '@/components/Footer'

export default function page() {
  return (
    <div>
      <Navbar/>
        <article className=" h-[500px]  relative text-center py-12   overflow-hidden p-2 ">
    {/* Background image and gradient */}
    <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-800 bg-[url('/passion_word.jpg')] bg-cover bg-center opacity-60"></div>

    {/* Softer overlay for better text visibility */}
    <div className="absolute inset-0 bg-black/20"></div>

    {/* Content */}
    <div className="relative z-10 text-white px-4">
      <h1 className="text-5xl md:text-8xl font-instrument font-bold font-de leading-tight">
      Developmental and Line Editing that supports <span className="italic text-pink-500">your voice, your story, and your vision</span>
      </h1>
  </div>
 
   
  </article>



<section className='py-16 px-8'>
    <main>
      <div className='mx-auto space-y-8 max-w-2xl text-xl p-8 py-16 text-white  rounded-lg'>
        <p className='text-center italic tracking-wider'>&apos;From the very first project, Kristina showed a level of thoroughness and attention to detail that instantly stood out. Should I start with how she carefully leaves comments that actually help me improve my writing? She doesn’t just correct mistakes, she explains her reasoning, offers smart suggestions, and always manages to refine my work without altering my tone or voice. It’s rare to find someone who edits with both precision and empathy, but Kristina does it effortlessly.&apos;</p>
        <p className='text-center text-pink-400'>—Marvellous</p>
        </div>

    </main>

</section>
    <section>
      
    </section>


  <Footer/>
    </div>
  )
}
