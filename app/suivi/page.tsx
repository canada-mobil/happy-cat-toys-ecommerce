"use client"

import React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Package, Search, Truck, CheckCircle, Clock, MapPin, ArrowRight } from "lucide-react"

type OrderStatus = {
  status: "processing" | "shipped" | "in-transit" | "delivered"
  orderNumber: string
  date: string
  estimatedDelivery: string
  carrier: string
  trackingNumber: string
  steps: {
    title: string
    date: string
    completed: boolean
    current: boolean
  }[]
}

export default function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState("")
  const [email, setEmail] = useState("")
  const [searched, setSearched] = useState(false)
  const [orderStatus, setOrderStatus] = useState<OrderStatus | null>(null)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setSearched(true)
    // Simulation d'une commande trouvée
    if (orderNumber.length > 3) {
      setOrderStatus({
        status: "in-transit",
        orderNumber: orderNumber.toUpperCase(),
        date: "2 février 2026",
        estimatedDelivery: "5-6 février 2026",
        carrier: "Postes Canada",
        trackingNumber: "CP123456789CA",
        steps: [
          { title: "Commande confirmée", date: "2 fév, 10:30", completed: true, current: false },
          { title: "En préparation", date: "2 fév, 14:00", completed: true, current: false },
          { title: "Expédiée", date: "3 fév, 09:15", completed: true, current: false },
          { title: "En transit", date: "4 fév, 08:00", completed: true, current: true },
          { title: "Livrée", date: "Prévu: 5-6 fév", completed: false, current: false }
        ]
      })
    } else {
      setOrderStatus(null)
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-blue-800 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Package className="w-12 h-12 text-white mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Suivre Ma Commande
          </h1>
          <p className="text-white/90 text-lg max-w-xl mx-auto">
            Entrez votre numéro de commande pour suivre l'état de votre livraison en temps réel.
          </p>
        </div>
      </section>

      {/* Search Form */}
      <section className="py-12 px-4 -mt-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSearch} className="space-y-5">
              <div>
                <label htmlFor="orderNumber" className="block text-sm font-medium text-neutral-900 mb-2">
                  Numéro de commande
                </label>
                <input
                  type="text"
                  id="orderNumber"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 transition-all uppercase"
                  placeholder="Ex: HCT-12345"
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-900 mb-2">
                  Email de la commande
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 transition-all"
                  placeholder="votre@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-800 text-white py-4 rounded-lg font-semibold hover:bg-black transition-colors flex items-center justify-center gap-2"
              >
                <Search className="w-5 h-5" />
                Rechercher ma commande
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Results */}
      {searched && (
        <section className="pb-16 px-4">
          <div className="max-w-3xl mx-auto">
            {orderStatus ? (
              <div className="space-y-6">
                {/* Order Info Card */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-sm text-neutral-400">Commande</p>
                      <p className="text-xl font-semibold text-neutral-900">{orderStatus.orderNumber}</p>
                    </div>
                    <div className="bg-blue-800/10 text-neutral-900 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                      <Truck className="w-4 h-4" />
                      En transit
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-neutral-400">Date de commande</p>
                      <p className="font-medium text-neutral-900">{orderStatus.date}</p>
                    </div>
                    <div>
                      <p className="text-neutral-400">Livraison estimée</p>
                      <p className="font-medium text-neutral-900">{orderStatus.estimatedDelivery}</p>
                    </div>
                    <div>
                      <p className="text-neutral-400">Transporteur</p>
                      <p className="font-medium text-neutral-900">{orderStatus.carrier}</p>
                    </div>
                    <div>
                      <p className="text-neutral-400">N° de suivi</p>
                      <p className="font-medium text-neutral-900">{orderStatus.trackingNumber}</p>
                    </div>
                  </div>
                </div>

                {/* Progress Steps */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="font-semibold text-neutral-900 mb-6">Progression de la livraison</h3>
                  <div className="space-y-4">
                    {orderStatus.steps.map((step, index) => (
                      <div key={step.title} className="flex items-start gap-4">
                        <div className="flex flex-col items-center">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            step.completed 
                              ? step.current 
                                ? "bg-blue-800 text-white" 
                                : "bg-blue-800/20 text-neutral-900"
                              : "bg-neutral-50 text-neutral-400"
                          }`}>
                            {step.completed ? (
                              step.current ? (
                                <Truck className="w-4 h-4" />
                              ) : (
                                <CheckCircle className="w-4 h-4" />
                              )
                            ) : (
                              <Clock className="w-4 h-4" />
                            )}
                          </div>
                          {index < orderStatus.steps.length - 1 && (
                            <div className={`w-0.5 h-8 ${
                              step.completed ? "bg-blue-800/30" : "bg-neutral-50"
                            }`} />
                          )}
                        </div>
                        <div className="flex-1 pb-4">
                          <p className={`font-medium ${
                            step.current ? "text-neutral-900" : step.completed ? "text-neutral-900" : "text-neutral-400"
                          }`}>
                            {step.title}
                          </p>
                          <p className="text-sm text-neutral-400">{step.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Delivery Info */}
                <div className="bg-blue-800/10 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-neutral-900 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-1">Adresse de livraison</h4>
                      <p className="text-neutral-400 text-sm">
                        123 Rue Exemple<br />
                        Montréal, QC H2X 1Y4<br />
                        Canada
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                <div className="w-16 h-16 bg-blue-800/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-neutral-900" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Commande non trouvée</h3>
                <p className="text-neutral-400 mb-6">
                  Nous n'avons pas trouvé de commande avec ce numéro. Vérifiez les informations et réessayez.
                </p>
                <p className="text-sm text-neutral-400">
                  Besoin d'aide? <a href="/contact" className="text-neutral-900 underline">Contactez-nous</a>
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Shipping Info */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-neutral-900 text-center mb-8">
            Informations de Livraison
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 text-center">
              <Truck className="w-10 h-10 text-neutral-900 mx-auto mb-4" />
              <h3 className="font-semibold text-neutral-900 mb-2">Livraison Rapide</h3>
              <p className="text-neutral-400 text-sm">
                Recevez votre commande en 2-3 jours ouvrables partout au Canada.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <Package className="w-10 h-10 text-neutral-900 mx-auto mb-4" />
              <h3 className="font-semibold text-neutral-900 mb-2">Livraison Gratuite</h3>
              <p className="text-neutral-400 text-sm">
                Frais de port offerts pour toute commande de plus de 50$.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <CheckCircle className="w-10 h-10 text-neutral-900 mx-auto mb-4" />
              <h3 className="font-semibold text-neutral-900 mb-2">Suivi en Temps Réel</h3>
              <p className="text-neutral-400 text-sm">
                Suivez votre colis étape par étape jusqu'à votre porte.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">
            Une question sur votre commande?
          </h2>
          <p className="text-neutral-400 mb-6">
            Notre équipe de service client est disponible pour vous aider du lundi au vendredi, de 9h à 18h.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-neutral-900 font-medium hover:underline"
          >
            Contactez-nous
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
