import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import TopPicks from "@/components/top-picks"
import TrustBadges from "@/components/trust-badges"
import BestSellers from "@/components/best-sellers"
import TreatsSection from "@/components/treats-section"
import FeaturesSection from "@/components/features-section"
import BenefitsSection from "@/components/benefits-section"
import PromoBanner from "@/components/promo-banner"
import LifestyleSection from "@/components/lifestyle-section"
import FAQSection from "@/components/faq-section"
import Newsletter from "@/components/newsletter"
import Footer from "@/components/footer"
import ShopByCategory from "@/components/shop-by-category"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <TopPicks />
      <TrustBadges />
      <BestSellers />
      <PromoBanner />
      {/* TreatsSection removed */}
      <ShopByCategory />
      <FeaturesSection />
      <BenefitsSection />
      <LifestyleSection />
      <FAQSection />
      <Newsletter />
      <Footer />
    </main>
  )
}
