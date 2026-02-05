"use client"

import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { useRef } from "react"

const products = [
  {
    id: 1,
    name: "Balle Grelot Interactive",
    description: "Balle avec grelot pour stimuler la chasse",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop&crop=center",
    soldOut: false
  },
  {
    id: 2,
    name: "Poisson Herbe à Chat",
    description: "Poisson en peluche avec herbe à chat bio",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=400&fit=crop&crop=center",
    soldOut: false
  },
  {
    id: 3,
    name: "Plume Arc-en-ciel",
    description: "Plume colorée sur bâton flexible",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=400&h=400&fit=crop&crop=center",
    soldOut: true
  },
  {
    id: 4,
    name: "Souris Musicale",
    description: "Souris qui couine au toucher",
    price: 7.49,
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop&crop=center",
    soldOut: false
  }
]

export default function TreatsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' })
    }
  }

  return (
    <section className="bg-[#f5f2ed] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-foreground mb-8">
          Jouets & Accessoires
        </h2>

        <div className="relative">
          <div 
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product) => (
              <div key={product.id} className="flex-shrink-0 w-[45%] md:w-[280px] snap-start">
                <div className="relative aspect-square bg-white rounded-lg overflow-hidden mb-3">
                  {product.soldOut && (
                    <span className="absolute top-2 left-2 z-10 text-xs font-semibold text-foreground bg-white/80 px-2 py-1 rounded">
                      ÉPUISÉ
                    </span>
                  )}
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-[#c8847a] font-medium text-sm md:text-base leading-tight mb-1">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm mb-1">
                  {product.description}
                </p>
                <p className="text-foreground font-semibold">
                  ${product.price.toFixed(2)} CAD
                </p>
              </div>
            ))}
          </div>

          {/* Scroll Button */}
          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/3 -translate-y-1/2 bg-[#c8847a] text-white p-3 rounded-full shadow-lg hover:bg-[#b5736a] transition-colors hidden md:block"
            aria-label="Voir plus"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
