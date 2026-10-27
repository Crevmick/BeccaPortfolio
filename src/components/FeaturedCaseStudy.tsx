import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const FeaturedCaseStudy = () => {
  return (
    <section id="case-study" className="py-20 px-6 bg-[#F8F5EE]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Column: Brand Purple Card */}
        <div className="lg:col-span-4 rounded-[28px] bg-[#492A86] text-[#F8F5EE] border-[1.5px] border-[#201D1A] p-8 sm:p-10 shadow-[3px_3px_0px_#201D1A] flex flex-col justify-between">
          <div className="space-y-4">
            <span className="text-[10px] font-bold tracking-widest uppercase text-[#F8F5EE]/80">
              FEATURED CASE STUDY
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
              A clearer launch for a growing institution.
            </h3>
          </div>

          <div className="pt-8 border-t border-[#F8F5EE]/20 mt-8 space-y-3">
            <p className="text-sm leading-relaxed text-[#F8F5EE]/80">
              From limited platform presence to a structured content system built around parent trust, student stories, and admissions.
            </p>
            <Link href="/experience/havilah-schools" className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#F7E078]">
              Read the full case study <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        {/* Right Column: Case Details & Metrics */}
        <div className="lg:col-span-8 rounded-[28px] bg-white border-[1.5px] border-[#201D1A] p-8 sm:p-10 shadow-[3px_3px_0px_#201D1A] space-y-6 flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-bold tracking-widest uppercase text-stone-500">
              CASE BREAKDOWN
            </span>
            <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#201D1A] mt-1 mb-5">
              How we grew Havilah Schools to drive student enrolments.
            </h4>

            {/* 2 Colored Horizontal Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-[#A7C7A8] border-[1.5px] border-[#201D1A] p-5 shadow-xs">
                <div className="text-[10px] font-bold uppercase tracking-wider text-stone-800 mb-1">
                  The Challenge
                </div>
                <p className="text-xs text-stone-900 leading-relaxed font-sans">
                  Starting with limited platform presence, no structured content pillars, and prospective parents unaware of programs.
                </p>
              </div>

              <div className="rounded-2xl bg-[#F7E078] border-[1.5px] border-[#201D1A] p-5 shadow-xs">
                <div className="text-[10px] font-bold uppercase tracking-wider text-stone-800 mb-1">
                  The Strategy
                </div>
                <p className="text-xs text-stone-900 leading-relaxed font-sans">
                  Parent-focused tips, student creativity clips, International Day coverage, and timely admission campaigns.
                </p>
              </div>
            </div>
          </div>

          {/* 3 Metric Pills */}
          <div className="grid grid-cols-3 items-stretch gap-2 pt-2 sm:gap-3">
            <div className="flex min-h-24 flex-col items-center justify-center rounded-2xl border-[1.5px] border-[#201D1A] bg-[#F8F5EE] px-2 py-4 text-center sm:min-h-0 sm:p-4">
              <div className="font-serif text-2xl font-black leading-none text-[#201D1A] sm:text-3xl">
                +300%
              </div>
              <div className="mt-2 text-[9px] font-bold uppercase leading-tight tracking-wide text-stone-600 sm:text-[10px] sm:tracking-wider">
                TikTok Growth
              </div>
            </div>

            <div className="flex min-h-24 flex-col items-center justify-center rounded-2xl border-[1.5px] border-[#201D1A] bg-[#F8F5EE] px-2 py-4 text-center sm:min-h-0 sm:p-4">
              <div className="font-serif text-2xl font-black leading-none text-[#201D1A] sm:text-3xl">
                84.3%
              </div>
              <div className="mt-2 text-[9px] font-bold uppercase leading-tight tracking-wide text-stone-600 sm:text-[10px] sm:tracking-wider">
                Non-Follower Reach
              </div>
            </div>

            <div className="flex min-h-24 flex-col items-center justify-center rounded-2xl border-[1.5px] border-[#201D1A] bg-[#F8F5EE] px-2 py-4 text-center sm:min-h-0 sm:p-4">
              <div className="font-serif text-2xl font-black leading-none text-[#492A86] sm:text-3xl">
                100+
              </div>
              <div className="mt-2 text-[9px] font-bold uppercase leading-tight tracking-wide text-stone-600 sm:text-[10px] sm:tracking-wider">
                Enrolments Began
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-2xl border border-[#201D1A]/10 bg-[#F8F5EE] p-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-lg text-xs leading-relaxed text-stone-600">
              See the strategy, platform growth, content execution, and value delivered in the complete project breakdown.
            </p>
            <Link href="/experience/havilah-schools" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-[#201D1A] bg-[#201D1A] px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#492A86]">
              Explore project <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
