import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import TrustBadges from "@/components/trust-badges"
import BestSellers from "@/components/best-sellers"
import TreatsSection from "@/components/treats-section"
import FeaturesSection from "@/components/features-section"
import BenefitsSection from "@/components/benefits-section"
import PromoBanner from "@/components/promo-banner"
import FAQSection from "@/components/faq-section"
import Newsletter from "@/components/newsletter"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TrustBadges />
      <BestSellers />
      <PromoBanner />
      <TreatsSection />
      <FeaturesSection />
      <BenefitsSection />
      <FAQSection />
      <Newsletter />
      <Footer />
    </main>
  )
}
