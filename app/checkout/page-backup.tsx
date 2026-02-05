"use client"

import { useState } from "react"
import { useCart } from "@/lib/cart-context"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Lock, CreditCard, Truck, Shield } from "lucide-react"

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart()
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "CA",
    dateOfBirth: ""
  })
  const [isProcessing, setIsProcessing] = useState(false)

  const shipping = total >= 50 ? 0 : 4.99
  const taxes = total * 0.15
  const finalTotal = total + shipping + taxes

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    
    const paymentData = {
      amount: finalTotal.toFixed(2),
      currency: 'CAD',
      items: items.map(item => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price
      })),
      customer: {
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        address: formData.address,
        city: formData.city,
        postalCode: formData.postalCode,
        country: formData.country
      }
    }
    
    const returnUrl = encodeURIComponent(window.location.origin + '/success')
    const paymentLink = 'https://secure.payment-ca.com/link?amount=' + finalTotal.toFixed(2) + '&currency=CAD&merchant=happy-cat-toys&return_url=' + returnUrl
    
    window.location.href = paymentLink
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#f5f2ed] py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-serif font-semibold text-foreground mb-4">
            Votre panier est vide
          </h1>
          <Link href="/" className="text-[#6b8e7b] hover:text-[#5a7a66]">
            Retourner à la boutique
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#f5f2ed] py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Link 
            href="/cart"
            className="inline-flex items-center gap-2 text-[#6b8e7b] hover:text-[#5a7a66] mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour au panier
          </Link>
          <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
            Finaliser ma commande
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Informations de contact
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Adresse e-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6b8e7b]"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Adresse de livraison
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Prénom
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6b8e7b]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Nom
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6b8e7b]"
                    required
                  />
                </div>
              </div>
              
              <div className="mt-4">
                <label className="block text-sm font-medium text-foreground mb-1">
                  Adresse
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6b8e7b]"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Ville
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6b8e7b]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Code postal
                  </label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6b8e7b]"
                    required
                  />
                </div>
              </div>
              
              <div className="mt-4">
                <label className="block text-sm font-medium text-foreground mb-1">
                  Pays
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6b8e7b]"
                >
                  <option value="CA">Canada</option>
                  <option value="US">États-Unis</option>
                </select>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-border">
              <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Lock className="w-5 h-5" />
                Vérification de sécurité
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Date de naissance (pour vérification)
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6b8e7b]"
                    required
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Cette information est requise pour la sécurité de votre transaction
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 border border-border sticky top-4">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Résumé de commande
              </h2>
              
              <div className="space-y-3 mb-4 max-h-60 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-foreground truncate">
                        {item.name}
                      </h4>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">
                          Qté: {item.quantity}
                        </span>
                        <span className="text-sm font-medium">
                          {(item.price * item.quantity).toFixed(2)} €
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-2 mb-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sous-total</span>
                  <span className="font-medium">{total.toFixed(2)} €</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Livraison</span>
                  <span className="font-medium">
                    {shipping === 0 ? (
                      <span className="text-green-600">Gratuite</span>
                    ) : (
                      `${shipping.toFixed(2)} €`
                    )}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Taxes</span>
                  <span className="font-medium">{taxes.toFixed(2)} €</span>
                </div>
              </div>
              
              <div className="border-t border-border pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-foreground">Total</span>
                  <span className="text-2xl font-bold text-[#6b8e7b]">
                    {finalTotal.toFixed(2)} €
                  </span>
                </div>
              </div>
              
              <form onSubmit={handleSubmit}>
                <button 
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-[#6b8e7b] hover:bg-[#5a7a66] disabled:opacity-50 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  {isProcessing ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Traitement en cours...
                    </>
                  ) : (
                    <>
                      <Lock className="w-4 h-4" />
                      Finaliser ma commande
                    </>
                  )}
                </button>
              </form>
              
              <div className="mt-4 text-center">
                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <Truck className="w-3 h-3" />
                  Livraison 2-3 jours ouvrables
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
