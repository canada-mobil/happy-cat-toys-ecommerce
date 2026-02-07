"use client"

import React from "react"

import { useState } from "react"
import { Mail, Gift, Check } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
    }
  }

  return (
    <section className="bg-blue-900 py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        {subscribed ? (
          <div className="py-6">
            <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">
              Merci de votre inscription!
            </h3>
            <p className="text-neutral-400 text-sm">
              Votre code de réduction de 10% a été envoyé à votre email.
            </p>
          </div>
        ) : (
          <>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-500 mb-4">
              Offre exclusive
            </p>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3 tracking-tight">
              10% sur votre première commande.
            </h2>
            <p className="text-neutral-400 text-sm mb-8 max-w-md mx-auto">
              Inscrivez-vous et recevez des offres exclusives et des conseils pour votre chat.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                <input
                  type="email"
                  required
                  className="w-full pl-11 pr-4 py-3 rounded-full bg-white/10 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-sm"
                  placeholder="Votre email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="bg-white text-neutral-900 px-6 py-3 rounded-full font-medium text-sm hover:bg-neutral-100 transition-colors whitespace-nowrap"
              >
                S'inscrire
              </button>
            </form>
            
            <p className="text-neutral-600 text-[11px] mt-4">
              Désabonnement possible à tout moment. Pas de spam.
            </p>
          </>
        )}
      </div>
    </section>
  )
}
