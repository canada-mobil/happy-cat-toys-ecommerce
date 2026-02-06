"use client"

import { useState, useEffect } from "react"
import { ShoppingCart, X, Plus, Minus, Trash2, Star, Truck, Shield, Clock, MapPin } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import Image from "next/image"
import Link from "next/link"

export default function CartDropdown() {
  const { items, removeItem, updateQuantity, total, itemCount, freeShippingProgress, freeShippingThreshold, addItem, setCartOpen, isCartOpen } = useCart()
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0)

  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - total)

  // Rotating banner messages
  const bannerMessages = [
    { icon: <MapPin className="w-4 h-4" />, text: "Fabriqué au Canada", subtext: "Nos produits sont 100% naturels" },
    { icon: <Truck className="w-4 h-4" />, text: "Livraison 2-3 jours", subtext: "Expédition rapide" },
    { icon: <Shield className="w-4 h-4" />, text: "Garantie 2 mois", subtext: "100% sécurisé" }
  ]

  // Auto-rotate banner every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prev) => (prev + 1) % bannerMessages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  // Recommended products
  const recommendedProducts = [
    {
      id: "smart-interactive-ball-Rouge",
      name: "Smart Interactive Ball - Rouge",
      price: 4.99,
      image: "/smart_interactive_cats_ball_toy_red.png.webp",
      rating: 4.8,
      reviews: 325
    },
    {
      id: "smart-interactive-ball-Gris",
      name: "Smart Interactive Ball - Gris",
      price: 4.99,
      image: "/smart_interactive_cats_ball_toy_gray.png.avif",
      rating: 4.8,
      reviews: 325
    },
    {
      id: "smart-interactive-ball-Vert",
      name: "Smart Interactive Ball - Vert",
      price: 4.99,
      image: "/smart_interactive_cats_ball_toy_green.png.avif",
      rating: 4.8,
      reviews: 325
    }
  ]

  return (
    <div className="relative">
      {/* Cart Button */}
      <button
        onClick={() => setCartOpen(!isCartOpen)}
        className="relative p-2 text-foreground hover:text-[#6b8e7b] transition-colors"
      >
        <ShoppingCart className="w-5 h-5" />
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#6b8e7b] text-white text-xs rounded-full flex items-center justify-center font-medium">
            {itemCount}
          </span>
        )}
      </button>

      {/* Dropdown */}
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setCartOpen(false)}
          />
          
          {/* Cart Panel - Large Sidebar Style */}
          <div className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-2xl border-l border-border z-50 flex flex-col">
            {/* Rotating Banner */}
            <div className="bg-[#6b8e7b] text-white p-3 text-center transition-all duration-500">
              <div className="flex items-center justify-center gap-2">
                <span className="text-white">{bannerMessages[currentBannerIndex].icon}</span>
                <div>
                  <div className="text-sm font-semibold">{bannerMessages[currentBannerIndex].text}</div>
                  <div className="text-xs opacity-90">{bannerMessages[currentBannerIndex].subtext}</div>
                </div>
              </div>
            </div>

            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-4 border-b border-border">
              <h3 className="font-semibold text-foreground text-lg sm:text-base">Panier ({itemCount})</h3>
              <button
                onClick={() => setCartOpen(false)}
                className="p-2 sm:p-1 hover:bg-muted rounded-md transition-colors"
              >
                <X className="w-5 h-5 sm:w-4 sm:h-4" />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center p-6 sm:p-8 text-center">
                <ShoppingCart className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 opacity-50 text-muted-foreground" />
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">Votre panier est vide</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">Découvrez nos produits et ajoutez-les à votre panier</p>
                
                {/* Recommended Products for Empty Cart */}
                <div className="w-full">
                  <h4 className="text-sm font-semibold text-foreground mb-4">Produits recommandés</h4>
                  <div className="space-y-3">
                    {recommendedProducts.slice(0, 1).map((product) => (
                      <div key={product.id} className="flex gap-2 p-2 border border-border rounded-lg hover:shadow-md transition-shadow">
                        <div className="relative w-12 h-12 rounded-md overflow-hidden bg-muted flex-shrink-0">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h5 className="text-xs font-medium text-foreground">{product.name}</h5>
                          <div className="flex items-center gap-1 mt-1">
                            <Star className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs text-muted-foreground">{product.rating} ({product.reviews})</span>
                          </div>
                          <div className="flex items-center justify-between mt-1">
                            <span className="text-xs font-semibold text-[#6b8e7b]">${product.price} CAD</span>
                            <button
                              onClick={() => addItem({
                                id: product.id,
                                name: product.name,
                                price: product.price,
                                originalPrice: product.price,
                                image: product.image,
                              })}
                              className="text-xs bg-[#6b8e7b] text-white px-2 py-0.5 rounded hover:bg-[#5a7a66] transition-colors"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <>

                {/* Items */}
                <div className="flex-1 overflow-y-auto">
                  {items.map((item) => (
                    <div key={item.id} className="p-3 sm:p-4 border-b border-border last:border-b-0">
                      <div className="flex gap-2 sm:gap-3">
                        <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-md overflow-hidden bg-muted flex-shrink-0">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-foreground">
                            {item.name}
                          </h4>
                          {item.variant && (
                            <p className="text-xs text-[#6b8e7b] font-medium">
                              {item.variant}
                            </p>
                          )}
                          
                          <div className="flex items-center justify-between mt-2 sm:mt-3">
                            <div className="flex items-center gap-1 sm:gap-2">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="text-sm font-medium w-6 sm:w-8 text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                            
                            <div className="flex items-center gap-1 sm:gap-2">
                              <span className="text-xs sm:text-sm font-semibold text-foreground">
                                ${(item.price * item.quantity).toFixed(2)} CAD
                              </span>
                              <button
                                onClick={() => removeItem(item.id)}
                                className="p-1 hover:bg-red-50 hover:text-red-600 rounded-md transition-colors"
                              >
                                <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Recommendations Section */}
                <div className="border-t border-border p-3 bg-gray-50">
                  <h4 className="text-xs font-semibold text-foreground mb-2">Vous pourriez aussi aimer</h4>
                  <div>
                    {recommendedProducts.slice(0, 1).map((product) => (
                      <div key={product.id} className="flex gap-2 p-2 bg-white rounded-lg border border-border hover:shadow-sm transition-shadow">
                        <div className="relative w-10 h-10 rounded-md overflow-hidden bg-muted flex-shrink-0">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h5 className="text-xs font-medium text-foreground leading-tight">{product.name}</h5>
                          <div className="flex items-center gap-1 mt-1">
                            <Star className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs text-muted-foreground">{product.rating}</span>
                          </div>
                          <div className="flex items-center justify-between mt-1">
                            <span className="text-xs font-semibold text-[#6b8e7b]">${product.price} CAD</span>
                            <button
                              onClick={() => addItem({
                                id: product.id,
                                name: product.name,
                                price: product.price,
                                originalPrice: product.price,
                                image: product.image,
                              })}
                              className="text-xs bg-[#6b8e7b] text-white px-2 py-0.5 rounded hover:bg-[#5a7a66] transition-colors"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="p-3 sm:p-4 border-t border-border bg-white">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="font-semibold text-foreground">Total:</span>
                    <span className="font-bold text-lg sm:text-xl text-[#6b8e7b]">
                      ${total.toFixed(2)} CAD
                    </span>
                  </div>
                  
                  <div className="space-y-2 sm:space-y-3">
                    <Link href="/checkout" className="block">
                      <button
                        onClick={() => setCartOpen(false)}
                        className="w-full bg-[#6b8e7b] hover:bg-[#5a7a66] text-white py-3 px-4 rounded-lg font-semibold transition-colors text-sm"
                      >
                        Commander
                      </button>
                    </Link>
                    <Link href="/cart" className="block">
                      <button
                        onClick={() => setCartOpen(false)}
                        className="w-full border border-[#6b8e7b] text-[#6b8e7b] hover:bg-[#6b8e7b] hover:text-white py-2 px-4 rounded-lg font-medium transition-colors text-sm"
                      >
                        Voir le panier complet
                      </button>
                    </Link>
                  </div>

                  {/* Bottom Trust Badges - Simplified */}
                  <div className="mt-3 pt-2 border-t border-border">
                    <div className="text-xs text-center text-muted-foreground">
                      Paiement sécurisé SSL • Livraison 2-3j • Garantie 2 mois
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  )
}
