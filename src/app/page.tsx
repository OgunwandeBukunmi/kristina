import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
   <section className="w-full h-screen">

  <Navbar />
  {/* Hero section */}
  <article className=" h-[500px]  relative text-center py-12   overflow-hidden">
    {/* Background image and gradient */}
    <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-800 bg-[url('/passion_word.jpg')] bg-cover bg-center opacity-60"></div>

    {/* Softer overlay for better text visibility */}
    <div className="absolute inset-0 bg-black/20"></div>

    {/* Content */}
    <div className="relative z-10 text-white px-4">
      <h1 className="text-6xl md:text-8xl font-open leading-tight">
        I’m a <span className="text-pink-400 font-cookie  font-bold">whiz</span> at every stage of the creative process.
      </h1>
      <h3 className="mt-6 text-xl md:text-2xl font-delius">
        Writing Partnership. Developmental & Line Editing. Proofreading.
      </h3>
    </div>
  </article>
    {/* Meet Kristina */}

  <section className="w-full my-8 mb-12 md:mt-10 ">
    <div className="relative flex flex-col items-center">
       <h2 className="relative text-6xl font-cookie text-center">Meet Kristina   

      </h2> 
     <svg width="200" height="40" viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-10">
  <path
       d="M5 30 C40 10, 80 50, 120 20 S180 30, 195 25" 
        stroke="#D946EF" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
    </div>
  

<main className=" flex flex-col-reverse lg:flex-row justify-between gap-3 mt-12 p-8 font-sans text-purple-300">
  <div className="w-full lg:w-1/2 max-w-md space-y-6 leading-relaxed">
    <p className="text-lg">
      <span className="font-bold text-xl text-purple-200">The most important thing you need to know about me?</span><br />
      I don’t just love writing and editing— 
      <span className="text-pink-500 italic font-semibold">
        I love love <span className="text-2xl font-extrabold tracking-wide">LOVE</span> it.
      </span>
       &nbsp; It excites me.
    </p>

    <p>
       And I’ve spent the past five years getting <span className="underline decoration-pink-500">damn good</span> at it.<br />
      I’ve worked with publishing and editing companies like 
      <span className="text-purple-200 font-medium"> MysticqueRose Publishing</span> and 
      <span className="text-purple-200 font-medium"> FirstEditing.com</span>, and written with teams like 
      <span className="text-purple-200 font-medium"> Eric Kim Digital Agency</span> (now 
      <span className="text-purple-200 font-medium"> Zator Media</span>).
    </p>

    <p className="italic text-pink-500">
      But honestly? My favorite part has been collaborating with individual writers—
      <span className="font-semibold text-purple-200">people who just need someone to believe in their stories as much as they do.</span>
    </p>

    <p>
      I care about words because I care about people. I believe that every story, even the most fantastical ones, carries elements of the human experience.<br />
      I’m <span className="font-bold text-pink-500">obsessed</span> with exploring it and helping writers share that truth.<br />
      That’s probably the Psychology degree talking <span className="italic text-purple-200">(ha-ha)</span>, but it’s also just me.
    </p>
 
    <p className="text-xl font-bold text-pink-500">
      Oh, and yes—I love purple. Obviously.
    </p>
    <p>But back to what’s important right now: <span className="text-xl text-white  decoration-pink-500"> What do you need?</span> </p>
  </div>
  <div className=" relative w-full lg:w-1/2 flex items-center justify-center">
       
           <span className="text-6xl font-cookie  p-2 text-pink-500 absolute -top-20 right-20 md:-top-10 md:right-20">(that’s me!)</span>    

     
     <Image
        src="https://images.unsplash.com/photo-1646133754508-3a795f34acae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=722"
        alt="Woman"
        width={300} // required
        height={360} // required
        className="rounded-lg shadow-xl"
      />

  </div>
</main>

  </section>
        {/* Services */}
  <section className="bg-pink-200 py-12">
    <h1 className="font-cookie text-6xl text-center text-center text-background font-bold">My Services</h1>
