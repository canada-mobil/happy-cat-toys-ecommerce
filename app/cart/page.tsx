"use client"

import { useCart } from "@/lib/cart-context"
import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2, ShoppingCart, ArrowLeft, PartyPopper, Truck, CheckCircle, Lock, RotateCcw, Shield } from "lucide-react"
import Footer from "@/components/footer"

export default function CartPage() {
  const { items, removeItem, updateQuantity, total, subtotal, discount, freeShippingProgress, freeShippingThreshold, itemCount } = useCart()

  const remainingItemsForFreeShipping = Math.max(0, freeShippingThreshold - itemCount)
  const shipping = itemCount >= freeShippingThreshold ? 0 : 4.99
  const finalTotal = subtotal + shipping

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <ShoppingCart className="w-16 h-16 mx-auto mb-6 text-neutral-200" />
          <h1 className="text-2xl font-semibold text-neutral-900 mb-4 tracking-tight">
            Votre panier est vide
          </h1>
          <p className="text-neutral-400 text-sm mb-8">
            Découvrez nos jouets premium pour rendre votre chat heureux!
          </p>
          <Link 
            href="/"
            className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-black text-white px-6 py-3 rounded-full font-medium text-sm transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Continuer mes achats
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-neutral-900 mb-4 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Continuer mes achats
          </Link>
          <h1 className="text-2xl md:text-3xl font-semibold text-neutral-900 tracking-tight">
            Mon Panier ({items.length} {items.length === 1 ? 'article' : 'articles'})
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {/* Free Shipping Progress */}
            {remainingItemsForFreeShipping > 0 ? (
              <div className="bg-neutral-900/10 border border-neutral-900/20 rounded-lg p-4 mb-6">
                <p className="text-neutral-900 font-medium mb-2">
                  Plus que {remainingItemsForFreeShipping} article{remainingItemsForFreeShipping > 1 ? 's' : ''} pour la livraison gratuite !
                </p>
                <div className="w-full bg-neutral-900/20 rounded-full h-2">
                  <div 
                    className="bg-neutral-900 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${freeShippingProgress}%` }}
                  />
                </div>
              </div>
            ) : (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <p className="text-green-700 font-medium flex items-center gap-2">
                  <PartyPopper className="w-4 h-4" />
                  Félicitations ! Vous bénéficiez de la livraison gratuite !
                </p>
              </div>
            )}

            {items.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl p-5 border border-neutral-100">
                <div className="flex gap-4">
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-neutral-50 flex-shrink-0">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-medium text-neutral-900 text-sm">
                          {item.name}
                        </h3>
                        {item.variant && (
                          <p className="text-sm text-neutral-900 font-medium">
                            {item.variant}
                          </p>
                        )}
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-medium text-sm w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <div className="text-right">
                        <div className="font-semibold text-sm text-neutral-900">
                          ${(item.price * item.quantity).toFixed(2)} CAD
                        </div>
                        {item.originalPrice > item.price && (
                          <div className="text-xs text-neutral-300 line-through">
                            ${(item.originalPrice * item.quantity).toFixed(2)} CAD
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 border border-neutral-100 sticky top-4">
              <h2 className="text-base font-semibold text-neutral-900 mb-4">
                Résumé de commande
              </h2>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-400">Sous-total</span>
                  <span className="font-medium">${subtotal.toFixed(2)} CAD</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-400">Économies</span>
                    <span className="font-medium text-green-600">-${discount.toFixed(2)} CAD</span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-400">Livraison</span>
                  <span className="font-medium">
                    {shipping === 0 ? (
                      <span className="text-green-600">Gratuite</span>
                    ) : (
                      `$${shipping.toFixed(2)} CAD`
                    )}
                  </span>
                </div>
              </div>
              
              <div className="border-t border-neutral-100 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-neutral-500">Total</span>
                  <span className="text-xl font-semibold text-neutral-900">
                    ${finalTotal.toFixed(2)} CAD
                  </span>
                </div>
              </div>
              
              <Link href="/checkout" className="block">
                <button className="w-full bg-neutral-900 hover:bg-black text-white py-3 px-4 rounded-full font-medium text-sm transition-all">
                  Procéder au paiement
                </button>
              </Link>
              
              
              <div className="mt-4 text-center">
                <Link 
                  href="/"
                  className="text-xs text-neutral-400 hover:text-neutral-900 transition-colors"
                >
                  Continuer mes achats
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Trust Section */}
      <div className="bg-neutral-900 text-white py-8 mt-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center">
              <CheckCircle className="w-6 h-6 mb-2" />
              <span className="text-sm font-medium">100% Canadien</span>
            </div>
            <div className="flex flex-col items-center">
              <Truck className="w-6 h-6 mb-2" />
              <span className="text-sm font-medium">Livraison 2-3 jours</span>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="w-6 h-6 mb-2" />
              <span className="text-sm font-medium">Garantie 2 mois</span>
            </div>
            <div className="flex flex-col items-center">
              <RotateCcw className="w-6 h-6 mb-2" />
              <span className="text-sm font-medium">Retours 30 jours</span>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
