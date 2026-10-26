import Image from "next/image";

type ProfileTransformationProps = {
  before: string;
  after: string;
  brand: string;
  title: string;
  description: string;
  beforeCaption: string;
  afterCaption: string;
};

export function ProfileTransformation({ before, after, brand, title, description, beforeCaption, afterCaption }: ProfileTransformationProps) {
  return (
    <section className="border-y border-[#201D1A]/10 bg-white px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#492A86]">Instagram page optimization</p>
            <h2 className="mt-2 font-serif text-3xl font-bold sm:text-5xl">{title}</h2>
          </div>
          <p className="text-sm leading-relaxed text-stone-600 lg:col-span-5">{description}</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            { label: "Before", src: before, caption: beforeCaption, color: "bg-[#D3C5E9]" },
            { label: "After", src: after, caption: afterCaption, color: "bg-[#A7C7A8]" },
          ].map((asset) => (
            <figure key={asset.label} className="overflow-hidden rounded-[28px] border-[1.5px] border-[#201D1A] bg-[#F8F5EE] p-2 shadow-[4px_4px_0_#201D1A]">
              <div className="relative aspect-[500/1080] overflow-hidden rounded-[21px] bg-[#0b0f14]">
                <Image src={asset.src} alt={`${brand} Instagram profile ${asset.label.toLowerCase()} optimization`} fill sizes="(min-width: 768px) 45vw, calc(100vw - 48px)" className="object-contain" />
              </div>
              <figcaption className="p-4">
                <span className={asset.color + " inline-flex rounded-full border border-[#201D1A] px-3 py-1 text-[9px] font-bold uppercase tracking-[0.18em]"}>{asset.label}</span>
                <p className="mt-3 text-sm font-semibold leading-relaxed text-stone-700">{asset.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
