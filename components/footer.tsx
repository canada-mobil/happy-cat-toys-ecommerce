"use client"

import Image from "next/image"
import Link from "next/link"
import { MapPin, Truck, Shield, Clock, Star, Mail, Phone, Globe, Cat } from "lucide-react"
import { useState } from "react"
import { useI18n } from "@/lib/i18n-context"

export default function Footer() {
  const { t, locale, setLocale, country, setCountry } = useI18n()

  const quickLinks = [
    { label: t.footer.allProducts, href: "/produits" },
    { label: t.header.about, href: "/a-propos" },
    { label: t.header.contact, href: "/contact" },
    { label: t.header.guide, href: "/guide" },
  ]

  const supportLinks = [
    { label: t.header.tracking, href: "/suivi" },
    { label: t.footer.returns, href: "/retours-echanges" },
    { label: t.footer.faq, href: "/faq" },
    { label: t.header.contact, href: "/contact" },
  ]

  const guarantees = [
    { icon: MapPin, text: t.features.canadian },
    { icon: Truck, text: locale === 'fr' ? "Livraison 2-3 jours" : "2-3 Day Delivery" },
    { icon: Shield, text: t.features.guarantee },
    { icon: Clock, text: locale === 'fr' ? "Retours 30 jours" : "30-Day Returns" },
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
    <footer className="bg-white border-t border-neutral-100">
      {/* Guarantees Bar */}
      <div className="border-b border-neutral-100 py-6 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {guarantees.map((item) => (
            <div key={item.text} className="flex items-center justify-center gap-2 text-neutral-600">
              <item.icon className="w-4 h-4 text-neutral-400" />
              <span className="text-xs font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-12 pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-10">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <span className="font-semibold text-lg text-neutral-900 tracking-tight block mb-3">
                Purrball
              </span>
              <p className="text-neutral-400 text-xs leading-relaxed mb-3">
                {locale === 'fr' ? 'Produits premium pour chats heureux. 100% canadien.' : 'Premium products for happy cats. 100% Canadian.'}
              </p>
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <MapPin className="w-3 h-3" />
                Montréal, Québec
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-medium text-neutral-900 mb-4 text-xs uppercase tracking-wider">Navigation</h4>
              <ul className="space-y-2.5 text-xs text-neutral-400">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-neutral-900 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="font-medium text-neutral-900 mb-4 text-xs uppercase tracking-wider">Support</h4>
              <ul className="space-y-2.5 text-xs text-neutral-400">
                {supportLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-neutral-900 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-medium text-neutral-900 mb-4 text-xs uppercase tracking-wider">Contact</h4>
              <ul className="space-y-2.5 text-xs text-neutral-400">
                <li className="flex items-center gap-2">
                  <Mail className="w-3 h-3 flex-shrink-0" />
                  <span className="truncate">support@purrball.ca</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3 h-3 flex-shrink-0" />
                  1-800-CAT-TOYS
                </li>
              </ul>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="py-5 border-t border-neutral-100 mb-5">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {paymentLogos.map((logo) => (
                <div
                  key={logo.name}
                  className="h-7 px-2 rounded border border-neutral-100 flex items-center justify-center"
                >
                  <img src={logo.src} alt={logo.name} className="h-4 w-auto opacity-50" />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-neutral-100 pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <button
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border text-xs transition-all ${country === 'CA' ? 'border-neutral-900 text-neutral-900 font-medium' : 'border-neutral-200 text-neutral-400 hover:text-neutral-600'}`}
                  onClick={() => setCountry('CA')}
                >
                  🇨🇦 Canada
                </button>
                <button
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border text-xs transition-all ${country === 'US' ? 'border-neutral-900 text-neutral-900 font-medium' : 'border-neutral-200 text-neutral-400 hover:text-neutral-600'}`}
                  onClick={() => setCountry('US')}
                >
                  🇺🇸 USA
                </button>
                <button
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border text-xs transition-all ${locale === 'fr' ? 'border-neutral-900 text-neutral-900 font-medium' : 'border-neutral-200 text-neutral-400 hover:text-neutral-600'}`}
                  onClick={() => setLocale('fr')}
                >
                  Français
                </button>
                <button
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border text-xs transition-all ${locale === 'en' ? 'border-neutral-900 text-neutral-900 font-medium' : 'border-neutral-200 text-neutral-400 hover:text-neutral-600'}`}
                  onClick={() => setLocale('en')}
                >
                  English
                </button>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-3">
                <p className="text-[10px] text-neutral-300">
                  © 2026 Purrball. {t.footer.rights}
                </p>
                <div className="flex items-center gap-3 text-[10px] text-neutral-300">
                  <Link href="/politique-confidentialite" className="hover:text-neutral-600 transition-colors">
                    {t.footer.privacy}
                  </Link>
                  <span>·</span>
                  <Link href="/conditions-utilisation" className="hover:text-neutral-600 transition-colors">
                    {t.footer.terms}
                  </Link>
                  <span>·</span>
                  <Link href="/politique-remboursement" className="hover:text-neutral-600 transition-colors">
                    {t.footer.refund}
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
