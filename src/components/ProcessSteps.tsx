import React from "react";

export const ProcessSteps = () => {
  const steps = [
    {
      num: "01",
      title: "Listen",
      color: "bg-white",
      desc: "Audit current pages, listen to your target audience's core questions, and clarify your business targets."
    },
    {
      num: "02",
      title: "Map",
      color: "bg-[#F7B8A9]",
      desc: "Define content pillars, develop weekly themes, and build an organized editorial calendar with zero guesswork."
    },
    {
      num: "03",
      title: "Create",
      color: "bg-[#D3C5E9]",
      desc: "Produce high-retention short videos, clean on-brand visuals, and captions that prompt comments and direct saves."
    },
    {
      num: "04",
      title: "Review",
      color: "bg-[#A7C7A8]",
      desc: "Analyze what resonated, audit reach and enquiries, and refine the roadmap so each post works harder."
    }
  ];

  return (
    <section className="py-20 px-6 bg-[#F8F5EE]">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <span className="text-[10px] font-bold tracking-widest uppercase text-stone-500">
            MY 4-STAGE PROCESS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#201D1A] tracking-tight">
            From messy ideas to a calm content plan.
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`rounded-[28px] border-[1.5px] border-[#201D1A] p-7 shadow-[3px_3px_0px_#201D1A] flex flex-col justify-between min-h-[220px] ${step.color}`}
            >
              <div>
                <div className="font-serif text-3xl font-bold text-[#201D1A] mb-3">
                  {step.num}
                </div>
                <h3 className="font-serif text-xl font-bold text-[#201D1A] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-stone-900 leading-relaxed font-sans">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
