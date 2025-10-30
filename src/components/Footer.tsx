import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className='bg-pink-300 p-2 '>
      <main className='flex flex-col md:flex-row items-center justify-around gap-16'>
        <div>
            <Image 
            src="/kristina.png"
            width={150}
            height={150}
            alt='logo'/>
        </div>
        <div className='space-y-4 mb-5'>
            <h1 className='text-xl font-semibold'>Quick Links</h1>
           <p className='hover:text-purple-700'>
            <Link href="/">Home</Link>
           </p>
           <p className='hover:text-purple-700'>
            <Link href="/#services">Work With Me</Link>
           </p>
           <p className='hover:text-purple-700'>
            <Link href="/#contact">Contact Me</Link>
           </p>
        </div>
      </main>
      <p className='text-center bg-white/10 backdrop-blur-lg p-3'>@{new Date().getFullYear()} Kristina Copyrights</p>
    </div>
  )
}
