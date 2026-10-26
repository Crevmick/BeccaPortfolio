import React from "react";

export const TickerBar = () => {
  const items = [
    "CONTENT STRATEGY",
    "CONTENT CALENDARS",
    "CAPTIONS + VISUALS",
    "REELS & SHORT-FORM VIDEO",
    "COMMUNITY CARE",
    "PAGE OPTIMIZATION",
    "ANALYTICS & ENROLMENTS"
  ];

  return (
    <div className="bg-[#282522] text-[#F8F5EE] py-3.5 border-y border-[#201D1A] overflow-hidden select-none">
      <div className="flex items-center justify-around gap-8 text-[11px] font-bold tracking-widest uppercase">
        {items.map((item, idx) => (
          <React.Fragment key={idx}>
            <span className="whitespace-nowrap hover:text-[#F7E078] transition-colors">
              {item}
            </span>
            <span className="text-[#F7E078] text-xs">✦</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
