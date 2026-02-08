"use client"

import { Zap, Heart, Shield } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

export default function FeaturesSection() {
  const { t } = useI18n()

  const features = [
    { icon: Zap, title: t.featuresSection.feature1Title, description: t.featuresSection.feature1Desc },
    { icon: Heart, title: t.featuresSection.feature2Title, description: t.featuresSection.feature2Desc },
    { icon: Shield, title: t.featuresSection.feature3Title, description: t.featuresSection.feature3Desc },
  ]

  return (
    <section className="bg-white py-20 px-4 border-t border-neutral-100">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-400 text-center mb-3">
          {t.featuresSection.label}
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center text-neutral-900 mb-16">
          {t.featuresSection.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-neutral-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <feature.icon className="w-5 h-5 text-neutral-700" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
