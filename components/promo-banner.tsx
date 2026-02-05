import { Truck, Shield, MapPin, Star } from "lucide-react"
import Link from "next/link"

export default function PromoBanner() {
  return (
    <section className="bg-[#c8847a] py-12 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">
          Pourquoi Choisir Happy Cat Toys?
        </h2>
        <p className="text-white/90 mb-8 max-w-xl mx-auto">
          Entreprise 100% canadienne, nous livrons rapidement partout au Canada avec une garantie satisfaction totale.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-3">
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <span className="text-white font-semibold">Canadien</span>
            <span className="text-white/70 text-sm">Basé à Montréal</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-3">
              <Truck className="w-7 h-7 text-white" />
            </div>
            <span className="text-white font-semibold">Livraison Rapide</span>
            <span className="text-white/70 text-sm">2-3 jours ouvrables</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-3">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <span className="text-white font-semibold">Garantie 2 Ans</span>
            <span className="text-white/70 text-sm">Sur tous les produits</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-3">
              <Star className="w-7 h-7 text-white" />
            </div>
            <span className="text-white font-semibold">50,000+</span>
            <span className="text-white/70 text-sm">Chats heureux</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/produits"
            className="bg-white text-[#c8847a] px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
          >
            Voir les Produits
          </Link>
          <Link
            href="/a-propos"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
          >
            En Savoir Plus
          </Link>
        </div>
      </div>
    </section>
  )
}
