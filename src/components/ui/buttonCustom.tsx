'use client'

import React, { ReactNode } from "react";



interface CustomButtonProps {
  text: string;
  className?: string;
}

const ButtonCustom: React.FC<CustomButtonProps> = ({ text, className, }) => {
  return (
    <div className="relative inline-block hover:translate-y-[-4px] transition duration-200">
      

      {/* Actual button */}
      <button
        onClick={() => window.open(
          "https://wa.me/+212650661172?text=Hi!%20I'm%20interested%20in%20starting%20a%20project%20with%20you.",
          "_blank"
      )}
        className={`relative z-10 text-[#278783] bg-[#FFF6EA] py-2 px-6 rounded-3xl font-semibold hover:cursor-pointer ${className}`}
      >
        {text}
      </button>
    </div>
  );
};

export default ButtonCustom;
