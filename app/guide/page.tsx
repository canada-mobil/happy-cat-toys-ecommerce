import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { 
  Check, X, Heart, Droplets, UtensilsCrossed, Activity, 
  Moon, Stethoscope, Sparkles, AlertTriangle, BookOpen,
  Clock, ThermometerSun, Scissors, Cat
} from "lucide-react"

export default function GuidePage() {
  const dosList = [
    {
      icon: UtensilsCrossed,
      title: "Alimentation équilibrée",
      description: "Donnez une nourriture de qualité adaptée à l'âge et aux besoins de votre chat. Respectez les portions recommandées."
    },
    {
      icon: Droplets,
      title: "Eau fraîche en permanence",
      description: "Changez l'eau de votre chat tous les jours. Les fontaines à eau encouragent l'hydratation."
    },
    {
      icon: Activity,
      title: "Exercice quotidien",
      description: "Jouez avec votre chat au moins 15-20 minutes par jour pour le garder actif et stimulé mentalement."
    },
    {
      icon: Moon,
      title: "Espace de repos confortable",
      description: "Offrez des endroits calmes et douillets où votre chat peut se reposer et se sentir en sécurité."
    },
    {
      icon: Stethoscope,
      title: "Visites vétérinaires régulières",
      description: "Emmenez votre chat chez le vétérinaire au moins une fois par an pour un bilan de santé complet."
    },
    {
      icon: Sparkles,
      title: "Litière propre",
      description: "Nettoyez la litière quotidiennement et changez-la complètement chaque semaine."
    },
    {
      icon: Scissors,
      title: "Griffoir adapté",
      description: "Fournissez un griffoir pour permettre à votre chat de faire ses griffes naturellement."
    },
    {
      icon: Heart,
      title: "Affection et attention",
      description: "Passez du temps de qualité avec votre chat. Les câlins et la tendresse renforcent votre lien."
    }
  ]

  const dontsList = [
    {
      icon: UtensilsCrossed,
      title: "Aliments toxiques",
      description: "Évitez le chocolat, l'oignon, l'ail, le raisin, l'avocat et les produits laitiers en excès."
    },
    {
      icon: ThermometerSun,
      title: "Températures extrêmes",
      description: "Ne laissez jamais votre chat dans une voiture chaude ou exposé au froid intense."
    },
    {
      icon: AlertTriangle,
      title: "Plantes dangereuses",
      description: "Éloignez les lys, le poinsettia, l'aloe vera et autres plantes toxiques pour les chats."
    },
    {
      icon: Clock,
      title: "Négliger les signaux",
      description: "Ne pas ignorer les changements de comportement ou d'appétit qui peuvent indiquer un problème de santé."
    },
    {
      icon: Activity,
      title: "Punitions physiques",
      description: "Ne jamais frapper ou crier sur votre chat. Utilisez le renforcement positif pour l'éducation."
    },
    {
      icon: Cat,
      title: "Forcer les interactions",
      description: "Respectez l'espace de votre chat. Ne le forcez pas à être câliné s'il ne le souhaite pas."
    }
  ]

  const healthTips = [
    {
      title: "Signes d'un chat en bonne santé",
      items: [
        "Pelage brillant et propre",
        "Yeux clairs et vifs",
        "Appétit régulier",
        "Comportement actif et curieux",
        "Poids stable",
        "Respiration normale"
      ]
    },
    {
      title: "Signes à surveiller",
      items: [
        "Perte d'appétit prolongée",
        "Léthargie inhabituelle",
        "Vomissements fréquents",
        "Changements dans la litière",
        "Perte de poids soudaine",
        "Difficultés respiratoires"
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-blue-800" />
        <div className="relative py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <BookOpen className="w-12 h-12 text-white/60 mx-auto mb-6" />
            <h1 className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight">
              Guide de Soins pour Chats
            </h1>
            <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Tout ce que vous devez savoir pour offrir une vie heureuse et saine à votre compagnon félin.
            </p>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-neutral-100">
            <Image
              src="/cat-care-guide.jpg"
              alt="Guide de soins pour chats"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-8 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-neutral-500 leading-relaxed">
            Prendre soin d'un chat est une responsabilité enrichissante. Ce guide vous aidera à comprendre 
            les besoins essentiels de votre félin et à éviter les erreurs courantes. Un chat bien soigné 
            peut vivre jusqu'à 15-20 ans en bonne santé!
          </p>
        </div>
      </section>

      {/* Do's Section */}
      <section className="py-16 px-4 bg-neutral-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center">
              <Check className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 tracking-tight">
              Ce qu'il faut faire
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dosList.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-5 flex gap-4">
                <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-4 h-4 text-neutral-600" />
                </div>
                <div>
                  <h3 className="font-medium text-neutral-900 mb-1 text-sm">{item.title}</h3>
                  <p className="text-neutral-400 text-xs leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Don'ts Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
              <X className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 tracking-tight">
              Ce qu'il ne faut pas faire
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dontsList.map((item) => (
              <div key={item.title} className="bg-red-50/50 border border-red-100/50 rounded-2xl p-5 flex gap-4">
                <div className="w-10 h-10 bg-red-100/50 rounded-full flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-4 h-4 text-red-400" />
                </div>
                <div>
                  <h3 className="font-medium text-neutral-900 mb-1 text-sm">{item.title}</h3>
                  <p className="text-neutral-400 text-xs leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Section */}
      <section className="py-16 px-4 bg-blue-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl md:text-2xl font-semibold text-white text-center mb-8 tracking-tight">
            Santé de Votre Chat
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {healthTips.map((section, index) => (
              <div key={section.title} className={`rounded-2xl p-6 ${
                index === 0 ? "bg-white/5" : "bg-white/5"
              }`}>
                <h3 className="font-medium text-white mb-4 flex items-center gap-2 text-sm">
                  {index === 0 ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <AlertTriangle className="w-4 h-4 text-amber-400" />
                  )}
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="text-white/60 text-xs flex items-start gap-2">
                      <span className="w-1 h-1 bg-white/30 rounded-full mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white/5 rounded-2xl p-6 text-center">
            <Stethoscope className="w-8 h-8 text-white/60 mx-auto mb-4" />
            <p className="text-white font-medium mb-2 text-sm">
              En cas de doute, consultez toujours un vétérinaire
            </p>
            <p className="text-white/50 text-xs">
              Votre vétérinaire est votre meilleur allié pour la santé de votre chat. 
              N'hésitez pas à le contacter si vous remarquez des changements inhabituels.
            </p>
          </div>
        </div>
      </section>

      {/* Toy Benefits */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 text-center mb-3 tracking-tight">
            L'Importance du Jeu
          </h2>
          <p className="text-center text-neutral-400 mb-12 max-w-2xl mx-auto text-sm">
            Les jouets ne sont pas un luxe, mais une nécessité pour le bien-être de votre chat.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-medium text-neutral-900 mb-2 text-sm">Exercice Physique</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Le jeu maintient votre chat en forme et prévient l'obésité, un problème courant chez les chats d'intérieur.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-medium text-neutral-900 mb-2 text-sm">Stimulation Mentale</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Les jouets interactifs stimulent l'intelligence de votre chat et préviennent l'ennui et les comportements destructeurs.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-medium text-neutral-900 mb-2 text-sm">Lien Affectif</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Jouer ensemble renforce la relation entre vous et votre chat et crée des moments de complicité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-neutral-50">
        <div className="max-w-3xl mx-auto text-center">
          <Cat className="w-10 h-10 text-neutral-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-neutral-900 mb-4 tracking-tight">
            Offrez le Meilleur à Votre Chat
          </h2>
          <p className="text-neutral-400 mb-8 text-sm">
            Découvrez notre sélection de jouets de qualité pour stimuler et divertir votre compagnon.
          </p>
          <a
            href="/produits"
            className="inline-block bg-blue-800 text-white px-8 py-3.5 rounded-full font-medium text-sm hover:bg-black transition-all hover:scale-[1.02]"
          >
            Voir Nos Jouets
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
