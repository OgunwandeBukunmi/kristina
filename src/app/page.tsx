"use client"
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import Footer from "@/components/Footer";

export type space = {
  name : string,
  target : string,
  content : string,
  cta : string
}

export default function Home() {
  const [name,setName] = useState<string >("")
  const[email,setEmail] = useState<string >("")
  const[reason,setReason] = useState<string >("")
  const[aboutProject,setaboutProject] = useState<string >("")
   const[time,setTime] = useState<string >("")
   const[error,setError] = useState<string>("")
   const formData = new FormData()

  const reviews =[{
    content : "“I've worked with Ewaoluwa for several years now, and it never ceases to amaze me how good she is at capturing my ideas and articulating them with true perfection. I found that in order to be a good writer, you must also be an amazing listener, and she truly is that. She listens closely and recreates my words as they are in my mind. Her editing is just as amazing as her writing skills. With a keen eye for detail, Ewaoluwa has successfully edited a number of my works with incredible accuracy. She takes her time to not just read text, but breaks it down to ensure she fully understands it before marking it up. Anyone lucky enough to work with Ewaoluwa is truly blessed“.",
    person : "Porsché Mysticque Steele (My former boss🙈, CEO of MysticqueRose Publishing, and TEDx Speaker)"
  },
  {
    content : "Thank you so much for editing the sample, Kristina. This is exactly the type of feedback & guidance I need to make my book the best it can be.",
    person : "Felicia Emery (She immediately hired me to edit her book!)"
  },
   {
    content : "Amazing job! I’m truly grateful for her help in telling and editing my life’s story.",
    person : "Whitney Williams, Author of The Revival (We spent three amazing months working on her story!)"
  },
    {
    content : "She was superb! Very talented. She took my run-on sentences and chaotic paragraphs and made them flow like a pro. Definitely recommend her.",
    person : "Gregory Maisonville (I enjoyed it!)"
  },
   {
    content : "During this project, Kristina was flexible and easy to contact, and she remained dedicated to ensuring the project was completed to my satisfaction.",
    person : "Dorian (That’s what I do!)"
  },
   {
    content : "Kristina is a phenomenal writer. She was hardworking, transparent, and delivered great results. These are typical for a well-reviewed freelance copywriter, but the thing that I was really impressed with was her ability to learn the style and tone of the client. To take feedback with a grain of salt and make adjustments. I’d recommend working with her for a great experience and great results.",
    person : "Eric Kim (My former boss🙈 and Principal Consultant at Zator Media)"
  },
  {
    content : "Ewaoluwa writes things amazingly. She also enjoys and analyzes literary works. I think she is like a ball of fire- beautiful with the ability to beat things into perfection.",
    person : "Ololade Edun"
  },
    {
    content : "We had fun creating stories together.",
    person : "Angela Jamieson (Told you I enjoy what I do!)"
  },
  {content : "Working with Kristina was the difference between having an idea and having it come alive. I told her everything I had in my head, and she just listened—then somehow turned all my rambling into something that actually made sense. Through genuine understanding and skill, she helped me get my ideas on the page and create a finished draft. The result felt effortless to read, and the result reminded me how powerful human writing is.",
  person : "Daniel"
  },{
  content : "Kristina took my rough ideas and turned them into something I couldn’t stop reading. Every line felt natural, like she understood exactly what I wanted to say before I did. The writing was clear, human, and alive. I saw my vision on the page and heard it in my words. That’s what makes her writing stand out—it feels like you.",
  person : "Daniel"
  }
,{
  content : "Kristina helped me put my brand into words in a way I’d never been able to before—and she did it so fast! It was just one ad copy, but she managed to capture what makes my brand unique and get the message across clearly. It was short, sharp, and actually made people want to act. She just gets it.",
  person : "Titobi"
},{
  content : "I was really struggling to organize my ideas for an essay, and Kristina helped me sort everything out. We talked through each point together, and she helped me expand on them, making sure they actually fit the topic and made sense. My thoughts were all over the place, but she helped me detangle and structure them. By the end, everything flowed and felt clear. It honestly made such a difference.",
  person : "Jerry"
}

]
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

  async function handleContactFormSubmit(e : FormEvent){
    e.preventDefault()
    formData.append("name",name)
    formData.append("email",email)
    formData.append("reason",reason)
    formData.append("projectDetails",aboutProject)
    formData.append("time",time)
    
    console.log("Contact Data Received")
    try{
      const request = await fetch("/api/contact",{
        method : "POST",
        body : formData
      })
      const response = await request.json()
      console.log(response.message)
    }catch (err: unknown) {
  if (err instanceof Error) {
    console.error(err.message);
    setError(err.message);
  } else {
    console.error(String(err));
    setError("Something went wrong");
  }
}
    
  }
  return (
   <section className="w-full h-screen">

  <Navbar />
  {/* Hero section */}
  <article className=" h-[500px]  relative text-center py-12   overflow-hidden p-2 ">
    {/* Background image and gradient */}
    <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-800 bg-[url('/passion_word.jpg')] bg-cover bg-center opacity-60"></div>

    {/* Softer overlay for better text visibility */}
    <div className="absolute inset-0 bg-black/20"></div>

    {/* Content */}
    <div className="relative z-10 text-white px-4">
      <h1 className="text-5xl md:text-8xl font-instrument font-bold font-de leading-tight">
       You’ve got something worth saying—I help you <span className="italic text-pink-500"> say</span> it better. 
      </h1>
      <h3 className="mt-6 text-sm md:text-lg text-gray-200 font-funnel ">
       Writing Partnership and Editing support that turns rough ideas and drafts into impactful, goal-crushing pieces. <br /> & <br /> Authentic LinkedIn and Website Copy that connects, converts, and still feels like you.

      </h3>
      <div className="mt-5 py-5">  <Link
      href="#services" className="p-3 font-semibold rounded-md text-xl bg-pink-400 ">Work With Me</Link>
    </div></div>
   
  </article>

    <section className="min-h-screen bg-gray-800 text-white flex flex-col justify-center items-center px-6 md:px-20 py-20 text-lg leading-relaxed font-delius">
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
            Are you the writer with<span className="text-pink-300 italic"> rough ideas</span>  and <span className="underline text-pink-300">unfinished drafts?</span> <span className="text-red-400"> Wrestling
            with fear, overwhelm, and inconsistency?</span>  Unable to stand how lonely
            writing can get?
          </p>

          <p>
            Or maybe you’re the writer who’s already written their piece. You’re
            <span className="text-red-300"> proud, but unsure—wondering if it’s good enough</span>, or <span className="text-green-300">  if the world will
            understand and accept it.</span>
          </p>

          <p>
            Or perhaps you’re not a writer at all. You’re a professional or
            creative done with copy that sounds like everyone else’s. <span className="text-green-300">You want
            your voice to show up in your online presence.</span> 
          </p>

          <p className="font-medium  mt-8">
            Whichever it is, I’m ready to<span className="text-pink-500"> meet you in the middle of your chaos</span>
            and help you turn it into <span className="text-green-300">clear, confident, and complete</span> stories and
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
       <h2 className="relative  text-5xl md:text-7xl font-cookie text-center">Hi, I’m Kristina!

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
  <section className="bg-pink-200 py-12" id="services">
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
      href="/writingpartnership"
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
      href="/editing"
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
      href="/contentwriting"
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
          I’ve built this space to be part portfolio, part home — a place where
          you can find support, learn, and notice with me, even before we meet.
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

<section className="bg-[#430169] text-white py-16 px-4 md:px-10 lg:px-20 relative">
      <h2 className="text-3xl md:text-4xl font-quintessential text-center mb-16 text-pink-300">
       What’s a home page without a little brag section😜?
      </h2>

      {/* Swiper Container */}
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
    </section>
         
      {/* contact form    */}

    <section
  id="contact"
  className="bg-[#430169] text-white py-16 px-6 md:px-12 lg:px-20 flex flex-col items-center"
>
  <div className="max-w-2xl w-full">
    <h1 className="text-center text-pink-300 text-3xl md:text-4xl font-semibold mb-4">
      Got a project, question, or wild idea? Tell me all about it!
    </h1>
    <h3 className="text-center text-gray-200 text-base md:text-lg mb-10">
      I read every message personally (yes, really). Fill out the form below,
      and I’ll get back to you soon.
    </h3>

    <form className="flex flex-col gap-5" onSubmit={handleContactFormSubmit}>
     {error ? <span className="p-s bg-red-900 text-red-300 rounded-md"></span> : <></> } 
      <input
        type="text"
        placeholder="Your Name"
        required
        className="w-full p-3 rounded-xl bg-[#5d2b8c] border border-transparent focus:border-pink-400 outline-none transition duration-300 placeholder-gray-300"
        onChange={(e)=>setName(e.target.value)}
        value={name}
       
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="w-full p-3 rounded-xl bg-[#5d2b8c] border border-transparent focus:border-pink-400 outline-none transition duration-300 placeholder-gray-300"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />

      <select
      required
        className="w-full p-3 rounded-xl bg-[#5d2b8c] border border-transparent focus:border-pink-400 outline-none text-gray-200 transition duration-300"
        onChange={(e)=>setReason(e.target.value)}
      >
            <option value="" disabled selected>
   What are you reaching out about?
  </option>
        <option>Writing Partnership</option>
        <option>Editing</option>
        <option>LinkedIn/Website Content Writing</option>
        <option>Something else!</option>
      </select>

      <textarea
      required
        placeholder="Tell me about your project (project type, genre, word count, expectations, …)"
        rows={5}
        className="w-full p-3 rounded-xl bg-[#5d2b8c] border border-transparent focus:border-pink-400 outline-none transition duration-300 placeholder-gray-300 resize-none"
        value={aboutProject}
        onChange={(e)=>setaboutProject(e.target.value)}
      ></textarea>

      <select
      required
        className="w-full p-3 rounded-xl bg-[#5d2b8c] border border-transparent focus:border-pink-400 outline-none text-gray-200 transition duration-300"
        onChange={(e)=>setTime(e.target.value)}
      >
          <option value="" disabled selected>
   How soon are you looking to start?
  </option>
        <option>ASAP</option>
        <option>In the next few weeks</option>
        <option>Just exploring for now</option>
      </select>

          <p className="font-semibold"> Book a <span className="text-pink-300">free 20-minute call</span>  to see if we’re the right fit.</p>
          <div >  
            <p>file upload — for manuscripts or briefs(optional)</p>
          <input 
          accept="image/*,application/pdf"
          type="file" className="p-3 border border-transparent bg-white/10 backdrop-blur-md rounded-lg"  
          onChange={async (e: ChangeEvent<HTMLInputElement>) => {
  const files = e.target.files;
  if (!files || files.length === 0) return; // no file selected
  formData.append("file", files[0]);
  console.log("File added:", files[0]);
}
          }/></div>
        
      <button
        type="submit"
        className="mt-6 bg-pink-400 hover:bg-pink-500 text-white font-medium py-3 px-8 rounded-xl shadow-lg transition duration-300"
      >
        Send Message
      </button>
    </form>
  </div>
</section>
<Footer/>

 
</section>



  );
}
