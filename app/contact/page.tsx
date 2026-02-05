"use client"

import React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#6b8e7b] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <MessageCircle className="w-12 h-12 text-white mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-4">
            Contactez-Nous
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto leading-relaxed">
            Notre équipe est là pour vous aider. Que vous ayez une question sur nos produits, 
            votre commande ou simplement envie de discuter de votre chat, nous sommes à votre écoute.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-4 -mt-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card rounded-xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-[#c8847a]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-[#c8847a]" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Email</h3>
            <p className="text-muted-foreground text-sm">support@happycattoys.ca</p>
            <p className="text-muted-foreground text-sm">info@happycattoys.ca</p>
          </div>

          <div className="bg-card rounded-xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-[#c8847a]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-[#c8847a]" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Téléphone</h3>
            <p className="text-muted-foreground text-sm">1-800-CAT-TOYS</p>
            <p className="text-muted-foreground text-sm">(1-800-228-8697)</p>
          </div>

          <div className="bg-card rounded-xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-[#c8847a]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-[#c8847a]" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Heures d'ouverture</h3>
            <p className="text-muted-foreground text-sm">Lun - Ven: 9h - 18h</p>
            <p className="text-muted-foreground text-sm">Sam: 10h - 16h</p>
          </div>
        </div>
      </section>

      {/* Contact Form & Location */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-card rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-6">
              Envoyez-nous un message
            </h2>
            
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-[#6b8e7b]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-[#6b8e7b]" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Message envoyé!</h3>
                <p className="text-muted-foreground">
                  Merci de nous avoir contacté. Nous vous répondrons dans les 24-48 heures.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-[#c8847a] transition-all"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-[#c8847a] transition-all"
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Sujet
                  </label>
                  <select
                    id="subject"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-[#c8847a] transition-all"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="order">Question sur une commande</option>
                    <option value="product">Question sur un produit</option>
                    <option value="return">Retour ou échange</option>
                    <option value="shipping">Livraison</option>
                    <option value="other">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-[#c8847a] transition-all resize-none"
                    placeholder="Comment pouvons-nous vous aider?"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#c8847a] text-white py-4 rounded-lg font-semibold hover:bg-[#b8746a] transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Envoyer le message
                </button>
              </form>
            )}
          </div>

          {/* Location Info */}
          <div>
            <div className="bg-[#6b8e7b] rounded-xl p-8 text-white mb-6">
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Notre adresse</h3>
                  <p className="text-white/90">
                    123 Rue des Félins<br />
                    Montréal, QC H2X 1Y4<br />
                    Canada
                  </p>
                </div>
              </div>

              <div className="border-t border-white/20 pt-6">
                <h4 className="font-semibold mb-3">Entreprise 100% Canadienne</h4>
                <p className="text-white/90 text-sm leading-relaxed">
                  Nous sommes fiers d'être une entreprise locale basée au Québec. 
                  Tous nos produits sont expédiés depuis notre entrepôt de Montréal 
                  pour une livraison rapide partout au Canada.
                </p>
              </div>
            </div>

            <div className="bg-[#c8847a]/10 rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-4">FAQ Rapide</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-foreground text-sm">Délai de réponse?</p>
                  <p className="text-muted-foreground text-sm">Nous répondons sous 24-48h ouvrables.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">Suivi de commande?</p>
                  <p className="text-muted-foreground text-sm">
                    Utilisez notre page <a href="/suivi" className="text-[#c8847a] underline">Suivre ma commande</a>.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">Retours?</p>
                  <p className="text-muted-foreground text-sm">Retours gratuits sous 30 jours.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
