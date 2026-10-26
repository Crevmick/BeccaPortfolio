import React from "react";
import { profileData } from "@/data/portfolioData";

export const OffersPricing = () => {
  const offers = [
    {
      title: "Content & Page Audit",
      tag: "ONE-TIME SPRINT",
      color: "bg-white",
      desc: "Comprehensive profile evaluation, bio revamp, highlight category icons, and 10 tailored content ideas.",
      cta: "Book an Audit"
    },
    {
      title: "Monthly Content Plan",
      tag: "STRATEGY ROADMAP",
      color: "bg-[#492A86]",
      dark: true,
      desc: "4 weekly themes, 16 customized post hooks & captions, story prompt calendar, and branded templates.",
      cta: "Get Your Roadmap"
    },
    {
      title: "Full Social Management",
      tag: "END-TO-END CARE",
      color: "bg-[#A7C7A8]",
      desc: "Full scheduling, video editing on CapCut, daily DM/comment triage, and bi-weekly analytics reporting.",
      cta: "Inquire for Availability"
    }
  ];

  return (
    <section id="offers" className="py-20 px-6 bg-[#F8F5EE]">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <span className="text-[10px] font-bold tracking-widest uppercase text-stone-500">
            HOW WE CAN WORK TOGETHER
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#201D1A] tracking-tight">
            Simple offers for growing brands.
          </h2>
        </div>

        {/* 3 Offer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer, idx) => (
            <div
              key={idx}
              className={`rounded-[28px] border-[1.5px] border-[#201D1A] p-8 shadow-[3px_3px_0px_#201D1A] flex flex-col justify-between min-h-[300px] ${offer.color}`}
            >
              <div>
                <span className={"text-[10px] font-mono font-bold tracking-wider uppercase " + (offer.dark ? "text-white/70" : "text-stone-700")}>
                  {offer.tag}
                </span>
                <h3 className={"font-serif text-2xl font-bold mt-2 mb-3 " + (offer.dark ? "text-white" : "text-[#201D1A]")}>
                  {offer.title}
                </h3>
                <p className={"text-xs leading-relaxed font-sans " + (offer.dark ? "text-white/80" : "text-stone-800")}>
                  {offer.desc}
                </p>
              </div>

              <div className={"pt-6 mt-6 border-t " + (offer.dark ? "border-white/20" : "border-[#201D1A]/15")}>
                <a
                  href={`https://wa.me/234${profileData.phone.replace(/^0/, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className={"inline-block text-xs font-bold uppercase tracking-wider hover:underline " + (offer.dark ? "text-white" : "text-[#201D1A]")}
                >
                  {offer.cta} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
