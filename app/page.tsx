import Hero from "@/components/sections/Hero";
import InsuranceCategoriesGrid from "@/components/sections/InsuranceCategoriesGrid";
import PartnersGrid from "@/components/sections/PartnersGrid";
import StatsSection from "@/components/sections/StatsSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BlogSection from "@/components/sections/BlogSection";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";

export default function Home() {
  return (
    <>
      <Hero />
      <InsuranceCategoriesGrid />
      <PartnersGrid />
      <StatsSection />
      <BenefitsSection />
      <TestimonialsSection />
      <BlogSection />
      <CTASection />
      <FAQSection />
    </>
  );
}
