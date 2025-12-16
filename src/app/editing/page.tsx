"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from '@/components/Navbar'
import React from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import Image from "next/image";
import { FiBookOpen, FiEdit, FiType, FiUsers, FiCheckCircle, FiXCircle, FiHeart } from 'react-icons/fi'
import { Handshake } from 'lucide-react';

export default function page() {
  const reviews = [{
    content : "It was my first time ever working with an editor, and honestly, it made me see why editors are important, especially when your problem isn’t grammar. What Kristina did was more than correcting words. She understood my voice, my audience, and what I was really trying to do with my writing. She pointed out things I hadn’t even noticed—tiny blind spots that could’ve messed with the message or made it fall flat.They might seem like small things, but when you’re working with someone who gets it, like she did, your work transforms from a piece of shiny coal into pure gold. The whole process felt easier because it quickly became clear I could trust her",
    person : "Kindness"
  },
  {
    content : "Kristina was recommended to me by a friend, and to be honest, I wasn’t entirely sure what to expect. I’ve met a lot of so-called editors who claimed to be professionals but turned out to be far from it. However, Kristina completely changed that impression. From the very first project, she showed a level of thoroughness and attention to detail that instantly stood out.Should I start with how she carefully leaves comments that actually help me improve my writing? She doesn’t just correct mistakes, she explains her reasoning, offers smart suggestions, and always manages to refine my work without altering my tone or voice. It’s rare to find someone who edits with both precision and empathy, but Kristina does it effortlessly.Beyond her editing skills, she’s incredibly respectful, communicates clearly, and always meets deadlines. She approaches every task with care and professionalism, ensuring that the final piece reads better, flows smoother, and feels more polished. Over time, we’ve built a strong working relationship rooted in trust and mutual respect, and I truly value thatIn short, Kristina is one of the few people I can confidently say makes my work better every single time. She’s skilled, reliable, and genuinely invested in helping me grow as a writer, a true professional in every sense.",
    person : "Marvellous"
  },
  {content : "I met Kristina when I was marketing manager at MysticqueRose Publishing, and she wrote some of our website and LinkedIn copy. One thing I really loved about her was how she never shied away from learning. If she didn’t know something, she’d figure it out quickly and come back with results. She also worked with me on my personal website later, and she delivered everything beautifully and on time.She’s professional, consistent, and so easy to work with, even when we’re friends outside of work.",
    person : "Esther"
  },

]


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
      Developmental and Line Editing that supports <span className="italic text-pink-500">your voice <span className="text-white">, </span>your story<span className="text-white">, and </span> your vision</span>
      </h1>
  </div>
 
   
  </article>



<section className='py-16 px-8 bg-gray-800'>
    <main>
      <div className='mx-auto space-y-8 max-w-2xl text-xl p-8 py-16 text-white  rounded-lg'>
        <p className='text-center italic tracking-wider'>&apos;From the very first project, Kristina showed a level of thoroughness and attention to detail that instantly stood out. Should I start with how she carefully leaves comments that actually help me improve my writing? She doesn’t just correct mistakes, she explains her reasoning, offers smart suggestions, and always manages to refine my work without altering my tone or voice. It’s rare to find someone who edits with both precision and empathy, but Kristina does it effortlessly.&apos;</p>
        <p className='text-center text-pink-400 items-center flex flex-row gap-2'>
          <Image 
          src="https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmxhY2slMjB3b21hbiUyMHBvcnRyYWl0fGVufDB8fDB8fHww/"
          alt="woman portrait"
          width={60}
          height={20}
          className="rounded-full w-12 h-12"
          />
          Marvellous</p>
        </div>

    </main>

</section>


<section className="bg-background py-20 px-6 md:px-20 lg:px-10">
  <main className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-14 md:gap-20">

    {/* Image */}
    <div className="w-full md:w-1/2 flex justify-center">
      <Image
        src="https://images.unsplash.com/photo-1597563104935-03914a270d87?w=600&auto=format&fit=crop&q=60"
        alt="Woman jumping and cheering"
        width={600}
        height={600}
        className="object-cover rounded-3xl shadow-xl w-full"
      />
    </div>

    {/* Text */}
    <div className="w-full md:w-1/2 text-gray-200">

      <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-8">
        You’ve done the brave thing:{" "}
        <span className="italic text-pink-500">you wrote your book.</span>
      </h1>

      <div className="space-y-6 text-lg leading-relaxed">

        <p>
          Now that it’s done, a new question quietly creeps in:
          <span className="italic text-pink-400"> Is it actually good?</span>{" "}
          Will readers understand what you were trying to say? Did you do justice
          to the story that mattered so deeply to you?
        </p>

        <p>
          You’ve read and reread it countless times, squinting at the
          <span className="text-green-500 font-semibold"> structure</span>, the
          <span className="text-green-500 font-semibold"> characterization</span>,
          and all those intimidating editing terms you were never supposed to
          master alone.
        </p>

        <p>
          Maybe there’s also a quieter fear beneath it all—that handing your book
          to an editor might mean losing your voice.
        </p>

        <p className="text-xl font-semibold text-white pt-4">
          But what if it didn’t have to be that way?
        </p>

        <p>
          What if a seasoned professional could step in—someone fluent in the
          technical side of editing and deeply committed to
          <span className="text-green-500 font-semibold"> honoring your voice</span>?
          Someone whose goal is not to rewrite you, but to help your story become
          the strongest version of itself.
        </p>

        <blockquote className="border-l-4 border-indigo-500 pl-5 italic text-pink-400">
          Editing doesn’t strip you of your voice—it helps you grow into it.
          It brings you closer to the readers who are waiting for your story.
        </blockquote>

        <p>
          Together, we’ll identify what’s working, gently address what isn’t,
          and find solutions that align with your style, your goals, and your
          vision for this book.
        </p>

        <p className="font-medium text-pink-400">
          With five years of experience supporting writers across genres, this is
          exactly the work I love to do.
        </p>

      </div>
    </div>
  </main>

  {/* CTA */}
  <div className="text-center mt-20">
    <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
      Are you ready to bring the best version of your book to life?
    </h2>

    <button className="bg-pink-500 text-white font-semibold px-10 py-4 rounded-full hover:bg-pink-600 transition shadow-lg">
      <Link href={"/contact"}>I’m Ready</Link>
      
    </button>
  </div>
</section>



<section className="bg-gray-800 text-white py-20 px-6 md:px-12 lg:px-24">
  <main className="max-w-5xl mx-auto text-center">
    {/* Intro */}


    {/* Services Section */}
    <div className="text-left space-y-14">
      <h2 className="text-3xl font-semibold text-pink-400 text-center mb-10">
        My Editing Services
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Manuscript Evaluation */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-pink-500/30 transition-all">
          <h3 className="text-2xl font-semibold mb-2 text-pink-400 flex items-center gap-2">
            <FiBookOpen className="text-green-500" /> Manuscript Evaluation
          </h3>
          <p className="text-sm text-gray-200 mb-4">$8 per 1,000 words</p>
          <p className="text-gray-100 leading-relaxed">
            If you’re not sure what your book needs next, this is the perfect place to start.
          </p>
          <Link href="/contact">
            <button className="mt-6 bg-pink-500 hover:bg-pink-600 px-6 py-2 rounded-full font-semibold transition-all">
              I want this!
            </button>
          </Link>
        </div>

        {/* Developmental Editing */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-pink-500/30 transition-all">
          <h3 className="text-2xl font-semibold mb-2 text-pink-400 flex items-center gap-2">
            <FiEdit className="text-green-500" /> Developmental Editing
          </h3>
          <p className="text-sm text-gray-200 mb-4">$24 per 1,000 words</p>
          <p className="text-gray-100 leading-relaxed">
            We’ll address the overall content and structure of your book, reworking structure, flow, pacing, and character depth.
          </p>
          <Link href="/contact">
            <button className="mt-6 bg-pink-500 hover:bg-pink-600 px-6 py-2 rounded-full font-semibold transition-all">
              Book a Free Call
            </button>
          </Link>
        </div>

        {/* Line Editing */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-pink-500/30 transition-all">
          <h3 className="text-2xl font-semibold mb-2 text-pink-400 flex items-center gap-2">
            <FiType className="text-green-500" /> Line Editing
          </h3>
          <p className="text-sm text-gray-200 mb-4">$20 per 1,000 words</p>
          <p className="text-gray-100 leading-relaxed">
            We focus on how your story is told—your sentences, rhythm, word choice, and phrasing.
          </p>
          <Link href="/contact">
            <button className="mt-6 bg-pink-500 hover:bg-pink-600 px-6 py-2 rounded-full font-semibold transition-all">
              Get a Sample Edit
            </button>
          </Link>
        </div>

        {/* Editor for Writing Teams */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-pink-500/30 transition-all">
          <h3 className="text-2xl font-semibold mb-2 text-pink-400 flex items-center gap-2">
            <FiUsers className="text-green-500" /> Editor for Writing Teams
          </h3>
          <p className="text-sm text-gray-200 mb-4">Custom Pricing</p>
          <p className="text-gray-100 leading-relaxed">
            I’ll edit your team’s work while providing practical, encouraging feedback that strengthens their writing.
          </p>
          <Link href="/contact">
            <button className="mt-6 bg-pink-500 hover:bg-pink-600 px-6 py-2 rounded-full font-semibold transition-all">
              Inquire Here
            </button>
          </Link>
        </div>
      </div>
    </div>
  </main>
</section>

<section className="bg-background text-white py-20 px-6 md:px-12 lg:px-24">
  <main className="max-w-5xl mx-auto space-y-20">
    {/* What You Won’t Experience */}
    <div>
      <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-10">
        What You Won’t Experience
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-pink-500/30 transition-all">
          <h2 className="text-2xl font-semibold mb-4 text-gray-100 flex items-center gap-2">
            <FiXCircle className="text-red-700" /> A know-it-all with a red pen
          </h2>
          <p className="text-gray-300 leading-relaxed">
            I’m not here to “fix” your book — I’m here to partner with you.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-pink-500/30 transition-all">
          <h2 className="text-2xl font-semibold mb-4 text-gray-100 flex items-center gap-2">
            <FiXCircle className="text-red-800" /> Cold, confusing feedback
          </h2>
          <p className="text-gray-300 leading-relaxed">
            I explain why something isn’t landing and how to make it better.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-pink-500/30 transition-all">
          <h2 className="text-2xl font-semibold mb-4 text-gray-100 flex items-center gap-2">
            <FiXCircle className="text-red-700" /> A loss of your voice
          </h2>
          <p className="text-gray-300 leading-relaxed">
            My edits help your voice come through clearer, more confidently, and with greater impact.
          </p>
        </div>
      </div>

    </div>

    {/* How I Show Up */}
    <div>
      <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-10">
        How I Show Up
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-pink-500/30 transition-all">
          <h2 className="text-2xl font-semibold mb-4 text-gray-100 flex items-center gap-2">
            <FiHeart className="text-green-500" /> Presence and care
          </h2>
          <p className="text-gray-300 leading-relaxed">
            I read with empathy and attention. Your work will never be rushed.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-pink-500/30 transition-all">
          <h2 className="text-2xl font-semibold mb-4 text-white flex items-center gap-2">
            <Handshake className="text-green-500" /> Honesty with kindness
          </h2>
          <p className="text-gray-300 leading-relaxed">
            I tell you the truth but always with respect for your effort and heart.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-pink-500/30 transition-all">
          <h2 className="text-2xl font-semibold mb-4 text-gray-100 flex items-center gap-2">
            <FiCheckCircle className="text-green-500" /> Partnership over perfection
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Editing is a conversation, not a correction.
          </p>
        </div>
      </div>
    </div>
  </main>
</section>

<section className="w-full  bg-gray-800">
  <main className="flex flex-col items-center gap-16 py-16">
    <h1 className="text-5xl font-bold text-center">Testimonials</h1>

    <div className="relative w-full max-w-5xl mx-auto">
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="rounded-2xl overflow-hidden"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white min-h-[24rem] text-[#430169] rounded-2xl shadow-lg p-8 md:p-12 flex flex-col items-center text-center transition-all duration-500 hover:shadow-xl">
              <p className="text-lg md:text-xl italic leading-relaxed text-gray-800 mb-6">
                {review.content}
              </p>
              <p className="text-sm md:text-base font-semibold text-pink-500">
                -- {review.person}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <button className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-pink-100 p-3 rounded-full shadow-lg transition-all duration-300">
        <ChevronLeft size={24} className="text-pink-500" />
      </button>

      <button className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-pink-100 p-3 rounded-full shadow-lg transition-all duration-300">
        <ChevronRight size={24} className="text-pink-500" />
      </button>
    </div>
  </main>
</section>





  <Footer/>
    </div>
  )
}
