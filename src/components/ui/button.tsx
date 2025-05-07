'use client'

import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import React from "react";

interface CustomButtonProps {
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<CustomButtonProps> = ({ onClick, className }) => {
  const t = useTranslations('Button');

  return (
    <div className="relative inline-block transition-transform duration-200 hover:-translate-y-1 hover:cursor-pointer">
      {/* Drop Shadow */}
      <div className="absolute inset-0 translate-x-1 translate-y-1 rounded-3xl bg-black pointer-events-none" />

      {/* Actual Button */}
      <button
        onClick={() => {
          onClick?.();
          window.open(
            "https://wa.me/+212650661172?text=Hi!%20I'm%20interested%20in%20starting%20a%20project%20with%20you.",
            "_blank"
          );
        }}
        className={`relative z-10 flex items-center gap-2 text-white bg-[#278783] py-2 px-6 rounded-3xl font-semibold hover:cursor-pointer ${className}`}
      >
        {t('Button')}
        <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  );
};

export default Button;
