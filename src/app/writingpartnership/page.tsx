import Navbar from '@/components/Navbar'
import React from 'react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Footer from '@/components/Footer'


export default function page() {
  const writingreviews  = [
    {
      content : "I was really struggling to organize my ideas for an essay, and Kristina helped me sort everything out. We talked through each point together, and she helped me expand on them, making sure they actually fit the topic and made sense. My thoughts were all over the place, but she helped me detangle and structure them. By the end, everything flowed and felt clear. It honestly made such a difference.",
      person : "Jerry (We did this in just one session!)"

    },
    {
      content : "When we worked together on my short story, what stood out most was Kristina’s empathy. She was firm enough to help me stay on track (despite our familiarity), yet she gave me the grace to be human along the way. That balance helped me figure out what I really wanted to say, how I wanted to say it, and who I was writing for. With every project, Kristina always finds a way to figure things out and deliver excellent work. She’s professional, dependable, and timely. I recommend working with her if you want to experience excellence wrapped in genuine care.",
      person : "Esther"
    },
    {content : "When I came to Kristina, I had no idea what direction to take the magazine as the new editor-in-chief of my faculty. I just knew I wanted it to feel right for the students, but I didn’t know what that looked like yet. In just one session, she helped me find the magazine’s voice—the vibe and the exact words that captured what I wanted the students to feel. We went through previous editions, pinpointed what worked, and cut out what I didn’t want to keep. In that same session, we designed the entire layout of the magazine, and I could quickly move on to assigning responsibilities. Kristina also supported me through the editing and proofreading stages, making sure the final work reflected everything I envisioned. That magazine became the highlight of my time as EIC, and I couldn’t have done it without her.",
    person : "Dami"
    },
    {
      content : "I can’t hide how happy I am about this. I’m not only writing something I’m excited about—as I write, new ideas keep coming up, and that’s so amazing. You made this possible, Kristina. Thank you so much!",
      person : "Praise",
    },
    {content : "Working with Kristina was the difference between having an idea and having it come alive. I told her everything I had in my head, and she just listened—then somehow turned all my rambling into something that actually made sense. Through genuine understanding and skill, she helped me get my ideas on the page and create a finished draft. The result felt effortless to read, and it reminded me how powerful human writing is.",
      person : "Daniel"
    },
    {
      content : "Amazing job! I’m truly grateful for her help in telling and editing my life’s story.",
      person : "Whitney Williams, Author of The Revival (We spent three amazing months working on her story!)"
    }

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
      Ready to finally start finishing your drafts in <span className="italic text-pink-500">record time ? </span>
      </h1>
       <h3 className="mt-6 text-sm md:text-lg text-gray-200 font-funnel ">
    I help writers move from fear, overwhelm, and inconsistency to clarity and confidence in their work.
  </h3>
  </div>
 
   
  </article>

<section className=" pt-8 space-y-16 ">
  <main className="space-y-6 py-16 px-8">
    <h1 className="text-5xl font-quintessential text-center font-bold leading-snug">
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

  <main className="space-y-6 bg-gray-800 py-16 px-8">
    <h1 className="text-4xl font-bold font-quintessential text-center text-white mb-8">
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

<section className="py-24 px-8 space-y-8 ">
  <h1 className='font-bold text-center font-quintessential text-4xl'>Your struggle <span className="italic text-pink-500">doesn&apos;t mean</span> you&apos;re not good enough</h1>
  <div className='space-y-8 text-lg px-8 text-grat-200 max-w-3xl mx-auto mt-16'>
   <p>It&apos;s time to stop treating your writing hurdles as signs <span className="italic text-pink-500">you&apos;ve failed.</span> <span className="text-green-500"> You haven&apos;t.</span> </p>
  <p>You&apos;ve just been trying to do something <span className="text-green-500 font-semibold">incredibly brave without the right kind of help.</span> </p>
  <p>You deserve to be fulfilled by your finished work—and the journey it took to get there.</p>
  <p>Are you staring at a blank page, stuck halfway through, or holding a vague urge to write something? I&apos;ll meet you there—with strategy, structure, and support that gets you unstuck.</p>
  <p>Book, Substack post, article, or paper—it doesn&apos;t matter the form. What matters is that we finish it together.</p>
  </div>

</section>

<section className="py-12 px-6 text-gray-200 bg-gray-800">
  <main className="flex flex-col items-center max-w-3xl mx-auto space-y-8">
    <div>
      <span className="bg-pink-800 text-sm text-white px-4 py-2 rounded-2xl">
        I’m Ready to Crush My Writing Goals!
      </span>
    </div>

    <h1 className="text-3xl md:text-4xl font-bold text-center text-white">
      The Kind of Partner You’ll Get
    </h1>

    <div className="space-y-6 leading-relaxed text-lg">
      <p className="text-gray-300">
        One who <span className="text-green-400 font-semibold">gets it!</span> I understand how heavy writing can feel.
        The number of times I needed someone to hold my hand through it? <span className="text-pink-500 italic">Countless.</span>
      </p>

      <p className="text-gray-300">
        That’s exactly why I created this partnership — to give writers the kind of
        support I once needed myself.
      </p>

      <p className="text-gray-300">
        And I don’t just want to help — <span className="text-green-400 font-semibold">I know how.</span> With over
        eleven years of writing and five years of editing experience, I’ve learned how
        to turn <span className="text-pink-500">chaos into clarity</span> — how to listen deeply, ask the right
        questions, and find the thread worth following.
      </p>

      <p className="text-gray-300">
        With my Writing Partnership, you don’t just get guidance. You get a
        <span className="text-green-400 font-semibold"> co-writer, strategist, and cheerleader</span> all in one.
      </p>

      <p className="text-gray-300 italic border-l-4 border-pink-600 pl-4">
        “Before Kristina, I had been struggling for three months to write my grad
        school application paper. I kept coming up with nothing even after
        collaborating with different people. Just a few hours into my discussion with
        her, talking about all my areas of interest, we came up with a new topic, a
        writing plan, and—most importantly—for the first time in months, I was excited
        about writing. I started the next day, and now I’m almost halfway through. It’s
        been really exciting, and she’s been incredibly supportive—checking in on my
        progress, monitoring through a shared document, and offering her insight on
        what I write. I 💯 percent recommend her as a writing partner. She’s skilled at
        drawing out depths you didn’t know you had in you and helping you channel that
        into your writing.”
      </p>

      <p className="text-gray-400 text-sm text-right">— Jade (on our third day working together!)</p>

      <p className="text-gray-300">
        The <span className="text-green-400 font-semibold">genre doesn’t matter!</span> Having written and edited across
        genres—from non-fiction and memoirs to brand content and creative writing—I
        know how to help you create great work that feels deeply, unmistakably yours.
      </p>

      <p className="text-pink-400 font-semibold text-center text-lg">
        Does this sound like what you need? The next step is simple.
      </p>
    </div>
  </main>
</section>

<section className="bg-gray-900 text-gray-200 py-20 px-6">
  <main className="max-w-5xl mx-auto space-y-16">
   
    <div className="text-center space-y-4 ">
      <span className="bg-pink-700 text-white text-sm px-4 py-2 rounded-2xl mb-16 ">
        &lt;&lt; Send Me a Message &gt;&gt;
      </span>
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
      {[
        {
          title: "1. Onboarding Call",
          text: "We talk through your goals, challenges, and current project (or your desire to finally start one). Together, we build a roadmap that is strategic, realistic, and aligned with your writing rhythm.",
        },
        {
          title: "2. Brainstorm & Outline",
          text: "We’ll draw out your ideas, organize your thoughts, and find the structure that fits both your voice and your process.",
        },
        {
          title: "3. Write & Review",
          text: "You write, with strategy and at your pace. I review and refine, offering gentle direction, resources, and editorial insight that helps each section grow stronger without losing its heart.",
        },
        {
          title: "4. Edit & Polish",
          text: "Once the full draft takes shape, we perfect it—through detailed editing, feedback, and adjustments—until it’s clear, confident, and ready to meet readers.",
        },
      ].map((step) => (
        <div
          key={step.title}
          className="bg-gray-800/40 p-6 rounded-2xl border border-gray-700 hover:border-pink-600 transition-all"
        >
          <h2 className="text-xl font-bold text-green-400">{step.title}</h2>
          <p className="mt-2 text-gray-300">{step.text}</p>
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
        <h3 className="text-2xl font-bold text-green-400">Clarity Plan — $200/month</h3>
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
        <h3 className="text-2xl font-bold text-green-400">Development Plan — $320/month</h3>
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
        <h3 className="text-2xl font-bold text-green-400">Full Partnership Plan — $500/month</h3>
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
      <h3 className="text-2xl font-semibold text-green-400">Custom Plan — starts at $50/hour</h3>
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
      <p className="text-pink-400 text-lg italic">
        This is your chance to be intentional about breaking free from the feeling that
        you’re failing at “figuring it out.”
      </p>
      <p className="text-green-400 font-semibold text-xl">
        You’re not failing. You just need the right kind of support — <span className="italic text-white">my support.</span>
      </p>
    </div>
  </main>
</section>

<section className=' py-20 px-6'>
<main >
  <h1 className='text-4xl font-bold'>More Results</h1>
  <h3 className='text-center text-gray-200'>I was really struggling to organize my ideas for an essay, and Kristina helped me sort everything out. We talked through each point together, and she helped me expand on them, making sure they actually fit the topic and made sense. My thoughts were all over the place, but she helped me detangle and structure them. By the end, everything flowed and felt clear. It honestly made such a difference.</h3>

  
</main>
</section>


  <Footer/>
    </div>
  ) 
}
