import React from "react";
import { profileData } from "@/data/portfolioData";
import { Mail, MessageCircle } from "lucide-react";

export const ClosingCTA = () => {
  const tools = [
    "Buffer",
    "Notion",
    "Meta Suite",
    "CapCut",
    "InShot",
    "Claude",
    "ChatGPT",
    "Canva",
    "Google Meet",
    "Google Workspace",
    "Discord",
    "WhatsApp"
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-[#F8F5EE]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Tools Pills */}
        <div className="lg:col-span-5 space-y-4">
          <span className="text-[10px] font-bold tracking-widest uppercase text-stone-500">
            TOOLS I USE DAILY
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#201D1A]">
            Modern workflow, consistent execution.
          </h3>
          <div className="flex flex-wrap gap-2 pt-2">
            {tools.map((t, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-full bg-white border border-[#201D1A] text-xs font-semibold text-stone-800 shadow-xs"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Big Brand Purple Card */}
        <div className="lg:col-span-7 rounded-[28px] bg-[#492A86] text-[#F8F5EE] border-[1.5px] border-[#201D1A] p-8 sm:p-12 shadow-[4px_4px_0px_#201D1A] space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Need content that feels easier to manage?
          </h2>

          <p className="text-sm sm:text-base text-[#F8F5EE]/90 leading-relaxed font-sans max-w-lg">
            Send an email or message on WhatsApp to discuss your brand&apos;s roadmap, admissions season, or product launch.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${profileData.email}`}
              className="px-7 py-3.5 rounded-full bg-white text-[#201D1A] text-xs font-bold uppercase tracking-wider hover:bg-stone-100 transition-all border border-[#201D1A] shadow-[2px_2px_0px_#201D1A]"
            >
              Send an Email
            </a>

            <a
              href={`https://wa.me/234${profileData.phone.replace(/^0/, "")}`}
              target="_blank"
              rel="noreferrer"
              className="px-7 py-3.5 rounded-full bg-[#F7E078] text-[#201D1A] text-xs font-bold uppercase tracking-wider hover:bg-yellow-300 transition-all border border-[#201D1A] shadow-[2px_2px_0px_#201D1A]"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
