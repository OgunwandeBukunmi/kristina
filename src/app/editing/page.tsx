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


<section className="bg-background py-16 px-6 md:px-20 lg:px-40">
  <main className="max-w-3xl mx-auto">
    <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-10">
      You’ve done the brave thing: <span className="italic text-pink-500"> you wrote your book.</span>
    </h1>

    <div className="space-y-6 text-lg text-gray-200 leading-relaxed">
      <p>
        But now that it’s done, you’re wondering—
        <span className="italic text-pink-400">is it actually good?</span>
        Will anyone understand what I was trying to say? Did I do justice to the story I wanted to tell?
      </p>

      <p>
        You’ve read and reread it so many times, trying to figure out the
        <span className="font-semibold text-green-600"> organization</span>,
        <span className="font-semibold text-green-600"> characterization</span>,
        and all those fancy English terms editors are always yapping about.
      </p>

      <p>
        Maybe you’re even afraid … that handing your book to an editor might mean not sounding like yourself anymore.
      </p>

      <p className="text-xl font-semibold text-white mt-10">
        But what if it didn’t have to be that way?
      </p>

      <p>
        What if you could have a seasoned professional step in—someone who knows the technical terms and how to
        <span className="font-semibold text-green-600"> honor your voice</span>.
        Someone who wants to help you stay authentically yourself while making your story stronger.
      </p>

      <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-pink-400">
        Because the truth is: Editing doesn’t strip you of your voice; it helps you grow into it. It brings you closer to your readers.
      </blockquote>

      <p>
        It helps you identify what’s working and what isn’t, and discover solutions that fit your style and goals.
      </p>

      <p className="font-medium text-pink-400">
        And with five years of experience supporting writers across genres, I can help you do exactly that.
      </p>
    </div>
  </main>
</section>

