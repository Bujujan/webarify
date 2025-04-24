'use client'

import React from "react";



interface CustomButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<CustomButtonProps> = ({ text, onClick, className }) => {
  return (
    <div className="relative inline-block hover:translate-y-[-4px] transition duration-200">
      {/* Shadow/secondary background */}
      <div className="absolute left-1 top-1 w-full h-full bg-black rounded-3xl z-0 hover:cursor-pointer"></div>

      {/* Actual button */}
      <button
        onClick={onClick}
        className={`relative z-10 text-white bg-[#278783] py-2 px-6 rounded-3xl font-semibold hover:cursor-pointer ${className}`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
