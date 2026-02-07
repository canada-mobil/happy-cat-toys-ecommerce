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
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-neutral-900 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <MessageCircle className="w-10 h-10 text-white/60 mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight">
            Contactez-Nous
          </h1>
          <p className="text-white/60 text-sm max-w-2xl mx-auto leading-relaxed">
            Notre équipe est là pour vous aider. Que vous ayez une question sur nos produits, 
            votre commande ou simplement envie de discuter de votre chat, nous sommes à votre écoute.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-4 -mt-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-6 text-center">
            <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-4 h-4 text-neutral-600" />
            </div>
            <h3 className="font-medium text-neutral-900 mb-2 text-sm">Email</h3>
            <p className="text-neutral-400 text-xs">support@purrball.ca</p>
            <p className="text-neutral-400 text-xs">info@purrball.ca</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-6 text-center">
            <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-4 h-4 text-neutral-600" />
            </div>
            <h3 className="font-medium text-neutral-900 mb-2 text-sm">Téléphone</h3>
            <p className="text-neutral-400 text-xs">1-800-CAT-TOYS</p>
            <p className="text-neutral-400 text-xs">(1-800-228-8697)</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-6 text-center">
            <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-4 h-4 text-neutral-600" />
            </div>
            <h3 className="font-medium text-neutral-900 mb-2 text-sm">Heures d'ouverture</h3>
            <p className="text-neutral-400 text-xs">Lun - Ven: 9h - 18h</p>
            <p className="text-neutral-400 text-xs">Sam: 10h - 16h</p>
          </div>
        </div>
      </section>

      {/* Contact Form & Location */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white rounded-2xl border border-neutral-100 p-8">
            <h2 className="text-lg font-semibold text-neutral-900 mb-6 tracking-tight">
              Envoyez-nous un message
            </h2>
            
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-14 h-14 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-6 h-6 text-neutral-600" />
                </div>
                <h3 className="text-base font-semibold text-neutral-900 mb-2">Message envoyé!</h3>
                <p className="text-neutral-400 text-sm">
                  Merci de nous avoir contacté. Nous vous répondrons dans les 24-48 heures.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-neutral-500 mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 text-sm transition-all"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-neutral-500 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 text-sm transition-all"
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-neutral-500 mb-2">
                    Sujet
                  </label>
                  <select
                    id="subject"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 text-sm transition-all"
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
                  <label htmlFor="message" className="block text-xs font-medium text-neutral-500 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 text-sm transition-all resize-none"
                    placeholder="Comment pouvons-nous vous aider?"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-neutral-900 text-white py-3 rounded-full font-medium text-sm hover:bg-black transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Envoyer le message
                </button>
              </form>
            )}
          </div>

          {/* Location Info */}
          <div>
            <div className="bg-neutral-900 rounded-2xl p-8 text-white mb-6">
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1 text-white/60" />
                <div>
                  <h3 className="font-medium text-sm mb-2">Notre adresse</h3>
                  <p className="text-white/60 text-xs leading-relaxed">
                    123 Rue des Félins<br />
                    Montréal, QC H2X 1Y4<br />
                    Canada
                  </p>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6">
                <h4 className="font-medium text-sm mb-3">Entreprise 100% Canadienne</h4>
                <p className="text-white/60 text-xs leading-relaxed">
                  Nous sommes fiers d'être une entreprise locale basée au Québec. 
                  Tous nos produits sont expédiés depuis notre entrepôt de Montréal 
                  pour une livraison rapide partout au Canada.
                </p>
              </div>
            </div>

            <div className="bg-neutral-50 rounded-2xl p-6">
              <h3 className="font-medium text-neutral-900 mb-4 text-sm">FAQ Rapide</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-neutral-900 text-xs">Délai de réponse?</p>
                  <p className="text-neutral-400 text-xs">Nous répondons sous 24-48h ouvrables.</p>
                </div>
                <div>
                  <p className="font-medium text-neutral-900 text-xs">Suivi de commande?</p>
                  <p className="text-neutral-400 text-xs">
                    Utilisez notre page <a href="/suivi" className="text-neutral-900 underline">Suivre ma commande</a>.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-neutral-900 text-xs">Retours?</p>
                  <p className="text-neutral-400 text-xs">Retours gratuits sous 30 jours.</p>
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
