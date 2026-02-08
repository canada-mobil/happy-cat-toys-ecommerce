"use client"

import Image from "next/image"
import { ChevronRight, ShoppingCart } from "lucide-react"
import { useRef } from "react"
import { useCart } from "@/lib/cart-context"

const products = [
  {
    id: "smart-interactive-ball-red",
    name: "Smart Interactive Ball - Rouge",
    description: "Balle intelligente auto-roulante pour chat",
    price: 4.99,
    image: "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517783/purrball/smart_interactive_cats_ball_toy_red.png.webp",
    soldOut: false
  },
  {
    id: "smart-interactive-ball-gray",
    name: "Smart Interactive Ball - Gris",
    description: "Balle intelligente auto-roulante pour chat",
    price: 4.99,
    image: "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517775/purrball/smart_interactive_cats_ball_toy_gray.png.webp",
    soldOut: false
  },
  {
    id: "smart-interactive-ball-green",
    name: "Smart Interactive Ball - Vert",
    description: "Balle intelligente auto-roulante pour chat",
    price: 4.99,
    image: "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517777/purrball/smart_interactive_cats_ball_toy_green.png.webp",
    soldOut: false
  }
]

export default function TreatsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const { addItem } = useCart()

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' })
    }
  }

  const handleAddToCart = (product: any, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (!product.soldOut) {
      addItem({
        id: product.id.toString(),
        name: product.name,
        price: product.price,
        originalPrice: product.price,
        image: product.image,
      })
    }
  }

  return (
    <section className="bg-white py-16 px-4 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-400 text-center mb-3">
          Collection
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center text-neutral-900 mb-12">
          Toutes les couleurs
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              {/* Product Image */}
              <div className="relative aspect-square bg-neutral-50 rounded-2xl overflow-hidden mb-4">
                {product.soldOut && (
                  <span className="absolute top-3 left-3 z-10 bg-neutral-900 text-white text-[10px] font-medium px-2.5 py-1 rounded-full">
                    ÉPUISÉ
                  </span>
                )}
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="text-center">
                <h3 className="font-medium text-neutral-900 text-sm mb-2">
                  {product.name}
                </h3>
                <p className="text-neutral-400 text-xs mb-3">{product.description}</p>
                
                <div className="mb-4">
                  <span className="text-base font-semibold text-neutral-900">
                    CA${product.price.toFixed(2)}
                  </span>
                </div>
                
                <button
                  onClick={(e) => handleAddToCart(product, e)}
                  disabled={product.soldOut}
                  className="w-full bg-brand hover:bg-brand-dark text-white px-4 py-2.5 rounded-full font-medium text-xs tracking-wide transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  {product.soldOut ? 'Épuisé' : 'Ajouter au panier'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
