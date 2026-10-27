import Image from "next/image";
import { profileData } from "@/data/portfolioData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export const Hero = () => {
  const whatsappUrl = `https://wa.me/234${profileData.phone.replace(/^0/, "")}`;

  return (
    <section className="overflow-hidden bg-[#F8F5EE] px-4 pb-14 pt-8 sm:px-6 sm:pb-20 sm:pt-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 sm:gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="space-y-5 sm:space-y-6 lg:col-span-7">
          <div className="inline-block rounded-full border border-[#201D1A] bg-[#F7E078] px-4 py-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-[#201D1A]">
            For schools, e-commerce &amp; modern brands
          </div>

          <h1 className="font-serif text-[2.65rem] font-bold leading-[1.06] tracking-tight text-[#201D1A] min-[400px]:text-5xl sm:text-6xl lg:text-7xl">
            Content that feels clear, useful, and worth saving.
          </h1>

          <p className="max-w-xl font-sans text-base leading-relaxed text-stone-700 sm:text-lg">
            Helping small brands, schools, and business owners build intentional social media presence through tailored content strategy, short-form video production, and high-converting page management.
          </p>

          <div className="grid grid-cols-1 gap-3 pt-2 min-[430px]:flex min-[430px]:flex-wrap min-[430px]:items-center min-[430px]:gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#201D1A] bg-[#492A86] px-8 py-3.5 text-center text-xs font-bold uppercase tracking-wider text-[#F8F5EE] shadow-[2px_2px_0px_#201D1A] transition-all hover:translate-x-px hover:translate-y-px hover:bg-[#381F69] hover:shadow-[1px_1px_0px_#201D1A]"
            >
              Work With Me
            </a>

            <a
              href="#experience"
              className="rounded-full border border-[#201D1A] bg-white px-8 py-3.5 text-center text-xs font-bold uppercase tracking-wider text-[#201D1A] shadow-[2px_2px_0px_#201D1A] transition-all hover:bg-stone-50"
            >
              See Case Studies
            </a>
          </div>
        </div>

        <div className="relative flex justify-center lg:col-span-5">
          <div className="relative w-full max-w-[430px] px-4 pb-7 sm:px-5 sm:pb-5">
            <a
              href="https://www.instagram.com/ariksbeccah/"
              target="_blank"
              rel="noreferrer"
              aria-label="Follow Rebecca on Instagram"
              className="social-float social-float--one absolute -left-3 top-14 z-30 flex items-center gap-2.5 rounded-2xl border border-white/80 bg-white/90 p-2 pr-3.5 text-[#201D1A] shadow-[0_12px_32px_rgba(32,29,26,0.18),0_2px_0_#201D1A] backdrop-blur-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#492A86] sm:-left-8"
            >
              <span className="social-logo-tile flex size-10 items-center justify-center rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-xl text-white">
                <FontAwesomeIcon icon={faInstagram} />
              </span>
              <span className="hidden sm:block">
                <span className="block text-[8px] font-bold uppercase tracking-[0.18em] text-stone-500">Creating on</span>
                <span className="block text-xs font-extrabold tracking-tight">Instagram</span>
              </span>
              <span className="absolute -right-1 -top-1 size-3 rounded-full border-2 border-white bg-[#6DBE75]" aria-hidden="true" />
            </a>

            <div className="social-float social-float--two absolute -right-2 top-[39%] z-30 rounded-2xl border border-white/80 bg-white/90 p-1.5 shadow-[0_12px_28px_rgba(32,29,26,0.18),0_2px_0_#201D1A] backdrop-blur-md sm:-right-6">
              <span className="social-logo-tile flex size-11 items-center justify-center rounded-xl bg-[#111] text-xl text-white shadow-[2px_2px_0_#25F4EE]">
                <FontAwesomeIcon icon={faTiktok} />
              </span>
            </div>

            <div
              aria-label="Facebook"
              className="social-float social-float--three absolute right-1 top-20 z-30 rounded-2xl border border-white/80 bg-white/90 p-1.5 shadow-[0_10px_24px_rgba(32,29,26,0.16),0_2px_0_#201D1A] backdrop-blur-md sm:-right-7 sm:top-24"
            >
              <span className="social-logo-tile flex size-9 items-center justify-center rounded-xl bg-[#1877F2] text-lg text-white">
                <FontAwesomeIcon icon={faFacebookF} />
              </span>
            </div>

            <a
              href="https://www.linkedin.com/in/rebecca-adewumi-74b481285/"
              target="_blank"
              rel="noreferrer"
              aria-label="Connect with Rebecca on LinkedIn"
              className="social-float social-float--four absolute -right-1 bottom-28 z-30 rounded-2xl border border-white/80 bg-white/90 p-1.5 shadow-[0_10px_24px_rgba(32,29,26,0.16),0_2px_0_#201D1A] backdrop-blur-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#492A86] sm:-right-8 sm:bottom-32"
            >
              <span className="social-logo-tile flex size-10 items-center justify-center rounded-xl bg-[#0A66C2] text-lg text-white">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Chat with Rebecca on WhatsApp"
              className="absolute -bottom-1 left-0 z-30 flex items-center gap-2 rounded-2xl border border-[#201D1A] bg-[#25D366] px-3 py-2.5 text-white shadow-[3px_3px_0px_#201D1A] transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#492A86] sm:-left-6"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
              <span className="text-[10px] font-extrabold uppercase tracking-wider">Let&apos;s chat</span>
            </a>

            <div className="absolute -right-1 -top-5 z-20 rounded-full border border-[#201D1A] bg-[#A7C7A8] px-3.5 py-1 font-mono text-[9px] font-bold uppercase tracking-wider text-[#201D1A] shadow-[2px_2px_0px_#201D1A] sm:right-5">
              Organic social &amp; community
            </div>

            <div className="relative overflow-hidden rounded-[36px] border-[1.5px] border-[#201D1A] bg-[#DCE9F8] p-2.5 shadow-[6px_6px_0px_#201D1A]">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[28px] bg-stone-200">
                <Image
                  src="/rebecca-hero.jpg"
                  alt="Rebecca Adewumi, social media manager and content strategist"
                  fill
                  priority
                  sizes="(min-width: 1024px) 390px, (min-width: 640px) 430px, calc(100vw - 72px)"
                  className="object-cover object-[center_42%]"
                />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#201D1A]/70 to-transparent" />
                <div className="absolute bottom-5 left-5 text-white">
                  <p className="font-serif text-2xl font-bold leading-none">Rebecca Adewumi</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/85">Social media strategist</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 right-0 z-30 max-w-[185px] rounded-2xl border border-[#201D1A] bg-white p-3.5 shadow-[3px_3px_0px_#201D1A] sm:-right-3">
              <div className="font-serif text-3xl font-black tracking-tight text-[#201D1A]">+42%</div>
              <div className="mt-0.5 text-[9px] font-semibold leading-tight text-stone-600">
                Average engagement &amp; enrolment lift across active accounts
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
