"use client"
import Navbar from '@/components/Navbar'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Footer from '@/components/Footer'
import FaqAccordion from '@/components/FaqAccordion';
import Link from 'next/link';
import Image from 'next/image';
import {
  LuEar,         // listening 
  LuLayers,      // structure
  LuBrain,       // stuck / thinking
  LuAnchor,      // grounding / guidance
  LuPartyPopper, // celebration
  LuFileCheck    // editing / polishing
} from "react-icons/lu";
import {
  LuPhoneCall,    // Onboarding Call
  LuLightbulb,    // Brainstorm & Outline
  LuPenLine,      // Write & Review
  LuSparkles      // Edit & Polish
} from "react-icons/lu";

export default function page() {
  const faqs = [
    {
      question: "Is This Therapy for Writers?",
      answer:
        "God, no. It’s structure, strategy, and creative partnership. The sessions are designed to help you move past fear, detangle your thoughts, and build a steady rhythm that keeps you writing and finishing your drafts. You already have what it takes to write. You just need the right kind of support—someone to listen, ask the right questions, and help you stay consistent.",
    },
    {
      question: "How is this different from ghostwriting?",
      answer:
        "In ghostwriting, you hand over the idea, and someone else writes it for you. In a writing partnership, we create together. You stay the writer. I’m just here to help you think, structure, and express your story or message clearly. I ask the right questions, challenge what needs depth, and refine what’s already there so your voice stays at the center.",
    },
    {
      question: "How can you possibly work on different genres?",
      answer:
        "Because I don’t just work with topics, I work with people. My focus is understanding what you’re trying to say and helping you say it well. Whether it’s fiction, nonfiction, or personal essays, every piece comes down to ideas, emotion, and clarity. My role is to help you bring out what’s already in you, not impose a genre formula. The research, structure, and voice always revolve around your goals for the project.",
    },
  ];
  const writingreviews = [
    {
      content: "I was really struggling to organize my ideas for an essay, and Kristina helped me sort everything out. We talked through each point together, and she helped me expand on them, making sure they actually fit the topic and made sense. My thoughts were all over the place, but she helped me detangle and structure them. By the end, everything flowed and felt clear. It honestly made such a difference.",
      person: "Jerry (We did this in just one session!)"

    },
    {
      content: "When we worked together on my short story, what stood out most was Kristina’s empathy. She was firm enough to help me stay on track (despite our familiarity), yet she gave me the grace to be human along the way. That balance helped me figure out what I really wanted to say, how I wanted to say it, and who I was writing for. With every project, Kristina always finds a way to figure things out and deliver excellent work. She’s professional, dependable, and timely. I recommend working with her if you want to experience excellence wrapped in genuine care.",
      person: "Esther"
    },
    {
      content: "When I came to Kristina, I had no idea what direction to take the magazine as the new editor-in-chief of my faculty. I just knew I wanted it to feel right for the students, but I didn’t know what that looked like yet. In just one session, she helped me find the magazine’s voice—the vibe and the exact words that captured what I wanted the students to feel. We went through previous editions, pinpointed what worked, and cut out what I didn’t want to keep. In that same session, we designed the entire layout of the magazine, and I could quickly move on to assigning responsibilities. Kristina also supported me through the editing and proofreading stages, making sure the final work reflected everything I envisioned. That magazine became the highlight of my time as EIC, and I couldn’t have done it without her.",
      person: "Dami"
    },
    {
      content: "I can’t hide how happy I am about this. I’m not only writing something I’m excited about—as I write, new ideas keep coming up, and that’s so amazing. You made this possible, Kristina. Thank you so much!",
      person: "Praise",
    },
    {
      content: "Working with Kristina was the difference between having an idea and having it come alive. I told her everything I had in my head, and she just listened—then somehow turned all my rambling into something that actually made sense. Through genuine understanding and skill, she helped me get my ideas on the page and create a finished draft. The result felt effortless to read, and it reminded me how powerful human writing is.",
      person: "Daniel"
    },
    {
      content: "Amazing job! I’m truly grateful for her help in telling and editing my life’s story.",
      person: "Whitney Williams, Author of The Revival (We spent three amazing months working on her story!)"
    }

  ]
  const points = [
    {
      icon: <LuEar className="text-pink-500 text-4xl" />,
      text: (
        <>
          <span className="text-green-300">Listens carefully to your ideas</span>,
          helping you spot the thought you’re excited about and figure out what you want to say.
        </>
      ),
    },
    {
      icon: <LuLayers className="text-pink-500 text-4xl" />,
      text: (
        <>
          <span className="text-green-300">Brings structure to your creativity </span>
          with a plan that leverages your strengths and accommodates your weaknesses.
        </>
      ),
    },
    {
      icon: <LuBrain className="text-pink-500 text-4xl" />,
      text: (
        <>
          Names what keeps you <span className="text-pink-500 font-semibold italic">stuck </span>
          and equips you with <span className="text-green-300">practical tools and resources </span>
          to move through it.
        </>
      ),
    },
    {
      icon: <LuAnchor className="text-pink-500 text-4xl" />,
      text: (
        <>
          Guides and grounds you with <span className="text-green-300">
            outlines<span className='text-white'>,</span> accountability<span className='text-white'>, and</span>  shared writing sessions </span>
          when it feels <span className="text-pink-500 font-semibold italic">lonely or scary</span> to keep going.
        </>
      ),
    },
    {
      icon: <LuPartyPopper className="text-pink-400 text-4xl" />,
      text: (
        <>
          <span className="text-green-300">Celebrates you through every step</span>,
          displacing the <span className="text-pink-500 font-semibold italic">self-doubt </span>
          and helping you grow into a more confident writer.
        </>
      ),
    },
    {
      icon: <LuFileCheck className="text-pink-500 text-4xl" />,
      text: (
        <>
          <span className="text-green-300">
            Polishes your work with thoughtful editorial support
          </span> that tightens your writing and makes it publish-ready.
        </>
      ),
    },
  ];

  const steps = [
    {
      icon: <LuPhoneCall className="text-pink-500 text-3xl" />,
      title: "1. Onboarding Call",
      text: "We talk through your goals, challenges, and current project (or your desire to finally start one). Together, we build a roadmap that is strategic, realistic, and aligned with your writing rhythm.",
    },
    {
      icon: <LuLightbulb className="text-pink-500 text-3xl" />,
      title: "2. Brainstorm & Outline",
      text: "We’ll draw out your ideas, organize your thoughts, and find the structure that fits both your voice and your process.",
    },
    {
      icon: <LuPenLine className="text-pink-500 text-3xl" />,
      title: "3. Write & Review",
      text: "You write, with strategy and at your pace. I review and refine, offering gentle direction, resources, and editorial insight that helps each section grow stronger without losing its heart.",
    },
    {
      icon: <LuSparkles className="text-pink-500 text-3xl" />,
      title: "4. Edit & Polish",
      text: "Once the full draft takes shape, we perfect it—through detailed editing, feedback, and adjustments—until it’s clear, confident, and ready to meet readers.",
    },
  ];
  return (
    <div>
      <Navbar />
      <article className=" h-[500px]  relative text-center py-12   overflow-hidden p-2 ">
        {/* Background image and gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-800 bg-[url('/passion_word.jpg')] bg-cover bg-center opacity-60"></div>

        {/* Softer overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Content */}
        <div className="relative z-10 text-white px-4">
          <h1 className="text-5xl md:text-8xl font-instrument font-bold font-de leading-tight">
            Ready to start finishing your drafts in <span className="italic text-pink-500">record time</span>?
          </h1>
          <h3 className="mt-6 font-bold text-lg md:text-xl text-gray-100 font-instrument tracking-wider">
            I help writers move from fear, overwhelm, and inconsistency to clarity and confidence in their work.
          </h3>
        </div>


      </article>

      <section className="bg-secondary pt-8 space-y-16 ">
        <main className="space-y-6 py-16 px-8">
          <h1 className="text-5xl font-quintessential text-center font-bold leading-snug">
            <span className="text-pink-300 italic">Tell me</span>, what makes writing hard for you?
          </h1>



          <div className="space-y-12 w-full md:w-1/2 max-w-3xl mx-auto text-xl text-gray-200 leading-relaxed text-center ">
            <p className=''>
              Is it the <span className="text-pink-300">fear</span>, <span className="text-pink-300">overwhelm</span>, and <span className="text-pink-300">self-doubt</span> that sneak in when you try to start? Or the <span className="text-pink-300">loneliness</span> of doing it all on your own?
            </p>
            <p>
              Is it the <span className="text-pink-300">struggle</span> to stay consistent long enough to finish?
            </p>
            <p>
              Or the <span className="text-pink-300">frustration</span> of having scattered ideas that make you unsure what to say or where to begin?
            </p>
            <p>
              Whichever it is, <span className="font-semibold italic text-pink-500">you’re not alone.</span>
            </p>
          </div>


        </main>

        <main className="space-y-6 bg-gray-800 py-16 px-8">
          <h1 className="text-4xl font-bold font-quintessential text-center text-white mb-8">
            What If Writing Didn’t Feel So{" "}
            <span className="text-pink-600 italic font-bold">Heavy</span> ?
          </h1>

          <div className="max-w-3xl mx-auto space-y-8 text-lg text-gray-200 leading-relaxed">
            <p className='leading-8'>
              Writing can be a lot. You try your best, but the{" "}
              goals still slip away.

            </p>
            <p className='leading-8'>The routines, the productivity hacks—they stop helping.</p>

            <p className='leading-8'>
              <p className='leading-8'>
                You start
                wondering if maybe{" "}you’re not cut out for this.
                {" "}Or worse, you start thinking about{" "}

                quitting altogether.
              </p>

            </p >

            <p>
              But what if someone showed up to make{" "}
              <span className="text-green-300">writing easier</span>?
            </p>

            <div className="mt-16">
              <h2 className="text-2xl font-semibold mb-8 text-gray-100 text-center">
                Someone who:
              </h2>

              {/* Grid layout for cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {points.map((point, index) => (
                  <div
                    key={index}
                    className="bg-gray-700/50 border border-gray-600 rounded-2xl p-6 flex flex-col items-center text-center hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <div className="mb-4">{point.icon}</div>
                    <p className="text-gray-200 text-base leading-relaxed">{point.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </section>

      <section className="py-24 px-6 md:px-12">
        <main className="flex flex-col-reverse md:flex-row items-center gap-12 max-w-7xl mx-auto">

          {/* Image */}
          <div className="w-full md:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1575096611627-a9906523ae71?w=600&auto=format&fit=crop&q=60"
              alt="Woman holding a book"
              width={500}
              height={500}
              className="rounded-xl shadow-xl object-cover w-full"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 space-y-10 text-center md:text-left">

            <h1 className="font-quintessential text-4xl md:text-5xl font-bold leading-tight">
              Your struggle{" "}
              <span className="italic text-pink-500">doesn&apos;t mean</span>{" "}
              you&apos;re not good enough
            </h1>

            <div className="space-y-6 text-lg text-gray-200 max-w-xl mx-auto md:mx-0">
              <p>
                It&apos;s time to stop treating your writing hurdles as signs{" "}
                <span className="italic text-pink-500">you&apos;ve failed.</span>{" "}
                <span className=" font-medium">You haven&apos;t.</span>
              </p>

              <p>
                You&apos;ve been trying to do something{" "}
                <span className=" ">
                  incredibly brave<span className='text-pink-500'> without the right kind of help.</span>
                </span>
              </p>

              <p>
                You deserve to feel fulfilled by your finished work, and by the journey
                it took to get there.
              </p>

              <p>
                Whether you&apos;re staring at a blank page, stuck halfway through, or
                holding a quiet urge to write something meaningful, I&apos;ll meet you
                there, with strategy, structure, and real support.
              </p>

              <p>
                Book, Substack post, article, or paper—it doesn&apos;t matter the form.
                What matters is that we finish it together.
              </p>
            </div>

            {/* CTA */}
            <div>
              <button className="bg-pink-700 hover:bg-pink-600 transition text-white text-sm md:text-lg font-semibold px-6 py-3 rounded-full shadow-lg">
                <Link href={"/contact"}>
                  I’m Ready to Crush My Writing Goals 🚀
                </Link>

              </button>
            </div>

          </div>
        </main>
      </section>


      <section className="py-20 px-2 bg-gray-800 text-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col items-center space-y-16">

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-center text-white">
            The Kind of Partner You’ll Get
          </h1>

          {/* Image + Copy */}
          <main className="flex flex-col md:flex-row items-center px-8 gap-4 md:gap-8 w-full">

            {/* Image */}
            <div className="w-full md:w-1/2 max-w-xl">
              <Image
                src="https://plus.unsplash.com/premium_photo-1670588776369-b61f94638db9?w=600&auto=format&fit=crop&q=60"
                alt="Woman comforting another woman"
                width={600}
                height={600}
                className="rounded-2xl shadow-xl object-cover w-full "
              />
            </div>

            {/* Copy */}
            <div className="w-full md:w-1/2 space-y-7 text-lg md:text-xl leading-relaxed">

              <p className="text-gray-300">
                Someone who <span className="font-semibold text-white">truly gets it.</span>{" "}
                I understand how heavy writing can feel—how isolating, frustrating, and
                overwhelming it becomes when the words just won’t come.
              </p>

              <p className="text-gray-300">
                I’ve been there more times than I can count. I know what it’s like to wish
                someone could sit beside you, help untangle your thoughts, and remind you
                that you’re not broken,you’re just stuck.
              </p>

              <p className="text-gray-300">
                That’s exactly why I created this partnership: to give writers the kind of
                support I once needed myself.
              </p>

              <p className="text-gray-300">
                And I don’t just want to help
                <span className="text-pink-300"> I know how.</span>{" "}
                With over eleven years of writing and five years of editing experience,
                I’ve learned how to turn{" "}
                <span className="text-pink-300">chaos into clarity</span>—how to listen
                deeply, ask the right questions, and uncover the thread worth following.
              </p>

              <p className="text-gray-300">
                With my Writing Partnership, you don’t just get guidance. You get a{" "}
                <span className="text-pink-300">
                  co-writer<span className="text-white">, </span>strategist<span className="text-white">, and</span> cheerleader
                </span>{" "}
                in one.
              </p>

            </div>
          </main>

          {/* Testimonial + Closing */}
          <div className="w-full max-w-4xl text-xl space-y-8 pt-6">

            <blockquote className="border-l-4  border-pink-600 pl-6 italic text-gray-300">
              “Before Kristina, I had been struggling for three months to write my grad
              school application paper. I kept coming up with nothing—even after working
              with different people. Just a few hours into our discussion, we had a new
              topic, a writing plan, and for the first time in months, I felt excited
              about writing.
              <br /><br />
              I started the next day and I’m already almost halfway through. She’s been
              incredibly supportive—checking in, working through shared documents, and
              offering insight that helped me access depths I didn’t know I had. I 💯
              percent recommend her as a writing partner.”
            </blockquote>

            <p className="text-gray-400 text-sm text-right">
              Jade (on our third day working together)
            </p>

            <p className="text-gray-300">
              <span className="text-green-400 font-semibold">The genre doesn’t matter.</span>{" "}
              From non-fiction and memoirs to brand content and creative writing, I help
              you create work that feels deeply—and unmistakably—yours.
            </p>

            <p className="text-white font-semibold text-center">
              If this sounds like what you need, the next step is simple.
            </p>

            {/* CTA */}
            <div className="flex justify-center pt-4">
              <Link
                href="/contact"
                className="bg-pink-700 hover:bg-pink-600 transition text-white text-sm font-semibold px-8 py-4 rounded-full shadow-lg"
              >
                Send Me a Message
              </Link>
            </div>

          </div>
        </div>
      </section>




      <section className="bg-gray-900 text-gray-200 py-20 px-6">
        <main className="max-w-5xl mx-auto space-y-16">

          <div className="text-center space-y-4 ">

            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">How It Works</h1>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              Support doesn’t look the same for everyone. It’s shaped around your needs, your strengths,
              and your nuance. For some, it means shared writing sessions that keep the loneliness away; for others,
              it’s a detailed outline that brings their thoughts into focus.
            </p>
            <p className="text-pink-400 italic">
              But here’s what the journey generally looks like:
            </p>
          </div>

          {/* PROCESS STEPS */}
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step) => (
              <div
                key={step.title}
                className="bg-gray-800/40 p-6 rounded-2xl border border-gray-700 hover:border-pink-600 transition-all shadow-sm hover:shadow-lg"
              >
                <div className="flex items-center gap-3 mb-2">
                  {step.icon}
                  <h2 className="text-xl font-bold text-green-400">{step.title}</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>

          {/* PRICING INTRO */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-white">
              You’re Probably Wondering, <span className="text-pink-500 italic">“Can I Afford This?”</span>
            </h2>
            <p className="text-gray-400">
              That’s why my pricing is simple, flexible, and tailored to your needs.
            </p>
          </div>

          {/* PLANS */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Clarity Plan */}
            <div className="bg-gray-900/60 border border-gray-700 rounded-2xl p-6 hover:border-green-400 transition">
              <h3 className="text-2xl font-bold text-green-400">Clarity Plan—$200/month</h3>
              <p className="text-gray-400 italic mt-2">
                For writers who feel stuck, scattered, or unsure where to start.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>✅ 1 onboarding call (45 min)</li>
                <li>✅ 2 strategy or feedback calls (30 min each)</li>
                <li>✅ Personalized writing roadmap</li>
                <li>✅ Help organizing and refining your ideas</li>
                <li>✅ Feedback on up to 2,000 words/month</li>
                <li>✅ Light accountability via email or WhatsApp</li>
              </ul>
              <p className="text-pink-400 mt-4 font-semibold">Optional add-ons:</p>
              <ul className="text-sm space-y-1">
                <li>💬 Virtual writing session — $30/hr</li>
                <li>📄 Additional feedback — $5 per 1,000 words</li>
              </ul>
            </div>

            {/* Development Plan */}
            <div className="bg-gray-900/60 border border-gray-700 rounded-2xl p-6 hover:border-green-400 transition">
              <h3 className="text-2xl font-bold text-green-400">Development Plan—$320/month</h3>
              <p className="text-gray-400 italic mt-2">
                For writers actively working through a book, article, paper, or story.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>✅ 1 onboarding call (45 min)</li>
                <li>✅ 2 review calls (45 min each)</li>
                <li>✅ Detailed outline + structure plan</li>
                <li>✅ Editorial guidance and strategy</li>
                <li>✅ Feedback on up to 5,000 words/month</li>
                <li>✅ Progress tracking + accountability check-ins</li>
                <li>✅ Ongoing support via email or WhatsApp</li>
              </ul>
              <p className="text-pink-400 mt-4 font-semibold">Optional add-ons:</p>
              <ul className="text-sm space-y-1">
                <li>💬 Virtual writing sessions — $30/hr</li>
                <li>📄 Extra feedback — $5 per 1,000 words</li>
                <li>🖋️ Line editing — custom quote</li>
              </ul>
            </div>

            {/* Full Partnership Plan */}
            <div className="bg-gray-900/60 border border-gray-700 rounded-2xl p-6 hover:border-green-400 transition">
              <h3 className="text-2xl font-bold text-green-400">Full Partnership Plan—$500/month</h3>
              <p className="text-gray-400 italic mt-2">
                For writers who want full creative and editorial support from idea to publish-ready draft.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>✅ Everything in the Development Plan</li>
                <li>✅ Weekly virtual writing sessions (1 hr each)</li>
                <li>✅ Feedback on up to 10,000 words/month</li>
                <li>✅ Developmental + structural editing</li>
                <li>✅ Priority scheduling and response time</li>
                <li>✅ Final review + polish of your completed draft</li>
              </ul>
              <p className="text-pink-400 mt-4 font-semibold">Optional add-ons:</p>
              <ul className="text-sm space-y-1">
                <li>💬 Additional sessions — $30/hr</li>
                <li>📄 Copyediting or proofreading — custom quote</li>
              </ul>
            </div>
          </div>

          {/* CUSTOM PLAN */}
          <div className="text-center space-y-3">
            <h3 className="text-2xl font-semibold text-green-400">Custom Plan—starts at $50/hour</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Not sure what you need yet? You can book a single session for brainstorming,
              outlining, or feedback on a specific piece. It’s perfect if you just need help
              untangling your thoughts, not a long-term partnership.
            </p>
          </div>

          {/* ADDITIONAL NOTES */}
          <div className="bg-gray-800/40 p-6 rounded-2xl border border-gray-700 space-y-3">
            <h4 className="text-pink-400 font-semibold">Additional Notes</h4>
            <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
              <li>Payment is monthly until your project is completed.</li>
              <li>You can upgrade or downgrade anytime based on your progress.</li>
              <li>Sessions are hosted via Zoom.</li>
              <li>All plans are flexible—you’ll only pay for the kind of help you actually need.</li>
            </ul>
          </div>

          {/* CLOSING */}
          <div className="text-center space-y-4">
            <p className=" text-lg italic">
              This is your chance to be intentional about breaking free from the feeling that
              you’re failing at “figuring it out.”
            </p>
            <p className="text-white font-semibold text-xl">
              You’re not failing. You just need the right kind of support—my support.
            </p>
          </div>
        </main>
      </section>

      <section className="bg-background py-20 px-6 text-gray-100">
        <main className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-pink-400 mb-4">More Results</h1>


          <div className="max-w-3xl mx-auto mt-16">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000 }}
              loop={true}
              className="rounded-2xl shadow-lg bg-white backdrop-blur-md p-8 border border-pink-500/30"
            >
              {writingreviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col items-center text-center gap-4 p-8">
                    <p className="text-gray-900 leading-relaxed italic">“{review.content}”</p>
                    <p className="font-semibold text-pink-500 mt-2">{review.person}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </main>

      </section>

      <section className="bg-gray-800 text-gray-100 py-20 px-6">
        <main className="max-w-5xl mx-auto text-center">
          <p className="max-w-2xl text-4xl font-bold mx-auto text-gray-100 leading-relaxed">
            Writing Doesn’t Have to Be Lonely, Messy, or Endless.
          </p>
          <p className="max-w-2xl mx-auto text-gray-400 mt-3">
            With the right partner, it becomes purposeful, structured, and fulfilling.
          </p>
          <p className="max-w-2xl mx-auto text-gray-400 mt-3">
            Ready to finally get your words on paper—and enjoy the process while you’re at it?
          </p>

          <div className="mt-10">
            <button className="bg-pink-500 hover:bg-pink-600 transition-all text-white px-8 py-3 rounded-2xl font-semibold shadow-md">
              <Link href="/contact">Let’s Talk About Your Project</Link>

            </button>
          </div>

          <div className="mt-20 text-left">

            <FaqAccordion items={faqs} />
          </div>
        </main>
      </section>



      <Footer />
    </div>
  )
}
