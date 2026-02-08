"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { t } = useI18n()

  const faqs = [
    { question: t.faqSection.q1, answer: t.faqSection.a1 },
    { question: t.faqSection.q2, answer: t.faqSection.a2 },
    { question: t.faqSection.q3, answer: t.faqSection.a3 },
    { question: t.faqSection.q4, answer: t.faqSection.a4 },
    { question: t.faqSection.q5, answer: t.faqSection.a5 },
    { question: t.faqSection.q6, answer: t.faqSection.a6 },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-white py-20 px-4 border-t border-neutral-100">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-400 text-center mb-3">
          {t.faqSection.label}
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center text-neutral-900 mb-4">
          {t.faqSection.title}
        </h2>
        <p className="text-neutral-500 text-center mb-12">
          {t.faqSection.subtitle}
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
            {t.faqSection.moreQuestions}
          </p>
          <a
            href="/contact"
            className="inline-block bg-brand hover:bg-brand-dark text-white font-medium px-6 py-2.5 rounded-full text-sm transition-all hover:scale-[1.02]"
          >
            {t.faqSection.contactUs}
          </a>
        </div>
      </div>
    </section>
  )
}
