"use client"

import Image from "next/image"
import { ChevronRight, ShoppingCart } from "lucide-react"
import { useRef } from "react"
import { useCart } from "@/lib/cart-context"

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
    <section className="bg-[#f5f2ed] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-foreground mb-8">
          Jouets & Accessoires
        </h2>

        {/* Desktop Layout */}
        <div className="relative hidden md:block">
          <div 
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product) => (
              <div key={product.id} className="flex-shrink-0 w-[280px] snap-start group relative">
                <div className="relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                  {/* Stock Badge */}
                  {product.soldOut && (
                    <span className="absolute top-3 left-3 z-10 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                      ÉPUISÉ
                    </span>
                  )}
                  
                  {/* Best Seller Badge */}
                  {product.price > 10 && (
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
                  <div className="mb-3">
                    <span className="text-lg font-bold text-[#6b8e7b]">
                      ${product.price.toFixed(2)} CAD
                    </span>
                  </div>
                  
                  {/* Add Button */}
                  <button
                    onClick={(e) => handleAddToCart(product, e)}
                    disabled={product.soldOut}
                    className="w-full bg-[#6b8e7b] hover:bg-[#5a7a66] text-white px-4 py-2.5 rounded-lg font-medium text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    AJOUTER
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Button */}
          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/3 -translate-y-1/2 bg-[#c8847a] text-white p-3 rounded-full shadow-lg hover:bg-[#b5736a] transition-colors"
            aria-label="Voir plus"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Layout - Compact */}
        <div className="md:hidden">
          <div className="relative">
            <div 
              ref={scrollRef}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {products.map((product, index) => (
                <div key={product.id} className="flex-shrink-0 w-full snap-center px-6">
                  <div className="bg-white rounded-xl overflow-hidden shadow-md mx-auto max-w-xs">
                    {/* Product Image */}
                    <div className="relative aspect-[4/3] bg-gray-50">
                      {/* Badges */}
                      <div className="absolute top-2 left-2 right-2 flex justify-between z-10">
                        {product.soldOut && (
                          <span className="bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                            ÉPUISÉ
                          </span>
                        )}
                        {product.price > 10 && !product.soldOut && (
                          <span className="bg-orange-500 text-white text-xs font-medium px-2 py-1 rounded-full ml-auto">
                            BEST SELLER
                          </span>
                        )}
                      </div>
                      
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-contain p-4"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="p-4 text-center">
                      <h3 className="font-semibold text-base text-gray-900 mb-1 leading-tight">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-xs mb-3">
                        {product.description}
                      </p>
                      
                      {/* Price */}
                      <div className="mb-3">
                        <span className="text-lg font-bold text-[#6b8e7b]">
                          ${product.price.toFixed(2)} CAD
                        </span>
                      </div>
                      
                      {/* Add Button */}
                      <button
                        onClick={(e) => handleAddToCart(product, e)}
                        disabled={product.soldOut}
                        className="w-full bg-[#6b8e7b] hover:bg-[#5a7a66] text-white px-4 py-2.5 rounded-lg font-medium text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-sm"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        {product.soldOut ? 'ÉPUISÉ' : 'AJOUTER'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-4 gap-1.5">
              {products.map((_, index) => (
                <button
                  key={index}
                  className="w-1.5 h-1.5 rounded-full bg-gray-300 transition-colors"
                  onClick={() => {
                    if (scrollRef.current) {
                      scrollRef.current.scrollTo({
                        left: index * scrollRef.current.offsetWidth,
                        behavior: 'smooth'
                      })
                    }
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
