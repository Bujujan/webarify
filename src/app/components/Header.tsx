'use client'

import React from 'react'
import Image from "next/image"
import Link from "next/link"
import Button from './ui/button'

const Header = () => {
  return (
    
    <header className="container mx-auto px-4 py-4 flex justify-between items-center">
      <a href="http://www.webarify.com" rel="noopener noreferrer">
        <Image
          src="/assets/images/webarifylogo.png"
          alt="Webarify Logo"
          width={150}
          height={50}
          className="object-contain"
        />
      </a>
      

      <nav className="hidden md:flex space-x-6">
        <Link href="/" className="text-sm">
          Home
        </Link>
        <Link href="#" className="text-sm">
          Our Work
        </Link>
        <Link href="#" className="text-sm">
          Our Services
        </Link>
        <Link href="/about-us" className="text-sm">
          About Us
        </Link>
      </nav>
      <Button text="Start my project" onClick={() => console.log("Start a project")}/>
    </header>
  )
}

export default Header