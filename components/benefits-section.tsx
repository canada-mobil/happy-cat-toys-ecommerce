import { Eye, Heart, User } from "lucide-react"

const benefits = [
  {
    icon: Eye,
    number: "01",
    title: "Économisez chez le Vétérinaire",
    description: "Un chat actif prévient l'obésité et les problèmes de santé coûteux. Investir dans le jeu, c'est investir dans sa santé."
  },
  {
    icon: Heart,
    number: "02",
    title: "Une Vie Plus Heureuse",
    description: "Le jeu quotidien réduit le stress et renforce votre lien. Un chat stimulé est un chat épanoui."
  },
  {
    icon: User,
    number: "03",
    title: "Prévenir les Problèmes",
    description: "L'exercice régulier prévient les comportements destructeurs. Fini les griffures sur le canapé."
  }
]

export default function BenefitsSection() {
  return (
    <section className="bg-neutral-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-400 text-center mb-3">
          Avantages
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center text-neutral-900 mb-16">
          Bon pour votre chat. Bon pour vous.
        </h2>
        
        <div className="space-y-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-6">
              <span className="text-3xl font-bold text-neutral-200 flex-shrink-0 w-12">{benefit.number}</span>
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-1.5">
                  {benefit.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed max-w-lg">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
