"use client"

import Image from "next/image"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/lib/cart-context"

const topPicks = [
  {
    id: "smart-interactive-ball",
    name: "Smart Interactive Ball",
    subtitle: "Rouge",
    description: "Mouvements intelligents auto-roulants avec 3 modes de jeu interactifs",
    price: 4.99,
    originalPrice: 11.99,
    image: "/smart_interactive_cats_ball_toy_red.png.webp",
    badge: "SAVE 58%",
    isNew: true,
  },
  {
    id: "smart-interactive-ball",
    name: "Smart Interactive Ball",
    subtitle: "Gris",
    description: "Silencieux et rechargeable USB — 2h d'autonomie continue",
    price: 4.99,
    originalPrice: 11.99,
    image: "/smart_interactive_cats_ball_toy_gray.png.avif",
    badge: "SAVE 58%",
    isNew: false,
  },
  {
    id: "smart-interactive-ball",
    name: "Smart Interactive Ball",
    subtitle: "Vert",
    description: "Matériaux écologiques non toxiques, sécuritaire pour votre chat",
    price: 4.99,
    originalPrice: 11.99,
    image: "/smart_interactive_cats_ball_toy_green.png.avif",
    badge: "SAVE 58%",
    isNew: false,
  },
]

export default function TopPicks() {
  const { addItem } = useCart()

  const handleAddToCart = (product: typeof topPicks[0], e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addItem({
      id: `${product.id}-${product.subtitle}`,
      name: `${product.name} (${product.subtitle})`,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
    })
  }

  return (
    <section className="bg-white py-16 md:py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-[40px] font-semibold text-neutral-900 tracking-tight leading-tight mb-4">
            Elevate Your Cat's Life with Top Picks
          </h2>
          <p className="text-neutral-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Discover curated products designed for your pet's well-being and happiness, because smart choices lead to smarter, healthier pets.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {topPicks.map((product, index) => (
            <Link
              key={index}
              href={`/produits/${product.id}`}
              className="group block"
            >
              <div className="relative aspect-square bg-neutral-50 rounded-2xl overflow-hidden mb-4">
                {/* Badges */}
                <div className="absolute top-3 left-3 z-10 flex gap-1.5">
                  {product.isNew && (
                    <span className="bg-neutral-900 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide">
                      New
                    </span>
                  )}
                  <span className="bg-red-500 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide">
                    {product.badge}
                  </span>
                </div>

                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Info */}
              <div className="px-1">
                <h3 className="font-semibold text-neutral-900 text-base mb-1">
                  {product.name}
                </h3>
                <p className="text-neutral-400 text-xs leading-relaxed mb-3">
                  {product.description}
                </p>

                {/* Price */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg font-bold text-neutral-900">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-sm text-neutral-300 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                </div>

                {/* Add to Cart */}
                <button
                  onClick={(e) => handleAddToCart(product, e)}
                  className="w-full bg-neutral-900 hover:bg-black text-white px-4 py-3 rounded-full font-medium text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  ADD TO CART
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
