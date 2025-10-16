"use client"
import React, { useState } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const[isHidden,setisHidden] = useState<boolean>(true)
  return (
    // Desktop navbar
    <header>
          <div className='hidden lg:flex flex-row w-full p-4  bg-white  justify-between  '>
      <h1>
           <Image
          src="/kristina.png"       
          alt="LOGO" 
          width={190}              
          height={190}            
        />

      </h1>
     <ul className="flex flex-row gap-2 items-center p-3 text-pink-500">
  <li className="p-2 text-xl">
    <a
      href="/"
      className="p-1 hover:border-pink-600 hover:bg-pink-100 rounded transition-colors duration-200"
    >
      Home
    </a>
  </li>
  <li className="p-2 text-xl">
    <a
      href="/services"
      className="p-1 hover:border-pink-600 hover:bg-pink-100 rounded transition-colors duration-200"
    >
      Work With Me
    </a>
  </li>
  <li className="p-2 text-xl">
    <a
      href="/profiles"
      className="p-1  hover:border-pink-600 hover:bg-pink-100 rounded transition-colors duration-200"
    >
      Profiles
    </a>
  </li>
  <li className="p-2 text-xl">
    <a
      href="/resources"
      className="p-1 hover:border-pink-600 hover:bg-pink-100 rounded transition-colors duration-200"
    >
      Resources
    </a>
  </li>
  <li className="p-2 text-xl">
    <a
      href="/blog"
      className="p-1 hover:border-pink-600 hover:bg-pink-100 rounded transition-colors duration-200"
    >
      Blog
    </a>
  </li>
  <li className="p-2 text-xl">
    <a
      href="/contact"
      className="p-1 hover:border-pink-600 hover:bg-pink-100 rounded transition-colors duration-200"
    >
      Contact
    </a>
  </li>
</ul>
    </div>
    {/* Mobile navbar */}
       <div className=' relative flex justify-between lg:hidden bg-white p-4  '>
      
        <h1> 
            <Image
          src="/kristina.png"       
          alt="LOGO" 
          width={210}              
          height={210}  
                   
        />

      </h1>
      <button className='p-2 z-20' onClick={()=>setisHidden(!isHidden)}>
        {
          isHidden ? (
                     <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="#ec4899"
                  className="w-11 h-11"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
          ):(
                  <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="#ec4899"
                className="w-11 h-11"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>

          )
        }
      </button>
         <ul className={` w-full h-screen p-8 absolute top-1  z-15 left-0 flex flex-col items-center justify-center gap-2 bg-white text-pink-500  ${isHidden ? "translate-full hidden" : ""} duration-300 ease-in-out`}>
        <li className='p-2 hover:text-pink-100  text-3xl'><a href="/">Home</a></li>
        <li className='p-2 hover:text-pink-100 text-3xl'><a href="/services">Work With Me</a></li> 
        <li className='p-2 hover:text-pink-100  text-3xl'><a href="/profiles">Profiles</a></li>
        <li className='p-2 hover:text-pink-100  text-3xl'><a href="/resources">Resources</a></li>
        <li className='p-2 hover:text-pink-100  text-3xl'><a href="/blog">Blog</a></li>
        <li className='p-2 hover:text-pink-100  text-3xl'><a href="/contact">Contact</a></li>
      </ul>
        </div>
    
    </header>


  )
}
