import { Truck, Shield, MapPin, Star } from "lucide-react"
import Link from "next/link"

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
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3 shadow-sm">
              <MapPin className="w-5 h-5 text-neutral-700" />
            </div>
            <span className="text-neutral-900 font-medium text-sm">100% Canadien</span>
            <span className="text-neutral-400 text-xs mt-0.5">Basé à Montréal</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3 shadow-sm">
              <Truck className="w-5 h-5 text-neutral-700" />
            </div>
            <span className="text-neutral-900 font-medium text-sm">Livraison 24-72h</span>
            <span className="text-neutral-400 text-xs mt-0.5">Canada Post</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3 shadow-sm">
              <Shield className="w-5 h-5 text-neutral-700" />
            </div>
            <span className="text-neutral-900 font-medium text-sm">Garantie 2 Mois</span>
            <span className="text-neutral-400 text-xs mt-0.5">Satisfait ou remboursé</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3 shadow-sm">
              <Star className="w-5 h-5 text-neutral-700" />
            </div>
            <span className="text-neutral-900 font-medium text-sm">50,000+</span>
            <span className="text-neutral-400 text-xs mt-0.5">Chats heureux</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/produits"
            className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 rounded-full font-medium text-sm transition-all hover:scale-[1.02]"
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
