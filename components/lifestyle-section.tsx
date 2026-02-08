"use client"

import Image from "next/image"
import { Shield, Truck, Heart } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

export default function LifestyleSection() {
  const { locale } = useI18n()
  const isFr = locale === 'fr'

  return (
    <section className="relative bg-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
          {/* Image Side */}
          <div className="relative h-[300px] lg:h-auto">
            <Image
              src="https://res.cloudinary.com/dhhdhilja/image/upload/v1770517663/purrball/homebas.jpg.webp"
              alt={isFr ? "Chat heureux jouant avec son jouet" : "Happy cat playing with its toy"}
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
              {isFr ? 'Conçu avec amour pour votre chat' : 'Designed with love for your cat'}
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight tracking-tight mb-6">
              {isFr ? "Fait Avec Amour Pour le Bonheur de Votre Animal" : "Made With Love For Your Pet's Happiness"}
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed mb-8 max-w-md">
              {isFr ? "Chez Purrball, nous croyons au pouvoir du jeu intelligent. Nous créons des produits innovants avec beaucoup d'amour, toujours à l'écoute de ce dont vous et vos amis à fourrure avez besoin. Nous existons pour renforcer le lien entre vous et votre animal." : "At Purrball, we believe in the power of smart play. We create innovative products with lots of love, always listening to what you and your furry friends need. We exist to strengthen the bond between you and your pet."}
            </p>

            {/* Trust Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm text-neutral-300">{isFr ? 'Garantie 2 mois — Satisfait ou remboursé' : '2-month warranty — Satisfaction guaranteed'}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Truck className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm text-neutral-300">{isFr ? 'Livraison rapide 24-72h partout au Canada' : 'Fast 24-72h delivery across Canada'}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm text-neutral-300">{isFr ? '50,000+ chats heureux à travers le Canada' : '50,000+ happy cats across Canada'}</span>
              </div>
            </div>

            <a
              href="/a-propos"
              className="inline-flex items-center gap-2 bg-white text-neutral-900 font-medium px-6 py-3 rounded-full text-sm hover:bg-neutral-100 transition-colors w-fit"
            >
              {isFr ? 'En savoir plus' : 'Learn more'}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
