import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { Heart, Leaf, Truck, Shield, Award, Users, MapPin, Cat } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Passion pour les Chats",
      description: "Chaque produit est choisi avec amour par notre équipe de passionnés de félins."
    },
    {
      icon: Leaf,
      title: "Qualité Premium",
      description: "Nous sélectionnons uniquement des jouets sûrs et durables pour votre compagnon."
    },
    {
      icon: Truck,
      title: "Livraison Rapide",
      description: "Expédition en 24h et livraison en 2-3 jours partout au Canada."
    },
    {
      icon: Shield,
      title: "Garantie 2 Mois",
      description: "Tous nos produits sont couverts par notre garantie satisfaction de 2 mois."
    }
  ]

  const stats = [
    { number: "50,000+", label: "Chats Heureux" },
    { number: "2-3", label: "Jours de Livraison" },
    { number: "100%", label: "Canadien" },
    { number: "2 mois", label: "Garantie" }
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-[#6b8e7b]" />
        <div className="relative py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Cat className="w-16 h-16 text-white mx-auto mb-6" />
            <h1 className="text-3xl md:text-5xl font-serif font-semibold text-white mb-6">
              À Propos de Happy Cat Toys
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Une entreprise canadienne dédiée au bonheur et au bien-être de vos compagnons félins depuis 2020.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#c8847a] py-8 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-white">{stat.number}</p>
              <p className="text-white/80 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-6">
              Notre Histoire
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Happy Cat Toys est née d'une passion simple : rendre les chats heureux. Fondée en 2020 
                à Montréal par une équipe d'amoureux des félins, notre mission est de fournir aux 
                parents de chats les meilleurs jouets et accessoires pour leurs compagnons.
              </p>
              <p>
                Après avoir constaté le manque d'options de qualité sur le marché canadien, nous avons 
                décidé de créer une boutique qui reflète nos valeurs : qualité, sécurité et bien-être animal.
              </p>
              <p>
                Aujourd'hui, nous sommes fiers d'avoir rendu plus de 50,000 chats heureux à travers le Canada, 
                et nous continuons à grandir grâce à votre confiance et vos recommandations.
              </p>
            </div>
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1556582305-06b8a7d5471b?w=600&h=600&fit=crop&crop=center"
              alt="Notre équipe et nos chats"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-[#f5f2ed]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground text-center mb-12">
            Nos Valeurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-card rounded-xl p-6 text-center shadow-sm">
                <div className="w-14 h-14 bg-[#6b8e7b]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-[#6b8e7b]" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground text-center mb-4">
            Pourquoi Nous Choisir?
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Nous nous engageons à offrir la meilleure expérience d'achat pour vous et votre chat.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#c8847a] rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">100% Canadien</h3>
              <p className="text-muted-foreground text-sm">
                Entreprise locale basée à Montréal. Nous expédions depuis le Canada pour une livraison rapide et sans frais de douane.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#c8847a] rounded-full flex items-center justify-center mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Livraison Gratuite</h3>
              <p className="text-muted-foreground text-sm">
                Livraison gratuite sur toutes les commandes de plus de 50$. Recevez vos produits en 2-3 jours ouvrables.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#c8847a] rounded-full flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Qualité Garantie</h3>
              <p className="text-muted-foreground text-sm">
                Garantie de 2 ans sur tous nos produits. Satisfait ou remboursé sous 30 jours, sans questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-[#6b8e7b]">
        <div className="max-w-4xl mx-auto text-center">
          <Users className="w-12 h-12 text-white mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">
            Notre Équipe
          </h2>
          <p className="text-white/90 leading-relaxed mb-8 max-w-2xl mx-auto">
            Nous sommes une petite équipe passionnée de 12 personnes, tous propriétaires de chats. 
            Chaque jour, nous travaillons avec amour pour sélectionner les meilleurs produits 
            et vous offrir un service client exceptionnel.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm">12 Employés</span>
            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm">15+ Chats au Bureau</span>
            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm">Montréal, QC</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-4">
            Prêt à Rendre Votre Chat Heureux?
          </h2>
          <p className="text-muted-foreground mb-8">
            Découvrez notre collection de jouets premium sélectionnés avec amour.
          </p>
          <a
            href="/produits"
            className="inline-block bg-[#c8847a] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#b8746a] transition-colors"
          >
            Voir Nos Produits
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
