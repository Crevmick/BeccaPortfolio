import React from "react";
import Link from "next/link";
import { experiencesData } from "@/data/portfolioData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faUtensils,
  faScissors,
  faHandHoldingHeart,
  faLocationDot,
  faArrowRight,
  faAward,
  faPalette
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTiktok,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";

export const ExperienceSection = () => {
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

  const getHighlights = (id: string) => {
    switch (id) {
      case "havilah-schools":
        return "Student enrolments recorded while under 100 followers";
      case "forthright-kitchen":
        return "Culinary storytelling connecting African dishes with German customers";
      case "ecstatic-beauty":
        return "Complete Instagram storefront & visual hierarchy revamp";
      case "relfond-nigeria":
        return "Branded visual communication and social profile optimization";
      default:
        return "Proven strategic social management";
    }
  };

  return (
    <section id="experience" className="py-20 px-6 bg-[#F8F5EE]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#201D1A]/10 pb-8">
          <div className="space-y-3">
            <div className="inline-block px-3.5 py-1 rounded-full bg-[#282522] text-[#F8F5EE] text-[9px] font-mono font-bold tracking-widest uppercase">
              WORK EXPERIENCE
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#201D1A] tracking-tight">
              Client case studies.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 max-w-md font-sans leading-relaxed">
            Click on any client case study below to explore the in-depth page management, strategy breakdown, and verified outcomes.
          </p>
        </div>

        {/* 4 Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiencesData.map((exp) => (
            <div
              key={exp.id}
              className="rounded-[24px] bg-white border border-[#201D1A] p-7 shadow-[2px_2px_0px_#201D1A] flex flex-col justify-between hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#201D1A] transition-all duration-300 group"
            >
              <div className="space-y-4">
                {/* Card Top: Refined Icon & Title */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Unique, refined micro-badge */}
                    <div className="w-8 h-8 rounded-xl bg-[#F8F5EE] border border-[#201D1A]/20 text-[#201D1A] flex items-center justify-center text-xs group-hover:bg-[#201D1A] group-hover:text-white transition-colors duration-200 shadow-2xs">
                      <FontAwesomeIcon icon={getExperienceIcon(exp.id)} />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#BD5D44]">
                        {exp.tag}
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#201D1A] leading-snug group-hover:text-[#BD5D44] transition-colors">
                        {exp.company}
                      </h3>
                    </div>
                  </div>

                  {exp.location && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F8F5EE] border border-[#201D1A]/20 text-[10px] font-mono font-semibold text-stone-700">
                      <FontAwesomeIcon icon={faLocationDot} className="text-red-500 text-[10px]" />
                      <span>{exp.location}</span>
                    </span>
                  )}
                </div>

                {/* Role */}
                <div className="text-[11px] font-mono font-medium tracking-wide uppercase text-stone-500">
                  {exp.role}
                </div>

                {/* Brief Overview */}
                <p className="text-xs sm:text-[13px] text-stone-700 leading-relaxed font-sans">
                  {exp.overview}
                </p>

                {/* Key Highlight Tag */}
                <div className="p-3 rounded-xl bg-[#F8F5EE] border border-[#201D1A]/10 text-xs font-medium text-stone-800 flex items-center gap-2">
                  <span className="text-[#BD5D44] text-[10px]">✦</span>
                  <span>{getHighlights(exp.id)}</span>
                </div>

                {/* Platform Icons */}
                <div className="flex items-center gap-2 pt-1 text-xs text-stone-600">
                  <span className="text-[9px] font-mono font-semibold uppercase tracking-wider text-stone-400">
                    Platforms:
                  </span>
                  {exp.id === "havilah-schools" && (
                    <div className="flex items-center gap-1.5 text-stone-800">
                      <span className="inline-flex items-center gap-1 text-[10px] font-medium bg-stone-50 px-2 py-0.5 rounded-md border border-stone-200">
                        <FontAwesomeIcon icon={faInstagram} className="text-pink-600 text-[10px]" />
                        <span>Instagram</span>
                      </span>
                      <span className="inline-flex items-center gap-1 text-[10px] font-medium bg-stone-50 px-2 py-0.5 rounded-md border border-stone-200">
                        <FontAwesomeIcon icon={faTiktok} className="text-black text-[10px]" />
                        <span>TikTok</span>
                      </span>
                      <span className="inline-flex items-center gap-1 text-[10px] font-medium bg-stone-50 px-2 py-0.5 rounded-md border border-stone-200">
                        <FontAwesomeIcon icon={faFacebook} className="text-blue-600 text-[10px]" />
                        <span>Facebook</span>
                      </span>
                    </div>
                  )}

                  {exp.id === "forthright-kitchen" && (
                    <div className="flex items-center gap-1.5 text-stone-800">
                      <span className="inline-flex items-center gap-1 text-[10px] font-medium bg-stone-50 px-2 py-0.5 rounded-md border border-stone-200">
                        <FontAwesomeIcon icon={faInstagram} className="text-pink-600 text-[10px]" />
                        <span>Instagram</span>
                      </span>
                      <span className="inline-flex items-center gap-1 text-[10px] font-medium bg-stone-50 px-2 py-0.5 rounded-md border border-stone-200">
                        <FontAwesomeIcon icon={faFacebook} className="text-blue-600 text-[10px]" />
                        <span>Facebook</span>
                      </span>
                    </div>
                  )}

                  {exp.id === "ecstatic-beauty" && (
                    <div className="flex items-center gap-1.5 text-stone-800">
                      <span className="inline-flex items-center gap-1 text-[10px] font-medium bg-stone-50 px-2 py-0.5 rounded-md border border-stone-200">
                        <FontAwesomeIcon icon={faInstagram} className="text-pink-600 text-[10px]" />
                        <span>Storefront</span>
                      </span>
                    </div>
                  )}

                  {exp.id === "relfond-nigeria" && (
                    <div className="flex items-center gap-1.5 text-stone-800">
                      <span className="inline-flex items-center gap-1 text-[10px] font-medium bg-stone-50 px-2 py-0.5 rounded-md border border-stone-200">
                        <FontAwesomeIcon icon={faPalette} className="text-indigo-600 text-[10px]" />
                        <span>Branding</span>
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Direct Link to Dedicated Page */}
              <div className="pt-5 mt-5 border-t border-[#201D1A]/10">
                <Link
                  href={`/experience/${exp.id}`}
                  className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-full bg-[#282522] text-[#F8F5EE] text-[11px] font-bold uppercase tracking-wider group-hover:bg-[#BD5D44] transition-colors border border-[#201D1A] shadow-xs"
                >
                  <span>View Case Study</span>
                  <FontAwesomeIcon icon={faArrowRight} className="text-[10px] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
