"use client";

import { ArrowUpRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const posts = [
  {
    id: "DdT7yIPMhWp",
    label: "Content strategy in action",
  },
  {
    id: "DdV7bqdMPOS",
    label: "Creative social content",
  },
  {
    id: "DdI9Shvs2yL",
    label: "Content built to connect",
  },
  {
    id: "DeJCbUAhrUb",
    label: "Purposeful content storytelling",
  },
];

export const MyContentSection = () => {
  return (
    <section id="content" className="border-y border-[#201D1A]/10 bg-white px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 border-b border-[#201D1A]/10 pb-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#201D1A] bg-[#D3C5E9] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] shadow-[2px_2px_0_#201D1A]">
              <FontAwesomeIcon icon={faInstagram} className="text-sm" />
              My content
            </span>
            <h2 className="mt-5 font-serif text-3xl font-bold tracking-tight sm:text-5xl">
              Ideas made to stop the scroll and start a conversation.
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-sm leading-relaxed text-stone-600">
              A closer look at how I turn social media ideas into clear, engaging content for real audiences.
            </p>
            <a
              href="https://www.instagram.com/ariksbeccah/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#492A86]"
            >
              Follow on Instagram <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {posts.map((post, index) => (
            <article
              key={post.id}
              className="overflow-hidden rounded-[30px] border-[1.5px] border-[#201D1A] bg-[#F8F5EE] p-3 shadow-[4px_4px_0_#201D1A] sm:p-4"
            >
              <div className="flex items-center justify-between px-2 pb-3 pt-1">
                <div>
                  <p className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-stone-500">
                    Reel 0{index + 1}
                  </p>
                  <h3 className="mt-1 font-serif text-lg font-bold">{post.label}</h3>
                </div>
                <span className="flex size-10 items-center justify-center rounded-full bg-[#492A86] text-white">
                  <FontAwesomeIcon icon={faInstagram} className="text-lg" />
                </span>
              </div>
              <div className="overflow-hidden rounded-[22px] border border-[#201D1A]/10 bg-white">
                <iframe
                  src={"https://www.instagram.com/reel/" + post.id + "/embed/captioned/"}
                  title={post.label}
                  loading="lazy"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  className="h-[660px] w-full border-0"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
