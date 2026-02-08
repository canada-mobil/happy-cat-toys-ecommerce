"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { 
  Check, X, Heart, Droplets, UtensilsCrossed, Activity, 
  Moon, Stethoscope, Sparkles, AlertTriangle, BookOpen,
  Clock, ThermometerSun, Scissors, Cat
} from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

const dosIcons = [UtensilsCrossed, Droplets, Activity, Moon, Stethoscope, Sparkles, Scissors, Heart]
const dontsIcons = [UtensilsCrossed, ThermometerSun, AlertTriangle, Clock, Activity, Cat]

export default function GuidePage() {
  const { t } = useI18n()

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-brand" />
        <div className="relative py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <BookOpen className="w-12 h-12 text-white/60 mx-auto mb-6" />
            <h1 className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight">
              {t.guide.title}
            </h1>
            <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              {t.guide.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-neutral-100">
            <Image
              src="https://res.cloudinary.com/dhhdhilja/image/upload/v1770517653/purrball/guide.webp"
              alt={t.guide.title}
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-8 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-neutral-500 leading-relaxed">
            {t.guide.intro}
          </p>
        </div>
      </section>

      {/* Do's Section */}
      <section className="py-16 px-4 bg-neutral-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-10 h-10 bg-brand rounded-full flex items-center justify-center">
              <Check className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 tracking-tight">
              {t.guide.doTitle}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {t.guideDos.map((item, i) => {
              const Icon = dosIcons[i]
              return (
                <div key={item.title} className="bg-white rounded-2xl p-5 flex gap-4">
                  <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-neutral-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-neutral-900 mb-1 text-sm">{item.title}</h3>
                    <p className="text-neutral-400 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Don'ts Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
              <X className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 tracking-tight">
              {t.guide.dontTitle}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {t.guideDonts.map((item, i) => {
              const Icon = dontsIcons[i]
              return (
                <div key={item.title} className="bg-red-50/50 border border-red-100/50 rounded-2xl p-5 flex gap-4">
                  <div className="w-10 h-10 bg-red-100/50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-neutral-900 mb-1 text-sm">{item.title}</h3>
                    <p className="text-neutral-400 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Health Section */}
      <section className="py-16 px-4 bg-brand">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl md:text-2xl font-semibold text-white text-center mb-8 tracking-tight">
            {t.guide.healthTitle}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.guideHealth.map((section, index) => (
              <div key={section.title} className="rounded-2xl p-6 bg-white/5">
                <h3 className="font-medium text-white mb-4 flex items-center gap-2 text-sm">
                  {index === 0 ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <AlertTriangle className="w-4 h-4 text-amber-400" />
                  )}
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="text-white/60 text-xs flex items-start gap-2">
                      <span className="w-1 h-1 bg-white/30 rounded-full mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white/5 rounded-2xl p-6 text-center">
            <Stethoscope className="w-8 h-8 text-white/60 mx-auto mb-4" />
            <p className="text-white font-medium mb-2 text-sm">
              {t.guide.vetAdvice}
            </p>
            <p className="text-white/50 text-xs">
              {t.guide.vetDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Toy Benefits */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 text-center mb-3 tracking-tight">
            {t.guide.playTitle}
          </h2>
          <p className="text-center text-neutral-400 mb-12 max-w-2xl mx-auto text-sm">
            {t.guide.playSubtitle}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-brand rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-medium text-neutral-900 mb-2 text-sm">{t.guide.exercise}</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">{t.guide.exerciseDesc}</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-brand rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-medium text-neutral-900 mb-2 text-sm">{t.guide.mental}</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">{t.guide.mentalDesc}</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-brand rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-medium text-neutral-900 mb-2 text-sm">{t.guide.bond}</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">{t.guide.bondDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-neutral-50">
        <div className="max-w-3xl mx-auto text-center">
          <Cat className="w-10 h-10 text-neutral-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-neutral-900 mb-4 tracking-tight">
            {t.guide.ctaTitle}
          </h2>
          <p className="text-neutral-400 mb-8 text-sm">
            {t.guide.ctaSubtitle}
          </p>
          <a
            href="/produits"
            className="inline-block bg-brand text-white px-8 py-3.5 rounded-full font-medium text-sm hover:bg-brand-dark transition-all hover:scale-[1.02]"
          >
            {t.guide.ctaButton}
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
