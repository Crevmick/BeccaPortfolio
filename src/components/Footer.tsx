import { ArrowUpRight, AtSign, BriefcaseBusiness, Mail, Phone } from "lucide-react";
import Image from "next/image";
import { profileData } from "@/data/portfolioData";

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#1A1816] px-4 pb-8 pt-12 text-[#F8F5EE] sm:px-6 sm:pb-10 sm:pt-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.2fr_1fr] md:items-end">
          <div className="max-w-xl">
            <a href="#" className="group inline-flex items-center gap-3">
              <span className="relative size-12 overflow-hidden rounded-full border border-white/25 bg-white shadow-[2px_2px_0_#F7E078] transition-transform group-hover:-rotate-3">
                <Image
                  src="/brand-logo.png"
                  alt="Your Online Growth Padi logo"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </span>
              <span className="font-serif text-xl font-bold text-white">
                {profileData.name}
              </span>
            </a>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-stone-400">
              Strategic content and thoughtful social media management for brands that want to show up with clarity.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 md:justify-self-end">
            <a
              href={`mailto:${profileData.email}`}
              className="group flex min-h-12 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-stone-200 transition-colors hover:border-[#F7E078]/40 hover:bg-white/[0.08]"
            >
              <Mail size={17} className="shrink-0 text-[#F7E078]" />
              <span className="min-w-0 truncate">Email me</span>
              <ArrowUpRight size={15} className="ml-auto shrink-0 opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href={`tel:${profileData.phone}`}
              className="group flex min-h-12 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-stone-200 transition-colors hover:border-[#A7C7A8]/40 hover:bg-white/[0.08]"
            >
              <Phone size={17} className="shrink-0 text-[#A7C7A8]" />
              <span>Call me</span>
              <ArrowUpRight size={15} className="ml-auto shrink-0 opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/rebecca-adewumi-74b481285/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-12 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-stone-200 transition-colors hover:border-[#D3C5E9]/40 hover:bg-white/[0.08]"
            >
              <BriefcaseBusiness size={17} className="shrink-0 text-[#D3C5E9]" />
              <span>LinkedIn</span>
              <ArrowUpRight size={15} className="ml-auto shrink-0 opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="https://www.instagram.com/ariksbeccah/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-12 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-stone-200 transition-colors hover:border-[#F7E078]/40 hover:bg-white/[0.08]"
            >
              <AtSign size={17} className="shrink-0 text-[#F7E078]" />
              <span>Instagram</span>
              <ArrowUpRight size={15} className="ml-auto shrink-0 opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {profileData.name}. All rights reserved.</p>
          <p>
            Built by{" "}
            <a
              href="https://crevmick.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-stone-300 underline decoration-white/20 underline-offset-4 transition-colors hover:text-[#F7E078]"
            >
              Crevmick
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};
