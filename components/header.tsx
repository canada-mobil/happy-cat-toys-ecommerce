"use client"

import { Menu, PawPrint, Globe } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import CartDropdown from "./cart-dropdown"
import { useI18n } from "@/lib/i18n-context"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentMessage, setCurrentMessage] = useState(0)
  const { t, locale, toggleLocale } = useI18n()

  const messages = locale === 'fr' 
    ? ["LIVRAISON GRATUITE OFFERTE", "LIVRAISON RAPIDE", "GARANTI 2 MOIS"]
    : ["FREE SHIPPING", "FAST DELIVERY", "2-MONTH GUARANTEE"]

  const menuItems = [
    { label: t.header.toys, href: "/produits" },
    { label: t.header.fournitures, href: "/fournitures" },
    { label: t.header.guide, href: "/guide" },
    { label: t.header.about, href: "/a-propos" },
    { label: t.header.tracking, href: "/suivi" },
    { label: t.header.contact, href: "/contact" },
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
      <div className="py-2 text-center overflow-hidden relative" style={{ backgroundColor: '#5B9BD5' }}>
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
            <Link href="/" className="text-neutral-900 text-xl font-semibold tracking-tight hover:opacity-80 transition-opacity flex items-center gap-1.5">
              <PawPrint className="w-5 h-5" />
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
          <Link href="/" className="lg:hidden text-neutral-900 text-xl font-semibold tracking-tight hover:opacity-80 transition-opacity absolute left-1/2 -translate-x-1/2 flex items-center gap-1.5">
            <PawPrint className="w-5 h-5" />
            Purrball
          </Link>

          {/* Right: Cart */}
          <div className="flex items-center gap-1">
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
              <li>
                <button
                  onClick={() => { toggleLocale(); setMobileMenuOpen(false) }}
                  className="text-neutral-600 hover:text-black transition-colors flex items-center gap-2 py-1 text-sm"
                >
                  <Globe className="w-4 h-4" />
                  {locale === 'fr' ? 'English' : 'Français'}
                </button>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  )
}
