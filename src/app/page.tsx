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
        Writing Partnership. Developmental and Line Editing.
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
  

<main className=" flex flex-col-reverse lg:flex-row justify-between  mt-12 p-8 font-sans text-purple-300">
  <div className="my-5  w-full lg:w-1/2  space-y-3 leading-relaxed text-lg">
    <p className="">
      <span className="font-bold text-xl text-purple-200">The most important thing you need to know about me?</span><br />
      I don’t just love writing and editing— 
      <span className="text-pink-500 italic font-semibold">
        I love love <span className="text-2xl font-extrabold tracking-wide">LOVE</span> it.
      </span>
       &nbsp;It excites me.
       And I’ve spent the past five years getting <span className="underline decoration-pink-500">damn good</span> at it.<br />
    </p>

    <p className="text-lg">
       
      I’ve worked with publishing and editing companies like 
      <span className="text-purple-200 font-medium"> MysticqueRose Publishing</span> and 
      <span className="text-purple-200 font-medium"> FirstEditing.com</span>, and written with teams like 
      <span className="text-purple-200 font-medium"> Eric Kim Digital Agency</span> (now 
      <span className="text-purple-200 font-medium"> Zator Media</span>).
    </p>

    <p className="">
      <span className="text-pink-500">  But honestly? My favorite part has been collaborating with individual writers—</span>
    
      <span className="font-semibold text-purple-200">people who just need someone to believe in their stories as much as they do. </span>
    

    </p>
    <p>
      I care about words because I care about people. I believe that every story, even the most fantastical ones, carries elements of the human experience.
      I’m <span className="font-bold text-pink-500">obsessed</span> with exploring it and helping writers share that truth, and I get to see it happen in real-time! (That’s probably the Psychology degree talking🤔.)
    </p>
 
    <p className="text-xl font-bold text-pink-500">
      Oh, and yes—I love purple. Obviously.
    </p>
    <p>But back to what’s important right now: <span className="text-xl text-white  decoration-pink-500 font-bold"> What do you need?</span> </p>
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
    <h1 className="text-xl md:text-2xl font-quintessential font-bold mt-4 mb-4 tracking-wider">Writing Partnership</h1>
    <div className="space-y-2 py-2 min-h-80">
       <p>For the scared, inconsistent, confused, or lonely writer.</p>
        <p>Writing can be <span className="text-pink-500 italic">a lot</span>. Stressful. Lonely. Anxiety-inducing. Overwhelming. Scary, even.  </p>
        <p>I’m a writer. I get it. So, let me come in—with <span className="text-pink-500">energy</span>,<span className="text-pink-500"> structure,</span> and the <span className="text-pink-500">empathy</span>  you need to be the best writer you can be,</p>
    </div>
       
  
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
    <h1 className="text-xl md:text-2xl font-quintessential font-bold mt-4 mb-4 tracking-wider">Editing </h1>
    <div className="space-y-2 my-2 min-h-80">
      <p>For the unsure, growing, or ready-to-publish writer.</p>
      <p>You’ve done the writing (what a feat!). Now, it’s time to go further.</p>
      <p>I bring <span className="text-pink-500"> fresh eyes, sharp instincts</span>, and five years of <span className="text-pink-500">editing muscle</span>  to tell you <span className="text-pink-500">what works, what doesn’t</span>, and <span className="text-pink-500">how to fix it!</span>  </p>
      <p>And if your work is already perfect? I’ll tell you!</p>
      <p>Ready to make your words clear, powerful, and alive?</p>
    </div>
    <Link
      href="/"
      className="inline-block px-4 py-2 bg-background text-white font-bold rounded-lg"
    >
      Explore this service →
    </Link>
  </div>

  <div className="bg-white text-black p-6 rounded-lg shadow-md">
    <Image
      src="https://images.unsplash.com/photo-1510172951991-856a654063f9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974"
      alt="books"
      width={400}
      height={300}
      className="w-full h-[300px] object-cover rounded-md"
    />
    <h1 className="text-xl  font-quintessential  md:text-2xl font-bold mt-4 mb-4 tracking-wider">LinkedIn & Website Content Writing</h1>
    <div className="space-y-2 my-2 min-h-80">
      <p>For the person who’s done pretending online and is ready to sound like themselves!</p>
      <p>You’re finally done with the writing formulas that strip away your voice and keep you from standing out. </p>
      <p>Let me help you shed the corporate clone and show your uniqueness. Unapologetically. </p>
    </div>

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

  {/* Thngs about her */}
<section className="flex flex-col items-center justify-center gap-12 min-h-[150px] py-10 px-4">
<h1 className="text-6xl font-bold font-cookie text-center">
    Small Things That Make Me, Me✨
  </h1>

 
  <ul className="max-w-3xl text-center  space-y-6 text-md leading-relaxed font-outfit  tracking-wider">
    <li>
      I don’t talk in the mornings—not because I’m grumpy, just because I don’t like mornings. I quietly wait for them to pass.
    </li>
    <li>
      I love noticing. Trees, flowers, birds, architecture, colors, people—even the shade of sand on the street I’m walking. Noticing makes life feel textured and rich. The result? A growing list of one-liners I swear I’ll use in my stories. Eventually 😭.
    </li>
    <li>
      I write about everything, everywhere. Notebooks, Google Docs, scraps of paper. I have entire folders devoted to existential dread, heartbreak, and moments that made my heart swell. Writing helps me organize my thoughts, record my reasons, and revisit my answers—sometimes updating them with new insight.
    </li>
    <li>
      I like to dance, though it’s an on-and-off relationship 🥹. Maybe we’ll be stable by the time you work with me. Don’t forget to ask!
    </li>
    <li>
      I offer more than paid services. This space is part portfolio, part home—a place where you can find support, explore resources, and notice with me, even before we meet.
    </li>
  </ul>
</section>

 
</section>

  );
}
