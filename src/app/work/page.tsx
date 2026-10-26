import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Building2,
  Check,
  ShoppingBag,
  Utensils,
} from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { experiencesData, profileData } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: "Selected Work & Case Studies | Rebecca Adewumi",
  description:
    "Explore Rebecca Adewumi's social media strategy, content creation, page optimization and communication work across education, food, beauty and nonprofit brands.",
};

const projectStyles = [
  { color: "bg-[#D3C5E9]", icon: BookOpen },
  { color: "bg-[#F7E078]", icon: Utensils },
  { color: "bg-[#F7B8A9]", icon: ShoppingBag },
  { color: "bg-[#A7C7A8]", icon: Building2 },
];

const capabilities = [
  "Audience-led content strategy",
  "Short-form content creation",
  "Profile and page optimization",
  "Community-focused storytelling",
  "Campaign planning and execution",
  "Clear visual communication",
];

export default function WorkPage() {
  const whatsappUrl = "https://wa.me/234" + profileData.phone.replace(/^0/, "");
  const featured = experiencesData[0];

  return (
    <div className="min-h-screen bg-[#F8F5EE] text-[#201D1A]">
      <Navbar />
      <main>
        <section className="px-4 pb-14 pt-10 sm:px-6 sm:pb-20 sm:pt-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <span className="inline-flex rounded-full border border-[#201D1A] bg-[#A7C7A8] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] shadow-[2px_2px_0_#201D1A]">
                  Selected work & experience
                </span>
                <h1 className="mt-7 max-w-4xl font-serif text-[2.8rem] font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                  Strategy made visible through{" "}
                  <span className="text-[#492A86]">work that connects.</span>
                </h1>
              </div>
              <div className="lg:col-span-4">
                <p className="text-sm leading-relaxed text-stone-700 sm:text-base">
                  A collection of social media, content, and communication projects shaped around real audiences—from prospective parents to food lovers, beauty customers, and nonprofit communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 sm:pb-24">
          <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[32px] border-[1.5px] border-[#201D1A] shadow-[5px_5px_0_#201D1A] lg:grid-cols-12">
            <div className="bg-[#492A86] p-7 text-white sm:p-10 lg:col-span-5 lg:p-12">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F7E078]">Featured case study</p>
              <h2 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl">{featured.company}</h2>
              <p className="mt-5 text-sm leading-relaxed text-white/75">{featured.overview}</p>
              <Link href={"/experience/" + featured.id} className="mt-8 inline-flex items-center gap-2 rounded-full border border-white bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#201D1A]">
                View full case study <ArrowUpRight size={15} />
              </Link>
            </div>
            <div className="bg-white p-7 sm:p-10 lg:col-span-7 lg:p-12">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500">Platform progress</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {featured.results?.map((result) => (
                  <div key={result.platform} className="grid gap-2 rounded-2xl border border-[#201D1A]/10 bg-[#F8F5EE] p-5 lg:grid-cols-[110px_1fr_1.2fr] lg:items-center">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#492A86]">{result.platform}</p>
                    <p className="font-serif text-xl font-bold">{result.growth}</p>
                    <p className="text-xs leading-relaxed text-stone-600">{result.highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#201D1A]/10 bg-white px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#492A86]">Project archive</p>
                <h2 className="mt-3 font-serif text-3xl font-bold sm:text-5xl">Work across distinct audiences.</h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-stone-600">
                Each engagement responds to a different audience and goal while staying grounded in clear messaging and intentional execution.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {experiencesData.map((project, index) => {
                const style = projectStyles[index];
                const Icon = style.icon;
                return (
                  <Link
                    key={project.id}
                    href={"/experience/" + project.id}
                    className={style.color + " group flex min-h-[360px] flex-col rounded-[30px] border-[1.5px] border-[#201D1A] p-7 shadow-[3px_3px_0_#201D1A] transition-all hover:-translate-y-1 hover:shadow-[5px_5px_0_#201D1A] sm:p-9"}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-mono text-[10px] font-bold">0{index + 1}</p>
                        <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-stone-600">{project.tag}</p>
                      </div>
                      <span className="flex size-12 items-center justify-center rounded-full border border-[#201D1A] bg-white/70">
                        <Icon size={21} />
                      </span>
                    </div>
                    <div className="mt-auto pt-12">
                      <h3 className="font-serif text-3xl font-bold leading-tight sm:text-4xl">{project.company}</h3>
                      <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-stone-700">{project.overview}</p>
                      <div className="mt-6 flex items-center justify-between border-t border-[#201D1A]/15 pt-5">
                        <span className="text-xs font-bold uppercase tracking-wider">Explore project</span>
                        <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#282522] px-4 py-16 text-white sm:px-6 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F7E078]">Across the portfolio</p>
              <h2 className="mt-3 font-serif text-3xl font-bold leading-tight sm:text-5xl">The thinking behind the deliverables.</h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-stone-400">
                Strong work is not only what gets published. It is the strategy, audience understanding, and consistent decision-making behind it.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
              {capabilities.map((capability, index) => (
                <div key={capability} className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.05] p-4">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#A7C7A8] text-[#201D1A]"><Check size={14} /></span>
                  <div>
                    <span className="font-mono text-[9px] text-stone-500">0{index + 1}</span>
                    <p className="text-sm font-semibold text-stone-200">{capability}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto flex max-w-6xl flex-col gap-7 rounded-[32px] border-[1.5px] border-[#201D1A] bg-[#F7E078] p-7 shadow-[5px_5px_0_#201D1A] sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-12">
            <div className="max-w-3xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-600">Have a project in mind?</p>
              <h2 className="mt-3 font-serif text-3xl font-bold leading-tight sm:text-5xl">Let&apos;s turn your goals into work worth showing.</h2>
            </div>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full border border-[#201D1A] bg-[#492A86] px-7 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-[2px_2px_0_#201D1A]">
              Start a conversation <ArrowUpRight size={16} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
