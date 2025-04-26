'use client'

import React, { ReactNode } from "react";
import Link from "next/link";

interface CustomButtonProps {
  href: string;
  variant?: 'primary' | 'secondary'; // optional: for future styling variations
  className?: string;
  children: ReactNode;
}

const ButtonSlug: React.FC<CustomButtonProps> = ({ href, className = "", children }) => {
  return (
    <div className="relative inline-block hover:-translate-y-1 transition duration-200">
      <Link href={href} passHref>
        <button
          className={`relative z-10 bg-[#278783] text-[#FFF6EA] py-2 px-6 rounded-3xl font-semibold hover:cursor-pointer ${className}`}
        >
          {children}
        </button>
      </Link>
    </div>
  );
};

export default ButtonSlug;
