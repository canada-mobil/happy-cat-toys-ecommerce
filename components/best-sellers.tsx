"use client"

import Image from "next/image"
import { useCart } from "@/lib/cart-context"
import { toast } from "sonner"
import { ShoppingCart } from "lucide-react"

const products = [
  {
    id: "smart-interactive-ball",
    name: "Smart Interactive Cats Ball Toy",
    description: "Balle intelligente auto-roulante pour chat",
    price: 4.99,
    originalPrice: 11.99,
    image: "/smart_interactive_cats_ball_toy_red.png.webp",
    soldOut: false,
    color: "Rouge"
  },
  {
    id: "smart-interactive-ball",
    name: "Smart Interactive Cats Ball Toy",
    description: "Balle intelligente auto-roulante pour chat",
    price: 4.99,
    originalPrice: 11.99,
    image: "/smart_interactive_cats_ball_toy_gray.png.avif",
    soldOut: false,
    color: "Gris"
  },
  {
    id: "smart-interactive-ball",
    name: "Smart Interactive Cats Ball Toy",
    description: "Balle intelligente auto-roulante pour chat",
    price: 4.99,
    originalPrice: 11.99,
    image: "/smart_interactive_cats_ball_toy_green.png.avif",
    soldOut: false,
    color: "Vert"
  }
]

export default function BestSellers() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-neutral-500 text-base md:text-lg leading-relaxed">
          Des jouets pour chats premium conçus pour stimuler l&apos;instinct de jeu de votre félin, 
          favoriser l&apos;exercice et renforcer le lien avec votre compagnon. 
          Parce qu&apos;un chat qui joue est un chat heureux.
        </p>
      </div>
    </section>
  )
}

export function BestSellersProducts() {
  return (
    <section id="best-sellers" className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-400 text-center mb-3">
          Nos produits
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center text-neutral-900 mb-4">
          Meilleures Ventes
        </h2>
        
        <p className="text-center text-neutral-500 max-w-xl mx-auto mb-12">
          Découvrez nos jouets les plus populaires qui font le bonheur des chats 
          et de leurs propriétaires.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product }: { product: typeof products[0] }) {
  const { addItem } = useCart()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    if (!product.soldOut) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice,
        image: product.image,
      })
    }
  }

  return (
    <div className="group">
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
          sizes="(max-width: 768px) 50vw, 33vw"
          className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Product Info */}
      <div className="px-1">
        <p className="text-[11px] text-neutral-400 uppercase tracking-wider mb-1">{product.color}</p>
        <h3 className="font-medium text-neutral-900 text-sm leading-snug mb-2">
          {product.name}
        </h3>
        
        {/* Price */}
        <div className="mb-4 flex items-center gap-2">
          <span className="text-base font-semibold text-neutral-900">
            CA${product.price.toFixed(2)}
          </span>
          {product.originalPrice > product.price && (
            <span className="text-sm text-neutral-400 line-through">
              CA${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
        
        {/* Add Button */}
        <button
          onClick={handleAddToCart}
          disabled={product.soldOut}
          className="w-full bg-neutral-900 hover:bg-black text-white px-4 py-2.5 rounded-full font-medium text-xs tracking-wide transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          <ShoppingCart className="w-3.5 h-3.5" />
          Ajouter au panier
        </button>
      </div>
    </div>
  )
}
