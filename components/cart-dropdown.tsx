"use client"

import { useState, useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import { ShoppingCart, X, Plus, Minus, Trash2, Star, Truck, Shield, Clock, MapPin } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { useI18n } from "@/lib/i18n-context"
import Image from "next/image"
import Link from "next/link"

export default function CartDropdown() {
  const { items, removeItem, updateQuantity, total, itemCount, freeShippingProgress, freeShippingThreshold, addItem, setCartOpen, isCartOpen } = useCart()
  const { t, formatPrice } = useI18n()
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0)

  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - total)

  // Rotating banner messages
  const isFr = t.cart.title === 'Panier'
  const bannerMessages = isFr ? [
    { icon: <MapPin className="w-4 h-4" />, text: "Fabriqué au Canada", subtext: "Nos produits sont 100% naturels" },
    { icon: <Truck className="w-4 h-4" />, text: "Livraison 2-3 jours", subtext: "Expédition rapide" },
    { icon: <Shield className="w-4 h-4" />, text: "Garantie 2 mois", subtext: "100% sécurisé" }
  ] : [
    { icon: <MapPin className="w-4 h-4" />, text: "Made in Canada", subtext: "Our products are 100% natural" },
    { icon: <Truck className="w-4 h-4" />, text: "Delivery 2-3 days", subtext: "Fast shipping" },
    { icon: <Shield className="w-4 h-4" />, text: "2-month warranty", subtext: "100% secure" }
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
      image: "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517783/purrball/smart_interactive_cats_ball_toy_red.png.webp",
      rating: 4.8,
      reviews: 325
    },
    {
      id: "smart-interactive-ball-Gris",
      name: "Smart Interactive Ball - Gris",
      price: 4.99,
      image: "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517775/purrball/smart_interactive_cats_ball_toy_gray.png.webp",
      rating: 4.8,
      reviews: 325
    },
    {
      id: "smart-interactive-ball-Vert",
      name: "Smart Interactive Ball - Vert",
      price: 4.99,
      image: "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517777/purrball/smart_interactive_cats_ball_toy_green.png.webp",
      rating: 4.8,
      reviews: 325
    }
  ]

  return (
    <>
      {/* Cart Button */}
      <button
        onClick={() => setCartOpen(!isCartOpen)}
        className="relative p-2 text-neutral-800 hover:text-black transition-colors"
      >
        <ShoppingCart className="w-5 h-5" />
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-brand text-white text-xs rounded-full flex items-center justify-center font-medium">
            {itemCount}
          </span>
        )}
      </button>

      {/* Dropdown - rendered via portal to escape header containment */}
      {isCartOpen && typeof document !== 'undefined' && createPortal(
        <>
          {/* Animation styles */}
          <style>{`
            @keyframes cartSlideIn {
              from { transform: translateX(100%); }
              to { transform: translateX(0); }
            }
            @keyframes cartFadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
          `}</style>

          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/40" 
            style={{ zIndex: 99998, animation: 'cartFadeIn 0.3s ease-out' }}
            onClick={() => setCartOpen(false)}
          />
          
          {/* Cart Panel */}
          <div className="fixed right-0 top-0 bottom-0 w-full sm:w-[420px] flex flex-col shadow-2xl" style={{ zIndex: 99999, backgroundColor: '#ffffff', animation: 'cartSlideIn 0.3s ease-out' }}>
            {/* Header */}
            <div className="flex-shrink-0 flex items-center justify-between px-4 py-4 border-b border-neutral-100">
              <h3 className="font-semibold text-neutral-900 text-base">{t.cart.title} ({itemCount})</h3>
              <button
                onClick={() => setCartOpen(false)}
                className="p-1.5 hover:bg-neutral-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-neutral-500" />
              </button>
            </div>

            {/* Free shipping banner / progress */}
            {itemCount >= freeShippingThreshold ? (
              <div className="flex-shrink-0 bg-green-50 px-4 py-2.5 text-center">
                <p className="text-green-700 text-xs font-medium">{t.cart.freeShipping}</p>
              </div>
            ) : (
              <div className="flex-shrink-0 bg-blue-50 px-4 py-3">
                <p className="text-blue-800 text-xs font-medium text-center mb-2">
                  {isFr
                    ? `Plus que ${freeShippingThreshold - itemCount} article${freeShippingThreshold - itemCount > 1 ? 's' : ''} pour la livraison gratuite !`
                    : `Only ${freeShippingThreshold - itemCount} more item${freeShippingThreshold - itemCount > 1 ? 's' : ''} for free shipping!`}
                </p>
                <div className="w-full bg-blue-200 rounded-full h-1.5">
                  <div className="bg-blue-600 h-1.5 rounded-full transition-all" style={{ width: `${freeShippingProgress}%` }} />
                </div>
              </div>
            )}

            {/* Delivery estimate */}
            <div className="flex-shrink-0 flex items-center justify-center gap-2 px-4 py-2 border-b border-neutral-100">
              <Truck className="w-4 h-4 text-brand" />
              <p className="text-neutral-600 text-xs">{t.cart.delivery} <span className="font-semibold text-neutral-900">{t.cart.deliveryDays}</span></p>
            </div>

            {items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                <ShoppingCart className="w-14 h-14 mx-auto mb-4 text-neutral-200" />
                <h3 className="text-base font-semibold text-neutral-900 mb-1">{t.cart.empty}</h3>
                <p className="text-sm text-neutral-400 mb-6">{t.cart.emptySubtitle}</p>
                <Link href="/produits" onClick={() => setCartOpen(false)} className="bg-brand text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-brand-dark transition-colors">
                  {t.cart.viewProducts}
                </Link>
              </div>
            ) : (
              <>
                {/* Scrollable items - takes all remaining space */}
                <div className="overflow-y-auto flex-1" style={{ minHeight: '200px' }}>
                  {items.map((item) => (
                    <div key={item.id} className="px-4 py-4 border-b border-neutral-100">
                      <div className="flex gap-3">
                        <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-neutral-50 flex-shrink-0">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            fill
                            sizes="64px"
                            className="object-contain p-1"
                          />
                        </div>
                        
                        <div className="flex-1 min-w-0 overflow-hidden">
                          <div className="flex justify-between items-start gap-1">
                            <h4 className="text-sm font-medium text-neutral-900 leading-tight truncate">
                              {item.name}
                            </h4>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="p-1 text-neutral-300 hover:text-red-500 transition-colors flex-shrink-0"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          {item.variant && (
                            <p className="text-xs mt-0.5">
                              {item.variant.includes('PAWPAW') ? (
                                <span className="text-green-600 font-medium">{item.variant}</span>
                              ) : (
                                <span className="text-neutral-400">{item.variant}</span>
                              )}
                            </p>
                          )}
                          
                          <div className="flex items-center justify-between mt-3 gap-2">
                            {item.price === 0 ? (
                              <span className="text-xs text-green-600 font-medium whitespace-nowrap">Cadeau × 1</span>
                            ) : (
                              <div className="flex items-center border border-neutral-200 rounded-lg flex-shrink-0">
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="w-7 h-7 flex items-center justify-center hover:bg-neutral-50 transition-colors"
                                >
                                  <Minus className="w-3 h-3" />
                                </button>
                                <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="w-7 h-7 flex items-center justify-center hover:bg-neutral-50 transition-colors"
                                >
                                  <Plus className="w-3 h-3" />
                                </button>
                              </div>
                            )}
                            
                            <span className="text-sm font-semibold text-neutral-900 whitespace-nowrap">
                              {item.price === 0 ? (isFr ? 'GRATUIT' : 'FREE') : formatPrice(item.price * item.quantity)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex-shrink-0 border-t border-neutral-100 bg-white p-4">
                  {/* #PAWPAW discount applied */}
                  <div className="flex items-center gap-1.5 mb-3 bg-green-50 rounded-lg px-3 py-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0" />
                    <span className="text-green-700 text-[11px] font-medium">{t.cart.couponAdded} <span className="font-bold">#PAWPAW</span> {t.cart.couponApplied}</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-neutral-500">{t.cart.subtotal}</span>
                    <span className="text-lg font-semibold text-neutral-900">{formatPrice(total)}</span>
                  </div>
                  <p className="text-[11px] text-neutral-400 mb-3">{t.cart.taxes}</p>
                  
                  <Link href="/checkout" className="block mb-2">
                    <button
                      onClick={() => setCartOpen(false)}
                      className="w-full bg-brand hover:bg-brand-dark text-white py-3.5 rounded-full font-medium transition-all text-sm"
                    >
                      {t.cart.checkout} · {formatPrice(total)}
                    </button>
                  </Link>
                  <Link href="/cart" className="block">
                    <button
                      onClick={() => setCartOpen(false)}
                      className="w-full text-neutral-500 hover:text-neutral-900 py-2 font-medium transition-colors text-xs underline underline-offset-2"
                    >
                      {t.cart.viewCart}
                    </button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </>,
        document.body
      )}
    </>
  )
}
