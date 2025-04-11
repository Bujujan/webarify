'use client'

import React from "react";



interface CustomButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const ButtonCustom: React.FC<CustomButtonProps> = ({ text, onClick, className }) => {
  return (
    <div className="relative inline-block hover:translate-y-[-4px] transition duration-200">
      

      {/* Actual button */}
      <button
        onClick={onClick}
        className={`relative z-10 text-[#278783] bg-[#FFF6EA] py-2 px-6 rounded-3xl font-semibold hover:cursor-pointer ${className}`}
      >
        {text}
      </button>
    </div>
  );
};

export default ButtonCustom;
