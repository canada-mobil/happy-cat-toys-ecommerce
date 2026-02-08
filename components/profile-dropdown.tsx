"use client"

import { useState, useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import { User, X, Package, Truck, CheckCircle, Clock, Box, Search, ShoppingBag, ArrowRight, Loader2, AlertTriangle } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"
import { getOrdersByEmail, type OrderRecord } from "@/lib/orders"
import Image from "next/image"
import Link from "next/link"

function getTrackingStatus(orderDate: string, isFr: boolean) {
  const date = new Date(orderDate)
  const now = new Date()
  const hours = (now.getTime() - date.getTime()) / (1000 * 60 * 60)

  if (hours >= 72) return { label: isFr ? 'Colis perdu — Remboursement' : 'Package lost — Refund', color: 'bg-red-100 text-red-700', icon: AlertTriangle, pct: 100 }
  if (hours >= 60) return { label: isFr ? 'Problème de livraison' : 'Delivery problem', color: 'bg-red-100 text-red-700', icon: AlertTriangle, pct: 85 }
  if (hours >= 36) return { label: isFr ? 'En transit' : 'In transit', color: 'bg-blue-100 text-blue-700', icon: Truck, pct: 65 }
  if (hours >= 18) return { label: isFr ? 'Expédiée' : 'Shipped', color: 'bg-blue-100 text-blue-700', icon: Truck, pct: 50 }
  if (hours >= 2) return { label: isFr ? 'En préparation' : 'Preparing', color: 'bg-amber-100 text-amber-700', icon: Box, pct: 30 }
  return { label: isFr ? 'Confirmée' : 'Confirmed', color: 'bg-amber-100 text-amber-700', icon: Clock, pct: 15 }
}

function getEstimatedDelivery(orderDate: string, isFr: boolean): string {
  const date = new Date(orderDate)
  const start = new Date(date); start.setDate(start.getDate() + 2)
  const end = new Date(date); end.setDate(end.getDate() + 3)
  const months = isFr
    ? ['jan', 'fév', 'mar', 'avr', 'mai', 'jun', 'jul', 'aoû', 'sep', 'oct', 'nov', 'déc']
    : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  return `${start.getDate()}-${end.getDate()} ${months[end.getMonth()]}`
}

export default function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [savedEmail, setSavedEmail] = useState("")
  const [orders, setOrders] = useState<OrderRecord[]>([])
  const [searched, setSearched] = useState(false)
  const [loading, setLoading] = useState(false)
  const [mounted, setMounted] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const { locale, formatPrice } = useI18n()
  const isFr = locale === 'fr'

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('purrball-profile-email')
    if (saved) {
      setSavedEmail(saved)
      setEmail(saved)
      lookupOrders(saved)
    }
  }, [])

  const lookupOrders = async (emailToSearch: string) => {
    setLoading(true)
    try {
      const found = await getOrdersByEmail(emailToSearch)
      setOrders(found)
      setSearched(true)
    } catch {
      setOrders([])
      setSearched(true)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    localStorage.setItem('purrball-profile-email', email.toLowerCase())
    setSavedEmail(email.toLowerCase())
    lookupOrders(email)
  }

  const handleLogout = () => {
    localStorage.removeItem('purrball-profile-email')
    setSavedEmail("")
    setEmail("")
    setOrders([])
    setSearched(false)
  }

  if (!mounted) return (
    <button className="relative p-2 text-neutral-700 hover:text-neutral-900 transition-colors">
      <User className="w-5 h-5" />
    </button>
  )

  return (
    <>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-neutral-700 hover:text-neutral-900 transition-colors"
        aria-label="Profile"
      >
        <User className="w-5 h-5" />
        {savedEmail && orders.length > 0 && (
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-brand rounded-full" />
        )}
      </button>

      {isOpen && createPortal(
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-[9998]" onClick={() => setIsOpen(false)} />

          {/* Panel */}
          <div className="fixed top-0 right-0 h-full w-full sm:w-[380px] bg-white shadow-2xl z-[9999] flex flex-col animate-in slide-in-from-right duration-200">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-neutral-100">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-neutral-900" />
                <h2 className="font-semibold text-neutral-900">
                  {isFr ? 'Mon compte' : 'My Account'}
                </h2>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-1.5 hover:bg-neutral-100 rounded-full transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
              {/* Email form */}
              <div className="p-4 border-b border-neutral-100">
                {savedEmail ? (
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-neutral-400">{isFr ? 'Connecté avec' : 'Logged in as'}</p>
                      <p className="text-sm font-medium text-neutral-900 truncate">{savedEmail}</p>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="text-xs text-neutral-400 hover:text-red-500 transition-colors"
                    >
                      {isFr ? 'Déconnecter' : 'Log out'}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSearch} className="space-y-3">
                    <p className="text-sm text-neutral-500">
                      {isFr ? 'Entrez votre email pour voir vos commandes' : 'Enter your email to view your orders'}
                    </p>
                    <div className="flex gap-2">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={isFr ? 'votre@email.com' : 'your@email.com'}
                        className="flex-1 px-3 py-2 text-sm rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand/50 bg-white"
                      />
                      <button
                        type="submit"
                        className="bg-brand text-white px-3 py-2 rounded-lg hover:bg-brand-dark transition-colors"
                      >
                        <Search className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Loading */}
              {loading && (
                <div className="flex items-center justify-center py-12">
                  <Loader2 className="w-6 h-6 text-brand animate-spin" />
                </div>
              )}

              {/* Orders */}
              {!loading && searched && (
                <div className="p-4">
                  {orders.length > 0 ? (
                    <div className="space-y-4">
                      <h3 className="text-sm font-semibold text-neutral-900 flex items-center gap-1.5">
                        <ShoppingBag className="w-4 h-4" />
                        {isFr ? `${orders.length} commande${orders.length > 1 ? 's' : ''}` : `${orders.length} order${orders.length > 1 ? 's' : ''}`}
                      </h3>

                      {orders.map((order) => {
                        const tracking = getTrackingStatus(order.order_date, isFr)
                        const StatusIcon = tracking.icon

                        return (
                          <div key={order.order_number} className="bg-neutral-50 rounded-xl p-3.5 space-y-3">
                            {/* Order header */}
                            <div className="flex items-center justify-between">
                              <p className="text-[11px] font-mono text-neutral-400">{order.order_number}</p>
                              <span className={`${tracking.color} text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1`}>
                                <StatusIcon className="w-3 h-3" />
                                {tracking.label}
                              </span>
                            </div>

                            {/* Progress bar */}
                            <div className="w-full bg-neutral-200 rounded-full h-1.5 overflow-hidden">
                              <div
                                className="h-full bg-brand rounded-full transition-all duration-700"
                                style={{ width: `${tracking.pct}%` }}
                              />
                            </div>

                            {/* Items preview */}
                            <div className="flex items-center gap-2">
                              <div className="flex -space-x-2">
                                {order.items.filter(i => i.price > 0).slice(0, 3).map((item, idx) => (
                                  <div key={idx} className="relative w-8 h-8 rounded-lg overflow-hidden bg-white border border-neutral-100 flex-shrink-0">
                                    <Image src={item.image} alt={item.name} fill sizes="32px" className="object-contain p-0.5" />
                                  </div>
                                ))}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-xs text-neutral-600 truncate">
                                  {order.items.filter(i => i.price > 0).map(i => i.name).join(', ')}
                                </p>
                              </div>
                            </div>

                            {/* Info row */}
                            <div className="flex items-center justify-between text-[11px]">
                              <span className="text-neutral-400">
                                {isFr ? 'Livraison:' : 'Delivery:'} {getEstimatedDelivery(order.order_date, isFr)}
                              </span>
                              <span className="font-semibold text-neutral-900">{formatPrice(order.final_total)}</span>
                            </div>
                          </div>
                        )
                      })}

                      {/* Link to full tracking */}
                      <Link
                        href="/suivi"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-center gap-2 text-sm text-brand font-medium hover:underline py-2"
                      >
                        {isFr ? 'Voir le suivi détaillé' : 'View detailed tracking'}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Package className="w-10 h-10 text-neutral-200 mx-auto mb-3" />
                      <p className="text-sm font-medium text-neutral-900 mb-1">
                        {isFr ? 'Aucune commande' : 'No orders found'}
                      </p>
                      <p className="text-xs text-neutral-400 mb-4">
                        {isFr ? 'Aucune commande trouvée pour cet email' : 'No orders found for this email'}
                      </p>
                      <Link
                        href="/produits"
                        onClick={() => setIsOpen(false)}
                        className="inline-flex items-center gap-1.5 text-sm text-brand font-medium hover:underline"
                      >
                        {isFr ? 'Voir les produits' : 'Browse products'}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}
                </div>
              )}

              {!searched && !savedEmail && (
                <div className="text-center py-12 px-4">
                  <User className="w-10 h-10 text-neutral-200 mx-auto mb-3" />
                  <p className="text-sm text-neutral-400">
                    {isFr ? 'Entrez votre email pour accéder à vos commandes' : 'Enter your email to access your orders'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </>,
        document.body
      )}
    </>
  )
}
