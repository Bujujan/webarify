'use client';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react'

const TrustedBy = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" }); 


    return (
        // {/* Trusted By */}
        <motion.section 
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        
        className="container mx-auto px-4 py-16 text-center">
            
            <h3 className="text-sm text-[#278783] mb-2">Trusted by</h3>
            <div className="flex justify-center gap-8 mt-4">
            <div className="bg-gray-500 w-16 h-16 rounded"></div>
            <div className="bg-gray-500 w-16 h-16 rounded"></div>
            <div className="bg-gray-500 w-16 h-16 rounded"></div>
            <div className="bg-gray-500 w-16 h-16 rounded"></div>
            </div>
        </motion.section> 
    )
}

export default TrustedBy