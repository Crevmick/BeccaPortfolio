import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { experiencesData, profileData } from "@/data/portfolioData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faUtensils,
  faScissors,
  faHandHoldingHeart,
  faLocationDot,
  faCheck,
  faAward,
  faArrowLeft
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTiktok,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return experiencesData.map((exp) => ({
    slug: exp.id,
  }));
}

export default async function ExperienceDetailPage({ params }: Props) {
  const { slug } = await params;
  const experience = experiencesData.find((exp) => exp.id === slug);

  if (!experience) {
    notFound();
  }

  const getExperienceIcon = (id: string) => {
    switch (id) {
      case "havilah-schools":
        return faGraduationCap;
      case "forthright-kitchen":
        return faUtensils;
      case "ecstatic-beauty":
        return faScissors;
      case "relfond-nigeria":
        return faHandHoldingHeart;
      default:
        return faAward;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F5EE] text-[#201D1A] py-12 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Navigation Breadcrumb */}
        <div>
          <Link
            href="/#experience"
            className="inline-flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-wider text-stone-700 hover:text-[#BD5D44] transition-colors bg-white px-3.5 py-1.5 rounded-full border border-[#201D1A]/20 shadow-2xs"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="text-[10px]" />
            <span>Back to Case Studies</span>
          </Link>
        </div>

        {/* Header Hero Card */}
        <div className="rounded-[28px] bg-white border border-[#201D1A] p-8 sm:p-10 shadow-[3px_3px_0px_#201D1A] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#201D1A]/10">
            <div className="flex items-center gap-3.5">
              {/* Refined, tasteful icon container */}
              <div className="w-10 h-10 rounded-xl bg-[#F8F5EE] border border-[#201D1A]/20 text-[#201D1A] flex items-center justify-center text-sm shadow-2xs shrink-0">
                <FontAwesomeIcon icon={getExperienceIcon(experience.id)} />
              </div>
              <div>
                <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#BD5D44]">
                  {experience.tag}
                </span>
                <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#201D1A] leading-tight">
                  {experience.company}
                </h1>
              </div>
            </div>

            {experience.location && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F8F5EE] border border-[#201D1A]/20 text-[11px] font-mono font-semibold text-stone-700 self-start sm:self-auto">
                <FontAwesomeIcon icon={faLocationDot} className="text-red-500 text-[10px]" />
                <span>{experience.location}</span>
              </span>
            )}
          </div>

          <div className="space-y-2">
            <div className="text-[11px] font-mono font-bold uppercase tracking-wide text-[#BD5D44]">
              {experience.role}
            </div>
            <p className="text-sm text-stone-800 leading-relaxed font-sans">
              {experience.overview}
            </p>
          </div>
        </div>

        {/* Results section if available */}
        {experience.results && (
          <div className="rounded-[28px] bg-white border border-[#201D1A] p-8 sm:p-10 shadow-[3px_3px_0px_#201D1A] space-y-5">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#201D1A]">
                Page Management & Results
              </h2>
              <span className="text-[10px] font-mono font-semibold text-stone-500 uppercase tracking-wider">
                Audited Growth
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {experience.results.map((res, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-[#F8F5EE] border border-[#201D1A]/15 p-5 shadow-2xs space-y-2"
                >
                  <div className="flex items-center gap-2 font-bold text-xs text-[#201D1A]">
                    {res.platform === "Instagram" && (
                      <FontAwesomeIcon icon={faInstagram} className="text-pink-600 text-xs" />
                    )}
                    {res.platform === "TikTok" && (
                      <FontAwesomeIcon icon={faTiktok} className="text-black text-xs" />
                    )}
                    {res.platform === "Facebook" && (
                      <FontAwesomeIcon icon={faFacebook} className="text-blue-600 text-xs" />
                    )}
                    <span className="font-mono text-[11px] uppercase">{res.platform}</span>
                  </div>
                  <div className="font-serif text-lg font-bold text-[#201D1A]">
                    {res.growth}
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed font-sans">
                    {res.highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Responsibilities */}
        <div className="rounded-[28px] bg-white border border-[#201D1A] p-8 sm:p-10 shadow-[3px_3px_0px_#201D1A] space-y-5">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#201D1A]">
            Key Responsibilities & Execution
          </h2>

          <div className="grid grid-cols-1 gap-3">
            {experience.responsibilities.map((resp, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-800">
                {/* Delicate micro check bullet */}
                <span className="w-3.5 h-3.5 rounded-full bg-[#A7C7A8] text-[#201D1A] flex items-center justify-center shrink-0 mt-0.5 text-[8px] border border-[#201D1A]/30">
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                <span>{resp}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Value Delivered Banner */}
        <div className="rounded-[24px] bg-[#F7E078] border border-[#201D1A] p-7 shadow-[2px_2px_0px_#201D1A] space-y-1.5">
          <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-stone-800">
            STRATEGIC IMPACT
          </span>
          <h3 className="font-serif text-lg font-bold text-[#201D1A]">
            Value Delivered
          </h3>
          <p className="text-xs sm:text-sm text-stone-900 leading-relaxed font-sans">
            {experience.valueDelivered}
          </p>
        </div>

        {/* Bottom CTA to connect */}
        <div className="rounded-[24px] bg-[#282522] text-[#F8F5EE] border border-[#201D1A] p-7 shadow-[2px_2px_0px_#201D1A] flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-xl font-bold text-white">
              Interested in similar outcomes for your brand?
            </h4>
            <p className="text-xs text-stone-300 font-sans">
              Let&apos;s build an intentional roadmap tailored to your target audience.
            </p>
          </div>
          <a
            href={`https://wa.me/234${profileData.phone.replace(/^0/, "")}`}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-full bg-[#F7E078] text-[#201D1A] text-[11px] font-bold uppercase tracking-wider hover:bg-yellow-300 transition-all border border-[#201D1A] shadow-xs shrink-0"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
