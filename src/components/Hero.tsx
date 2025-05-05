'use client'

import React from 'react'
import Button from './ui/button'
import ButtonSecondary from './ui/buttonSecondary'
import Image from 'next/image'
import { useTranslations } from 'next-intl';
import { motion } from "motion/react"

const Hero = () => {

    const t = useTranslations('HomePage');
    
    return (
        
    <section className="container mx-auto px-4 py-16 text-center">
            <div className="flex justify-center mb-2">
                <div className="flex">
                    {/* <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" /> */}
                </div>
            </div>
            <motion.h1 initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.3 },
                }}  
                className="text-5xl md:text-8xl font-extrabold max-w-5xl mx-auto leading-tight">
                {t('hero.headline')}
            </motion.h1>

            <motion.p initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.9,
                    scale: { type: "spring", visualDuration: 0.6, bounce: 0.3 },
                }}  
                className="max-w-2xl mx-auto mt-4 text-[#141414]/80">
                {t('hero.subheadline')}
            </motion.p>

            <motion.div initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.9,
                    scale: { type: "spring", visualDuration: 0.8, bounce: 0.3 },
                }}  
                className="mt-8 flex justify-center gap-4">
                    <Button text="Start my project" className="w-full"/>
                    <ButtonSecondary text="Contact Us"/>
            </motion.div>

            {/* Product Showcase */}
            <motion.section initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 1,
                    scale: { type: "spring", visualDuration: 0.9, bounce: 0.2 },
                }}  
                className="">
                <div className="flex justify-center w-full ">
                    <Image
                    src="/assets/images/heroimages.png"
                    alt="Banking app showcase"
                    width={1400}
                    height={800}
                    />
                </div>
            </motion.section>

    </section>
    )
}

export default Hero