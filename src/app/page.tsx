import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from "next/link";

type space = {
  name : string,
  target : string,
  content : string,
  cta : string
}

export default function Home() {
  const WritingSpaces : space[] = [
    {
      name : "Interviews",
      target : "For the curious",
      content : "I tell the stories of everyday people—the ones who may not be famous but are absolutely fascinating. Their experiences hold meaning, depth, and humanity. Maybe you’ll be inspired, entertained, or even shed a tear.",
      cta : "Read Interviews"
    },
       {
      name : "Resources",
      target : "To help my fellow editors and guide writerss",
      content : "I share the tools, lessons, and lightbulb moments that have shaped me as an editor and as a human. Everything here has either helped me grow or increased my efficiency, and I hope it helps you too.",
      cta : "Explore Resources"
    }, {
      name : "Blog",
      target : "For everyone.",
      content : "Here’s where I write just because I want to—fiction, non-fiction, whatever’s calling me. These are the pieces closest to my heart, and I hope they find their way into yours.",
      cta : "Read My Stories"
    },


  ]

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
      <h1 className="text-4xl md:text-7xl font-funnel font-bold font-de leading-tight">
       You’ve got something worth saying—I help you say it better. 
      </h1>
      <h3 className="mt-6 text-lg md:text- font-funnel ">
       Writing Partnership and Editing support that turns rough ideas and drafts into impactful, goal-crushing pieces. & <br /> Authentic LinkedIn and Website Copy that connects, converts, and still feels like you.

      </h3>
      <div className="mt-5 py-5">  <Link
      href="workwithme" className="p-3 font-semibold rounded-md text-xl bg-pink-400 ">Work With Me</Link>
    </div></div>
   
  </article>

    <section className="min-h-screen bg-background text-white flex flex-col justify-center items-center px-6 md:px-20 py-20 text-lg leading-relaxed font-delius">
      <div className="max-w-4xl text-center space-y-6">
        <p className="text-xl md:text-2xl italic text-pink-300">
          “One thing I know for sure? Writing is one hell of a task!”
        </p>

        <p className="text-gray-200">
          It asks everything of you—focus, honesty, time. And you could’ve chosen
          to run from it. But you’re here. Ready to face it head-on.
        </p>

        <h1 className="text-3xl md:text-5xl font-semibold font-funnel  mt-10 mb-4">
          Which one are you?
        </h1>

        <div className="space-y-8 text-gray-200">
          <p>
            Are you the writer with rough ideas and unfinished drafts? Wrestling
            with fear, overwhelm, and inconsistency? Unable to stand how lonely
            writing can get?
          </p>

          <p>
            Or maybe you’re the writer who’s already written their piece. You’re
            proud, but unsure—wondering if it’s good enough, or if the world will
            understand and accept it.
          </p>

          <p>
            Or perhaps you’re not a writer at all. You’re a professional or
            creative done with copy that sounds like everyone else’s. You want
            your voice to show up in your online presence.
          </p>

          <p className="font-medium  mt-8">
            Whichever it is, I’m ready to meet you in the middle of your chaos
            and help you turn it into clear, confident, and complete stories and
            copy.
          </p>

          <div className="bg-pink-800 p-6 rounded-2xl shadow-sm mt-6">
            <p className="mb-3 text-2xl font-semibold text-gray-300">
              Whether that means:
            </p>
            <ul className="list-disc list-inside text-left space-y-2">
              <li>Partnering with you to write or finish your drafts,</li>
              <li>Editing your manuscript until it shines, or</li>
              <li>
                Creating authentic LinkedIn and website copy that connects and
                converts—
              </li>
            </ul>
          </div>

          <p className="mt-6 text-white">
            I help you bring your words and ideas to life without losing your
            voice.
          </p>

          <Link
            href="/services"
            className="inline-block mt-10 bg-[#1a1a1a] text-[#fdfaf7] px-6 py-3 rounded-full hover:bg-[#333] transition-all duration-300 shadow-md"
          >
            Explore My Services →
          </Link>
        </div>
      </div>
    </section>
    {/* Meet Kristina */}

  <section className="w-full my-8 mb-12 md:mt-10 ">
    <div className="relative flex flex-col items-center">
       <h2 className="relative text-6xl font-cookie text-center">Hi, I’m Kristina!

      </h2> 
  
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
<main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 p-6 font-delius">
  <div className="bg-white text-black p-6 rounded-lg shadow-md backdrop-blur-md">
    <Image
      src="https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?auto=format&fit=crop&q=80&w=1170"
      alt="books"
      width={200}
      height={150}
      className="w-full h-[150px] object-cover rounded-md"
    />
    <h1 className="text-xl md:text-2xl font-quintessential font-bold mt-4 mb-4 tracking-wider">Writing Partnership</h1>
    <div className="space-y-2 my-8 min-h-56  text-sm text-gray-800">
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
       width={200}
      height={150}
      className="w-full h-[150px] object-cover rounded-md"
    />
    <h1 className="text-xl md:text-2xl font-quintessential font-bold mt-4 mb-4 tracking-wider">Editing </h1>
    <div className="space-y-2  my-8  text-sm text-gray-800">
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
      width={200}
      height={150}
      className="w-full h-[150px] object-cover rounded-md"
    />
    <h1 className="text-xl  font-quintessential  md:text-2xl font-bold mt-4 mb-4 tracking-wider">LinkedIn & Website Content Writing</h1>
    <div className="space-y-2  my-8 min-h-56  text-sm text-gray-800">
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

    <section className="bg-[var(--background)] text-white py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-medium leading-relaxed mb-12 text-pink-200">
          "I’ve built this space to be part portfolio, part home — a place where
          you can find support, learn, and notice with me, even before we meet."
        </h2>

        <main className="grid md:grid-cols-3 gap-10">
          {WritingSpaces &&
            WritingSpaces?.map((item:space, index : number) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 text-left border border-white/10 hover:bg-white/20 hover:scale-[1.02] transition-all duration-300"
              >
                <h1 className="text-xl font-semibold text-pink-300 mb-2 group-hover:text-pink-200 transition">
                  {item.name}
                </h1>
                <h3 className="text-sm uppercase tracking-widest text-gray-300 mb-4">
                  {item.target}
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed mb-6 h-42">
                  {item.content}
                </p>
                <Link
                  href={item.cta}
                  className="inline-block bg-pink-500 text-white px-5 py-2 rounded-full font-medium hover:bg-pink-400 transition-all duration-300"
                >
                  {item.cta || "Learn more"}
                </Link>
              </div>
            ))}
        </main>
      </div>
    </section>

  {/* Thngs about her */}


 
</section>

  );
}
