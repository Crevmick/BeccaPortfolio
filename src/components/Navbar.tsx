import React from "react";
import { profileData } from "@/data/portfolioData";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#F8F5EE]/90 backdrop-blur-md border-b border-[#201D1A]/10">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo / Monogram */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-full bg-[#492A86] text-white flex items-center justify-center font-serif text-sm font-bold border border-[#201D1A]">
            ra
          </div>
          <span className="font-serif font-bold text-lg tracking-tight text-[#201D1A]">
            rebecca adewumi
          </span>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-semibold text-stone-700">
          <a href="#services" className="hover:text-[#492A86] transition-colors">Services</a>
          <a href="#work" className="hover:text-[#492A86] transition-colors">Work</a>
          <a href="#case-study" className="hover:text-[#492A86] transition-colors">Case Study</a>
          <a href="#results" className="hover:text-[#492A86] transition-colors">Results</a>
          <a href="#offers" className="hover:text-[#492A86] transition-colors">Offers</a>
        </nav>

        {/* Contact Pill Button */}
        <a
          href="#contact"
          className="px-6 py-2.5 rounded-full bg-[#282522] text-[#F8F5EE] text-xs font-semibold tracking-wider hover:bg-[#492A86] transition-all border border-[#201D1A]"
        >
          Contact
        </a>
      </div>
    </header>
  );
};
