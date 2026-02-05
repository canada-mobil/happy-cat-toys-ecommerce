import Image from "next/image"

const features = [
  {
    image: "/cat-playing.jpg",
    title: "Livraison Rapide",
    subtitle: "Paiement Sécurisé"
  },
  {
    image: "/cat-happy.jpg",
    title: "Stimulation Naturelle",
    description: "Un chat actif est un chat en bonne santé. Nos jouets soigneusement sélectionnés stimulent les instincts naturels de chasse de votre félin, favorisent l'exercice quotidien et préviennent l'ennui pour un compagnon épanoui."
  },
  {
    image: "/cat-toys-collection.jpg",
    title: "Adorés par les Chats",
    description: "La qualité des jouets est essentielle au bien-être de votre chat. Nos produits premium sont fabriqués avec des matériaux sûrs et durables, testés et approuvés par des milliers de félins heureux."
  }
]

export default function FeaturesSection() {
  return (
    <section className="bg-[#d4a59a] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* First Feature - Shipping */}
        <div className="text-center mb-12">
          <div className="w-32 h-32 mx-auto mb-4 relative">
            <Image
              src={features[0].image || "/placeholder.svg"}
              alt={features[0].title}
              fill
              className="object-cover rounded-full"
            />
          </div>
          <h3 className="text-2xl md:text-3xl font-serif text-white mb-2">
            {features[0].title}
          </h3>
          <p className="text-white/90">{features[0].subtitle}</p>
        </div>

        {/* Second Feature - Stimulation */}
        <div className="text-center mb-12">
          <div className="w-32 h-32 mx-auto mb-4 relative">
            <Image
              src={features[1].image || "/placeholder.svg"}
              alt={features[1].title}
              fill
              className="object-cover rounded-full"
            />
          </div>
          <h3 className="text-2xl md:text-3xl font-serif text-white mb-4">
            {features[1].title}
          </h3>
          <p className="text-white/90 max-w-xl mx-auto leading-relaxed text-pretty">
            {features[1].description}
          </p>
        </div>

        {/* Third Feature - Loved by Cats */}
        <div className="text-center">
          <div className="w-32 h-32 mx-auto mb-4 relative">
            <Image
              src={features[2].image || "/placeholder.svg"}
              alt={features[2].title}
              fill
              className="object-cover rounded-full"
            />
          </div>
          <h3 className="text-2xl md:text-3xl font-serif text-white mb-4">
            {features[2].title}
          </h3>
          <p className="text-white/90 max-w-xl mx-auto leading-relaxed text-pretty">
            {features[2].description}
          </p>
        </div>
      </div>
    </section>
  )
}
