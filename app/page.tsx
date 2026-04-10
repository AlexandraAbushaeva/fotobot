import { Header } from "@/components/landing/header"
import { HeroSection } from "@/components/landing/hero-section"
import { MarqueeSection } from "@/components/landing/marquee-section"
import { BeforeAfterSection } from "@/components/landing/before-after-section"
import { GallerySection } from "@/components/landing/gallery-section"
import { BenefitsSection } from "@/components/landing/benefits-section"
import { ComparisonSection } from "@/components/landing/comparison-section"
import { HowItWorksSection } from "@/components/landing/how-it-works-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { FAQSection } from "@/components/landing/faq-section"
import { CTASection } from "@/components/landing/cta-section"
import { Footer } from "@/components/landing/footer"
import { FloatingCTA } from "@/components/landing/floating-cta"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <FloatingCTA />
      <HeroSection />
      <MarqueeSection />
      <BeforeAfterSection />
      <GallerySection />
      <BenefitsSection />
      <ComparisonSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
