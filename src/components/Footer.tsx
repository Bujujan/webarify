'use client'

import React from 'react'
import Link from "next/link"
import Button from './ui/button'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-[#FFF6EA] py-12">
        <div className="container mx-auto px-4 text-center flex flex-col items-center">
          <Button text="Start my project" />
          <Image
            src="/assets/images/webarifylogo.png"
            alt="Webarify Logo"
            width={150}
            height={50}
            className="object-contain my-8"
          />
          <p className="text-[#141414]/50 mb-8">Get connected and start webarifying.</p>

          {/* <div className="flex justify-center gap-8 mb-8">
            <Link href="#" className="text-sm">
              About
            </Link>
            <Link href="#" className="text-sm">
              Privacy
            </Link>
            <Link href="#" className="text-sm">
              Terms
            </Link>
            <Link href="#" className="text-sm">
              Contact
            </Link>
          </div> */}

          <p className="text-sm text-[#141414]/60">© 2025 Webarify. All Rights Reserved.</p>
        </div>
      </footer>
  )
}

export default Footer