"use client"

import Image from "next/image"
import Link from "next/link"
import { MapPin, Truck, Shield, Clock, Star, Mail, Phone, Globe, Cat } from "lucide-react"
import { useState } from "react"

export default function Footer() {
  const [selectedCountry, setSelectedCountry] = useState("CA")
  const [selectedLanguage, setSelectedLanguage] = useState("FR")

  const quickLinks = [
    { label: "Produits", href: "/produits" },
    { label: "À Propos", href: "/a-propos" },
    { label: "Contact", href: "/contact" },
    { label: "Guide Soins", href: "/guide" },
  ]

  const supportLinks = [
    { label: "Suivre ma commande", href: "/suivi" },
    { label: "Retours & Échanges", href: "/retours-echanges" },
    { label: "FAQ", href: "/faq" },
    { label: "Contactez-nous", href: "/contact" },
  ]

  const guarantees = [
    { icon: MapPin, text: "100% Canadien" },
    { icon: Truck, text: "Livraison 2-3 jours" },
    { icon: Shield, text: "Garantie 2 mois" },
    { icon: Clock, text: "Retours 30 jours" },
  ]

  const paymentLogos = [
    { name: "Visa", src: "https://cdn.shopify.com/shopifycloud/checkout-web/assets/0169695890db3db16bfe.svg" },
    { name: "Mastercard", src: "https://secure.payment-ca.com/assets/img/mastercard.svg" },
    { name: "Amex", src: "https://secure.payment-ca.com/assets/img/amex.svg" },
    { name: "UnionPay", src: "https://secure.payment-ca.com/assets/img/unionpay.svg" },
    { name: "JCB", src: "https://secure.payment-ca.com/assets/img/jcb.svg" },
    { name: "Discover", src: "https://secure.payment-ca.com/assets/img/discover.svg" },
    { name: "Diners", src: "https://secure.payment-ca.com/assets/img/diners.svg" },
  ]

  return (
    <footer className="bg-[#f5f2ed]">
      {/* Guarantees Bar */}
      <div className="bg-[#6b8e7b] py-4 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {guarantees.map((item) => (
            <div key={item.text} className="flex items-center justify-center gap-2 text-white">
              <item.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-12 pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-9 h-9 bg-gradient-to-br from-[#6b8e7b] to-[#5a7a66] rounded-lg flex items-center justify-center">
                  <Cat className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-lg text-foreground">
                  Happy Cat Toys
                </span>
              </div>
              <p className="text-muted-foreground text-xs leading-relaxed mb-3">
                Produits premium 100% naturels pour chats canadiens.
              </p>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#6b8e7b] text-[#6b8e7b]" />
                ))}
                <span className="font-semibold text-xs ml-1 text-foreground">
                  4.9/5
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Montréal, Québec, Canada
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4 text-xs uppercase tracking-wide">Navigation</h4>
              <ul className="space-y-2 text-xs text-muted-foreground">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="hover:text-[#6b8e7b] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4 text-xs uppercase tracking-wide">Support</h4>
              <ul className="space-y-2 text-xs text-muted-foreground">
                {supportLinks.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="hover:text-[#6b8e7b] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-foreground mb-4 text-xs uppercase tracking-wide">Contact</h4>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Mail className="w-3 h-3 text-[#6b8e7b] flex-shrink-0" />
                  <span className="truncate">support@purrball.ca</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3 h-3 text-[#6b8e7b] flex-shrink-0" />
                  1-800-CAT-TOYS
                </li>
                <li className="text-[10px] mt-2 text-muted-foreground/70">
                  24/7 Customer Support
                </li>
              </ul>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="py-5 border-t border-border mb-5">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {paymentLogos.map((logo) => (
                <div
                  key={logo.name}
                  className="h-8 px-2 rounded border bg-white border-border hover:border-muted-foreground/30 flex items-center justify-center transition-colors"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.name} 
                    className="h-5 w-auto"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop&crop=center"
                alt="Chat heureux"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1548247416-ec66f4900b2e?w=600&h=400&fit=crop&crop=center"
                alt="Collection de jouets"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Country & Language Selector */}
              <div className="flex items-center gap-2">
                <button
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border bg-white border-border text-muted-foreground hover:border-muted-foreground/50 text-xs transition-all"
                  onClick={() => setSelectedCountry(selectedCountry === "CA" ? "US" : "CA")}
                >
                  <Globe className="w-3 h-3" />
                  <span className="font-medium">{selectedCountry === "CA" ? "🇨🇦 Canada" : "🇺🇸 USA"}</span>
                  <span className="text-[10px] text-muted-foreground/70">
                    {selectedCountry === "CA" ? "CAD $" : "USD $"}
                  </span>
                </button>
                <button
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border bg-white border-border text-muted-foreground hover:border-muted-foreground/50 text-xs transition-all"
                  onClick={() => setSelectedLanguage(selectedLanguage === "FR" ? "EN" : "FR")}
                >
                  <span className="font-medium">{selectedLanguage === "FR" ? "Français" : "English"}</span>
                </button>
              </div>

              {/* Copyright & Links */}
              <div className="flex flex-col md:flex-row items-center gap-3">
                <p className="text-[10px] text-muted-foreground/70">
                  © 2026 Happy Cat Toys. Tous droits réservés.
                </p>
                <div className="flex items-center gap-3 text-[10px] text-muted-foreground/70">
                  <Link href="/politique-confidentialite" className="hover:text-[#6b8e7b] transition-colors">
                    Politique de Confidentialité
                  </Link>
                  <span>•</span>
                  <Link href="/conditions-utilisation" className="hover:text-[#6b8e7b] transition-colors">
                    Conditions d'Utilisation
                  </Link>
                  <span>•</span>
                  <Link href="/politique-remboursement" className="hover:text-[#6b8e7b] transition-colors">
                    Politique de Remboursement
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
