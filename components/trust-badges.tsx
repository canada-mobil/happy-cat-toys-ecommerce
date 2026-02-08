"use client"

import { Truck, Shield, MapPin, Clock, CreditCard, RotateCcw } from "lucide-react"
import { useEffect, useRef } from "react"
import { useI18n } from "@/lib/i18n-context"

export default function TrustBadges() {
  const { locale } = useI18n()
  const badges = locale === 'fr' ? [
    { icon: Truck, title: "Livraison Gratuite", subtitle: "Commandes 50$+" },
    { icon: Clock, title: "Expédition 24h", subtitle: "Livré en 2-3 jours" },
    { icon: MapPin, title: "100% Canadien", subtitle: "Basé à Vancouver" },
    { icon: Shield, title: "Garantie 2 Mois", subtitle: "Satisfait ou remboursé" },
    { icon: CreditCard, title: "Paiement Sécurisé", subtitle: "SSL crypté" },
    { icon: RotateCcw, title: "Retours Gratuits", subtitle: "Sous 30 jours" },
  ] : [
    { icon: Truck, title: "Free Shipping", subtitle: "Orders $50+" },
    { icon: Clock, title: "Ships in 24h", subtitle: "Delivered in 2-3 days" },
    { icon: MapPin, title: "100% Canadian", subtitle: "Based in Vancouver" },
    { icon: Shield, title: "2-Month Warranty", subtitle: "Satisfaction guaranteed" },
    { icon: CreditCard, title: "Secure Payment", subtitle: "SSL encrypted" },
    { icon: RotateCcw, title: "Free Returns", subtitle: "Within 30 days" },
  ]
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const badgeElements = entry.target.querySelectorAll('.trust-badge')
            Array.from(badgeElements).forEach((badge, index) => {
              setTimeout(() => {
                badge.classList.add('animate-slide-in')
              }, index * 150)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-white py-12 px-4 border-y border-neutral-100 overflow-hidden">
      <div className="max-w-6xl mx-auto" ref={containerRef}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {badges.map((badge) => (
            <div 
              key={badge.title} 
              className="trust-badge flex flex-col items-center text-center opacity-0 translate-x-12 transition-all duration-700 ease-out"
            >
              <div className="w-10 h-10 bg-neutral-50 rounded-full flex items-center justify-center mb-2.5">
                <badge.icon className="w-5 h-5 text-neutral-700" />
              </div>
              <span className="text-neutral-900 font-medium text-xs">{badge.title}</span>
              <span className="text-neutral-400 text-[11px]">{badge.subtitle}</span>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .animate-slide-in {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }
      `}</style>
    </section>
  )
}
