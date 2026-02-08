"use client"

import React from "react"
import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { Package, Search, Truck, CheckCircle, Clock, MapPin, ArrowRight, AlertTriangle, Box, ShoppingBag, Loader2 } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"
import { getOrdersByEmail, type OrderRecord } from "@/lib/orders"

function getEstimatedDelivery(orderDate: string, isFr: boolean): string {
  const date = new Date(orderDate)
  const start = new Date(date)
  start.setDate(start.getDate() + 2)
  const end = new Date(date)
  end.setDate(end.getDate() + 3)
  
  const months = isFr 
    ? ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
    : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  
  if (start.getMonth() === end.getMonth()) {
    return isFr
      ? `${start.getDate()}-${end.getDate()} ${months[start.getMonth()]} ${start.getFullYear()}`
      : `${months[start.getMonth()]} ${start.getDate()}-${end.getDate()}, ${start.getFullYear()}`
  }
  return isFr
    ? `${start.getDate()} ${months[start.getMonth()]} - ${end.getDate()} ${months[end.getMonth()]} ${start.getFullYear()}`
    : `${months[start.getMonth()]} ${start.getDate()} - ${months[end.getMonth()]} ${end.getDate()}, ${start.getFullYear()}`
}

function formatOrderDate(orderDate: string, isFr: boolean): string {
  const date = new Date(orderDate)
  const months = isFr 
    ? ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
    : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  return isFr
    ? `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
    : `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}

function getTrackingSteps(orderDate: string, isFr: boolean) {
  const date = new Date(orderDate)
  const now = new Date()
  const hoursSinceOrder = (now.getTime() - date.getTime()) / (1000 * 60 * 60)

  const fmtTime = (d: Date) => {
    const h = d.getHours()
    const m = d.getMinutes()
    const ampm = h >= 12 ? 'PM' : 'AM'
    const h12 = h % 12 || 12
    return `${h12}:${String(m).padStart(2, '0')} ${ampm}`
  }

  const fmtDate = (d: Date) => {
    const months = isFr
      ? ['jan', 'fév', 'mar', 'avr', 'mai', 'jun', 'jul', 'aoû', 'sep', 'oct', 'nov', 'déc']
      : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return `${d.getDate()} ${months[d.getMonth()]}, ${fmtTime(d)}`
  }

  const step1Date = new Date(date)
  const step2Date = new Date(date.getTime() + 2 * 60 * 60 * 1000)
  const step3Date = new Date(date.getTime() + 18 * 60 * 60 * 1000)
  const step4Date = new Date(date.getTime() + 36 * 60 * 60 * 1000)
  const deliveryStart = new Date(date)
  deliveryStart.setDate(deliveryStart.getDate() + 2)
  const deliveryEnd = new Date(date)
  deliveryEnd.setDate(deliveryEnd.getDate() + 3)

  const steps = [
    {
      title: isFr ? 'Commande confirmée' : 'Order confirmed',
      subtitle: isFr ? 'Votre commande a été reçue et confirmée' : 'Your order has been received and confirmed',
      date: fmtDate(step1Date),
      completed: true,
      current: hoursSinceOrder < 2,
      icon: 'check' as const,
    },
    {
      title: isFr ? 'En préparation' : 'Being prepared',
      subtitle: isFr ? 'Nous emballons vos articles avec soin' : 'We are carefully packing your items',
      date: hoursSinceOrder >= 2 ? fmtDate(step2Date) : (isFr ? 'En attente' : 'Pending'),
      completed: hoursSinceOrder >= 2,
      current: hoursSinceOrder >= 2 && hoursSinceOrder < 18,
      icon: 'box' as const,
    },
    {
      title: isFr ? 'Expédiée' : 'Shipped',
      subtitle: isFr ? 'Votre colis a été remis à Postes Canada' : 'Your package has been handed to Canada Post',
      date: hoursSinceOrder >= 18 ? fmtDate(step3Date) : (isFr ? 'En attente' : 'Pending'),
      completed: hoursSinceOrder >= 18,
      current: hoursSinceOrder >= 18 && hoursSinceOrder < 36,
      icon: 'truck' as const,
    },
    {
      title: isFr ? 'En transit' : 'In transit',
      subtitle: isFr ? 'Votre colis est en route vers vous' : 'Your package is on its way to you',
      date: hoursSinceOrder >= 36 ? fmtDate(step4Date) : (isFr ? 'En attente' : 'Pending'),
      completed: hoursSinceOrder >= 36,
      current: hoursSinceOrder >= 36 && hoursSinceOrder < 60,
      icon: 'transit' as const,
    },
    {
      title: isFr ? 'Livrée' : 'Delivered',
      subtitle: isFr ? 'Votre colis a été livré' : 'Your package has been delivered',
      date: hoursSinceOrder >= 60 
        ? fmtDate(new Date(date.getTime() + 60 * 60 * 60 * 1000))
        : (isFr ? `Prévu: ${deliveryStart.getDate()}-${deliveryEnd.getDate()} ${['jan','fév','mar','avr','mai','jun','jul','aoû','sep','oct','nov','déc'][deliveryEnd.getMonth()]}` 
           : `Expected: ${['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][deliveryStart.getMonth()]} ${deliveryStart.getDate()}-${deliveryEnd.getDate()}`),
      completed: hoursSinceOrder >= 60,
      current: hoursSinceOrder >= 60,
      icon: 'delivered' as const,
    },
  ]

  // Determine overall status
  let status: string
  if (hoursSinceOrder >= 60) status = isFr ? 'Livrée' : 'Delivered'
  else if (hoursSinceOrder >= 36) status = isFr ? 'En transit' : 'In transit'
  else if (hoursSinceOrder >= 18) status = isFr ? 'Expédiée' : 'Shipped'
  else if (hoursSinceOrder >= 2) status = isFr ? 'En préparation' : 'Being prepared'
  else status = isFr ? 'Confirmée' : 'Confirmed'

  const statusColor = hoursSinceOrder >= 60 ? 'bg-green-100 text-green-700' : hoursSinceOrder >= 18 ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'

  return { steps, status, statusColor }
}

