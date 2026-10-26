import type { Metadata } from "next";
import { ArrowUpRight, AtSign, BriefcaseBusiness, Mail, MessageCircle, Phone } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { profileData } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: "Contact Rebecca Adewumi | Social Media Manager",
  description: "Contact Rebecca Adewumi about social media management, content strategy, content creation, and page optimization.",
};

const linkedinUrl = "https://www.linkedin.com/in/rebecca-adewumi-74b481285/";
const instagramUrl = "https://www.instagram.com/ariksbeccah/";

export default function ContactPage() {
  const whatsappUrl = "https://wa.me/234" + profileData.phone.replace(/^0/, "");

  const contactOptions = [
    {
      label: "Email",
      value: profileData.email,
      detail: "Best for project briefs and detailed enquiries.",
      href: `mailto:${profileData.email}`,
      icon: Mail,
      color: "bg-[#F7E078]",
    },
    {
      label: "WhatsApp",
      value: profileData.phone,
      detail: "Start a quick conversation about your brand.",
      href: whatsappUrl,
      icon: MessageCircle,
      color: "bg-[#A7C7A8]",
    },
    {
      label: "LinkedIn",
      value: "Rebecca Adewumi",
      detail: "Connect and explore my professional experience.",
      href: linkedinUrl,
      icon: BriefcaseBusiness,
      color: "bg-[#D3C5E9]",
    },
    {
      label: "Instagram",
      value: "@ariksbeccah",
      detail: "See more content ideas and creative work.",
      href: instagramUrl,
      icon: AtSign,
      color: "bg-white",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F5EE] text-[#201D1A]">
      <Navbar />
      <main>
        <section className="px-4 pb-16 pt-10 sm:px-6 sm:pb-24 sm:pt-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <span className="inline-flex rounded-full border border-[#201D1A] bg-[#D3C5E9] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] shadow-[2px_2px_0_#201D1A]">
                  Let&apos;s work together
                </span>
                <h1 className="mt-7 max-w-4xl font-serif text-[2.8rem] font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                  Ready to make your brand <span className="text-[#492A86]">impossible to overlook?</span>
                </h1>
              </div>
              <div className="lg:col-span-4">
                <p className="text-base leading-relaxed text-stone-700">
                  Tell me about your brand, what feels stuck, and what you want social media to achieve. I&apos;ll help you identify the most useful next step.
                </p>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full border border-[#201D1A] bg-[#492A86] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-[3px_3px_0_#201D1A] transition-transform hover:-translate-y-0.5">
                  Message me on WhatsApp <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#201D1A]/10 bg-white px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#492A86]">Choose what works for you</p>
              <h2 className="mt-3 font-serif text-3xl font-bold sm:text-5xl">Four easy ways to reach me.</h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {contactOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <a key={option.label} href={option.href} target={option.href.startsWith("http") ? "_blank" : undefined} rel={option.href.startsWith("http") ? "noreferrer" : undefined} className={`${option.color} group flex min-h-[230px] flex-col rounded-[28px] border-[1.5px] border-[#201D1A] p-7 shadow-[3px_3px_0_#201D1A] transition-transform hover:-translate-y-1 sm:p-8`}>
                    <div className="flex items-center justify-between">
                      <span className="flex size-12 items-center justify-center rounded-full border border-[#201D1A] bg-white/80"><Icon size={21} /></span>
                      <ArrowUpRight size={20} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </div>
                    <div className="mt-auto pt-8">
                      <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-stone-600">{option.label}</p>
                      <h3 className="mt-2 break-words font-serif text-2xl font-bold">{option.value}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-stone-700">{option.detail}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[32px] border-[1.5px] border-[#201D1A] bg-[#282522] text-white shadow-[5px_5px_0_#201D1A] lg:grid-cols-2">
            <div className="p-7 sm:p-10 lg:p-12">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F7E078]">Helpful details to share</p>
              <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">A great enquiry starts with a little context.</h2>
            </div>
            <div className="border-t border-white/10 bg-white/[0.05] p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <ul className="space-y-4 text-sm leading-relaxed text-stone-300">
                <li className="border-b border-white/10 pb-4">Your brand name, industry, and main social platform</li>
                <li className="border-b border-white/10 pb-4">The service you&apos;re interested in</li>
                <li className="border-b border-white/10 pb-4">Your current challenge and desired outcome</li>
                <li>Your preferred timeline for getting started</li>
              </ul>
              <a href={`tel:${profileData.phone}`} className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F7E078]">
                <Phone size={15} /> Call {profileData.phone}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
