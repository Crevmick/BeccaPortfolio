import React from "react";
import { keyMetrics } from "@/data/portfolioData";
import { TrendingUp, Users, Eye, BarChart2 } from "lucide-react";

export const AnalyticsSection = () => {
  return (
    <section id="metrics" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header with signature yellow pill */}
        <div className="space-y-3">
          <div className="inline-block px-4 py-1 rounded-full bg-[#FEF08A] text-[#0A1366] text-xs font-black uppercase tracking-wider">
            ANALYTICS & RESULTS
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#0A1366] tracking-tight">
            How my work performed
          </h2>
          <p className="text-slate-600 max-w-2xl text-sm sm:text-base">
            Verified platform insights highlighting account growth, organic discovery, and student enrolment conversions.
          </p>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {keyMetrics.map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs flex flex-col justify-between"
            >
              <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                <span>{stat.label}</span>
                {stat.change && (
                  <span className="text-[11px] font-black px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                    {stat.change}
                  </span>
                )}
              </div>
              <div>
                <div className="text-3xl font-black text-[#0A1366] tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 font-medium mt-1">
                  {stat.subtext}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Insights Card matching the screenshot visual */}
        <div className="rounded-3xl border-2 border-slate-200 bg-white p-8 sm:p-10 shadow-sm space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <div className="text-xs font-black uppercase tracking-wider text-[#492A86]">
                Instagram Insights Audit
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A1366] mt-1">
                Audience Discovery & Reach Breakdown
              </h3>
            </div>
            <div className="px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-xs font-bold text-[#492A86]">
              Verified Algorithm Distribution
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left: Donut Graph & Stats */}
            <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="relative w-36 h-36 flex items-center justify-center shrink-0">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="38"
                    fill="transparent"
                    stroke="#e2e8f0"
                    strokeWidth="12"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="38"
                    fill="transparent"
                    stroke="#0A1366"
                    strokeWidth="12"
                    strokeDasharray="238.7"
                    strokeDashoffset="37.5"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute text-center">
                  <div className="text-2xl font-black text-[#0A1366]">84.3%</div>
                  <div className="text-[9px] font-bold text-slate-500 uppercase">Non-Followers</div>
                </div>
              </div>

              <div className="space-y-3 text-xs w-full">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#0A1366]" />
                    <span className="font-bold text-slate-800">Non-Followers (Viral)</span>
                  </div>
                  <span className="font-extrabold text-[#0A1366]">84.3%</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-slate-300" />
                    <span className="font-bold text-slate-600">Existing Followers</span>
                  </div>
                  <span className="font-extrabold text-slate-700">15.7%</span>
                </div>
              </div>
            </div>

            {/* Right: Key Insight Takeaway */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-[#0A1366]">
                Why this matters for your brand:
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                When social media is managed with intentional content pillars, over 80% of views come from brand new prospective customers rather than just recycling the same audience.
              </p>
              <div className="p-4 rounded-2xl bg-amber-50 border-l-4 border-[#FEF08A] text-xs font-semibold text-amber-900 leading-relaxed">
                🎯 Havilah Schools: Student enrolments were achieved while the Instagram page had only ~60 followers, proving strategic reach trumps vanity metrics!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
