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
    
    // Validate Order ID format (should start with PB and be the right length)
    if (!searchOrderId.startsWith('PB') || searchOrderId.length < 10) {
      setOrderData(null)
      setNotFound(true)
      return
    }
    
    const storedOrder = localStorage.getItem(`order_${searchOrderId}`)
    console.log('Searching for order:', searchOrderId)
    console.log('Found in localStorage:', storedOrder)
    
    if (storedOrder) {
      try {
        const parsedOrder = JSON.parse(storedOrder)
        console.log('Parsed order data:', parsedOrder)
        setOrderData(parsedOrder)
        setNotFound(false)
      } catch (error) {
        console.error('Error parsing order data:', error)
        setOrderData(null)
        setNotFound(true)
      }
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
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl text-neutral-900 mb-4">
              Suivi de commande
            </h1>
            <p className="text-neutral-400 text-lg mb-6">
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
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
                  onKeyPress={(e) => e.key === 'Enter' && searchOrder()}
                />
                <button
                  onClick={searchOrder}
                  className="bg-neutral-900 hover:bg-black text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
                >
                  <Search className="w-4 h-4" />
                  Rechercher
                </button>
              </div>
            </div>
            
            {notFound && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p className="text-red-700">Commande non trouvée. Vérifiez votre numéro de commande.</p>
                <p className="text-red-600 text-sm mt-2">Format attendu: PB suivi de chiffres (ex: PB1738782456789)</p>
              </div>
            )}
            
            {/* Debug Info */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
              <h4 className="font-medium text-gray-700 mb-2">🔍 Debug Info</h4>
              <p className="text-sm text-gray-600">
                Recherche pour: <code className="bg-gray-200 px-1 rounded">{searchOrderId || 'Aucun'}</code>
              </p>
              <p className="text-sm text-gray-600">
                Données trouvées: <code className="bg-gray-200 px-1 rounded">{orderData ? 'Oui' : 'Non'}</code>
              </p>
              <p className="text-sm text-gray-600">
                Erreur: <code className="bg-gray-200 px-1 rounded">{notFound ? 'Oui' : 'Non'}</code>
              </p>
              <button 
                onClick={() => {
                  console.log('=== LOCALSTORAGE DEBUG ===')
                  console.log('All localStorage keys:', Object.keys(localStorage))
                  console.log('Keys starting with order_:', Object.keys(localStorage).filter(key => key.startsWith('order_')))
                  Object.keys(localStorage).forEach(key => {
                    if (key.startsWith('order_')) {
                      console.log(`${key}:`, localStorage.getItem(key))
                    }
                  })
                }}
                className="mt-2 bg-blue-500 text-white px-3 py-1 rounded text-xs"
              >
                Debug localStorage
              </button>
            </div>
          </div>

          {/* Status Card */}
          {orderData && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold text-neutral-900 mb-2">
                  Commande #{orderData.orderNumber}
                </h2>
                <p className="text-neutral-400">
                  Statut actuel : Préparation en cours
                </p>
                <p className="text-neutral-400">
                  Livraison estimée : 2-3 jours ouvrables
                </p>
              </div>
              <div className="text-right">
                <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center">
                  <Package className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="relative">
              <div className="absolute top-6 left-0 w-full h-0.5 bg-gray-200"></div>
              <div 
                className="absolute top-6 left-0 h-0.5 bg-neutral-900 transition-all duration-500"
                style={{ width: `${(defaultOrderStatus.currentStep / steps.length) * 100}%` }}
              ></div>
              
              <div className="relative flex justify-between">
                {steps.map((step, index) => {
                  const Icon = step.icon
                  return (
                    <div key={step.id} className="flex flex-col items-center">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${
                        step.completed 
                          ? 'bg-neutral-900 border-neutral-900 text-white' 
                          : step.current
                          ? 'bg-white border-neutral-900 text-neutral-900 animate-pulse'
                          : 'bg-white border-gray-200 text-gray-400'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      
                      <div className="mt-4 text-center max-w-[120px]">
                        <h3 className={`font-medium text-sm mb-1 ${
                          step.completed || step.current ? 'text-neutral-900' : 'text-neutral-400'
                        }`}>
                          {step.title}
                        </h3>
                        <p className="text-xs text-neutral-400 mb-1">
                          {step.description}
                        </p>
                        <p className="text-xs font-medium text-neutral-900">
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
          {orderData && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-neutral-900 mb-4">
              Détails de la commande
            </h3>
            
            <div className="space-y-4">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-neutral-400">Numéro de commande</span>
                <span className="font-medium">{orderData.orderNumber}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-neutral-400">Date de commande</span>
                <span className="font-medium">
                  {new Date(orderData.orderDate).toLocaleDateString('fr-FR')}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-neutral-400">Client</span>
                <span className="font-medium">
                  {orderData.customerInfo.firstName} {orderData.customerInfo.lastName}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-neutral-400">Email</span>
                <span className="font-medium">{orderData.customerInfo.email}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-neutral-400">Téléphone</span>
                <span className="font-medium">{orderData.customerInfo.phone}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-neutral-400">Méthode de livraison</span>
                <span className="font-medium">Livraison standard (2-3 jours)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-neutral-400">Total de la commande</span>
                <span className="font-medium">
                  ${orderData.finalTotal.toFixed(2)} CAD
                </span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-neutral-400">Adresse de livraison</span>
                <span className="font-medium text-right">
                  {orderData.customerInfo.address}<br />
                  {orderData.customerInfo.apartment && `${orderData.customerInfo.apartment}<br />`}
                  {orderData.customerInfo.city}, {orderData.customerInfo.province} {orderData.customerInfo.postalCode}
                </span>
              </div>
            </div>
          </div>
          )}

          {/* Order Items */}
          {orderData && (
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                Articles commandés
              </h3>
              <div className="space-y-3">
                {orderData.items.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <div>
                      <p className="font-medium text-neutral-900">{item.name}</p>
                      <p className="text-sm text-neutral-400">Quantité: {item.quantity}</p>
                    </div>
                    <p className="font-medium">${(item.price * item.quantity).toFixed(2)} CAD</p>
                  </div>
                ))}
                <div className="pt-3 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-neutral-900">Total final</span>
                    <span className="font-bold text-neutral-900 text-lg">${orderData.finalTotal.toFixed(2)} CAD</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Contact Support */}
          <div className="bg-white rounded-xl p-6 text-center">
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">
              Besoin d'aide ?
            </h3>
            <p className="text-neutral-400 mb-4">
              Notre équipe est là pour vous aider avec votre commande
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-neutral-900 hover:bg-black text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Contacter le support
              </a>
              <a
                href="/faq"
                className="border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
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
