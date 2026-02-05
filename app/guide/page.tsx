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
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-[#6b8e7b]" />
        <div className="relative py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <BookOpen className="w-16 h-16 text-white mx-auto mb-6" />
            <h1 className="text-3xl md:text-5xl font-serif font-semibold text-white mb-6">
              Guide de Soins pour Chats
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Tout ce que vous devez savoir pour offrir une vie heureuse et saine à votre compagnon félin.
            </p>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
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
          <p className="text-lg text-muted-foreground leading-relaxed">
            Prendre soin d'un chat est une responsabilité enrichissante. Ce guide vous aidera à comprendre 
            les besoins essentiels de votre félin et à éviter les erreurs courantes. Un chat bien soigné 
            peut vivre jusqu'à 15-20 ans en bonne santé!
          </p>
        </div>
      </section>

      {/* Do's Section */}
      <section className="py-12 px-4 bg-[#f5f2ed]">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 bg-[#6b8e7b] rounded-full flex items-center justify-center">
              <Check className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground">
              Ce qu'il faut faire
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dosList.map((item) => (
              <div key={item.title} className="bg-card rounded-xl p-6 shadow-sm flex gap-4">
                <div className="w-12 h-12 bg-[#6b8e7b]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-[#6b8e7b]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Don'ts Section */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 bg-[#c8847a] rounded-full flex items-center justify-center">
              <X className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground">
              Ce qu'il ne faut pas faire
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dontsList.map((item) => (
              <div key={item.title} className="bg-[#c8847a]/5 border border-[#c8847a]/20 rounded-xl p-6 flex gap-4">
                <div className="w-12 h-12 bg-[#c8847a]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-[#c8847a]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Section */}
      <section className="py-12 px-4 bg-[#6b8e7b]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white text-center mb-8">
            Santé de Votre Chat
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {healthTips.map((section, index) => (
              <div key={section.title} className={`rounded-xl p-6 ${
                index === 0 ? "bg-white/10" : "bg-[#c8847a]/20"
              }`}>
                <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                  {index === 0 ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <AlertTriangle className="w-5 h-5" />
                  )}
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="text-white/90 text-sm flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-white/60 rounded-full mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white/10 rounded-xl p-6 text-center">
            <Stethoscope className="w-10 h-10 text-white mx-auto mb-4" />
            <p className="text-white font-medium mb-2">
              En cas de doute, consultez toujours un vétérinaire
            </p>
            <p className="text-white/80 text-sm">
              Votre vétérinaire est votre meilleur allié pour la santé de votre chat. 
              N'hésitez pas à le contacter si vous remarquez des changements inhabituels.
            </p>
          </div>
        </div>
      </section>

      {/* Toy Benefits */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground text-center mb-4">
            L'Importance du Jeu
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Les jouets ne sont pas un luxe, mais une nécessité pour le bien-être de votre chat.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#c8847a] rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Exercice Physique</h3>
              <p className="text-muted-foreground text-sm">
                Le jeu maintient votre chat en forme et prévient l'obésité, un problème courant chez les chats d'intérieur.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#c8847a] rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Stimulation Mentale</h3>
              <p className="text-muted-foreground text-sm">
                Les jouets interactifs stimulent l'intelligence de votre chat et préviennent l'ennui et les comportements destructeurs.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#c8847a] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Lien Affectif</h3>
              <p className="text-muted-foreground text-sm">
                Jouer ensemble renforce la relation entre vous et votre chat et crée des moments de complicité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-[#f5f2ed]">
        <div className="max-w-3xl mx-auto text-center">
          <Cat className="w-12 h-12 text-[#c8847a] mx-auto mb-4" />
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
            Offrez le Meilleur à Votre Chat
          </h2>
          <p className="text-muted-foreground mb-8">
            Découvrez notre sélection de jouets de qualité pour stimuler et divertir votre compagnon.
          </p>
          <a
            href="/produits"
            className="inline-block bg-[#c8847a] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#b8746a] transition-colors"
          >
            Voir Nos Jouets
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
