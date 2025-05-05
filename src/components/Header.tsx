'use client'

import React, { useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Button from './ui/button'
import LocaleSwitcher from './LocaleSwitcher'
import { useLocale, useTranslations } from 'next-intl';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const locale = useLocale();

  const t = useTranslations('Navbar');

  return (
    <header className="relative sm:w-[90%] container mx-auto px-4 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center w-[150px] h-[50px] shrink-0">
        <Link href="http://www.webarify.com" rel="noopener noreferrer" className='flex items-center'>
          <Image
            src="/assets/images/webarifylogo.png"
            alt="Webarify Logo"
            width={150}
            height={50}
            className="object-contain"
          />
        </Link>
      </div>

      {/* Desktop Nav - Centered */}
      <div className="hidden md:flex flex-1 justify-center space-x-6">
        <Link href={`/${locale}/`} className="text-sm">
          {t('home')}
        </Link>
        {/* <Link href="#" className="text-sm">
          Our Work
        </Link> */}
        <Link href={`/${locale}/our-services`} className="text-sm">
          {t('services')}
        </Link>
        <Link href={`/${locale}/about-us`} className="text-sm">
          {t('about')}
        </Link>
      </div>

      {/* Desktop Button - Right aligned */}
      <div className="hidden md:flex items-center">
        <Button text="Start my project"/>
        <div className='translate-x-8'>
          <LocaleSwitcher/>
        </div>
        
      </div>
      

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-black z-20"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#FFF6EA] shadow-md py-6 px-4 flex flex-col space-y-4 z-10 md:hidden animate-slide-down">
          <Link href={`/${locale}/`} onClick={() => setIsMenuOpen(false)} className="text-sm">
            {t('home')}
          </Link>
          {/* <Link href="#" onClick={() => setIsMenuOpen(false)} className="text-sm">
            Our Work
          </Link> */}
          <Link href={`/${locale}/our-services`} onClick={() => setIsMenuOpen(false)} className="text-sm">
            {t('services')}
          </Link>
          <Link href={`/${locale}/about-us`} onClick={() => setIsMenuOpen(false)} className="text-sm">
            {t('about')}
          </Link>
          <Button text="Start my project" className='w-full' onClick={() => {
            setIsMenuOpen(false)
          }} /> 
          <div className='flex justify-end'>
            <LocaleSwitcher/>
          </div>
          
        </div>
      )}
    </header>
  )
}

export default Header
