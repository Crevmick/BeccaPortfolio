import React from "react";
import { profileData } from "@/data/portfolioData";
import { Mail, Phone, MessageCircle, ArrowUpRight } from "lucide-react";

export const ContactFooter = () => {
  const whatsappUrl = `https://wa.me/234${profileData.phone.replace(/^0/, "")}`;

  return (
    <footer id="contact" className="bg-[#0A1366] text-white pt-20 pb-12 px-6">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Signature Behance Headline Banner */}
        <div className="space-y-6 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-yellow-300 text-xs font-black uppercase tracking-wider">
            <span>✦</span>
            <span>GET IN TOUCH</span>
            <span>✦</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] max-w-3xl">
            Thank you for checking out my portfolio!
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Ready to grow your school enrolment, elevate your food or beauty brand, or show up more intentionally on social media? Let&apos;s build meaningful connections together.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#FEF08A] text-[#0A1366] font-black text-sm hover:bg-yellow-200 transition-all shadow-md hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 text-emerald-700" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href={`mailto:${profileData.email}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm transition-all"
            >
              <Mail className="w-4 h-4 text-yellow-300" />
              <span>{profileData.email}</span>
            </a>
          </div>
        </div>

        {/* Contact details row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-blue-900/60 text-xs text-slate-300">
          <div>
            <div className="font-extrabold text-white text-base mb-1">
              {profileData.name}
            </div>
            <p className="text-slate-400">
              Social Media Manager • Content Strategist • Content Creator
            </p>
          </div>

          <div>
            <div className="font-bold uppercase tracking-wider text-yellow-300 mb-2">
              Direct Contact
            </div>
            <div className="space-y-1">
              <div>Email: {profileData.email}</div>
              <div>Phone / WhatsApp: {profileData.phone}</div>
            </div>
          </div>

          <div>
            <div className="font-bold uppercase tracking-wider text-yellow-300 mb-2">
              Brand Accent
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-[#492A86] border border-white/40" />
              <span>Purple #492A86</span>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-blue-950 text-center text-[11px] text-slate-400">
          © {profileData.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
