import React from "react";

export const ContentCalendarSection = () => {
  const days = [
    { day: "MON", title: "Educational Anchor", color: "bg-[#F7B8A9]" },
    { day: "TUE", title: "Behind-The-Scenes", color: "bg-[#F7E078]" },
    { day: "WED", title: "Product / Student Spotlight", color: "bg-[#D3C5E9]" },
    { day: "THU", title: "Parent Tips & FAQ", color: "bg-[#A7C7A8]" },
    { day: "FRI", title: "Community Polls & Q&A", color: "bg-white" },
    { day: "SAT", title: "Weekend Highlight", color: "bg-[#F7B8A9]" }
  ];

  return (
    <section className="py-20 px-6 bg-[#282522] text-[#F8F5EE]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left: Headline & Subtitle */}
        <div className="lg:col-span-5 space-y-4">
          <span className="text-[10px] font-bold tracking-widest uppercase text-[#F7E078]">
            THE CONTENT ARCHITECTURE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            The plan behind the posts.
          </h2>
          <p className="text-sm text-stone-300 leading-relaxed font-sans max-w-md">
            A predictable, sustainable cadence that builds anticipation and loyalty without last-minute scrambling or creator burnout.
          </p>
        </div>

        {/* Right: Weekly Schedule Pill Cards */}
        <div className="lg:col-span-7 rounded-[28px] bg-[#34302C] border-[1.5px] border-stone-700 p-6 sm:p-8 shadow-xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {days.map((item, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-4 text-[#201D1A] border border-[#201D1A] shadow-xs flex flex-col justify-between min-h-[110px] ${item.color}`}
              >
                <div className="text-[11px] font-mono font-bold tracking-wider opacity-75">
                  {item.day}
                </div>
                <div className="font-serif font-bold text-xs sm:text-sm leading-snug">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
