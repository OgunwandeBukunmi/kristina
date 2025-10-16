import Image from "next/image";
import Navbar from "@/components/Navbar";

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
      <h1 className="text-6xl md:text-8xl font-cookie leading-tight">
        I’m a <span className="text-pink-400 font-bold">whiz</span> at every stage of the creative process.
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
  

<main className=" flex flex-col-reverse lg:flex-row gap-3 mt-12 p-8 font-sans text-purple-300">
  <div className="w-full lg:w-1/2 space-y-6 leading-relaxed">
    <p className="text-lg">
      <span className="font-bold text-xl text-purple-200">The most important thing you need to know about me?</span><br />
      I don’t just love writing and editing— 
      <span className="text-pink-500 italic font-semibold">
        I love love <span className="text-2xl font-extrabold tracking-wide">LOVE</span> it.
      </span>
    </p>

    <p>
      It excites me. And I’ve spent the past five years getting <span className="underline decoration-pink-500">damn good</span> at it.<br />
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
    <p>But back to what’s important right now: <span className="text-xl text-white underline decoration-pink-500"> What do you need?</span> </p>
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
  <section>
    <h1 className="font-cookie text-6xl text-center">My Services</h1>
    <main>
      <div>
       
      </div>
    </main>
  </section>
</section>

  );
}
