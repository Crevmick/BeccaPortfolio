import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check, MapPin, Target, TrendingUp } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ProfileTransformation } from "@/components/ProfileTransformation";
import { experiencesData, profileData } from "@/data/portfolioData";

interface Props {
  params: Promise<{ slug: string }>;
}

const projectImages: Record<string, { src: string; alt: string }[]> = {
  "havilah-schools": [
    {
      src: "/work/havilah-summer-lesson.png",
      alt: "Havilah Schools summer lesson campaign artwork",
    },
  ],
  "forthright-kitchen": [
    {
      src: "/work/forthright-monday.png",
      alt: "Forthright Naija Kitchen Monday preorder campaign artwork",
    },
  ],
  "relfond-nigeria": [
    {
      src: "/work/relfond-myth-fact.png",
      alt: "RelFond Nigeria election myth and fact awareness artwork",
    },
    {
      src: "/work/relfond-vote-awareness.png",
      alt: "RelFond Nigeria vote buying awareness artwork",
    },
    {
      src: "/work/relfond-new-month.png",
      alt: "RelFond Nigeria new month community artwork",
    },
  ],
};

const projectEvidence: Record<string, { src: string; alt: string; caption: string; wide?: boolean }[]> = {
  "havilah-schools": [
    {
      src: "/work/havilah-tiktok-219.jpg",
      alt: "Havilah Schools TikTok profile showing 219 followers and 1,773 likes",
      caption: "Earlier TikTok snapshot — 219 followers and 1,773 likes",
      wide: true,
    },
    {
      src: "/work/havilah-tiktok-905.jpg",
      alt: "Havilah Schools TikTok profile showing 905 followers and 8,423 likes",
      caption: "Later TikTok snapshot — 905 followers and 8,423 likes",
      wide: true,
    },
    {
      src: "/work/havilah-insights-6566.jpg",
      alt: "Havilah Schools 30-day insights showing 6,566 views and 71 net followers",
      caption: "30-day performance — 6,566 views, 71 net followers, and 1,013 interactions",
    },
    {
      src: "/work/havilah-insights-6408.jpg",
      alt: "Havilah Schools 30-day insights showing 6,408 views and 83 net followers",
      caption: "30-day performance — 6,408 views, 83 net followers, and 1,046 interactions",
    },
    {
      src: "/work/havilah-reach-2292.jpg",
      alt: "Havilah Schools insights showing 2,292 views and 568 accounts reached",
      caption: "Discovery snapshot — 2,292 views with 53.7% from non-followers",
    },
  ],
};

const profileTransformations: Record<string, { before: string; after: string; brand: string; title: string; description: string; beforeCaption: string; afterCaption: string }> = {
  "havilah-schools": {
    before: "/work/havilah-instagram-before.jpg",
    after: "/work/havilah-instagram-after.jpg",
    brand: "Havilah Schools",
    title: "From an empty profile to an active brand presence.",
    description: "The account grew from zero posts and zero followers to a structured profile with 103 posts, 109 followers, clear positioning, organised highlights, and visible content engagement.",
    beforeCaption: "0 posts · 0 followers · no established content presence",
    afterCaption: "103 posts · 109 followers · a complete, active profile",
  },
  "forthright-kitchen": {
    before: "/work/forthright-instagram-before.jpg",
    after: "/work/forthright-instagram-after.jpg",
    brand: "Forthright Naija Kitchen & Pastries",
    title: "A clearer profile built around the full customer offer.",
    description: "The optimized profile communicates the Germany location, broader meal and catering offer, ordering path, and key product categories through organised highlights and a more intentional feed.",
    beforeCaption: "Earlier profile · 64 posts and 67 followers · narrower product-led presentation",
    afterCaption: "Optimized profile · 68 posts and 69 followers · clearer positioning, service range, highlights, and ordering path",
  },
};

