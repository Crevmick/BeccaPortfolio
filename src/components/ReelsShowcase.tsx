import React from "react";
import { reelsShowcase } from "@/data/portfolioData";
import { Play, Eye, Heart, Film } from "lucide-react";

export const ReelsShowcase = () => {
  return (
    <section id="reels" className="py-20 px-6 bg-[#0e111a] text-white">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="space-y-2">
            <div className="inline-block px-3 py-1 rounded-full bg-slate-800 text-yellow-300 text-xs font-bold uppercase tracking-wider">
              VIDEO & REELS EDITING
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
              Short-Form Video Production
            </h2>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm max-w-md">
            Cut on CapCut and InShot with high-retention 3-second visual hooks, pacing, and engaging captions.
          </p>
        </div>

        {/* 3 Vertical Reel Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {reelsShowcase.map((reel) => (
            <div
              key={reel.id}
              className="group rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Vertical Card Container */}
              <div className="relative aspect-[9/13] w-full overflow-hidden bg-slate-950">
                <img
                  src={reel.thumbnailUrl}
                  alt={reel.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/50" />

                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white border border-white/20">
                    {reel.category}
                  </span>
                </div>

                {/* Center Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#FEF08A] text-[#0A1366] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Bottom stats inside card */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-bold">
                  <span className="flex items-center gap-1 bg-black/60 px-2 py-0.5 rounded-full">
                    <Eye className="w-3 h-3 text-[#FEF08A]" />
                    {reel.views}
                  </span>
                  <span className="flex items-center gap-1 bg-black/60 px-2 py-0.5 rounded-full">
                    <Heart className="w-3 h-3 text-pink-400 fill-pink-400" />
                    {reel.likes}
                  </span>
                </div>
              </div>

              {/* Title & Caption */}
              <div className="p-5 space-y-1.5">
                <h3 className="font-bold text-sm text-white group-hover:text-yellow-300 transition-colors">
                  {reel.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {reel.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
