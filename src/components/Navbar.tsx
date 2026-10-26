"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Service" },
  { href: "/work", label: "My Work" },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-[#201D1A]/10 bg-[#F8F5EE]/92 backdrop-blur-xl">
      <div className="relative z-30 mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-6">
        {/* Logo / Monogram */}
        <a href="/" className="group flex min-w-0 items-center gap-2.5" onClick={() => setMenuOpen(false)}>
          <span className="relative size-10 shrink-0 overflow-hidden rounded-full border border-[#492A86]/30 bg-white shadow-[2px_2px_0_#201D1A] transition-transform group-hover:-rotate-3 sm:size-11">
            <Image
              src="/brand-logo.png"
              alt="Your Online Growth Padi logo"
              fill
              priority
              sizes="44px"
              className="object-cover"
            />
          </span>
          <span className="truncate font-serif text-base font-bold tracking-tight text-[#201D1A] sm:text-lg">
            rebecca adewumi
          </span>
        </a>

        {/* Navigation Links */}
        <nav className="hidden items-center gap-7 text-[11px] font-semibold uppercase tracking-widest text-stone-700 lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-[#492A86]">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Contact Pill Button */}
        <a
          href="/contact"
          className="hidden rounded-full border border-[#201D1A] bg-[#282522] px-6 py-2.5 text-xs font-semibold tracking-wider text-[#F8F5EE] transition-all hover:bg-[#492A86] lg:inline-flex"
        >
          Contact
        </a>

        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="ml-3 flex size-11 shrink-0 items-center justify-center rounded-full border border-[#201D1A] bg-white text-[#201D1A] shadow-[2px_2px_0_#201D1A] transition-transform active:translate-x-0.5 active:translate-y-0.5 active:shadow-none lg:hidden"
        >
          {menuOpen ? <X size={20} strokeWidth={2.2} /> : <Menu size={20} strokeWidth={2.2} />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`absolute inset-x-0 top-full z-20 border-b border-[#201D1A]/15 bg-[#F8F5EE] px-4 pb-5 pt-2 shadow-[0_18px_40px_rgba(32,29,26,0.14)] transition-all duration-200 lg:hidden ${
          menuOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <nav aria-label="Mobile navigation" className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl border border-[#201D1A]/10 bg-white px-4 py-3.5 text-sm font-bold text-[#201D1A] transition-colors hover:border-[#492A86]/30 hover:bg-[#D3C5E9]/35"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-2xl border border-[#201D1A] bg-[#492A86] px-4 py-3.5 text-center text-sm font-bold text-white shadow-[2px_2px_0_#201D1A]"
            >
              Let&apos;s talk
            </a>
          </div>
        </nav>
      </div>

      {menuOpen && (
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={() => setMenuOpen(false)}
          className="fixed inset-x-0 bottom-0 top-16 z-10 bg-[#201D1A]/20 backdrop-blur-[2px] sm:top-20 lg:hidden"
        />
      )}
    </header>
  );
};