export async function generateStaticParams() {
  return experiencesData.map((experience) => ({ slug: experience.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const experience = experiencesData.find((item) => item.id === slug);

  if (!experience) return {};

  return {
    title: experience.company + " Case Study | Rebecca Adewumi",
    description: experience.overview,
  };
}

export default async function ExperienceDetailPage({ params }: Props) {
  const { slug } = await params;
  const experience = experiencesData.find((item) => item.id === slug);

  if (!experience) notFound();

  const whatsappUrl = "https://wa.me/234" + profileData.phone.replace(/^0/, "");
  const currentIndex = experiencesData.findIndex((item) => item.id === slug);
  const nextExperience = experiencesData[(currentIndex + 1) % experiencesData.length];
  const creative = projectImages[experience.id] ?? [];
  const evidence = projectEvidence[experience.id] ?? [];
  const profileTransformation = profileTransformations[experience.id];

  return (
    <div className="min-h-screen bg-[#F8F5EE] text-[#201D1A]">
      <Navbar />
      <main>
        <section className="px-4 pb-14 pt-8 sm:px-6 sm:pb-20 sm:pt-12">
          <div className="mx-auto max-w-6xl">
            <Link href="/work" className="inline-flex items-center gap-2 text-xs font-bold text-stone-600 transition-colors hover:text-[#492A86]">
              <ArrowLeft size={15} /> All case studies
            </Link>
            <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <span className="inline-flex rounded-full border border-[#201D1A] bg-[#F7E078] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] shadow-[2px_2px_0_#201D1A]">
                  {experience.tag} case study
                </span>
                <h1 className="mt-6 font-serif text-[2.75rem] font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                  {experience.company}
                </h1>
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-stone-700 sm:text-lg">{experience.overview}</p>
              </div>
              <aside className="rounded-[24px] border-[1.5px] border-[#201D1A] bg-white p-6 shadow-[3px_3px_0_#201D1A] lg:col-span-4">
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-stone-500">Project role</p>
                <p className="mt-2 font-serif text-xl font-bold leading-snug">{experience.role}</p>
                {experience.location && (
                  <p className="mt-4 flex items-center gap-2 border-t border-[#201D1A]/10 pt-4 text-xs font-semibold text-stone-600">
                    <MapPin size={14} className="text-[#492A86]" /> {experience.location}
                  </p>
                )}
              </aside>
            </div>
          </div>
        </section>

        {experience.results && (
          <section className="border-y border-[#201D1A] bg-[#282522] px-4 py-14 text-white sm:px-6 sm:py-20">
            <div className="mx-auto max-w-6xl">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F7E078]">Evidence of progress</p>
                  <h2 className="mt-2 font-serif text-3xl font-bold sm:text-4xl">The results at a glance.</h2>
                </div>
                <TrendingUp className="hidden text-[#A7C7A8] sm:block" size={34} />
              </div>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {experience.results.map((result) => (
                  <article key={result.platform} className="rounded-[24px] border border-white/15 bg-white/[0.06] p-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#A7C7A8]">{result.platform}</p>
                    <p className="mt-3 font-serif text-2xl font-bold text-white sm:text-3xl">{result.growth}</p>
                    <p className="mt-3 text-sm leading-relaxed text-stone-400">{result.highlight}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {profileTransformation && <ProfileTransformation {...profileTransformation} />}

        {evidence.length > 0 && (
          <section className="px-4 py-16 sm:px-6 sm:py-24">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
                <div className="lg:col-span-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#492A86]">Growth evidence</p>
                  <h2 className="mt-2 font-serif text-3xl font-bold sm:text-5xl">The numbers behind the progress.</h2>
                </div>
                <p className="text-sm leading-relaxed text-stone-600 lg:col-span-5">
                  Profile and insight snapshots documenting audience growth, content views, interactions, and discovery beyond the existing follower base.
                </p>
              </div>

              <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
                {evidence.map((asset) => (
                  <figure
                    key={asset.src}
                    className={"overflow-hidden rounded-[26px] border-[1.5px] border-[#201D1A] bg-white p-2 shadow-[3px_3px_0_#201D1A] " + (asset.wide ? "lg:col-span-3" : "lg:col-span-2")}
                  >
                    <div className={"relative overflow-hidden rounded-[19px] bg-[#0b0f14] " + (asset.wide ? "aspect-[2.7/1]" : "aspect-[9/16]")}>
                      <Image
                        src={asset.src}
                        alt={asset.alt}
                        fill
                        sizes={asset.wide ? "(min-width: 1024px) 540px, 90vw" : "(min-width: 1024px) 340px, 90vw"}
                        className="object-contain"
                      />
                    </div>
                    <figcaption className="px-3 pb-2 pt-4 text-xs font-semibold leading-relaxed text-stone-600">
                      {asset.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-12">
            <div className="rounded-[28px] border-[1.5px] border-[#201D1A] bg-[#D3C5E9] p-7 shadow-[3px_3px_0_#201D1A] sm:p-9 lg:col-span-4">
              <Target size={26} />
              <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.18em] text-stone-600">Strategic objective</p>
              <h2 className="mt-2 font-serif text-3xl font-bold">Build a clearer, more intentional digital presence.</h2>
              <p className="mt-4 text-sm leading-relaxed text-stone-700">
                The work connected day-to-day content decisions with the organisation&apos;s audience, offer, and wider goals.
              </p>
            </div>
            <div className="rounded-[28px] border-[1.5px] border-[#201D1A] bg-white p-7 shadow-[3px_3px_0_#201D1A] sm:p-9 lg:col-span-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#492A86]">Execution</p>
              <h2 className="mt-2 font-serif text-3xl font-bold sm:text-4xl">What the work involved.</h2>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {experience.responsibilities.map((responsibility, index) => (
                  <div key={responsibility} className="flex gap-3 rounded-2xl border border-[#201D1A]/10 bg-[#F8F5EE] p-4">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#492A86] text-white"><Check size={13} /></span>
                    <div>
                      <span className="font-mono text-[9px] font-bold text-stone-400">0{index + 1}</span>
                      <p className="mt-1 text-sm leading-relaxed text-stone-700">{responsibility}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {creative.length > 0 && (
          <section className="border-y border-[#201D1A]/10 bg-white px-4 py-16 sm:px-6 sm:py-24">
            <div className="mx-auto max-w-6xl">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#492A86]">Selected creative</p>
                  <h2 className="mt-2 font-serif text-3xl font-bold sm:text-5xl">The work in context.</h2>
                </div>
                <p className="max-w-md text-sm leading-relaxed text-stone-600">
                  A selection of campaign and communication assets created for this project.
                </p>
              </div>
              <div className={"mt-10 grid gap-5 " + (creative.length > 1 ? "md:grid-cols-2 lg:grid-cols-3" : "max-w-xl")}>
                {creative.map((asset) => (
                  <figure key={asset.src} className="overflow-hidden rounded-[28px] border-[1.5px] border-[#201D1A] bg-[#F8F5EE] p-2 shadow-[3px_3px_0_#201D1A]">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[21px] bg-white">
                      <Image
                        src={asset.src}
                        alt={asset.alt}
                        fill
                        sizes="(min-width: 1024px) 360px, (min-width: 768px) 45vw, calc(100vw - 48px)"
                        className="object-contain"
                      />
                    </div>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="px-4 pb-16 sm:px-6 sm:pb-24">
          <div className="mx-auto max-w-6xl rounded-[30px] border-[1.5px] border-[#201D1A] bg-[#F7E078] p-7 shadow-[4px_4px_0_#201D1A] sm:p-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-600">Value delivered</p>
            <p className="mt-4 max-w-5xl font-serif text-2xl font-bold leading-snug sm:text-4xl">{experience.valueDelivered}</p>
          </div>
        </section>

        <section className="border-t border-[#201D1A]/10 bg-white px-4 py-16 sm:px-6">
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
            <div className="rounded-[28px] bg-[#492A86] p-7 text-white sm:p-9">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F7E078]">Your brand could be next</p>
              <h2 className="mt-3 font-serif text-3xl font-bold">Ready for a more intentional online presence?</h2>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#201D1A]">
                Discuss your project <ArrowUpRight size={15} />
              </a>
            </div>
            <Link href={"/experience/" + nextExperience.id} className="group rounded-[28px] border-[1.5px] border-[#201D1A] bg-[#F8F5EE] p-7 shadow-[3px_3px_0_#201D1A] sm:p-9">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500">Next case study</p>
              <div className="mt-3 flex items-end justify-between gap-4">
                <div>
                  <h2 className="font-serif text-3xl font-bold">{nextExperience.company}</h2>
                  <p className="mt-2 text-sm text-stone-600">{nextExperience.tag}</p>
                </div>
                <ArrowUpRight className="shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
