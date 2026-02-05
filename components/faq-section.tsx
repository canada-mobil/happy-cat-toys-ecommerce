"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "Mes jouets sont-ils sûrs pour mon chat ?",
    answer: "Absolument ! Tous nos jouets sont fabriqués avec des matériaux non toxiques et testés pour la sécurité des félins. Nous respectons les normes canadiennes les plus strictes et chaque produit passe par des contrôles qualité rigoureux."
  },
  {
    question: "À quelle fréquence dois-je changer les jouets de mon chat ?",
    answer: "Nous recommandons de faire une rotation des jouets toutes les 1-2 semaines pour maintenir l'intérêt de votre chat. Remplacez immédiatement tout jouet endommagé. Nos jouets durables sont conçus pour résister à un jeu intensif pendant des mois."
  },
  {
    question: "Mon chat ne s'intéresse pas aux nouveaux jouets, que faire ?",
    answer: "C'est normal ! Essayez d'introduire le jouet progressivement, utilisez de l'herbe à chat pour l'attirer, ou jouez vous-même avec pour montrer l'exemple. Certains chats préfèrent observer avant de jouer. Soyez patient, cela peut prendre quelques jours."
  },
  {
    question: "L'herbe à chat est-elle sans danger pour tous les chats ?",
    answer: "Oui, notre herbe à chat biologique est 100% naturelle et sans danger. Environ 70% des chats y sont sensibles. Elle n'est pas addictive et les effets durent 10-15 minutes. Évitez simplement d'en donner aux chatons de moins de 6 mois."
  },
  {
    question: "Puis-je laver les jouets en peluche ?",
    answer: "La plupart de nos peluches peuvent être lavées à la main avec de l'eau tiède et un savon doux. Laissez sécher complètement avant de redonner à votre chat. Vérifiez toujours l'étiquette du produit pour les instructions spécifiques."
  },
  {
    question: "Combien de temps de jeu mon chat a-t-il besoin par jour ?",
    answer: "Les chats ont besoin de 10-15 minutes de jeu actif, 2-3 fois par jour. Les chatons et jeunes chats peuvent jouer jusqu'à 30 minutes d'affilée. Le jeu aide à maintenir un poids santé et réduit les comportements destructeurs."
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            Questions Fréquentes
          </h2>
          <p className="text-muted-foreground text-lg">
            Tout ce que vous devez savoir pour rendre votre chat heureux
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <h3 className="font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#6b8e7b] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#6b8e7b] flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Vous avez d'autres questions ?
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#6b8e7b] hover:bg-[#5a7a66] text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Contactez-nous
          </a>
        </div>
      </div>
    </section>
  )
}
