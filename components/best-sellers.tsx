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
    price: 14.49,
    originalPrice: 20.95,
    image: "/smart_interactive_cats_ball_toy_red.png.webp",
    soldOut: false,
    color: "Rouge"
  },
  {
    id: "smart-interactive-ball",
    name: "Smart Interactive Cats Ball Toy",
    description: "Balle intelligente auto-roulante pour chat",
    price: 14.49,
    originalPrice: 20.95,
    image: "/smart_interactive_cats_ball_toy_gray.png.avif",
    soldOut: false,
    color: "Gris"
  },
  {
    id: "smart-interactive-ball",
    name: "Smart Interactive Cats Ball Toy",
    description: "Balle intelligente auto-roulante pour chat",
    price: 14.49,
    originalPrice: 20.95,
    image: "/smart_interactive_cats_ball_toy_green.png.avif",
    soldOut: false,
    color: "Vert"
  }
]

export default function BestSellers() {
  return (
    <section className="bg-[#5a7a66] py-12 px-4">
      <div className="max-w-6xl mx-auto text-center text-white">
        <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-pretty">
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
    <section id="best-sellers" className="bg-[#f5f2ed] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-foreground mb-6">
          Meilleures Ventes
        </h2>
        
        <p className="text-center text-muted-foreground max-w-xl mx-auto mb-4 text-pretty">
          Découvrez nos jouets les plus populaires qui font le bonheur des chats 
          et de leurs propriétaires depuis des années.
        </p>

        <a href="#" className="block text-center text-[#c8847a] hover:underline mb-8">
          Voir tout
        </a>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {products.map((product) => (
            <ProductCard key={`${product.id}-2`} product={{...product, id: `${product.id}-duplicate`}} />
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
    <div className="group relative">
      <div className="relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
        {/* Stock Badge */}
        {product.soldOut && (
          <span className="absolute top-3 left-3 z-10 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-full">
            ÉPUISÉ
          </span>
        )}
        
        {/* Best Seller Badge */}
        {product.price > 20 && (
          <span className="absolute top-3 right-3 z-10 bg-orange-500 text-white text-xs font-medium px-2 py-1 rounded-full">
            BEST SELLER
          </span>
        )}
        
        {/* Product Image */}
        <div className="relative aspect-square bg-gray-50">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-4 px-2">
        <h3 className="font-semibold text-gray-900 text-sm leading-tight group-hover:text-[#6b8e7b] transition-colors line-clamp-2 mb-3">
          {product.name}
        </h3>
        
        {/* Price */}
        <div className="mb-3 flex items-center gap-2">
          <span className="text-lg font-bold text-[#6b8e7b]">
            ${product.price.toFixed(2)} CAD
          </span>
          {product.originalPrice > product.price && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.originalPrice.toFixed(2)} CAD
            </span>
          )}
        </div>
        
        {/* Add Button */}
        <button
          onClick={handleAddToCart}
          disabled={product.soldOut}
          className="w-full bg-[#6b8e7b] hover:bg-[#5a7a66] text-white px-4 py-2.5 rounded-lg font-medium text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
        >
          <ShoppingCart className="w-4 h-4" />
          AJOUTER
        </button>
      </div>
    </div>
  )
}
