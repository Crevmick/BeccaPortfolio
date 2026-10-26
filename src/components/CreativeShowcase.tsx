import React from "react";
import { creativeGridPosts, profileData } from "@/data/portfolioData";
import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

export const CreativeShowcase = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-3xl bg-[#FEF08A] p-8 sm:p-12 border-2 border-slate-900/10 shadow-sm space-y-12">
          {/* Top Row: Phone Mockup & Copy */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Phone Mockup Frame */}
            <div className="md:col-span-5 flex justify-center">
              <div className="w-64 rounded-[36px] bg-black p-3 shadow-2xl border-4 border-slate-800 text-white">
                <div className="rounded-[28px] bg-slate-950 p-4 space-y-3 overflow-hidden text-xs">
                  {/* Phone Header */}
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-6 rounded-full bg-[#492A86] text-white flex items-center justify-center font-bold text-[10px]">
                        RA
                      </div>
                      <span className="font-bold text-[11px] truncate max-w-[120px]">
                        @becca.strategist
                      </span>
                    </div>
                    <InstagramIcon className="w-4 h-4 text-pink-500" />
                  </div>

                  {/* Profile stats */}
                  <div className="flex justify-around text-center py-1">
                    <div>
                      <div className="font-black text-sm">319K</div>
                      <div className="text-[9px] text-slate-400">Views</div>
                    </div>
                    <div>
                      <div className="font-black text-sm">900+</div>
                      <div className="text-[9px] text-slate-400">TikTok</div>
                    </div>
                    <div>
                      <div className="font-black text-sm">100%</div>
                      <div className="text-[9px] text-slate-400">Enrolment</div>
                    </div>
                  </div>

                  {/* Mini story circles */}
                  <div className="flex gap-2 justify-between py-1">
                    {["Strategy", "Results", "Education", "Beauty"].map((s, idx) => (
                      <div key={idx} className="flex flex-col items-center gap-1">
                        <div className="w-10 h-10 rounded-full border-2 border-[#FEF08A] bg-[#0A1366] flex items-center justify-center text-[8px] font-bold">
                          {s.charAt(0)}
                        </div>
                        <span className="text-[8px] text-slate-400">{s}</span>
                      </div>
                    ))}
                  </div>

                  {/* Feed post preview */}
                  <div className="rounded-xl bg-[#0A1366] p-3 text-white space-y-1.5 mt-1">
                    <div className="flex items-center gap-1 text-[9px] text-yellow-300 font-bold uppercase">
                      <Sparkles className="w-3 h-3" />
                      <span>Content Pillars</span>
                    </div>
                    <div className="font-bold text-[11px] leading-tight">
                      Turning Casual Visitors into Enrolled Students & Buyers
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column Copy */}
            <div className="md:col-span-7 space-y-5 text-[#0A1366]">
              <div className="inline-block px-3 py-1 rounded-full bg-white text-[#0A1366] text-xs font-black uppercase tracking-wider">
                STRATEGY IN ACTION
              </div>

              <h3 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                Cohesive Social Feeds That Drive Real Conversations
              </h3>

              <p className="text-sm sm:text-base font-medium text-slate-800 leading-relaxed">
                Whether creating admission-focused school campaigns, food storytelling for European audiences, or beauty tutorials, I structure every feed with intentionality, aesthetic clarity, and clear conversion paths.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-bold text-[#0A1366]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0A1366]" /> Educational Highlights
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0A1366]" /> Storytelling & Prep
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0A1366]" /> Wigs & Hair Tutorials
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0A1366]" /> Clean NGO Collateral
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Creative 6-Tile Grid matching the screenshot */}
          <div className="pt-6 border-t border-[#0A1366]/20">
            <div className="text-xs font-black uppercase tracking-wider text-[#0A1366] mb-4">
              Featured Campaign Creative Collateral
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {creativeGridPosts.map((post) => (
                <div
                  key={post.id}
                  className={`rounded-2xl p-4 aspect-square flex flex-col justify-between shadow-sm border border-black/10 transition-transform hover:scale-105 ${post.color}`}
                >
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${post.accent}`}>
                    {post.tag}
                  </span>
                  <div className={`text-xs font-black leading-tight ${post.accent}`}>
                    {post.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
