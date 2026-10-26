import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Compass, Handshake, Sparkles } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { profileData } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: "About Rebecca Adewumi | Social Media Strategist",
  description:
    "Meet Rebecca Adewumi, a social media manager, content strategist and creator helping brands build intentional online presence and meaningful audience connections.",
};

const strengths = [
  {
    icon: Compass,
    number: "01",
    title: "Clarity before content",
    text: "We get clear on who you want to reach, what they need to hear, and why your brand should matter to them.",
    color: "bg-[#D3C5E9]",
  },
  {
    icon: Sparkles,
    number: "02",
    title: "Strategy with personality",
    text: "Every idea, caption, and visual is shaped to feel true to your brand—not like another copy-and-paste content plan.",
    color: "bg-[#F7E078]",
  },
  {
    icon: Handshake,
    number: "03",
    title: "Connection that moves",
    text: "The goal is more than consistent posting. It is content that earns attention, starts conversations, and supports your business goals.",
    color: "bg-[#A7C7A8]",
  },
];

export default function AboutPage() {
  const whatsappUrl = "https://wa.me/234" + profileData.phone.replace(/^0/, "");

  return (
    <div className="min-h-screen bg-[#F8F5EE] text-[#201D1A]">
      <Navbar />

      <main>
        <section className="overflow-hidden px-4 pb-16 pt-10 sm:px-6 sm:pb-24 sm:pt-16">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#201D1A] bg-[#F7E078] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] shadow-[2px_2px_0_#201D1A]">
                <span className="size-1.5 rounded-full bg-[#492A86]" />
                The person behind the strategy
              </div>

              <h1 className="mt-7 font-serif text-[2.8rem] font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                I turn scattered ideas into a brand people{" "}
                <span className="text-[#492A86]">notice, trust, and remember.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-relaxed text-stone-700 sm:text-lg">
                I&apos;m <strong className="text-[#201D1A]">Rebecca Adewumi</strong>—a social media manager, content strategist, and creator passionate about helping brands build a stronger online presence and connect with the right audience.
              </p>

              <div className="mt-8 flex flex-col gap-3 min-[430px]:flex-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#201D1A] bg-[#492A86] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-[3px_3px_0_#201D1A] transition-all hover:translate-x-px hover:translate-y-px hover:shadow-[1px_1px_0_#201D1A]"
                >
                  Let&apos;s build your presence
                  <ArrowUpRight size={16} />
                </a>
                <a
                  href="/work"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#201D1A] bg-white px-7 py-3.5 text-xs font-bold uppercase tracking-wider shadow-[2px_2px_0_#201D1A] transition-colors hover:bg-[#F7E078]"
                >
                  See my work
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[440px] lg:col-span-5">
              <div className="absolute -left-3 top-10 z-20 -rotate-3 rounded-2xl border border-[#201D1A] bg-white px-4 py-3 shadow-[3px_3px_0_#201D1A] sm:-left-8">
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-stone-500">What I bring</p>
                <p className="mt-0.5 font-serif text-lg font-bold">Clarity + creativity</p>
              </div>
              <div className="overflow-hidden rounded-[36px] border-[1.5px] border-[#201D1A] bg-[#DCE9F8] p-2.5 shadow-[7px_7px_0_#201D1A]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-stone-200">
                  <Image
                    src="/rebecca-hero.jpg"
                    alt="Rebecca Adewumi, social media strategist and content creator"
                    fill
                    priority
                    sizes="(min-width: 1024px) 410px, calc(100vw - 64px)"
                    className="object-cover object-[center_40%]"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#201D1A]/75 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <p className="font-serif text-2xl font-bold">Rebecca Adewumi</p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white/80">Strategy with intention</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-5 right-1 rotate-2 rounded-full border border-[#201D1A] bg-[#A7C7A8] px-4 py-2 text-[10px] font-bold uppercase tracking-wider shadow-[2px_2px_0_#201D1A] sm:-right-5">
                Your goals, made visible
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#201D1A] bg-[#282522] px-4 py-14 text-[#F8F5EE] sm:px-6 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F7E078]">My approach</p>
              <h2 className="mt-3 font-serif text-3xl font-bold leading-tight sm:text-4xl">Posting is not the strategy. Purpose is.</h2>
            </div>
            <div className="space-y-5 text-sm leading-relaxed text-stone-300 sm:text-base lg:col-span-8 lg:border-l lg:border-white/15 lg:pl-10">
              <p>
                I believe social media should be more than simply posting consistently. A brand needs to understand who it wants to reach, what it wants to communicate, and how to turn its online presence into meaningful connections and business opportunities.
              </p>
              <p className="font-serif text-xl font-bold leading-snug text-white sm:text-2xl">
                That&apos;s where I come in: bringing structure to your ideas, intention to your content, and momentum to your online presence.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#492A86]">How I work</p>
              <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight sm:text-5xl">Thoughtful from the first idea to the final post.</h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {strengths.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.number} className={item.color + " flex min-h-[290px] flex-col rounded-[28px] border-[1.5px] border-[#201D1A] p-6 shadow-[3px_3px_0_#201D1A] sm:p-8"}>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold">{item.number}</span>
                      <span className="flex size-11 items-center justify-center rounded-full border border-[#201D1A] bg-white/70">
                        <Icon size={20} />
                      </span>
                    </div>
                    <div className="mt-auto pt-12">
                      <h3 className="font-serif text-2xl font-bold">{item.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-stone-800">{item.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 sm:pb-24">
          <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[32px] border-[1.5px] border-[#201D1A] bg-[#492A86] text-white shadow-[5px_5px_0_#201D1A] lg:grid-cols-12">
            <div className="p-7 sm:p-10 lg:col-span-8 lg:p-12">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F7E078]">Ready when you are</p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl font-bold leading-tight sm:text-5xl">Your brand already has something worth saying. Let&apos;s make sure the right people hear it.</h2>
            </div>
            <div className="flex items-center border-t border-white/15 bg-white/5 p-7 sm:p-10 lg:col-span-4 lg:border-l lg:border-t-0">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex w-full items-center justify-between rounded-2xl border border-white/30 bg-white px-5 py-4 text-sm font-bold text-[#201D1A] transition-transform hover:-translate-y-1"
              >
                Start a conversation
                <ArrowUpRight className="transition-transform group-hover:translate-x-1" size={19} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
