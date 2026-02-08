"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Heart, Leaf, Truck, Shield, Award, Users, MapPin, Cat } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

export default function AboutPage() {
  const { t } = useI18n()

  const values = [
    { icon: Heart, title: t.about.passion, description: t.about.passionDesc },
    { icon: Leaf, title: t.about.quality, description: t.about.qualityDesc },
    { icon: Truck, title: t.about.fastDelivery, description: t.about.fastDeliveryDesc },
    { icon: Shield, title: t.about.guaranteeTitle, description: t.about.guaranteeDesc },
  ]

  const stats = [
    { number: "50,000+", label: t.about.happyCats },
    { number: "2-3", label: t.about.deliveryDays },
    { number: "100%", label: t.about.canadian },
    { number: "2 mois", label: t.about.warranty },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-brand" />
        <div className="relative py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Cat className="w-12 h-12 text-white/80 mx-auto mb-6" />
            <h1 className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight">
              {t.about.title}
            </h1>
            <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              {t.about.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-neutral-50 py-10 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl md:text-3xl font-semibold text-neutral-900">{stat.number}</p>
              <p className="text-neutral-400 text-xs mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-6 tracking-tight">
              {t.about.storyTitle}
            </h2>
            <div className="space-y-4 text-neutral-500 text-sm leading-relaxed">
              <p>{t.about.story1}</p>
              <p>{t.about.story2}</p>
              <p>{t.about.story3}</p>
            </div>
          </div>
          <div className="hidden" />
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-neutral-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 text-center mb-12 tracking-tight">
            {t.about.valuesTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-5 h-5 text-neutral-600" />
                </div>
                <h3 className="font-medium text-neutral-900 mb-2 text-sm">{value.title}</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 text-center mb-4 tracking-tight">
            {t.about.whyTitle}
          </h2>
          <p className="text-center text-neutral-400 mb-12 max-w-2xl mx-auto text-sm">
            {t.about.whySubtitle}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-brand rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-medium text-neutral-900 mb-2 text-sm">{t.about.localTitle}</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">{t.about.localDesc}</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-brand rounded-full flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-medium text-neutral-900 mb-2 text-sm">{t.about.freeShipTitle}</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">{t.about.freeShipDesc}</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-brand rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-medium text-neutral-900 mb-2 text-sm">{t.about.qualityGuarantee}</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">{t.about.qualityGuaranteeDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-brand">
        <div className="max-w-4xl mx-auto text-center">
          <Users className="w-10 h-10 text-white/60 mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 tracking-tight">
            {t.about.teamTitle}
          </h2>
          <p className="text-white/60 leading-relaxed mb-8 max-w-2xl mx-auto text-sm">
            {t.about.teamDesc}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="bg-white/10 text-white/80 px-4 py-2 rounded-full text-xs">{t.about.employees}</span>
            <span className="bg-white/10 text-white/80 px-4 py-2 rounded-full text-xs">{t.about.officeCats}</span>
            <span className="bg-white/10 text-white/80 px-4 py-2 rounded-full text-xs">{t.about.location}</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-4 tracking-tight">
            {t.about.ctaTitle}
          </h2>
          <p className="text-neutral-400 mb-8 text-sm">
            {t.about.ctaSubtitle}
          </p>
          <a
            href="/produits"
            className="inline-block bg-brand text-white px-8 py-3.5 rounded-full font-medium text-sm hover:bg-brand-dark transition-all hover:scale-[1.02]"
          >
            {t.about.ctaButton}
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
