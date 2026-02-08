"use client"

import { Truck, Shield, MapPin, Star } from "lucide-react"
import Link from "next/link"
import { useI18n } from "@/lib/i18n-context"

function BadgeItem({ icon: Icon, label, sub }: { icon: typeof MapPin, label: string, sub: string }) {
  return (
    <div className="flex items-center gap-3 px-8 flex-shrink-0">
      <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
        <Icon className="w-4.5 h-4.5 text-neutral-700" />
      </div>
      <div className="text-left">
        <span className="text-neutral-900 font-medium text-sm whitespace-nowrap block">{label}</span>
        <span className="text-neutral-400 text-xs whitespace-nowrap block">{sub}</span>
      </div>
    </div>
  )
}

export default function PromoBanner() {
  const { locale } = useI18n()
  const isFr = locale === 'fr'

  const badges = isFr ? [
    { icon: MapPin, label: "100% Canadien", sub: "Basé à Vancouver" },
    { icon: Truck, label: "Livraison 24-72h", sub: "Canada Post" },
    { icon: Shield, label: "Garantie 2 Mois", sub: "Satisfait ou remboursé" },
    { icon: Star, label: "50,000+", sub: "Chats heureux" },
  ] : [
    { icon: MapPin, label: "100% Canadian", sub: "Based in Vancouver" },
    { icon: Truck, label: "Delivery 24-72h", sub: "Canada Post" },
    { icon: Shield, label: "2-Month Warranty", sub: "Satisfaction guaranteed" },
    { icon: Star, label: "50,000+", sub: "Happy cats" },
  ]

  return (
    <section className="bg-neutral-50 py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-400 mb-3">
          {isFr ? 'Pourquoi nous choisir' : 'Why choose us'}
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-4">
          {isFr ? 'La confiance, simplement.' : 'Trust, simply.'}
        </h2>
        <p className="text-neutral-500 mb-14 max-w-xl mx-auto">
          {isFr ? 'Entreprise 100% canadienne basée à Vancouver. Livraison rapide, garantie satisfaction, et un service client qui répond vraiment.' : '100% Canadian company based in Vancouver. Fast delivery, satisfaction guarantee, and customer service that truly responds.'}
        </p>
        
        {/* Marquee animation - smooth right to left */}
        <div className="relative overflow-hidden mb-14">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-neutral-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-neutral-50 to-transparent z-10" />
          
          <div className="flex animate-marquee will-change-transform">
            {[0, 1, 2, 3].map(set =>
              badges.map((badge, i) => (
                <BadgeItem key={`${set}-${i}`} {...badge} />
              ))
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/produits"
            className="bg-brand hover:bg-brand-dark text-white px-8 py-3 rounded-full font-medium text-sm transition-all hover:scale-[1.02]"
          >
            {isFr ? 'Voir les Produits' : 'View Products'}
          </Link>
          <Link
            href="/a-propos"
            className="text-neutral-500 hover:text-neutral-900 font-medium px-8 py-3 text-sm transition-colors"
          >
            {isFr ? 'En savoir plus →' : 'Learn more →'}
          </Link>
        </div>
      </div>
    </section>
  )
}
