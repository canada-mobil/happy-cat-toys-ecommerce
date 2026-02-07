import Image from "next/image"
import { Shield, Truck, Heart } from "lucide-react"

export default function LifestyleSection() {
  return (
    <section className="relative bg-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
          {/* Image Side */}
          <div className="relative h-[300px] lg:h-auto">
            <Image
              src="/homebas.jpg.webp"
              alt="Chat heureux jouant avec son jouet"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
              className="object-cover object-right"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-neutral-900/30 hidden lg:block" />
          </div>

          {/* Content Side */}
          <div className="flex flex-col justify-center px-8 py-12 lg:px-16 lg:py-20">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-400 mb-4">
              Conçu avec amour pour votre chat
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight tracking-tight mb-6">
              Made With Love For Your Pet's Happiness
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed mb-8 max-w-md">
              Chez Purrball, nous croyons au pouvoir du jeu intelligent. Nous créons des produits innovants avec beaucoup d'amour, toujours à l'écoute de ce dont vous et vos amis à fourrure avez besoin. Nous existons pour renforcer le lien entre vous et votre animal.
            </p>

            {/* Trust Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm text-neutral-300">Garantie 2 mois — Satisfait ou remboursé</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Truck className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm text-neutral-300">Livraison rapide 24-72h partout au Canada</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm text-neutral-300">50,000+ chats heureux à travers le Canada</span>
              </div>
            </div>

            <a
              href="/a-propos"
              className="inline-flex items-center gap-2 bg-white text-neutral-900 font-medium px-6 py-3 rounded-full text-sm hover:bg-neutral-100 transition-colors w-fit"
            >
              En savoir plus
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
