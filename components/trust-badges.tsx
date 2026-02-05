"use client"

import { Truck, Shield, MapPin, Clock, CreditCard, RotateCcw } from "lucide-react"
import { useEffect, useRef } from "react"

const badges = [
  { icon: Truck, title: "Livraison Gratuite", subtitle: "Commandes 50$+" },
  { icon: Clock, title: "Expédition 24h", subtitle: "Livré en 2-3 jours" },
  { icon: MapPin, title: "100% Canadien", subtitle: "Basé à Montréal" },
  { icon: Shield, title: "Garantie 2 Ans", subtitle: "Satisfait ou remboursé" },
  { icon: CreditCard, title: "Paiement Sécurisé", subtitle: "SSL crypté" },
  { icon: RotateCcw, title: "Retours Gratuits", subtitle: "Sous 30 jours" },
]

export default function TrustBadges() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const badgeElements = entry.target.querySelectorAll('.trust-badge')
            // Animate from right to left by reversing the order
            Array.from(badgeElements).reverse().forEach((badge, index) => {
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
    <section className="bg-[#f5f2ed] py-10 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto" ref={containerRef}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map((badge, index) => (
            <div 
              key={badge.title} 
              className="trust-badge flex flex-col items-center text-center opacity-0 transform translate-x-12 transition-all duration-1000 ease-out"
            >
              <div className="w-12 h-12 bg-[#6b8e7b]/10 rounded-full flex items-center justify-center mb-2">
                <badge.icon className="w-6 h-6 text-[#6b8e7b]" />
              </div>
              <span className="text-foreground font-medium text-sm">{badge.title}</span>
              <span className="text-muted-foreground text-xs">{badge.subtitle}</span>
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
