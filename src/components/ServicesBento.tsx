import React from "react";

export const ServicesBento = () => {
  const services = [
    {
      number: "01",
      title: "Social media management",
      tag: "FULL ACCOUNT MANAGEMENT",
      description:
        "Full account management, content scheduling, engagement and community management that grow your brand while you focus on scaling your business.",
      color: "bg-[#F7B8A9]" // Soft Blush
    },
    {
      number: "02",
      title: "Content Strategy",
      tag: "TAILORED ROADMAP",
      description:
        "A tailored content roadmap that defines your content pillars, develops engaging ideas, and establishes a clear content calendar and messaging framework to build meaningful connections and drive brand engagement.",
      color: "bg-[#F7E078]" // Butter Yellow
    },
    {
      number: "03",
      title: "Content Creation",
      tag: "VISUALS & COPY",
      description:
        "Creating compelling visuals and engaging copy that communicate your brand’s value, capture attention, and turn your content ideas into impactful posts that support your business goals.",
      color: "bg-[#D3C5E9]" // Lilac
    },
    {
      number: "04",
      title: "IG Page Optimization",
      tag: "PROFILE & CONVERSION",
      description:
        "Optimizing your profile, bio, highlights, and overall page layout to communicate your brand’s value clearly, improve discoverability, and turn profile visitors into potential customers.",
      color: "bg-[#A7C7A8]" // Sage Green
    },
    {
      number: "05",
      title: "Basic Graphics Design",
      tag: "BRAND CONSISTENCY",
      description:
        "Basic graphic design with clean, on-brand visuals that support your content and keep your page looking polished.",
      color: "bg-white" // Crisp White
    },
    {
      number: "06",
      title: "Community Management",
      tag: "AUDIENCE CARE",
      description:
        "Daily engagement, replying to comments and messages, and building real connections that keep your audience coming back.",
      color: "bg-[#F7B8A9]" // Soft Blush
    },
    {
      number: "07",
      title: "Analytics and Reporting",
      tag: "PERFORMANCE & AUDIT",
      description:
        "Keeping an eye on what your audience responds to, so each post speaks to their needs and supports your goals.",
      color: "bg-[#F7E078]" // Butter Yellow
    }
  ];

  return (
    <section id="services" className="py-20 px-6 bg-[#F8F5EE]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#201D1A]/10 pb-8">
          <div className="space-y-3">
            <div className="inline-block px-3.5 py-1 rounded-full bg-[#282522] text-[#F8F5EE] text-[9px] font-mono font-bold tracking-widest uppercase">
              WHAT I DO
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#201D1A] tracking-tight leading-tight">
              Organized creative support for busy brands.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 max-w-md font-sans leading-relaxed">
            Social media should be more than just posting consistently. A brand needs to understand who it wants to reach, what it wants to communicate, and how to turn its online presence into meaningful connections and business opportunities.
          </p>
        </div>

        {/* 7 Services Bento Grid - Clean, purely typographic */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-[24px] border border-[#201D1A] p-7 shadow-[2px_2px_0px_#201D1A] flex flex-col justify-between hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#201D1A] transition-all duration-300 min-h-[260px] group ${
                item.color
              } ${idx === 0 ? "lg:col-span-2" : ""}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-3xl font-bold text-[#201D1A]">
                    {item.number}
                  </span>

                  <span className="text-[9px] font-mono font-semibold uppercase tracking-wider text-stone-800 bg-white/70 px-2.5 py-0.5 rounded-full border border-[#201D1A]/15 backdrop-blur-xs">
                    {item.tag}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#201D1A] mb-2.5 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-[13px] text-stone-800 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-5 border-t border-[#201D1A]/15 flex items-center justify-between text-[10px] font-mono font-bold tracking-wider uppercase text-stone-700">
                <span>Rebecca Adewumi SMM</span>
                <span className="text-xs opacity-60">✦</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
