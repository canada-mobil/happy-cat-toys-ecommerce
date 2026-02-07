import { Truck, Shield, MapPin, Star } from "lucide-react"
import Link from "next/link"

const badges = [
  { icon: MapPin, label: "100% Canadien", sub: "Basé à Montréal" },
  { icon: Truck, label: "Livraison 24-72h", sub: "Canada Post" },
  { icon: Shield, label: "Garantie 2 Mois", sub: "Satisfait ou remboursé" },
  { icon: Star, label: "50,000+", sub: "Chats heureux" },
]

function BadgeItem({ icon: Icon, label, sub }: typeof badges[0]) {
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
  return (
    <section className="bg-neutral-50 py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-400 mb-3">
          Pourquoi nous choisir
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-4">
          La confiance, simplement.
        </h2>
        <p className="text-neutral-500 mb-14 max-w-xl mx-auto">
          Entreprise 100% canadienne basée à Montréal. Livraison rapide, garantie satisfaction, et un service client qui répond vraiment.
        </p>
        
        {/* Marquee animation - smooth right to left */}
        <div className="relative overflow-hidden mb-14">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-neutral-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-neutral-50 to-transparent z-10" />
          
          <div className="flex animate-marquee">
            {/* First set */}
            {badges.map((badge, i) => (
              <BadgeItem key={`a-${i}`} {...badge} />
            ))}
            {/* Duplicate for seamless loop */}
            {badges.map((badge, i) => (
              <BadgeItem key={`b-${i}`} {...badge} />
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/produits"
            className="bg-brand hover:bg-brand-dark text-white px-8 py-3 rounded-full font-medium text-sm transition-all hover:scale-[1.02]"
          >
            Voir les Produits
          </Link>
          <Link
            href="/a-propos"
            className="text-neutral-500 hover:text-neutral-900 font-medium px-8 py-3 text-sm transition-colors"
          >
            En savoir plus →
          </Link>
        </div>
      </div>
    </section>
  )
}
