import React from "react";
import { toolsCategories } from "@/data/portfolioData";
import { Wrench, Layers } from "lucide-react";

export const ToolsSection = () => {
  return (
    <section id="tools" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest font-bold text-[#492A86] bg-purple-100 px-3.5 py-1 rounded-full border border-purple-200">
            Tech & Workflow Stack
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[#090d24] tracking-tight">
            Tools I Use Daily
          </h2>
          <p className="text-slate-600 text-sm md:text-base">
            Equipped with modern AI, design, and scheduling workflows to deliver seamless execution and consistent brand output.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolsCategories.map((group, i) => (
            <div
              key={i}
              className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm hover:border-[#492A86] transition-all"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-[#492A86]">
                  <Layers className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-sm text-[#090d24] tracking-tight">
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-xs"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
