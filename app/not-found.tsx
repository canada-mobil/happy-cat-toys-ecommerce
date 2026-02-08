"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Home, ArrowLeft, Search, ShoppingBag } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

export default function NotFound() {
  const { locale } = useI18n()
  const isFr = locale === 'fr'

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="py-20 px-4">
        <div className="max-w-lg mx-auto text-center">
          <div className="text-[120px] font-bold text-neutral-100 leading-none select-none mb-2">404</div>

          <h1 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-3">
            {isFr ? 'Page introuvable' : 'Page not found'}
          </h1>
          <p className="text-neutral-400 mb-10">
            {isFr
              ? "Oups ! La page que vous cherchez n'existe pas ou a été déplacée."
              : "Oops! The page you're looking for doesn't exist or has been moved."}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white px-6 py-3 rounded-full font-medium text-sm transition-all"
            >
              <Home className="w-4 h-4" />
              {isFr ? 'Retour à l\'accueil' : 'Back to home'}
            </Link>
            <Link
              href="/produits"
              className="inline-flex items-center justify-center gap-2 border border-neutral-200 hover:border-neutral-400 text-neutral-700 px-6 py-3 rounded-full font-medium text-sm transition-all"
            >
              <ShoppingBag className="w-4 h-4" />
              {isFr ? 'Voir les produits' : 'Browse products'}
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
