import React from "react";

export const OutcomesAndQuote = () => {
  return (
    <section id="results" className="py-20 px-6 bg-[#F8F5EE]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left: Progress Bars & Stats */}
        <div className="lg:col-span-6 rounded-[28px] bg-white border-[1.5px] border-[#201D1A] p-8 sm:p-10 shadow-[3px_3px_0px_#201D1A] flex flex-col justify-between space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] font-bold tracking-widest uppercase text-stone-500">
              MEASURABLE OUTCOMES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#201D1A] tracking-tight">
              Results made easy to understand.
            </h2>
          </div>

          <div className="space-y-5 pt-2">
            {/* Meter 1 */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-bold text-[#201D1A]">
                <span>Non-Follower Reach (Algorithmic Discovery)</span>
                <span>84.3%</span>
              </div>
              <div className="w-full h-3.5 bg-stone-100 rounded-full border border-[#201D1A] overflow-hidden p-0.5">
                <div className="h-full bg-[#A7C7A8] rounded-full w-[84%]" />
              </div>
            </div>

            {/* Meter 2 */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-bold text-[#201D1A]">
                <span>Student Enrolments from Social</span>
                <span>100%</span>
              </div>
              <div className="w-full h-3.5 bg-stone-100 rounded-full border border-[#201D1A] overflow-hidden p-0.5">
                <div className="h-full bg-[#F7E078] rounded-full w-[100%]" />
              </div>
            </div>

            {/* Meter 3 */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-bold text-[#201D1A]">
                <span>TikTok Community Growth (226 → 900+)</span>
                <span>300%</span>
              </div>
              <div className="w-full h-3.5 bg-stone-100 rounded-full border border-[#201D1A] overflow-hidden p-0.5">
                <div className="h-full bg-[#F7B8A9] rounded-full w-[75%]" />
              </div>
            </div>
          </div>
        </div>

        {/* Right: Lilac Quote Card */}
        <div className="lg:col-span-6 rounded-[28px] bg-[#D3C5E9] border-[1.5px] border-[#201D1A] p-8 sm:p-10 shadow-[3px_3px_0px_#201D1A] flex flex-col justify-between">
          <div className="text-5xl font-serif text-[#201D1A] opacity-60">
            &ldquo;
          </div>

          <blockquote className="font-serif italic text-2xl sm:text-3xl text-[#201D1A] leading-snug my-4">
            &ldquo;Rebecca gave our content clear structure without taking away the warmth of our brand voice.&rdquo;
          </blockquote>

          <div className="pt-4 border-t border-[#201D1A]/20">
            <div className="text-xs font-bold uppercase tracking-wider text-[#201D1A]">
              CLIENT SATISFACTION
            </div>
            <div className="text-[11px] text-stone-700 font-medium">
              Schools, African Culinary Brands & E-Commerce Owners
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
