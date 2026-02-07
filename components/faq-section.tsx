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
    <section className="bg-white py-20 px-4 border-t border-neutral-100">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-400 text-center mb-3">
          FAQ
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center text-neutral-900 mb-4">
          Questions Fréquentes
        </h2>
        <p className="text-neutral-500 text-center mb-12">
          Tout ce que vous devez savoir
        </p>

        <div className="space-y-0 divide-y divide-neutral-100">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-0 py-5 text-left flex items-center justify-between hover:opacity-70 transition-opacity"
              >
                <h3 className="font-medium text-neutral-900 pr-4 text-sm">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="pb-5">
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <p className="text-neutral-400 text-sm mb-4">
            Vous avez d'autres questions ?
          </p>
          <a
            href="/contact"
            className="inline-block bg-brand hover:bg-brand-dark text-white font-medium px-6 py-2.5 rounded-full text-sm transition-all hover:scale-[1.02]"
          >
            Contactez-nous
          </a>
        </div>
      </div>
    </section>
  )
}
