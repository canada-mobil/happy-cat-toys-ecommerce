"use client"

import { Menu, ShoppingBag } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import CartDropdown from "./cart-dropdown"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const menuItems = [
    { label: "Accueil", href: "/" },
    { label: "Produits", href: "/produits" },
    { label: "Guide Soins Chat", href: "/guide" },
    { label: "À Propos", href: "/a-propos" },
    { label: "Suivre Commande", href: "/suivi" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-[#f5f2ed] py-2 text-center">
        <p className="text-sm font-medium text-foreground tracking-wide">
          SOLDES : ACHETEZ 2, OBTENEZ 1 GRATUIT
        </p>
      </div>

      {/* Main Header */}
      <header className="bg-[#c8847a] py-4 px-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left Icons */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:opacity-80 transition-opacity"
              aria-label="Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Logo */}
          <Link href="/" className="text-white text-xl md:text-2xl font-serif font-semibold tracking-wide hover:opacity-90 transition-opacity">
            Happy Cat Toys
          </Link>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <CartDropdown />
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="mt-4 pt-4 border-t border-white/20">
            <ul className="flex flex-col gap-3">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link 
                    href={item.href} 
                    className="text-white hover:opacity-80 transition-opacity block py-1"
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
