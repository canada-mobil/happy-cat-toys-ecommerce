"use client"

import Link from "next/link"
import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"
import Footer from "@/components/footer"
import { useI18n } from "@/lib/i18n-context"

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([])
  const { locale } = useI18n()
  const isFr = locale === 'fr'

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const faqData = isFr ? [
    { category: "Commandes & Livraison", questions: [
      { question: "Combien de temps prend la livraison ?", answer: "Nous offrons une livraison rapide de 2-3 jours ouvrables partout au Canada. Les commandes passées avant 14h sont généralement expédiées le jour même. Vous recevrez un email de confirmation avec le numéro de suivi dès l'expédition." },
      { question: "La livraison est-elle gratuite ?", answer: "Oui ! La livraison est gratuite pour toute commande de 2 articles ou plus. Pour les commandes d'un seul article, les frais de livraison sont de $4.99 CAD." },
      { question: "Dans quelles régions livrez-vous ?", answer: "Nous livrons partout au Canada, incluant toutes les provinces et territoires. Malheureusement, nous ne livrons pas à l'international pour le moment." },
      { question: "Puis-je modifier ma commande après l'avoir passée ?", answer: "Vous pouvez modifier votre commande dans les 2 heures suivant la confirmation, en nous contactant immédiatement. Après ce délai, la commande est généralement déjà en préparation." },
      { question: "Comment puis-je suivre ma commande ?", answer: "Dès l'expédition, vous recevrez un email avec votre numéro de suivi Postes Canada. Vous pouvez suivre votre colis en temps réel sur le site de Postes Canada ou directement depuis votre compte client." },
    ]},
    { category: "Produits & Qualité", questions: [
      { question: "Vos produits sont-ils sécuritaires pour les chats ?", answer: "Absolument ! Tous nos jouets sont fabriqués avec des matériaux non toxiques et testés pour la sécurité des félins. Nous respectons les normes canadiennes les plus strictes et chaque produit passe des tests de qualité rigoureux." },
      { question: "Quelle est la durée de vie de vos jouets ?", answer: "Nos jouets sont conçus pour durer ! Nous offrons une garantie de 2 ans sur tous nos produits contre les défauts de fabrication." },
      { question: "Avez-vous des jouets pour chatons ?", answer: "Oui ! Nous avons une sélection spéciale de jouets adaptés aux chatons de 3 mois et plus." },
      { question: "Mes produits sont-ils vraiment 100% canadiens ?", answer: "Oui ! Nous sommes fiers d'être 100% canadiens. Nos produits sont conçus, fabriqués et assemblés au Canada." },
      { question: "Comment nettoyer les jouets ?", answer: "La plupart de nos jouets peuvent être nettoyés avec un chiffon humide et du savon doux. Consultez les instructions spécifiques sur chaque produit." },
    ]},
    { category: "Retours & Remboursements", questions: [
      { question: "Quelle est votre politique de retour ?", answer: "Nous offrons 30 jours pour retourner tout produit, sans questions posées !" },
      { question: "Puis-je retourner un jouet que mon chat a utilisé ?", answer: "Bien sûr ! Tant que le produit est dans un état raisonnablement propre, vous pouvez le retourner dans les 30 jours." },
      { question: "Combien de temps pour recevoir mon remboursement ?", answer: "Le remboursement est traité sous 3-5 jours ouvrables sur votre méthode de paiement originale." },
      { question: "Que faire si mon colis arrive endommagé ?", answer: "Contactez-nous immédiatement avec des photos. Nous organiserons un remplacement ou un remboursement complet." },
    ]},
    { category: "Paiement & Sécurité", questions: [
      { question: "Quels modes de paiement acceptez-vous ?", answer: "Nous acceptons Visa, Mastercard, American Express et UnionPay. Tous les paiements sont sécurisés." },
      { question: "Mes informations de paiement sont-elles sécurisées ?", answer: "Absolument ! Nous utilisons un cryptage SSL de niveau bancaire et ne stockons jamais vos informations de carte." },
    ]},
    { category: "Service Client", questions: [
      { question: "Comment vous contacter ?", answer: "Par email à support@purrball.ca (réponse sous 24h) ou par téléphone au 1-800-CAT-TOYS du lundi au vendredi de 9h à 17h (EST)." },
      { question: "Dans quelle langue offrez-vous le support ?", answer: "Nous offrons un support complet en français et en anglais." },
    ]},
  ] : [
    { category: "Orders & Shipping", questions: [
      { question: "How long does shipping take?", answer: "We offer fast 2-3 business day shipping across Canada. Orders placed before 2pm are usually shipped the same day. You'll receive a confirmation email with tracking number upon shipment." },
      { question: "Is shipping free?", answer: "Yes! Shipping is free on all orders of 2 items or more. For single item orders, shipping is $4.99 CAD." },
      { question: "What regions do you ship to?", answer: "We ship everywhere in Canada, including all provinces and territories. Unfortunately, we don't ship internationally at this time." },
      { question: "Can I modify my order after placing it?", answer: "You can modify your order within 2 hours of confirmation by contacting us immediately. After that, the order is usually already being prepared." },
      { question: "How can I track my order?", answer: "Upon shipment, you'll receive an email with your Canada Post tracking number. You can track your package in real-time on the Canada Post website." },
    ]},
    { category: "Products & Quality", questions: [
      { question: "Are your products safe for cats?", answer: "Absolutely! All our toys are made with non-toxic materials and tested for feline safety. We follow the strictest Canadian standards." },
      { question: "How long do your toys last?", answer: "Our toys are built to last! We offer a 2-year warranty on all products against manufacturing defects." },
      { question: "Do you have toys for kittens?", answer: "Yes! We have a special selection of toys suitable for kittens 3 months and older." },
      { question: "Are your products really 100% Canadian?", answer: "Yes! We're proud to be 100% Canadian. Our products are designed, manufactured and assembled in Canada." },
      { question: "How do I clean the toys?", answer: "Most of our toys can be cleaned with a damp cloth and mild soap. Check the specific instructions on each product." },
    ]},
    { category: "Returns & Refunds", questions: [
      { question: "What is your return policy?", answer: "We offer 30 days to return any product, no questions asked!" },
      { question: "Can I return a toy my cat has used?", answer: "Of course! As long as the product is in reasonably clean condition, you can return it within 30 days." },
      { question: "How long until I receive my refund?", answer: "Refunds are processed within 3-5 business days to your original payment method." },
      { question: "What if my package arrives damaged?", answer: "Contact us immediately with photos. We'll arrange a replacement or full refund." },
    ]},
    { category: "Payment & Security", questions: [
      { question: "What payment methods do you accept?", answer: "We accept Visa, Mastercard, American Express and UnionPay. All payments are secure." },
      { question: "Is my payment information secure?", answer: "Absolutely! We use bank-level SSL encryption and never store your credit card information." },
    ]},
    { category: "Customer Service", questions: [
      { question: "How can I contact you?", answer: "By email at support@purrball.ca (response within 24h) or by phone at 1-800-CAT-TOYS Monday to Friday 9am-5pm (EST)." },
      { question: "What languages do you offer support in?", answer: "We offer full support in both French and English." },
    ]},
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-neutral-900 transition-colors mb-6 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            {isFr ? "Retour à l'accueil" : 'Back to home'}
          </Link>
          
          <h1 className="text-3xl font-semibold text-neutral-900 mb-3 tracking-tight">
            {isFr ? 'Questions Fréquentes' : 'Frequently Asked Questions'}
          </h1>
          <p className="text-neutral-400 text-sm">
            {isFr ? 'Trouvez rapidement les réponses à vos questions sur Purrball' : 'Quickly find answers to your questions about Purrball'}
          </p>
        </div>

        <div className="space-y-6">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl border border-neutral-100 overflow-hidden">
              <div className="bg-neutral-50 px-6 py-4">
                <h2 className="text-sm font-semibold text-neutral-900">
                  {category.category}
                </h2>
              </div>
              
              <div className="divide-y divide-neutral-100">
                {category.questions.map((item, questionIndex) => {
                  const globalIndex = categoryIndex * 100 + questionIndex
                  const isOpen = openItems.includes(globalIndex)
                  
                  return (
                    <div key={questionIndex}>
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full px-6 py-4 text-left hover:bg-neutral-50 transition-colors flex items-center justify-between"
                      >
                        <h3 className="font-medium text-neutral-900 pr-4 text-sm">
                          {item.question}
                        </h3>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                        )}
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <p className="text-neutral-500 text-sm leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-neutral-50 rounded-2xl p-8 text-center">
          <h2 className="text-lg font-semibold text-neutral-900 mb-3 tracking-tight">
            {isFr ? 'Vous ne trouvez pas votre réponse ?' : "Can't find your answer?"}
          </h2>
          <p className="text-neutral-400 mb-6 text-sm">
            {isFr ? 'Notre équipe de service client est là pour vous aider avec toutes vos questions !' : 'Our customer service team is here to help with all your questions!'}
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-5 border border-neutral-100">
              <h3 className="font-medium text-neutral-900 mb-1 text-sm">Email</h3>
              <p className="text-neutral-500 text-xs mb-0.5">support@purrball.ca</p>
              <p className="text-neutral-300 text-[10px]">{isFr ? 'Réponse garantie sous 24h' : 'Guaranteed response within 24h'}</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-neutral-100">
              <h3 className="font-medium text-neutral-900 mb-1 text-sm">{isFr ? 'Téléphone' : 'Phone'}</h3>
              <p className="text-neutral-500 text-xs mb-0.5">1-800-CAT-TOYS</p>
              <p className="text-neutral-300 text-[10px]">{isFr ? 'Lun-Ven 9h-17h (EST)' : 'Mon-Fri 9am-5pm (EST)'}</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
