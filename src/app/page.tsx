import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TickerBar } from "@/components/TickerBar";
import { ServicesBento } from "@/components/ServicesBento";
import { CampaignSnapshots } from "@/components/CampaignSnapshots";
import { MyContentSection } from "@/components/MyContentSection";
import { FeaturedCaseStudy } from "@/components/FeaturedCaseStudy";
import { ContentCalendarSection } from "@/components/ContentCalendarSection";
import { PlatformEnergySection } from "@/components/PlatformEnergySection";
import { ProcessSteps } from "@/components/ProcessSteps";
import { OutcomesAndQuote } from "@/components/OutcomesAndQuote";
import { OffersPricing } from "@/components/OffersPricing";
import { ClosingCTA } from "@/components/ClosingCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F5EE] text-[#201D1A]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TickerBar />
        <ServicesBento />
        <CampaignSnapshots />
        <MyContentSection />
        <FeaturedCaseStudy />
        <ContentCalendarSection />
        <PlatformEnergySection />
        <ProcessSteps />
        <OutcomesAndQuote />
        <OffersPricing />
        <ClosingCTA />
      </main>
      <Footer />
    </div>
  );
}
