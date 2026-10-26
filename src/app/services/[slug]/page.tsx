import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { MyContentSection } from "@/components/MyContentSection";
import { ProfileTransformation } from "@/components/ProfileTransformation";
import { profileData } from "@/data/portfolioData";
import { getServiceDetail, serviceDetails } from "@/data/serviceDetails";

const designWork = [
  { src: "/work/forthright-monday.png", title: "Monday Preorder Campaign", client: "Forthright Naija Kitchen & Pastries" },
  { src: "/work/havilah-summer-lesson.png", title: "Summer Lesson Campaign", client: "Havilah Schools" },
  { src: "/work/relfond-myth-fact.png", title: "Election Myth and Fact", client: "RelFond Nigeria" },
  { src: "/work/relfond-vote-awareness.png", title: "Vote Awareness Campaign", client: "RelFond Nigeria" },
  { src: "/work/relfond-new-month.png", title: "New Month Community Message", client: "RelFond Nigeria" },
];

export function generateStaticParams() {
  return serviceDetails.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceDetail(slug);
  if (!service) return {};
  return { title: `${service.title} | Rebecca Adewumi`, description: service.summary };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceDetail(slug);
  if (!service) notFound();

  const whatsappUrl = "https://wa.me/234" + profileData.phone.replace(/^0/, "");
  const currentIndex = serviceDetails.findIndex((item) => item.slug === slug);
  const nextService = serviceDetails[(currentIndex + 1) % serviceDetails.length];

  return (
    <div className="min-h-screen bg-[#F8F5EE] text-[#201D1A]">
      <Navbar />
      <main>
        <section className="px-4 pb-16 pt-8 sm:px-6 sm:pb-24 sm:pt-12">
          <div className="mx-auto max-w-6xl">
            <Link href="/services" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-600 transition-colors hover:text-[#492A86]">
              <ArrowLeft size={15} /> All services
            </Link>
            <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-[#492A86]">{service.number}</span>
                  <span className="rounded-full border border-[#201D1A] bg-[#F7E078] px-3 py-1 text-[9px] font-bold uppercase tracking-[0.16em]">{service.tag}</span>
                </div>
                <h1 className="mt-6 max-w-4xl font-serif text-[2.8rem] font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">{service.title}</h1>
              </div>
              <div className="lg:col-span-4">
                <p className="text-base leading-relaxed text-stone-700">{service.summary}</p>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full border border-[#201D1A] bg-[#492A86] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-[3px_3px_0_#201D1A] transition-transform hover:-translate-y-0.5">
                  Ask about this service <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#201D1A]/10 bg-white px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-3">
            <InfoCard label="A good fit for" title="Built around your current needs" items={service.idealFor} color="bg-[#D3C5E9]" />
            <InfoCard label="What is included" title="Practical, focused support" items={service.includes} color="bg-[#F7E078]" />
            <InfoCard label="What it supports" title="A stronger online presence" items={service.outcomes} color="bg-[#A7C7A8]" />
          </div>
        </section>

        <section className="bg-[#282522] px-4 py-16 text-white sm:px-6 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F7E078]">How it works</p>
              <h2 className="mt-3 font-serif text-3xl font-bold sm:text-5xl">Clear steps. No guesswork.</h2>
              <p className="mt-5 text-sm leading-relaxed text-stone-400">The exact scope is tailored to your brand, goals, and the support you already have in place.</p>
            </div>
            <div className="lg:col-span-8">
              {service.process.map((step, index) => (
                <div key={step} className="grid gap-3 border-t border-white/15 py-6 sm:grid-cols-[70px_1fr] sm:items-center">
                  <span className="font-mono text-xs text-[#F7E078]">0{index + 1}</span>
                  <h3 className="font-serif text-xl font-bold">{step}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {slug === "creation" && <MyContentSection />}

        {slug === "page-optimization" && (
          <ProfileTransformation
            before="/work/forthright-instagram-before.jpg"
            after="/work/forthright-instagram-after.jpg"
            brand="Forthright Naija Kitchen & Pastries"
            title="A real profile optimization, shown side by side."
            description="This Forthright Naija Kitchen example shows how clearer positioning, service details, highlights, and content presentation can make a profile easier to understand and act on."
            beforeCaption="Before · product-focused bio with fewer service details and no organised story highlights"
            afterCaption="After · clearer location and offer, catering information, category highlights, and a stronger enquiry path"
          />
        )}

        {slug === "graphic-design" && (
          <section className="border-y border-[#201D1A]/10 bg-white px-4 py-16 sm:px-6 sm:py-24">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
                <div className="lg:col-span-8">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#492A86]">Selected design work</p>
                  <h2 className="mt-2 font-serif text-3xl font-bold sm:text-5xl">Designs created to inform, promote, and connect.</h2>
                </div>
                <p className="text-sm leading-relaxed text-stone-600 lg:col-span-4">
                  Social graphics and campaign materials created for education, food, and non-profit brands.
                </p>
              </div>

              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {designWork.map((design) => (
                  <figure key={design.src} className="group overflow-hidden rounded-[28px] border-[1.5px] border-[#201D1A] bg-[#F8F5EE] p-2 shadow-[3px_3px_0_#201D1A]">
                    <div className="relative aspect-square overflow-hidden rounded-[21px] bg-white">
                      <Image
                        src={design.src}
                        alt={`${design.title} design for ${design.client}`}
                        fill
                        sizes="(min-width: 1024px) 360px, (min-width: 640px) 46vw, calc(100vw - 48px)"
                        className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                    <figcaption className="px-4 pb-3 pt-4">
                      <p className="font-serif text-lg font-bold">{design.title}</p>
                      <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-stone-500">{design.client}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 rounded-[32px] border-[1.5px] border-[#201D1A] bg-[#492A86] p-7 text-white shadow-[5px_5px_0_#201D1A] sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-12">
            <div className="max-w-3xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F7E078]">Ready to make your content work harder?</p>
              <h2 className="mt-3 font-serif text-3xl font-bold leading-tight sm:text-4xl">Let&apos;s discuss the right scope for your brand.</h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75">Share your goals, current challenges, and the platform you need help with. I&apos;ll help you identify a practical next step.</p>
            </div>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full border border-white bg-white px-7 py-3 text-xs font-bold uppercase tracking-wider text-[#201D1A]">
              Start a conversation <MessageCircle size={16} />
            </a>
          </div>
          <div className="mx-auto mt-8 flex max-w-6xl justify-end">
            <Link href={`/services/${nextService.slug}`} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider">Next: {nextService.title} <ArrowUpRight size={15} /></Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function InfoCard({ label, title, items, color }: { label: string; title: string; items: string[]; color: string }) {
  return (
    <article className={`${color} rounded-[28px] border-[1.5px] border-[#201D1A] p-7 shadow-[3px_3px_0_#201D1A] sm:p-8`}>
      <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-stone-600">{label}</p>
      <h2 className="mt-3 font-serif text-2xl font-bold">{title}</h2>
      <ul className="mt-6 space-y-4 border-t border-[#201D1A]/15 pt-6">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-stone-800">
            <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#492A86] text-white"><Check size={11} /></span>
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
