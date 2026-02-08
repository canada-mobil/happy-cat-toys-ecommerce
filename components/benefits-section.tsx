"use client"

import { Eye, Heart, User } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

export default function BenefitsSection() {
  const { t } = useI18n()

  const benefits = [
    { icon: Eye, number: "01", title: t.benefitsSection.benefit1Title, description: t.benefitsSection.benefit1Desc },
    { icon: Heart, number: "02", title: t.benefitsSection.benefit2Title, description: t.benefitsSection.benefit2Desc },
    { icon: User, number: "03", title: t.benefitsSection.benefit3Title, description: t.benefitsSection.benefit3Desc },
  ]

  return (
    <section className="bg-neutral-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-400 text-center mb-3">
          {t.benefitsSection.label}
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center text-neutral-900 mb-16">
          {t.benefitsSection.title}
        </h2>
        
        <div className="space-y-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-6">
              <span className="text-3xl font-bold text-neutral-200 flex-shrink-0 w-12">{benefit.number}</span>
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-1.5">
                  {benefit.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed max-w-lg">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
