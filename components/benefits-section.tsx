import { Eye, Heart, User } from "lucide-react"

const benefits = [
  {
    icon: Eye,
    title: "Économisez chez le Vétérinaire",
    description: "Un chat actif prévient l'obésité et les problèmes de santé coûteux"
  },
  {
    icon: Heart,
    title: "Une Vie Plus Heureuse",
    description: "Le jeu quotidien réduit le stress et renforce votre lien"
  },
  {
    icon: User,
    title: "Prévenir les Problèmes",
    description: "L'exercice régulier prévient les comportements destructeurs"
  }
]

export default function BenefitsSection() {
  return (
    <section className="bg-[#d4a59a] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {benefits.map((benefit, index) => (
          <div key={index} className="text-center mb-10 last:mb-0">
            <benefit.icon className="w-10 h-10 mx-auto mb-3 text-white/80" strokeWidth={1.5} />
            <h3 className="text-xl md:text-2xl font-serif text-white mb-2">
              {benefit.title}
            </h3>
            <p className="text-white/90 max-w-md mx-auto">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
