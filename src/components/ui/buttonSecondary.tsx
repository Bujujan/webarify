'use client'

import React from "react";

interface CustomButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const ButtonSecondary: React.FC<CustomButtonProps> = ({ text, className }) => {
  return (
    // Actual button
    <button
      onClick={() => window.open(
        "https://wa.me/+212650661172?text=Hi!%20I'm%20interested%20in%20starting%20a%20project%20with%20you.",
        "_blank"
      )}
      className={`relative z-10 text-[#278783] border border-[#278783] py-2 px-6 rounded-3xl font-semibold hover:cursor-pointer hover:translate-y-[-4px] transition duration-200 ${className}`}
    >
      {text}
    </button>
  );
};

export default ButtonSecondary;
