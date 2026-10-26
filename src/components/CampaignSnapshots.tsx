import React from "react";
import Link from "next/link";

export const CampaignSnapshots = () => {
  const campaigns = [
    {
      id: "havilah",
      slug: "havilah-schools",
      tag: "EDUCATION & ENROLMENTS",
      title: "30-day enrolment & awareness campaign",
      client: "Havilah Schools",
      description:
        "Grew page from 0 to 100+ followers on Instagram with student enrolments recorded during the growth period, plus TikTok growth to 900+ followers.",
      imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=700&auto=format&fit=crop&q=80"
    },
    {
      id: "forthright",
      slug: "forthright-kitchen",
      tag: "FOOD & HOSPITALITY",
      title: "From random posting to weekly themes",
      client: "Forthright Naija Kitchen & Pastries (Germany)",
      description:
        "Developed culinary storytelling around African meals, pastries, catering events, and behind-the-scenes prep to generate enquiries.",
      imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?w=700&auto=format&fit=crop&q=80"
    },
    {
      id: "ecstatic",
      slug: "ecstatic-beauty",
      tag: "BEAUTY & BRAND REVAMP",
      title: "Profile clarity + saveable posts",
      client: "Ecstatic Beauty Hub",
      description:
        "Revamped page bio, custom highlight covers, and product styling tutorials to establish visual authority and drive direct customer orders.",
      imageUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=700&auto=format&fit=crop&q=80"
    },
    {
      id: "relfond",
      slug: "relfond-nigeria",
      tag: "COMMUNICATION & BRANDING",
      title: "Consistent visual identity & page optimization",
      client: "RelFond Nigeria",
      description:
        "Designed graphics for initiatives and announcements, streamlined official communications, and optimized the social media presence.",
      imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=700&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section id="work" className="py-20 px-6 bg-[#F8F5EE]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#201D1A]/10 pb-8">
          <div className="space-y-2">
            <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-stone-500">
              SELECTED WORK & EXPERIENCE
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#201D1A] tracking-tight">
              Campaign snapshots
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 max-w-md font-sans leading-relaxed">
            Strategic social media campaigns across education, culinary commerce, beauty, and non-profit communication. Click on any case study button to view the full breakdown.
          </p>
        </div>

        {/* 4 Cards Grid - No ugly icons, clean typography, with button to each case study */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {campaigns.map((camp) => (
            <div
              key={camp.id}
              className="rounded-[28px] bg-white border-[1.5px] border-[#201D1A] overflow-hidden shadow-[3px_3px_0px_#201D1A] flex flex-col justify-between hover:-translate-y-1 hover:shadow-[4px_4px_0px_#201D1A] transition-all duration-300 group"
            >
              <div className="p-4 space-y-4">
                {/* Rounded Photo at the top */}
                <div className="rounded-[20px] overflow-hidden aspect-[4/3] bg-stone-100 border border-[#201D1A]/10">
                  <img
                    src={camp.imageUrl}
                    alt={camp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Pure clean typography without icons */}
                <div className="space-y-2">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#492A86]">
                    {camp.tag}
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#201D1A] leading-snug group-hover:text-[#492A86] transition-colors">
                    {camp.title}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed font-sans line-clamp-3">
                    {camp.description}
                  </p>
                </div>
              </div>

              {/* Bottom section with client label and dedicated Button to Case Study */}
              <div className="p-4 pt-0 space-y-3">
                <div className="text-[11px] font-semibold text-stone-500 truncate border-t border-[#201D1A]/10 pt-3">
                  {camp.client}
                </div>

                <Link
                  href={`/experience/${camp.slug}`}
                  className="w-full py-2.5 px-4 rounded-full bg-[#201D1A] text-[#F8F5EE] text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-2 group-hover:bg-[#492A86] transition-colors shadow-xs"
                >
                  <span>View Case Study</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
