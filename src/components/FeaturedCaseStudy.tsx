import React from "react";

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

          <div className="pt-8 border-t border-[#F8F5EE]/20 mt-8 space-y-2">
            <p className="font-serif italic text-base text-[#F8F5EE]/95">
              &ldquo;She transformed our social media presence and turned visibility into student enrolments.&rdquo;
            </p>
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#F7E078]">
              Havilah Schools Leadership
            </div>
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
          <div className="grid grid-cols-3 gap-3 pt-2">
            <div className="rounded-2xl bg-[#F8F5EE] border-[1.5px] border-[#201D1A] p-4 text-center">
              <div className="font-serif text-2xl sm:text-3xl font-black text-[#201D1A]">
                +300%
              </div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-stone-600 mt-1">
                TikTok Growth
              </div>
            </div>

            <div className="rounded-2xl bg-[#F8F5EE] border-[1.5px] border-[#201D1A] p-4 text-center">
              <div className="font-serif text-2xl sm:text-3xl font-black text-[#201D1A]">
                84.3%
              </div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-stone-600 mt-1">
                Non-Follower Reach
              </div>
            </div>

            <div className="rounded-2xl bg-[#F8F5EE] border-[1.5px] border-[#201D1A] p-4 text-center">
              <div className="font-serif text-2xl sm:text-3xl font-black text-[#492A86]">
                100+
              </div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-stone-600 mt-1">
                Enrolments Began
              </div>
            </div>
          </div>

          {/* Flatlay Workspace Photo */}
          <div className="rounded-2xl overflow-hidden aspect-[21/9] border border-[#201D1A]/10 bg-stone-100">
            <img
              src="https://images.unsplash.com/photo-1517842645767-c639042777db?w=1000&auto=format&fit=crop&q=80"
              alt="Editorial Planning & Content Roadmap"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