<main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-25 p-6">
  <div className="bg-white text-black p-6 rounded-lg shadow-md">
    <Image
      src="https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?auto=format&fit=crop&q=80&w=1170"
      alt="books"
      width={400}
      height={300}
      className="w-full h-[300px] object-cover rounded-md"
    />
    <h1 className="text-xl md:text-2xl font-quintessential font-bold mt-4 mb-2 tracking-wider">Writing Partnership</h1>
    <p className="mb-5 min-h-60 text-sm md:text-base leading-relaxed">
      For the scared, inconsistent, and lonely writer. Writing can be
      <span className="italic text-pink-500">&nbsp;a lot</span>. Stressful. Lonely.
      Anxiety-inducing. Overwhelming. Scary, even. I’m a writer. I get it. So, let me come in—with
      <span className="text-pink-500"> energy, structure,</span> and the
      <span className="text-pink-500"> empathy</span> you need to be the best writer you can be.
    </p>
    <Link
      href="/"
      className="inline-block px-4 py-2 bg-background text-white font-bold rounded-lg"
    >
      Explore this service →
    </Link>
  </div>

  <div className="bg-white text-black p-6 rounded-lg shadow-md">
    <Image
      src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=687"
      alt="books"
      width={400}
      height={300}
      className="w-full h-[300px] object-cover rounded-md"
    />
    <h1 className="text-xl md:text-2xl font-quintessential font-bold mt-4 mb-2 tracking-wider">Editing </h1>
    <p className="mb-5 max-h-100 text-sm md:text-base leading-relaxed">
      For the unsure, growing, or ready-to-publish writer
You’ve done the writing (what a feat!). Now, it’s time to go further.
        I bring
      <span className="italic text-pink-500">&nbsp;fresh eyes, sharp instinctst</span> and five years of 
      <span className="text-pink-500"> editing muscle </span> to tell you 
      <span className="text-pink-500"> what works, what doesn’t,</span> and <span className="text-pink-500">how to fix it! </span>
       And if your work is already perfect? I’ll make sure to tell you that, too.
Let’s make your words as clear, powerful, and alive as the story behind them.

    </p>
    <Link
      href="/"
      className="inline-block px-4 py-2 bg-background text-white font-bold rounded-lg"
    >
      Explore this service →
    </Link>
  </div>

  <div className="bg-white text-black p-6 rounded-lg shadow-md">
    <Image
      src="https://images.squarespace-cdn.com/content/v1/6645e4d1689c580a65f90548/dcc803ab-1c11-4564-a73b-07a3cfc1f1d9/Coached+Manuscript+Evaluation.jpeg?format=750w"
      alt="books"
      width={400}
      height={300}
      className="w-full h-[300px] object-cover rounded-md"
    />
    <h1 className="text-xl  font-quintessential  md:text-2xl font-bold mt-4 mb-2 tracking-wider">LinkedIn & Website Content Writing</h1>
    <p className="mb-5 min-h-60 text-sm md:text-base leading-relaxed">
    For the person who’s done pretending online and is ready to sound like themselves!
Let’s shed the corporate clone and show your uniqueness. Unapologetically. 

    </p>
    <Link
      href="/"
      className="inline-block px-4 py-2 bg-background text-white font-bold rounded-lg"
    >
      Explore this service →
    </Link>
  </div>
</main>
<p className="text-center mt-10">Those are all my services but not everything I have to offer😊! </p>
  </section>

  {/* profiles */}
<section className="my-16 p-18 md:px-12">
  <div className="flex flex-col md:flex-row items-center gap-10">
    <Image
      src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&q=80&w=1170"
      alt="People Together"
      width={700}
      height={700}
      className="rounded-xl w-full md:w-1/2 shadow-lg object-cover"
    />
    <main className="w-full md:w-1/2 max-w-md text-center md:text-left">
      <h1 className="text-4xl md:text-5xl font-bold tracking-wide font-quintessential mb-4 text-pink-200">
        Profiles
      </h1>
      <h3 className="text-2xl font-semibold text-pink-600 mb-3">For the curious</h3>
      <p className="text-base md:text-lg leading-relaxed text-white my-5">
        I tell the stories of everyday people—the ones who may not be famous but are absolutely
        fascinating. Their experiences hold meaning, depth, and humanity. Maybe you’ll be inspired,
        entertained, or even shed a tear.
      </p>
      <Link href="/interview" className=" bg-pink-200 p-3 text-background font-bold rounded-lg">Read Profiles</Link>
    </main>
  </div>
</section>
 
</section>

  );
}