<section className="bg-gray-800 text-white py-20 px-6 md:px-12 lg:px-24">
  <main className="max-w-5xl mx-auto text-center">
    {/* Intro */}
    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
      Are you ready to bring your best version of your book to life?
    </h1>

    <button className="mt-4 mb-12 bg-pink-500 text-white font-semibold px-8 py-3 rounded-full hover:bg-pink-600 transition-all">
      I’m Ready
    </button>

    {/* Services Section */}
    <div className="text-left space-y-14">
      <h2 className="text-3xl font-semibold text-pink-400 text-center mb-10">
        My Editing Services
      </h2>

      {/* Service Cards */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Manuscript Evaluation */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-pink-500/30 transition-all">
          <h3 className="text-2xl font-semibold mb-2 text-pink-400">Manuscript Evaluation</h3>
          <p className="text-sm text-gray-200 mb-4">$8 per 1,000 words</p>
          <p className="text-gray-100 leading-relaxed">
            If you’re not sure what your book needs next, this is the perfect place to start.
            I’ll read your manuscript with care and insight, helping you see what’s strong,
            what’s unclear, and what deserves more space to shine. You’ll get a detailed evaluation
            and a personalized plan for what to do next.
          </p>
        <Link href="/contact"> 
        <button className="mt-6 bg-pink-500 hover:bg-pink-600 px-6 py-2 rounded-full font-semibold transition-all">
            I want this!
          </button>
        </Link> 
          
        </div>

        {/* Developmental Editing */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-pink-500/30 transition-all">
          <h3 className="text-2xl font-semibold mb-2 text-pink-400">Developmental Editing</h3>
          <p className="text-sm text-gray-200 mb-4">$24 per 1,000 words</p>
          <p className="text-gray-100 leading-relaxed">
            We’ll address the overall content and structure of your book, reworking structure, flow,
            pacing, and character depth so your book feels as alive on the page as it did in your head.
          </p>
           <Link href="/contact"> 
          <button className="mt-6 bg-pink-500 hover:bg-pink-600 px-6 py-2 rounded-full font-semibold transition-all">
            Book a Free Call
          </button>
          </Link>
        </div>

        {/* Line Editing */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-pink-500/30 transition-all">
          <h3 className="text-2xl font-semibold mb-2 text-pink-400">Line Editing</h3>
          <p className="text-sm text-gray-200 mb-4">$20 per 1,000 words</p>
          <p className="text-gray-100 leading-relaxed">
            We focus on how your story is told—your sentences, rhythm, word choice, and phrasing.
            I’ll help your words sound like you, only clearer, sharper, and more powerful.
          </p>
           <Link href="/contact"> 
          <button className="mt-6 bg-pink-500 hover:bg-pink-600 px-6 py-2 rounded-full font-semibold transition-all">
            Book a Free Call
          </button>
          </Link>
        </div>

        {/* Editor for Teams */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-pink-500/30 transition-all">
          <h3 className="text-2xl font-semibold mb-2 text-pink-400">Editor for Writing Teams</h3>
          <p className="text-sm text-gray-200 mb-4">Custom Pricing</p>
          <p className="text-gray-100 leading-relaxed">
            For content teams that want growth. I’ll edit your team’s work while providing practical,
            encouraging feedback that strengthens their writing and builds long-term skill.
            Includes collaborative training to refine tone and editorial awareness.
          </p>
           <Link href="/contact"> 
          <button className="mt-6 bg-pink-500 hover:bg-pink-600 px-6 py-2 rounded-full font-semibold transition-all">
            Inquire Here
          </button>
          </Link>
        </div>
      </div>

      {/* Copyediting and Why Me Section */}
      <div className="bg-white/5 rounded-2xl p-10 mt-16 shadow-lg">
        <h3 className="text-2xl font-semibold text-pink-400 mb-4">Copyediting & Proofreading</h3>
        <p className="text-gray-100 mb-8">
          For returning clients only. I’ll give your book its final polish before it meets the world.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-pink-400">Why Me?</h2>
        <p className="text-gray-100 leading-relaxed mb-6">
          I’ll be honest with you. My first years as a developmental editor were rough.
          I was so focused on helping writers achieve their goals that I sometimes forgot
          how vulnerable it feels to be critiqued.
        </p>
        <p className="text-gray-100 leading-relaxed mb-6">
          But I’ve grown. I’ve learned that honoring a writer’s vision means honoring the writer—
          acknowledging how brave it is to create something, recognizing what they got right,
          and trusting their creative ability to collaborate on solutions that truly fit them.
        </p>
        <p className="text-gray-100 leading-relaxed mb-6">
          I care about your readers, but first, I care about you. My goal is to help you reach
          your best outcome without feeling discouraged or overwhelmed.
        </p>
        <blockquote className="italic text-gray-300 border-l-4 border-pink-400 pl-4 mb-6">
          “Recently, an editor with 15 years of experience told me that my editorial comments were
          detailed, insightful, and genuinely helpful.”
        </blockquote>
       <Link href="/contact"> 
        <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-semibold transition-all">
          Work With an Editor Who Cares
        </button>
        </Link>
      </div>
      
    </div>
  </main>
</section>

<section className="bg-background text-white py-20 px-6 md:px-12 lg:px-24">
  <main className="max-w-5xl mx-auto space-y-20">
    {/* What You Won’t Experience */}
    <div>
      <h1 className="text-4xl md:text-5xl font-bold text-center text-pink-400 mb-10">
        What You Won’t Experience
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-pink-500/30 transition-all">
          <h2 className="text-xl font-semibold mb-4 text-pink-300">
            A know-it-all with a red pen.
          </h2>
          <p className="text-gray-200 leading-relaxed">
            Literally. I track changes in <span className="text-pink-400 font-semibold">purple 😜</span>. 
            More seriously, I’m not here to “fix” your book — I’m here to partner with you. 
            I want to help you understand what’s working, what’s not, and how to make your story stronger 
            without losing yourself in the process.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-pink-500/30 transition-all">
          <h2 className="text-xl font-semibold mb-4 text-pink-300">
            Cold, confusing feedback.
          </h2>
          <p className="text-gray-200 leading-relaxed">
            You’ll never get vague notes like <span className="italic">“tighten this”</span> or 
            <span className="italic">“needs work.”</span> I explain why something isn’t landing 
            and how to make it better — in a way that feels doable, not defeating.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-pink-500/30 transition-all">
          <h2 className="text-xl font-semibold mb-4 text-pink-300">A loss of your voice.</h2>
          <p className="text-gray-200 leading-relaxed">
            My edits won’t turn your book into something I’d write. They’ll help your own voice come through
            clearer, more confidently, and with greater emotional impact.
          </p>
        </div>
      </div>
    </div>

    {/* How I Show Up */}
    <div>
      <h1 className="text-4xl md:text-5xl font-bold text-center text-pink-400 mb-10">
        How I Show Up
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-pink-500/30 transition-all">
          <h2 className="text-xl font-semibold mb-4 text-pink-300">Presence and care.</h2>
          <p className="text-gray-200 leading-relaxed">
            I read with empathy and attention. Your work will never be rushed or treated like 
            <span className="italic"> “just another project.”</span>
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-pink-500/30 transition-all">
          <h2 className="text-xl font-semibold mb-4 text-pink-300">Honesty with kindness.</h2>
          <p className="text-gray-200 leading-relaxed">
            I’ll tell you the truth, but always with respect for your effort and heart. 
            You’ll know where your book stands—and that I believe in what it can become.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-pink-500/30 transition-all">
          <h2 className="text-xl font-semibold mb-4 text-pink-300">Partnership over perfection.</h2>
          <p className="text-gray-200 leading-relaxed">
            Editing is a conversation, not a correction. I’ll invite you into the process 
            so we can create solutions that feel right to you.
          </p>
        </div>
      </div>
    </div>

    {/* CTA */}
    <div className="text-center mt-16 bg-white/5 rounded-2xl p-10 shadow-lg">
      <h2 className="text-2xl md:text-3xl font-semibold text-pink-400 mb-4">
        Not quite ready for editing?
      </h2>
      <p className="text-gray-100 leading-relaxed mb-8 max-w-3xl mx-auto">
        If you have an idea or an unfinished draft and you’re unsure where to take it next, 
        check out my <span className="font-semibold text-pink-400">Writing Partnership</span> service—a collaborative 
        process where we clarify your ideas, help you get excited about your drafts, 
        and bring your story to life together.
      </p>
       <Link href="/writingpartnership"> 
      <button className="bg-pink-500 hover:bg-pink-600 px-8 py-3 rounded-full font-semibold transition-all">
        Check It Out
      </button>
      </Link>
    </div>
  </main>
</section>

<section>
  <main className="flex flex-col items-center gap-16 ">
    <h1 className="text-5xl font-bold">Testimonials</h1>
       <div className="relative max-w-5xl mx-auto">
        <Swiper
          modules={[ Autoplay, Navigation]}
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
              <div className="bg-white min-h-96 text-[#430169] rounded-2xl shadow-lg p-8 md:p-12 flex flex-col items-center text-center transition-all duration-500 hover:shadow-xl">
                <p className="text-lg md:text-xl italic leading-relaxed text-gray-800 mb-6 z-30">
                  {review.content}
                </p>
                <p className="text-sm md:text-base font-semibold text-pink-600 mx-2 px-2">
                  -- {review.person}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2   transparent -z-5 p-3 rounded-full shadow-lg transition-all duration-300">
          <ChevronLeft size={24} className="text-pink-500 -z-5 " />
        </button>

        <button className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 transparent p-3 rounded-full shadow-lg transition-all duration-300">
          <ChevronRight size={24} className="text-pink-500 -z-5 " />
        </button>
      </div>
  </main>
</section>




  <Footer/>
    </div>
  )
}
