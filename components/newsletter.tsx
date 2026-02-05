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
    <section className="bg-[#6b8e7b] py-14 px-4">
      <div className="max-w-3xl mx-auto text-center">
        {subscribed ? (
          <div className="py-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-serif font-semibold text-white mb-2">
              Merci de votre inscription!
            </h3>
            <p className="text-white/90">
              Votre code de réduction de 10% a été envoyé à votre email.
            </p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Gift className="w-6 h-6 text-white" />
              <span className="text-white font-medium">OFFRE EXCLUSIVE</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-3">
              10% de Réduction sur Votre Première Commande
            </h2>
            <p className="text-white/90 mb-8 max-w-xl mx-auto">
              Inscrivez-vous à notre infolettre et recevez des offres exclusives, 
              des conseils pour votre chat et un code de réduction instantané.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                  placeholder="Votre email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="bg-[#c8847a] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#b8746a] transition-colors whitespace-nowrap"
              >
                Obtenir 10%
              </button>
            </form>
            
            <p className="text-white/60 text-xs mt-4">
              En vous inscrivant, vous acceptez de recevoir nos emails. Désabonnement possible à tout moment.
            </p>
          </>
        )}
      </div>
    </section>
  )
}
