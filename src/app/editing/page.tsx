import Navbar from '@/components/Navbar'
import React from 'react'
import Link from 'next/link'
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



<section>
    
</section>


  <Footer/>
    </div>
  )
}
