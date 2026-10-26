import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  CalendarDays,
  Check,
  MessageCircle,
  Palette,
  PenTool,
  Search,
  Users,
} from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { profileData, servicesData } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: "Social Media Services | Rebecca Adewumi",
  description:
    "Strategic social media management, content planning, creation, page optimization and community support for schools and growing brands.",
};

const icons = [CalendarDays, Search, PenTool, BarChart3, Palette, Users, BarChart3];
const colors = ["bg-[#492A86] text-white", "bg-[#F7E078]", "bg-[#D3C5E9]", "bg-[#A7C7A8]", "bg-white", "bg-[#492A86] text-white", "bg-[#F7E078]"];

const process = [
  ["Discover", "We clarify your audience, offer, goals, and the gaps holding your online presence back."],
  ["Plan", "I shape focused content pillars, messaging, formats, and a realistic publishing rhythm."],
  ["Create & manage", "Content is produced, scheduled, published, and supported with intentional engagement."],
  ["Learn & refine", "Performance is reviewed so the next round of content is sharper and more useful."],
];

const waysToWork = [
  {
    label: "Focused start",
    title: "Content & Page Audit",
    text: "For brands that need clarity before committing to ongoing management.",
    includes: ["Profile and positioning review", "Bio and page recommendations", "Tailored content directions"],
    color: "bg-white",
  },
  {
    label: "Strategic direction",
    title: "Monthly Content Plan",
    text: "For teams that can publish but need stronger ideas, structure, and messaging.",
    includes: ["Monthly themes and content pillars", "Post hooks and caption direction", "Story and visual guidance"],
    color: "bg-[#F7E078]",
  },
  {
    label: "Ongoing partnership",
    title: "Full Social Management",
    text: "For busy brands ready to hand over planning, publishing, and audience care.",
    includes: ["Strategy and content scheduling", "Creation and community support", "Performance review and refinement"],
    color: "bg-[#A7C7A8]",
  },
];

export default function ServicesPage() {
  const whatsappUrl = "https://wa.me/234" + profileData.phone.replace(/^0/, "");

  return (
    <div className="min-h-screen bg-[#F8F5EE] text-[#201D1A]">
      <Navbar />
      <main>
        <section className="px-4 pb-16 pt-10 sm:px-6 sm:pb-24 sm:pt-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <span className="inline-flex rounded-full border border-[#201D1A] bg-[#D3C5E9] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] shadow-[2px_2px_0_#201D1A]">
                  Strategic social media support
                </span>
                <h1 className="mt-7 max-w-4xl font-serif text-[2.8rem] font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                  Your brand deserves more than{" "}
                  <span className="text-[#492A86]">just another post.</span>
                </h1>
              </div>
              <div className="lg:col-span-4">
                <p className="text-sm leading-relaxed text-stone-700 sm:text-base">
                  I help schools, business owners, and growing brands turn scattered ideas into clear content, consistent execution, and an online presence built to connect.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full border border-[#201D1A] bg-[#492A86] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-[3px_3px_0_#201D1A] transition-transform hover:-translate-y-0.5"
                >
                  Discuss your project <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#201D1A]/10 bg-white px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#492A86]">Core capabilities</p>
              <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight sm:text-5xl">Support that connects strategy to execution.</h2>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-stone-600 sm:text-base">
                Choose the support you need now, or combine services into a complete system built around your goals.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {servicesData.map((service, index) => {
                const Icon = icons[index] ?? MessageCircle;
                return (
                  <Link href={`/services/${service.id}`} aria-label={`Learn more about ${service.title}`} key={service.id} className={colors[index] + " group flex min-h-[300px] flex-col rounded-[28px] border-[1.5px] border-[#201D1A] p-7 shadow-[3px_3px_0_#201D1A] transition-transform hover:-translate-y-1"}>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold">0{service.number}</span>
                      <span className="flex size-11 items-center justify-center rounded-full border border-[#201D1A] bg-white/80 text-[#201D1A]">
                        <Icon size={20} />
                      </span>
                    </div>
                    <div className="mt-auto pt-10">
                      <span className={"text-[9px] font-bold uppercase tracking-[0.16em] " + (index === 0 || index === 5 ? "text-white/70" : "text-stone-600")}>{service.tag}</span>
                      <h3 className="mt-2 font-serif text-2xl font-bold">{service.title}</h3>
                      <p className={"mt-3 text-sm leading-relaxed " + (index === 0 || index === 5 ? "text-white/80" : "text-stone-700")}>{service.description}</p>
                      <span className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider">View service <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#282522] px-4 py-16 text-[#F8F5EE] sm:px-6 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F7E078]">The process</p>
                <h2 className="mt-3 font-serif text-3xl font-bold leading-tight sm:text-5xl">A clear path from idea to impact.</h2>
                <p className="mt-5 text-sm leading-relaxed text-stone-400">
                  No random posting and no guessing what comes next. Every stage has a purpose.
                </p>
              </div>
              <div className="lg:col-span-8">
                {process.map(([title, text], index) => (
                  <div key={title} className="grid gap-3 border-t border-white/15 py-6 sm:grid-cols-[70px_170px_1fr] sm:items-start">
                    <span className="font-mono text-xs text-[#F7E078]">0{index + 1}</span>
                    <h3 className="font-serif text-xl font-bold text-white">{title}</h3>
                    <p className="text-sm leading-relaxed text-stone-400">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#492A86]">Ways to work together</p>
              <h2 className="mt-3 font-serif text-3xl font-bold sm:text-5xl">Start where your brand is now.</h2>
            </div>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {waysToWork.map((offer) => (
                <article key={offer.title} className={offer.color + " flex flex-col rounded-[28px] border-[1.5px] border-[#201D1A] p-7 shadow-[3px_3px_0_#201D1A] sm:p-8"}>
                  <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-stone-600">{offer.label}</span>
                  <h3 className="mt-3 font-serif text-2xl font-bold">{offer.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-700">{offer.text}</p>
                  <ul className="mt-7 space-y-3 border-t border-[#201D1A]/15 pt-6">
                    {offer.includes.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm text-stone-800">
                        <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-[#492A86] text-white"><Check size={10} /></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                    Ask about this service <ArrowUpRight size={15} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 sm:pb-24">
          <div className="mx-auto flex max-w-6xl flex-col gap-7 rounded-[32px] border-[1.5px] border-[#201D1A] bg-[#492A86] p-7 text-white shadow-[5px_5px_0_#201D1A] sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-12">
            <div className="max-w-3xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F7E078]">Not sure what you need?</p>
              <h2 className="mt-3 font-serif text-3xl font-bold leading-tight sm:text-4xl">Tell me where your brand feels stuck. I&apos;ll help you identify the right next step.</h2>
            </div>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full border border-white bg-white px-7 py-3 text-xs font-bold uppercase tracking-wider text-[#201D1A]">
              Start a conversation <ArrowUpRight size={16} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
