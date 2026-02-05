"use client"

import { useState } from "react"
import { ShoppingCart, X, Plus, Minus, Trash2, Star, Truck, Shield, Clock } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import Image from "next/image"
import Link from "next/link"

export default function CartDropdown() {
  const { items, removeItem, updateQuantity, total, itemCount, freeShippingProgress, freeShippingThreshold, addItem, setCartOpen, isCartOpen } = useCart()

  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - total)

  // Recommended products
  const recommendedProducts = [
    {
      id: "rec-1",
      name: "Baguette à Plumes Premium",
      price: 14.99,
      image: "/images/baguette-plumes.jpg",
      rating: 4.8,
      reviews: 127
    },
    {
      id: "rec-2", 
      name: "Souris Interactive",
      price: 9.99,
      image: "/images/souris-interactive.jpg",
      rating: 4.6,
      reviews: 89
    },
    {
      id: "rec-3",
      name: "Tunnel de Jeu",
      price: 19.99,
      image: "/images/tunnel-jeu.jpg", 
      rating: 4.9,
      reviews: 156
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
                {/* Trust CTAs Section */}
                <div className="p-3 sm:p-4 border-b border-border bg-gradient-to-r from-green-50 to-blue-50">
                  {/* Free Shipping Progress */}
                  {remainingForFreeShipping > 0 ? (
                    <div className="mb-4">
                      <div className="flex items-center gap-2 text-sm text-green-800 mb-2 font-medium">
                        <Truck className="w-4 h-4" />
                        Plus que ${remainingForFreeShipping.toFixed(2)} CAD pour la livraison gratuite!
                      </div>
                      <div className="w-full bg-green-200 rounded-full h-3">
                        <div 
                          className="bg-green-500 h-3 rounded-full transition-all duration-300"
                          style={{ width: `${freeShippingProgress}%` }}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="mb-4 flex items-center gap-2 text-sm text-green-800 font-medium">
                      <Truck className="w-4 h-4" />
                      Livraison gratuite incluse!
                    </div>
                  )}

                  {/* Trust CTAs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-green-200">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <div>
                        <div className="text-xs font-semibold text-foreground">Livraison 2-3j</div>
                        <div className="text-xs text-muted-foreground">Expédition rapide</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-blue-200">
                      <Shield className="w-4 h-4 text-green-600" />
                      <div>
                        <div className="text-xs font-semibold text-foreground">Garantie 2 ans</div>
                        <div className="text-xs text-muted-foreground">100% sécurisé</div>
                      </div>
                    </div>
                  </div>
                </div>

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
                  {/* Additional Trust CTAs */}
                  <div className="mb-3 sm:mb-4 p-2 sm:p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                        <div>
                          <div className="text-xs sm:text-sm font-semibold text-foreground">Achat 100% Sécurisé</div>
                          <div className="text-xs text-muted-foreground">Paiement crypté SSL + Garantie</div>
                        </div>
                      </div>
                      <div className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full font-medium">
                        Protégé
                      </div>
                    </div>
                  </div>

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
                        className="w-full bg-gradient-to-r from-[#6b8e7b] to-[#5a7a66] hover:from-[#5a7a66] hover:to-[#4a6956] text-white py-3 sm:py-3 px-4 rounded-lg font-semibold transition-all duration-200 text-sm shadow-lg flex items-center justify-center gap-2"
                      >
                        <Shield className="w-4 h-4" />
                        Finaliser la commande
                      </button>
                    </Link>
                    <Link href="/cart" className="block">
                      <button
                        onClick={() => setCartOpen(false)}
                        className="w-full border border-[#6b8e7b] text-[#6b8e7b] hover:bg-[#6b8e7b] hover:text-white py-2 px-4 rounded-lg font-medium transition-colors text-sm flex items-center justify-center gap-2"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        Voir le panier complet
                      </button>
                    </Link>
                  </div>

                  {/* Bottom Trust Badges */}
                  <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-border">
                    <div className="flex items-center justify-center gap-2 sm:gap-4 text-xs text-muted-foreground flex-wrap">
                      <div className="flex items-center gap-1">
                        <Truck className="w-3 h-3 text-green-600" />
                        <span>Livraison 2-3j</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Shield className="w-3 h-3 text-blue-600" />
                        <span>Garantie 2 ans</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-orange-600" />
                        <span>Support 24/7</span>
                      </div>
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
