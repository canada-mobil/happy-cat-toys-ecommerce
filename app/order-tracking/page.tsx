"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Package, Truck, CheckCircle, Clock, Search } from "lucide-react"

interface OrderData {
  orderNumber: string
  customerInfo: any
  items: any[]
  total: number
  tax: number
  finalTotal: number
  orderDate: string
  status: string
  sessionId: string
}

export default function OrderTracking() {
  const [searchOrderId, setSearchOrderId] = useState('')
  const [orderData, setOrderData] = useState<OrderData | null>(null)
  const [notFound, setNotFound] = useState(false)
  
  const searchOrder = () => {
    if (!searchOrderId.trim()) return
    
    const storedOrder = localStorage.getItem(`order_${searchOrderId}`)
    if (storedOrder) {
      setOrderData(JSON.parse(storedOrder))
      setNotFound(false)
    } else {
      setOrderData(null)
      setNotFound(true)
    }
  }
  
  // Default demo data if no order found
  const defaultOrderStatus = {
    orderNumber: "PB-DEMO-001234",
    status: "processing",
    estimatedDelivery: "2-3 jours ouvrables",
    currentStep: 2
  }

  const steps = [
    {
      id: 1,
      title: "Commande reçue",
      description: "Votre commande a été confirmée",
      icon: CheckCircle,
      completed: true,
      date: "Aujourd'hui, 14h30"
    },
    {
      id: 2,
      title: "Préparation en cours",
      description: "Nous préparons vos jouets avec soin",
      icon: Package,
      completed: false,
      current: true,
      date: "En cours..."
    },
    {
      id: 3,
      title: "Expédition",
      description: "Votre colis est en route",
      icon: Truck,
      completed: false,
      date: "Bientôt"
    },
    {
      id: 4,
      title: "Livré",
      description: "Votre chat va être ravi !",
      icon: CheckCircle,
      completed: false,
      date: "Dans 2-3 jours"
    }
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
              Suivi de commande
            </h1>
            <p className="text-muted-foreground text-lg mb-6">
              Entrez votre numéro de commande pour suivre votre colis
            </p>
            
            {/* Search Box */}
            <div className="max-w-md mx-auto mb-8">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Ex: PB1738782123456"
                  value={searchOrderId}
                  onChange={(e) => setSearchOrderId(e.target.value.toUpperCase())}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6b8e7b] focus:border-transparent"
                  onKeyPress={(e) => e.key === 'Enter' && searchOrder()}
                />
                <button
                  onClick={searchOrder}
                  className="bg-[#6b8e7b] hover:bg-[#5a7a66] text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
                >
                  <Search className="w-4 h-4" />
                  Rechercher
                </button>
              </div>
            </div>
            
            {notFound && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p className="text-red-700">Commande non trouvée. Vérifiez votre numéro de commande.</p>
              </div>
            )}
          </div>

          {/* Status Card */}
          {(orderData || !searchOrderId) && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  {orderData ? `Commande #${orderData.orderNumber}` : 'Commande de démonstration'}
                </h2>
                <p className="text-muted-foreground">
                  Statut actuel : Préparation en cours
                </p>
                <p className="text-muted-foreground">
                  Livraison estimée : {orderData ? '2-3 jours ouvrables' : defaultOrderStatus.estimatedDelivery}
                </p>
              </div>
              <div className="text-right">
                <div className="w-16 h-16 bg-[#6b8e7b] rounded-full flex items-center justify-center">
                  <Package className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="relative">
              <div className="absolute top-6 left-0 w-full h-0.5 bg-gray-200"></div>
              <div 
                className="absolute top-6 left-0 h-0.5 bg-[#6b8e7b] transition-all duration-500"
                style={{ width: `${(defaultOrderStatus.currentStep / steps.length) * 100}%` }}
              ></div>
              
              <div className="relative flex justify-between">
                {steps.map((step, index) => {
                  const Icon = step.icon
                  return (
                    <div key={step.id} className="flex flex-col items-center">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${
                        step.completed 
                          ? 'bg-[#6b8e7b] border-[#6b8e7b] text-white' 
                          : step.current
                          ? 'bg-white border-[#6b8e7b] text-[#6b8e7b] animate-pulse'
                          : 'bg-white border-gray-200 text-gray-400'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      
                      <div className="mt-4 text-center max-w-[120px]">
                        <h3 className={`font-medium text-sm mb-1 ${
                          step.completed || step.current ? 'text-foreground' : 'text-muted-foreground'
                        }`}>
                          {step.title}
                        </h3>
                        <p className="text-xs text-muted-foreground mb-1">
                          {step.description}
                        </p>
                        <p className="text-xs font-medium text-[#6b8e7b]">
                          {step.date}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          )}

          {/* Order Details */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Détails de la commande
            </h3>
            
            <div className="space-y-4">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-muted-foreground">Numéro de commande</span>
                <span className="font-medium">{orderData?.orderNumber || defaultOrderStatus.orderNumber}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-muted-foreground">Date de commande</span>
                <span className="font-medium">
                  {orderData ? new Date(orderData.orderDate).toLocaleDateString('fr-FR') : '5 février 2026'}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-muted-foreground">Méthode de livraison</span>
                <span className="font-medium">Livraison standard (2-3 jours)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-muted-foreground">Total de la commande</span>
                <span className="font-medium">
                  ${orderData ? orderData.finalTotal.toFixed(2) : '47.97'} CAD
                </span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">Adresse de livraison</span>
                <span className="font-medium text-right">
                  {orderData ? (
                    <>
                      {orderData.customerInfo.address}<br />
                      {orderData.customerInfo.apartment && `${orderData.customerInfo.apartment}<br />`}
                      {orderData.customerInfo.city}, {orderData.customerInfo.province} {orderData.customerInfo.postalCode}
                    </>
                  ) : (
                    <>
                      123 Rue des Chats<br />
                      Montréal, QC H1A 1A1
                    </>
                  )}
                </span>
              </div>
            </div>
          </div>

          {/* Order Items */}
          {orderData && (
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Articles commandés
              </h3>
              <div className="space-y-3">
                {orderData.items.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <div>
                      <p className="font-medium text-foreground">{item.name}</p>
                      <p className="text-sm text-muted-foreground">Quantité: {item.quantity}</p>
                    </div>
                    <p className="font-medium">${(item.price * item.quantity).toFixed(2)} CAD</p>
                  </div>
                ))}
                <div className="pt-3 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-foreground">Total final</span>
                    <span className="font-bold text-[#6b8e7b] text-lg">${orderData.finalTotal.toFixed(2)} CAD</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Contact Support */}
          <div className="bg-[#f5f2ed] rounded-xl p-6 text-center">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Besoin d'aide ?
            </h3>
            <p className="text-muted-foreground mb-4">
              Notre équipe est là pour vous aider avec votre commande
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-[#6b8e7b] hover:bg-[#5a7a66] text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Contacter le support
              </a>
              <a
                href="/faq"
                className="border border-[#6b8e7b] text-[#6b8e7b] hover:bg-[#6b8e7b] hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Voir la FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
