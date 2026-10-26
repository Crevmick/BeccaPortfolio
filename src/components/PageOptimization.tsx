import React from "react";
import { optimizationCases } from "@/data/portfolioData";
import { Check, X, Sparkles, ArrowRight } from "lucide-react";

export const PageOptimization = () => {
  return (
    <section id="optimization" className="py-24 px-6 bg-slate-100/70 border-t border-b border-slate-200">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest font-bold text-[#492A86] bg-purple-100 px-3.5 py-1 rounded-full border border-purple-200">
            Profile Makeover Strategy
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[#090d24] tracking-tight">
            Instagram Page Optimization
          </h2>
          <p className="text-slate-600 text-sm md:text-base">
            Your Instagram profile is your digital storefront. Here is how we transform disjointed accounts into high-converting sales assets.
          </p>
        </div>

        {optimizationCases.map((item, idx) => (
          <div
            key={idx}
            className="rounded-3xl bg-white border border-slate-200 shadow-md p-8 md:p-12 space-y-8"
          >
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#492A86]">
                Case Study Highlight • {item.client}
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#090d24] mt-1">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm md:text-base mt-2 max-w-3xl">
                {item.description}
              </p>
            </div>

            {/* Before vs After Split Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              {/* Before Column */}
              <div className="p-6 md:p-8 rounded-2xl bg-rose-50/60 border border-rose-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-8 h-8 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-xs">
                      ✕
                    </span>
                    <span className="text-sm font-bold text-rose-900 uppercase tracking-wider">
                      Before Optimization
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {item.beforePoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-rose-800">
                        <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-rose-200/60 text-[11px] text-rose-700 font-semibold">
                  Result: High profile drop-off, missed client enquiries
                </div>
              </div>

              {/* After Column */}
              <div className="p-6 md:p-8 rounded-2xl bg-emerald-50/60 border border-emerald-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                      ✓
                    </span>
                    <span className="text-sm font-bold text-emerald-900 uppercase tracking-wider">
                      After Optimization
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {item.afterPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-emerald-900">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-emerald-200/60 text-[11px] text-emerald-700 font-semibold">
                  Result: Immediate clarity, increased followers & direct DM enquiries
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
