'use client'

import { useLocale } from 'next-intl';
import Link from 'next/link';
import React from 'react'

const Breadcrumps = ({service} : any) => {

    const locale = useLocale();


  return (
    
            <div className="mb-8">
              <nav className="flex" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                  <li className="inline-flex items-center">
                    <Link href={`/${locale}/`} className="text-sm text-[#141414]/70 hover:text-[#141414]">
                      Home
                    </Link>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <span className="mx-2 text-[#141414]/70">/</span>
                      <Link href={`/${locale}/our-services`} className="text-sm text-[#141414]/70 hover:text-[#141414]">
                        Our Services
                      </Link>
                    </div>
                  </li>
                  <li aria-current="page">
                    <div className="flex items-center">
                      <span className="mx-2 text-[#141414]/70">/</span>
                      <span className="text-sm font-medium text-[#141414]">{service.title}</span>
                    </div>
                  </li>
                </ol>
              </nav>
            </div>
  )
}

export default Breadcrumps