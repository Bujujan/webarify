'use client'

import React, { useState, useEffect } from 'react'
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Button from './ui/button'
import LocaleSwitcher from './LocaleSwitcher'
import { useLocale, useTranslations } from 'next-intl'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  const locale = useLocale()
  const t = useTranslations('Navbar')

  // Detect scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      const isScrollingUp = prevScrollPos > currentScrollPos

      setVisible(isScrollingUp || currentScrollPos < 10)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevScrollPos])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } bg-[#FFF6EA]`}
    >
      <div className="sm:w-[90%] container mx-auto px-4 py-4 flex items-center justify-between">
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
          <Link href={`/${locale}/our-services`} className="text-sm">
            {t('services')}
          </Link>
          <Link href={`/${locale}/about-us`} className="text-sm">
            {t('about')}
          </Link>
        </div>

        {/* Desktop Button - Right aligned */}
        <div className="hidden md:flex items-center">
          <Button />
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
            <Link href={`/${locale}/our-services`} onClick={() => setIsMenuOpen(false)} className="text-sm">
              {t('services')}
            </Link>
            <Link href={`/${locale}/about-us`} onClick={() => setIsMenuOpen(false)} className="text-sm">
              {t('about')}
            </Link>
            <Button className='w-full flex justify-center' onClick={() => setIsMenuOpen(false)} />
            <div className='flex justify-end'>
              <LocaleSwitcher />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

// 'use client'

// import React, { useState } from 'react'
// import Image from "next/image"
// import Link from "next/link"
// import { Menu, X } from "lucide-react"
// import Button from './ui/button'
// import LocaleSwitcher from './LocaleSwitcher'
// import { useLocale, useTranslations } from 'next-intl';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   const locale = useLocale();

//   const t = useTranslations('Navbar');

//   return (
//     <header className="relative sm:w-[90%] container mx-auto px-4 py-4 flex items-center justify-between">
//       {/* Logo */}
//       <div className="flex items-center w-[150px] h-[50px] shrink-0">
//         <Link href="http://www.webarify.com" rel="noopener noreferrer" className='flex items-center'>
//           <Image
//             src="/assets/images/webarifylogo.png"
//             alt="Webarify Logo"
//             width={150}
//             height={50}
//             className="object-contain"
//           />
//         </Link>
//       </div>

//       {/* Desktop Nav - Centered */}
//       <div className="hidden md:flex flex-1 justify-center space-x-6">
//         <Link href={`/${locale}/`} className="text-sm">
//           {t('home')}
//         </Link>
//         {/* <Link href="#" className="text-sm">
//           Our Work
//         </Link> */}
//         <Link href={`/${locale}/our-services`} className="text-sm">
//           {t('services')}
//         </Link>
//         <Link href={`/${locale}/about-us`} className="text-sm">
//           {t('about')}
//         </Link>
//       </div>

//       {/* Desktop Button - Right aligned */}
//       <div className="hidden md:flex items-center">
//         <Button />
//         <div className='translate-x-8'>
//           <LocaleSwitcher/>
//         </div>
        
//       </div>
      

//       {/* Mobile Menu Toggle */}
//       <button
//         className="md:hidden text-black z-20"
//         onClick={() => setIsMenuOpen(!isMenuOpen)}
//       >
//         {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//       </button>

//       {/* Mobile dropdown menu */}
//       {isMenuOpen && (
//         <div className="absolute top-full left-0 w-full bg-[#FFF6EA] shadow-md py-6 px-4 flex flex-col space-y-4 z-10 md:hidden animate-slide-down">
//           <Link href={`/${locale}/`} onClick={() => setIsMenuOpen(false)} className="text-sm">
//             {t('home')}
//           </Link>
//           {/* <Link href="#" onClick={() => setIsMenuOpen(false)} className="text-sm">
//             Our Work
//           </Link> */}
//           <Link href={`/${locale}/our-services`} onClick={() => setIsMenuOpen(false)} className="text-sm">
//             {t('services')}
//           </Link>
//           <Link href={`/${locale}/about-us`} onClick={() => setIsMenuOpen(false)} className="text-sm">
//             {t('about')}
//           </Link>
//           <Button className='w-full' onClick={() => {
//             setIsMenuOpen(false)
//           }} /> 
//           <div className='flex justify-end'>
//             <LocaleSwitcher/>
//           </div>
          
//         </div>
//       )}
//     </header>
//   )
// }

// export default Header