function StepIcon({ type, active }: { type: string; active: boolean }) {
  const cls = `w-4 h-4 ${active ? 'text-white' : ''}`
  switch (type) {
    case 'check': return <CheckCircle className={cls} />
    case 'box': return <Box className={cls} />
    case 'truck': return <Truck className={cls} />
    case 'transit': return <Package className={cls} />
    case 'delivered': return <CheckCircle className={cls} />
    default: return <Clock className={cls} />
  }
}

export default function TrackOrderPage() {
  const [email, setEmail] = useState("")
  const [searched, setSearched] = useState(false)
  const [orders, setOrders] = useState<OrderRecord[]>([])
  const [animateSteps, setAnimateSteps] = useState(false)
  const [loading, setLoading] = useState(false)
  const { locale, formatPrice } = useI18n()
  const isFr = locale === 'fr'

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    setSearched(true)
    setAnimateSteps(false)
    setLoading(true)

    try {
      const foundOrders = await getOrdersByEmail(email)
      setOrders(foundOrders)
      setTimeout(() => setAnimateSteps(true), 100)
    } catch {
      setOrders([])
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <section className="bg-brand py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Package className="w-12 h-12 text-white mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            {isFr ? 'Suivre Ma Commande' : 'Track My Order'}
          </h1>
          <p className="text-white/90 text-lg max-w-xl mx-auto">
            {isFr ? "Entrez votre adresse email pour suivre l'état de votre livraison en temps réel." : 'Enter your email address to track your delivery status in real-time.'}
          </p>
        </div>
      </section>

      <section className="py-12 px-4 -mt-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSearch} className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-900 mb-2">
                  {isFr ? 'Adresse email utilisée lors de la commande' : 'Email address used for your order'}
                </label>
                <input 
                  type="email" 
                  id="email" 
                  required 
                  className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 transition-all" 
                  placeholder={isFr ? 'votre@email.com' : 'your@email.com'} 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                />
              </div>
              <button type="submit" className="w-full bg-brand text-white py-4 rounded-lg font-semibold hover:bg-brand-dark transition-colors flex items-center justify-center gap-2">
                <Search className="w-5 h-5" />
                {isFr ? 'Rechercher mes commandes' : 'Search my orders'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {loading && (
        <section className="pb-16 px-4">
          <div className="max-w-3xl mx-auto flex justify-center py-16">
            <Loader2 className="w-8 h-8 text-brand animate-spin" />
          </div>
        </section>
      )}

      {!loading && searched && (
        <section className="pb-16 px-4">
          <div className="max-w-3xl mx-auto">
            {orders.length > 0 ? (
              <div className="space-y-8">
                {orders.map((order) => {
                  const { steps, status, statusColor } = getTrackingSteps(order.order_date, isFr)
                  const progressPct = (steps.filter(s => s.completed).length / steps.length) * 100

                  return (
                    <div key={order.order_number} className="space-y-4">
                      {/* Order Header */}
                      <div className="bg-white rounded-xl shadow-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <p className="text-xs text-neutral-400 uppercase tracking-wider">{isFr ? 'Commande' : 'Order'}</p>
                            <p className="text-lg font-semibold text-neutral-900 font-mono">{order.order_number}</p>
                          </div>
                          <div className={`${statusColor} px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5`}>
                            <Truck className="w-3.5 h-3.5" />
                            {status}
                          </div>
                        </div>

                        {/* Progress bar */}
                        <div className="w-full bg-neutral-100 rounded-full h-2 mb-6 overflow-hidden">
                          <div 
                            className="h-full bg-brand rounded-full transition-all duration-1000 ease-out"
                            style={{ width: animateSteps ? `${progressPct}%` : '0%' }}
                          />
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <p className="text-neutral-400 text-xs">{isFr ? 'Date de commande' : 'Order date'}</p>
                            <p className="font-medium text-neutral-900">{formatOrderDate(order.order_date, isFr)}</p>
                          </div>
                          <div>
                            <p className="text-neutral-400 text-xs">{isFr ? 'Livraison estimée' : 'Estimated delivery'}</p>
                            <p className="font-medium text-neutral-900">{getEstimatedDelivery(order.order_date, isFr)}</p>
                          </div>
                          <div>
                            <p className="text-neutral-400 text-xs">{isFr ? 'Transporteur' : 'Carrier'}</p>
                            <p className="font-medium text-neutral-900">{isFr ? 'Postes Canada' : 'Canada Post'}</p>
                          </div>
                          <div>
                            <p className="text-neutral-400 text-xs">{isFr ? 'Total payé' : 'Total paid'}</p>
                            <p className="font-bold text-neutral-900">{formatPrice(order.final_total)}</p>
                          </div>
                        </div>
                      </div>

                      {/* Tracking Steps */}
                      <div className="bg-white rounded-xl shadow-lg p-6">
                        <h3 className="font-semibold text-neutral-900 mb-6 flex items-center gap-2">
                          <Truck className="w-5 h-5" />
                          {isFr ? 'Progression de la livraison' : 'Delivery Progress'}
                        </h3>
                        <div className="space-y-0">
                          {steps.map((step, index) => (
                            <div 
                              key={step.title} 
                              className={`flex items-start gap-4 transition-all duration-500 ${animateSteps ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                              style={{ transitionDelay: animateSteps ? `${index * 150}ms` : '0ms' }}
                            >
                              <div className="flex flex-col items-center">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                                  step.current 
                                    ? 'bg-brand text-white ring-4 ring-brand/20 scale-110' 
                                    : step.completed 
                                      ? 'bg-brand/20 text-brand' 
                                      : 'bg-neutral-100 text-neutral-300'
                                }`}>
                                  <StepIcon type={step.icon} active={step.current} />
                                </div>
                                {index < steps.length - 1 && (
                                  <div className={`w-0.5 h-12 transition-all duration-500 ${step.completed ? 'bg-brand/30' : 'bg-neutral-100'}`} />
                                )}
                              </div>
                              <div className="flex-1 pb-6">
                                <p className={`font-medium text-sm ${step.current ? 'text-brand' : step.completed ? 'text-neutral-900' : 'text-neutral-400'}`}>
                                  {step.title}
                                  {step.current && <span className="ml-2 inline-flex items-center gap-1 text-[10px] bg-brand/10 text-brand px-2 py-0.5 rounded-full font-semibold">{isFr ? 'EN COURS' : 'CURRENT'}</span>}
                                </p>
                                <p className="text-xs text-neutral-400 mt-0.5">{step.subtitle}</p>
                                <p className="text-[11px] text-neutral-300 mt-1">{step.date}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Items */}
                      <div className="bg-white rounded-xl shadow-lg p-6">
                        <h3 className="font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                          <ShoppingBag className="w-5 h-5" />
                          {isFr ? 'Articles commandés' : 'Items ordered'}
                        </h3>
                        <div className="space-y-3">
                          {order.items.filter((item: { price: number }) => item.price > 0).map((item: { id: string; name: string; price: number; quantity: number; image: string }, idx: number) => (
                            <div key={idx} className="flex items-center gap-3 py-2 border-b border-gray-50 last:border-0">
                              <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-neutral-50 flex-shrink-0">
                                <Image src={item.image} alt={item.name} fill sizes="48px" className="object-contain p-1" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-neutral-900 truncate">{item.name}</p>
                                <p className="text-xs text-neutral-400">{isFr ? 'Qté' : 'Qty'}: {item.quantity}</p>
                              </div>
                              <span className="text-sm font-semibold text-neutral-900">{formatPrice(item.price * item.quantity)}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 pt-3 border-t border-neutral-100 flex justify-between">
                          <span className="text-sm text-neutral-400">{isFr ? 'Total' : 'Total'}</span>
                          <span className="text-sm font-bold text-neutral-900">{formatPrice(order.final_total)}</span>
                        </div>
                      </div>

                      {/* Delivery Address */}
                      <div className="bg-brand/5 rounded-xl p-6">
                        <div className="flex items-start gap-4">
                          <MapPin className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-neutral-900 mb-1 text-sm">{isFr ? 'Adresse de livraison' : 'Delivery address'}</h4>
                            <p className="text-neutral-500 text-sm">
                              {order.first_name} {order.last_name}<br />
                              {order.address}{order.apartment ? `, ${order.apartment}` : ''}<br />
                              {order.city}, {order.province} {order.postal_code}<br />
                              {order.country === 'CA' ? 'Canada' : (isFr ? 'États-Unis' : 'United States')}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">{isFr ? 'Aucune commande trouvée' : 'No orders found'}</h3>
                <p className="text-neutral-400 mb-6">
                  {isFr ? "Nous n'avons pas trouvé de commande associée à cet email. Vérifiez l'adresse et réessayez." : "We couldn't find any orders associated with this email. Check the address and try again."}
                </p>
                <p className="text-sm text-neutral-400">
                  {isFr ? <>Besoin d&apos;aide? <a href="/contact" className="text-brand underline font-medium">Contactez-nous</a></> : <>Need help? <a href="/contact" className="text-brand underline font-medium">Contact us</a></>}
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-neutral-900 text-center mb-8">
            {isFr ? 'Informations de Livraison' : 'Shipping Information'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 text-center">
              <Truck className="w-10 h-10 text-neutral-900 mx-auto mb-4" />
              <h3 className="font-semibold text-neutral-900 mb-2">{isFr ? 'Livraison Rapide' : 'Fast Delivery'}</h3>
              <p className="text-neutral-400 text-sm">{isFr ? 'Recevez votre commande en 2-3 jours ouvrables partout au Canada.' : 'Receive your order in 2-3 business days across Canada.'}</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <Package className="w-10 h-10 text-neutral-900 mx-auto mb-4" />
              <h3 className="font-semibold text-neutral-900 mb-2">{isFr ? 'Livraison Gratuite' : 'Free Shipping'}</h3>
              <p className="text-neutral-400 text-sm">{isFr ? 'Frais de port offerts pour toute commande de plus de 50$.' : 'Free shipping on all orders over $50.'}</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <CheckCircle className="w-10 h-10 text-neutral-900 mx-auto mb-4" />
              <h3 className="font-semibold text-neutral-900 mb-2">{isFr ? 'Suivi en Temps Réel' : 'Real-Time Tracking'}</h3>
              <p className="text-neutral-400 text-sm">{isFr ? "Suivez votre colis étape par étape jusqu'à votre porte." : 'Track your package step by step to your door.'}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">
            {isFr ? 'Une question sur votre commande?' : 'Question about your order?'}
          </h2>
          <p className="text-neutral-400 mb-6">
            {isFr ? 'Notre équipe de service client est disponible pour vous aider du lundi au vendredi, de 9h à 18h.' : 'Our customer service team is available to help Monday to Friday, 9am to 6pm.'}
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 text-neutral-900 font-medium hover:underline">
            {isFr ? 'Contactez-nous' : 'Contact us'}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
