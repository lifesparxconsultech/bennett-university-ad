import FAQSection from "@/src/components/home/faq";
import Hero from "@/src/components/home/hero";
import InvestmentSection from "@/src/components/home/investment";
import PlacementSection from "@/src/components/home/placement";
import SpecializationsSection from "@/src/components/home/specialization";
import StatsSection from "@/src/components/home/stats";
import WhyMBASection from "@/src/components/home/why";

export default function Home(){
  return(
    <>
      <Hero />
      <StatsSection />
      <WhyMBASection />
      <SpecializationsSection />
      <InvestmentSection />
      <PlacementSection />
      <FAQSection />
    </>
  )
}