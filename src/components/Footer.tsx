import React from "react";
import { profileData } from "@/data/portfolioData";

export const Footer = () => {
  return (
    <footer className="bg-[#1A1816] text-[#F8F5EE] py-12 px-6 border-t border-stone-800">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-stone-400 font-sans">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-[#492A86] text-white flex items-center justify-center font-serif text-xs font-bold border border-white/20">
            ra
          </div>
          <span className="font-serif font-bold text-sm text-stone-200">
            {profileData.name}
          </span>
          <span>• Social Media Manager & Content Strategist</span>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <a href={`mailto:${profileData.email}`} className="hover:text-[#F7E078] transition-colors">
            {profileData.email}
          </a>
          <a href={`tel:${profileData.phone}`} className="hover:text-[#F7E078] transition-colors">
            {profileData.phone}
          </a>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
};
