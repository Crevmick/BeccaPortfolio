import React from "react";

export const PlatformEnergySection = () => {
  return (
    <section className="py-20 px-6 bg-[#F8F5EE]">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-2">
          <span className="text-[10px] font-bold tracking-widest uppercase text-stone-500">
            CROSS-PLATFORM ADAPTATION
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#201D1A] tracking-tight">
            Same message, different platform energy.
          </h2>
          <p className="text-sm text-stone-600 max-w-xl font-sans">
            How one core brand story is tailored across TikTok, Instagram, and Facebook to match algorithmic behavior and audience mindset.
          </p>
        </div>

        {/* 3 Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: TikTok (Cream) */}
          <div className="rounded-[28px] bg-white border-[1.5px] border-[#201D1A] p-7 shadow-[3px_3px_0px_#201D1A] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-stone-500">
                ON TIKTOK
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#201D1A] leading-snug">
                &ldquo;3 things parents look for in a 2024 school environment.&rdquo;
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                Fast visual hook in 2 seconds, authentic student voice, relatable background audio, and immediate problem-solution pacing.
              </p>
            </div>
            <div className="pt-6 text-[10px] font-bold uppercase tracking-wider text-[#BD5D44]">
              High Algorithmic Retention
            </div>
          </div>

          {/* Card 2: Instagram (Butter Yellow) */}
          <div className="rounded-[28px] bg-[#F7E078] border-[1.5px] border-[#201D1A] p-7 shadow-[3px_3px_0px_#201D1A] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-stone-700">
                ON INSTAGRAM
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#201D1A] leading-snug">
                &ldquo;Simple checklist for parents: What makes a child thrive.&rdquo;
              </h3>
              <p className="text-xs text-stone-900 leading-relaxed font-sans">
                Saveable 5-slide educational carousel, polished cover, clear typography, and a question sticker in the story.
              </p>
            </div>
            <div className="pt-6 text-[10px] font-bold uppercase tracking-wider text-stone-800">
              Saveable & Shareable Asset
            </div>
          </div>

          {/* Card 3: Facebook (Sage Green) */}
          <div className="rounded-[28px] bg-[#A7C7A8] border-[1.5px] border-[#201D1A] p-7 shadow-[3px_3px_0px_#201D1A] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-stone-700">
                ON FACEBOOK
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#201D1A] leading-snug">
                &ldquo;Admissions open: Learn how our curriculum prepares students.&rdquo;
              </h3>
              <p className="text-xs text-stone-900 leading-relaxed font-sans">
                Full photo album from classroom activities, parent community discussion, and direct link for enquiries and registration.
              </p>
            </div>
            <div className="pt-6 text-[10px] font-bold uppercase tracking-wider text-stone-800">
              Direct Enquiry & Enrolment
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
