"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const[isHidden,setisHidden] = useState<boolean>(true)
  const[isDropdown,setIsDropDown] = useState(false)
  return (
    // Desktop navbar
    <header>
          <div className='hidden  lg:flex flex-row w-full p-2  bg-white items-center   justify-between  '>
      <h1>
           <Image
          src="/kristina.png"       
          alt="LOGO" 
          width={120}              
          height={120}  
          className=''          
        />
       

      </h1>
     <ul className="flex flex-row gap-2 items-center p-3 text-pink-500">
  <li className="p-2 text-xl">
    <Link
      href="/"
      className="p-1 hover:border-pink-600 hover:bg-pink-100 rounded transition-colors duration-200"
    >
      Home
    </Link>
  </li>
<li 
  className="relative p-2 text-xl" 
  onMouseEnter={() => setIsDropDown(true)} 
  onMouseLeave={() => setIsDropDown(false)}
>
  <Link
    href="/#services"
    className="p-1 relative hover:border-pink-600 hover:bg-pink-100 rounded transition-colors duration-200"
  >
    Work With Me
  </Link>

  {isDropdown && (
    <div className="absolute z-20 left-0 mt-2 w-48 bg-white shadow-md rounded-lg p-2 z-10">
      <Link 
        href="/writingpartnership" 
        className="block px-3 py-2 text-gray-700 hover:bg-pink-50 rounded"
      >
        Writing Partnership
      </Link>
      <Link 
        href="/editing" 
        className="block px-3 py-2 text-gray-700 hover:bg-pink-50 rounded"
      >
        Editing
      </Link>
      <Link 
        href="/websitecontent" 
        className="block px-3 py-2 text-gray-700 hover:bg-pink-50 rounded"
      >
        LinkedIn / Website Content
      </Link>
    </div>
  )}
</li>

  <li className="p-2 text-xl">
    <Link
      href="/profiles"
      className="p-1  hover:border-pink-600 hover:bg-pink-100 rounded transition-colors duration-200"
    >
      Interviews
    </Link>
  </li>
  <li className="p-2 text-xl">
    <Link
      href="/resources"
      className="p-1 hover:border-pink-600 hover:bg-pink-100 rounded transition-colors duration-200"
    >
      Resources
    </Link>
  </li>
  <li className="p-2 text-xl">
    <Link
      href="/blog"
      className="p-1 hover:border-pink-600 hover:bg-pink-100 rounded transition-colors duration-200"
    >
      Blog
    </Link>
  </li>
  <li className="p-2 text-xl">
    <Link
      href="/contact"
      className="p-1 hover:border-pink-600 hover:bg-pink-100 rounded transition-colors duration-200"
    >
      Contact
    </Link>
  </li>
</ul>
    </div>
    {/* Mobile navbar */}
       <div className=' relative flex justify-between items-center lg:hidden bg-white p-2  '>
      
        <h1> 
            <Image
          src="/kristina.png"       
          alt="LOGO" 
          width={80}              
          height={80}  
                   
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
                  className="w-9 h-9"
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
                className="w-9 h-9"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>

          )
        }
      </button>
         <ul className={`w-full h-screen p-8 absolute top-0 left-0 w-3/4  z-15  flex flex-col items-center justify-center gap-2 bg-white text-pink-500  ${isHidden ? "opacity-0 pointer-events-none " : "opacity-100" }  transition duration-300 ease-in-out`}>
        <li className='p-2 hover:text-pink-100  text-3xl'><Link href="/">Home</Link></li>
        <li className='p-2 hover:text-pink-100 text-3xl'><Link href="/#services">Work With Me</Link></li> 
        <li className='p-2 hover:text-pink-100  text-3xl'><Link href="/interview">Interviews</Link></li>
        <li className='p-2 hover:text-pink-100  text-3xl'><Link href="/resources">Resources</Link></li>
        <li className='p-2 hover:text-pink-100  text-3xl'><Link href="/blog">Blog</Link></li>
        <li className='p-2 hover:text-pink-100  text-3xl'><Link href="/contact">Contact</Link></li>
      </ul>
        </div>
    
    </header>


  )
}