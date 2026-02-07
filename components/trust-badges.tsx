import { Truck, Shield, MapPin, Clock, CreditCard, RotateCcw } from "lucide-react"

const badges = [
  { icon: Truck, title: "Livraison Gratuite", subtitle: "Commandes 50$+" },
  { icon: Clock, title: "Expédition 24h", subtitle: "Livré en 2-3 jours" },
  { icon: MapPin, title: "100% Canadien", subtitle: "Basé à Montréal" },
  { icon: Shield, title: "Garantie 2 Mois", subtitle: "Satisfait ou remboursé" },
  { icon: CreditCard, title: "Paiement Sécurisé", subtitle: "SSL crypté" },
  { icon: RotateCcw, title: "Retours Gratuits", subtitle: "Sous 30 jours" },
]

function BadgeItem({ icon: Icon, title, subtitle }: typeof badges[0]) {
  return (
    <div className="flex flex-col items-center text-center px-8 flex-shrink-0">
      <div className="w-10 h-10 bg-neutral-50 rounded-full flex items-center justify-center mb-2.5">
        <Icon className="w-5 h-5 text-neutral-700" />
      </div>
      <span className="text-neutral-900 font-medium text-xs whitespace-nowrap">{title}</span>
      <span className="text-neutral-400 text-[11px] whitespace-nowrap">{subtitle}</span>
    </div>
  )
}

export default function TrustBadges() {
  return (
    <section className="bg-white py-10 border-y border-neutral-100 overflow-hidden">
      {/* Fade edges */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex animate-marquee">
          {badges.map((badge, i) => (
            <BadgeItem key={`a-${i}`} {...badge} />
          ))}
          {badges.map((badge, i) => (
            <BadgeItem key={`b-${i}`} {...badge} />
          ))}
        </div>
      </div>
    </section>
  )
}
