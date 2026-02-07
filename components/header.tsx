"use client"

import { Menu, ShoppingBag } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import CartDropdown from "./cart-dropdown"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentMessage, setCurrentMessage] = useState(0)

  const messages = [
    "🚚 LIVRAISON GRATUITE OFFERTE",
    "⚡ LIVRAISON RAPIDE",
    "✅ GARANTI 2 MOIS"
  ]

  const menuItems = [
    { label: "Produits", href: "/produits" },
    { label: "Guide Soins Chat", href: "/guide" },
    { label: "À Propos", href: "/a-propos" },
    { label: "Suivre Commande", href: "/suivi" },
    { label: "Contact", href: "/contact" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [messages.length])

  return (
    <>
      {/* Animated Announcement Bar */}
      <div className="bg-blue-800 py-2 text-center overflow-hidden relative">
        <div className="relative h-5">
          {messages.map((message, index) => (
            <p
              key={index}
              className={`absolute inset-0 text-xs font-medium text-white/90 tracking-widest uppercase transition-transform duration-500 ease-in-out ${
                index === currentMessage
                  ? 'transform translate-x-0'
                  : index < currentMessage
                  ? 'transform -translate-x-full'
                  : 'transform translate-x-full'
              }`}
            >
              {message}
            </p>
          ))}
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white/95 backdrop-blur-md py-3 px-4 sticky top-0 z-50 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Mobile: Menu left */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-neutral-800 hover:text-black transition-colors p-1"
            aria-label="Menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Desktop: Logo + Nav left */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-neutral-900 text-xl font-semibold tracking-tight hover:opacity-80 transition-opacity">
              Purrball
            </Link>
            <nav className="flex items-center gap-6">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-neutral-500 hover:text-neutral-900 transition-colors text-sm font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Mobile: Logo center */}
          <Link href="/" className="lg:hidden text-neutral-900 text-xl font-semibold tracking-tight hover:opacity-80 transition-opacity absolute left-1/2 -translate-x-1/2">
            Purrball
          </Link>

          {/* Right: Cart */}
          <div className="flex items-center">
            <CartDropdown />
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pt-4 border-t border-neutral-100">
            <ul className="flex flex-col gap-3">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link 
                    href={item.href} 
                    className="text-neutral-600 hover:text-black transition-colors block py-1 text-sm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>
    </>
  )
}
