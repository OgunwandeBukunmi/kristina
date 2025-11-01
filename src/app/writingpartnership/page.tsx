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
      Ready to finally start finishing your drafts in <span className="italic text-pink-500">record time ? </span>
      </h1>
       <h3 className="mt-6 text-sm md:text-lg text-gray-200 font-funnel ">
    I help writers move from fear, overwhelm, and inconsistency to clarity and confidence in their work.
  </h3>
  </div>
 
   
  </article>

<section className="py-16 px-8 space-y-16 ">
  <main className="space-y-6 ">
    <h1 className="text-5xl font-quintessential text-center leading-snug">
      <span className="text-pink-300 italic">Tell me,</span> what makes writing hard for you?
    </h1>

    <div className="space-y-4 max-w-3xl mx-auto text-lg text-gray-200 leading-relaxed text-center">
      <p className='text-center'>
        Is it the <span className="text-pink-500 font-semibold italic">fear, overwhelm, and self-doubt</span> that sneak in when you try to start? Or the <span className="text-pink-500 font-semibold italic">loneliness</span> of doing it all on your own?
      </p>
      <p>
        Is it the <span className="text-pink-500 font-semibold italic">struggle to stay consistent</span> long enough to finish?
      </p>
      <p>
        Or the <span className="text-pink-500 font-semibold italic">frustration of having scattered ideas</span> that make you unsure what to say or where to begin?
      </p>
      <p>
        Whichever it is, <span className="font-semibold italic text-pink-500">you’re not alone.</span>
      </p>
    </div>
  </main>

  <main className="space-y-6">
    <h1 className="text-4xl font-quintessential text-center text-white mb-8">
      What If Writing Didn’t Feel So <span className="text-pink-600 italic font-bold">Heavy?</span> 
    </h1>
    <div className="max-w-3xl mx-auto space-y-4 text-lg text-gray-200 leading-relaxed">
      <p>
        Writing can be a lot. You try your best, but the <span className="text-pink-500 font-semibold italic">goals still slip away</span>. The routines, the productivity hacks—they stop helping. You start wondering if maybe <span className="text-pink-500 font-semibold italic">you’re not cut out for this.</span> Or worse, you start thinking about <span className="text-pink-500 font-semibold italic">quitting altogether.</span>
      </p>
      <p>
        But what if someone showed up to make <span className="text-green-300"> writing easier?</span> 
      </p>

      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-4 text-gray-100">Someone who:</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-200">
          <li>
            <span className="text-green-300">Listens carefully to your ideas</span> , helping you spot the thought you’re excited about and figure out what you want to say.
          </li>
          <li>
             <span className="text-green-300">Brings structure to your creativity</span>  with a plan that leverages your strengths and accommodates your weaknesses.
          </li>
          <li>
            Names what keeps you <span className="text-pink-500 font-semibold italic">stuck</span> and equips you with <span className="text-green-300">practical tools and resources</span> to move through it.
          </li>
          <li>
            Guides and grounds you with <span className="text-green-300">outlines, accountability, and shared writing sessions</span>   when it feels <span className="text-pink-500 font-semibold italic">lonely or scary</span> to keep going.
          </li>
          <li>
           <span className="text-green-300">Celebrates you through every step,</span>  displacing the <span className="text-pink-500 font-semibold italic">self-doubt</span> and helping you grow into a more confident writer.
          </li>
          <li>
            <span className="text-green-300">Polishes your work with thoughtful editorial support that tightens your writing and makes it publish-ready.</span> 
          </li>
        </ul>
      </div>
    </div>
  </main>
</section>


  <Footer/>
    </div>
  )
}
