import React from "react";
import { servicesData } from "@/data/portfolioData";

export const ServicesOverview = () => {
  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Contents Header with Star Doodles */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h2 className="text-4xl sm:text-5xl font-black text-[#0A1366] tracking-tight">
              Contents
            </h2>
            <span className="text-[#0A1366] text-3xl font-black select-none">✦</span>
          </div>

          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            06 CORE SERVICES
          </span>
        </div>

        {/* 3x2 Grid of Navy Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.slice(0, 6).map((service) => (
            <div
              key={service.id}
              className="bg-[#0A1366] text-white rounded-2xl p-7 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between min-h-[260px] border border-blue-950"
            >
              <div>
                <div className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4">
                  {service.number}.
                </div>

                <h3 className="text-lg font-bold tracking-tight mb-2 text-white">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-blue-900/60 flex items-center justify-between text-[11px] text-yellow-300 font-semibold">
                <span>{service.tag || "Full Execution"}</span>
                <span>✦</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
