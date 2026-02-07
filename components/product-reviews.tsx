"use client"

import { useState } from "react"
import { Star, ThumbsUp, ThumbsDown, ChevronDown, CheckCircle } from "lucide-react"

interface Review {
  id: number
  name: string
  rating: number
  date: string
  title: string
  body: string
  verified: boolean
  helpful: number
  notHelpful: number
}

const firstNames = [
  "Sophie", "Mohamed", "Fatima", "Jean-Pierre", "Aminata", "Marc", "Yasmine", "Pierre", "Aisha", "François",
  "Nadia", "David", "Khadija", "Luc", "Mariam", "André", "Samira", "Jacques", "Halima", "Michel",
  "Sarah", "Omar", "Marie-Claire", "Ibrahim", "Chantal", "Youssef", "Isabelle", "Mamadou", "Céline", "Hassan",
  "Julie", "Abdoulaye", "Nathalie", "Rachid", "Monique", "Moussa", "Diane", "Ali", "Sylvie", "Karim",
  "Émilie", "Oumar", "Véronique", "Tariq", "Louise", "Amadou", "Catherine", "Bilal", "Hélène", "Malik",
  "Jessica", "Aboubacar", "Brigitte", "Samir", "Pauline", "Ibrahima", "Martine", "Jamal", "Claudine", "Drissa",
  "Mélanie", "Souleymane", "Jocelyne", "Hamza", "Geneviève", "Boubacar", "Danielle", "Ismail", "Francine", "Cheikh",
  "Stéphanie", "Issa", "Nicole", "Zakaria", "Manon", "Seydou", "Josée", "Adama", "Lucie", "Thierno",
  "Valérie", "Bakary", "Micheline", "Sami", "Annie", "Diallo", "Renée", "Yassine", "Carole", "Modou",
  "Alexandra", "Ousmane", "Thérèse", "Nassim", "Laurence", "Demba", "Colette", "Mehdi", "Jacqueline", "Lamine",
  "Emma", "James", "Ashley", "Michael", "Brittany", "Chris", "Tanya", "Kevin", "Latoya", "Brandon",
  "Aaliyah", "Tyler", "Jasmine", "Ryan", "Keisha", "Derek", "Shaniqua", "Marcus", "Destiny", "Darnell"
]

const lastInitials = [
  "B.", "M.", "L.", "D.", "T.", "K.", "S.", "R.", "A.", "C.", "H.", "N.", "P.", "G.", "F.",
  "J.", "W.", "V.", "E.", "I.", "O.", "Q.", "U.", "X.", "Y.", "Z."
]

const titlesFR = [
  "Mon chat adore!", "Excellent jouet", "Très bon achat", "Je recommande", "Super qualité",
  "Mon félin est obsédé", "Parfait pour mon chaton", "Meilleur jouet ever", "Incroyable", "Très satisfaite",
  "Mon chat joue pendant des heures", "Livraison rapide, produit top", "Cadeau parfait", "Qualité au rendez-vous",
  "Mon chat ne s'en lasse pas", "Vraiment bien pensé", "Le meilleur investissement", "Génial pour les chats actifs",
  "Ma chatte l'adore", "Surprenant de qualité", "Exactement ce qu'il fallait", "Jouet intelligent",
  "Mes 3 chats se battent pour l'avoir", "Silencieux et efficace", "Rapport qualité-prix imbattable",
  "Commande reçue rapidement", "Produit conforme à la description", "Très bonne surprise",
  "Je rachèterai sans hésiter", "Mon vieux chat retrouve sa jeunesse", "Idéal pour chat d'intérieur",
  "Fonctionne à merveille", "Bien emballé, bien reçu", "Chat heureux, maître heureux",
  "Enfin un jouet qui dure", "Rechargeable c'est un plus", "Design sympa", "Robuste et amusant",
  "Ça vaut le coup", "Bonne idée cadeau", "Stimulant pour mon chat", "Adopté immédiatement",
  "Jouet préféré de Minou", "Top qualité", "Livré avant la date prévue", "Très bon produit",
  "Mon chat court partout avec", "Excellent rapport qualité-prix", "Service client au top",
  "Rien à redire", "Parfait pour occuper mon chat", "Jouet révolutionnaire"
]

const titlesEN = [
  "My cat loves it!", "Great toy", "Best purchase ever", "Highly recommend", "Amazing quality",
  "My cat is obsessed", "Perfect for my kitten", "Best cat toy", "Incredible", "Very satisfied",
  "Keeps my cat busy for hours", "Fast shipping, great product", "Perfect gift", "Quality is great",
  "My cat can't get enough", "Well designed", "Best investment", "Great for active cats",
  "My cat absolutely loves this", "Surprisingly good quality", "Exactly what we needed", "Smart toy",
  "My 3 cats fight over it", "Quiet and effective", "Unbeatable value", "Received quickly",
  "Product matches description", "Great surprise", "Will buy again", "My old cat feels young again",
  "Ideal for indoor cats", "Works perfectly", "Well packaged", "Happy cat, happy owner",
  "Finally a toy that lasts", "Rechargeable is a plus", "Nice design", "Sturdy and fun",
  "Worth every penny", "Great gift idea", "Stimulating for my cat", "Instant hit",
  "Whiskers' favorite toy", "Top quality", "Arrived early", "Very good product",
  "My cat runs around with it", "Excellent value", "Great customer service",
  "No complaints", "Perfect to keep my cat entertained", "Game changer"
]

const bodiesFR = [
  "J'ai acheté ce jouet pour mon chat et il l'adore! La balle roule toute seule et mon chat la poursuit pendant des heures. Très bonne qualité de fabrication.",
  "Livraison super rapide avec Canada Post. Mon chat a commencé à jouer dès que j'ai ouvert la boîte. Le mode automatique est génial.",
  "Après avoir essayé plein de jouets, celui-ci est de loin le meilleur. Mon chat Bengal est enfin stimulé comme il faut. Merci Purrball!",
  "La qualité est vraiment au rendez-vous. Les matériaux sont solides et non toxiques. Mon chat mâchouille la balle sans problème.",
  "Je l'ai offert à ma mère pour son chat et elle est ravie. Le chat joue avec tous les jours. Très bon cadeau.",
  "Excellent produit! La batterie dure longtemps et la recharge USB est très pratique. Mon chat ne s'en lasse pas.",
  "Mes deux chats adorent ce jouet. Ils se relaient pour jouer avec. C'est devenu leur jouet préféré de tous les temps.",
  "Très bon rapport qualité-prix. Pour le prix, c'est vraiment un excellent achat. Mon chat est beaucoup plus actif depuis.",
  "Le jouet est silencieux, ce qui est un gros plus. Pas de bruit la nuit quand mon chat décide de jouer à 3h du matin!",
  "J'ai commandé la couleur rouge et elle est magnifique. Mon chat est attiré par les mouvements naturels de la balle.",
  "Service client excellent. J'avais une question et ils m'ont répondu en moins de 24h. Le produit est top aussi.",
  "Mon chat d'intérieur avait besoin de stimulation. Ce jouet est parfait, il court et saute comme jamais auparavant.",
  "Acheté pour mon chaton de 4 mois, il est complètement fou de ce jouet. La balle est assez grosse pour qu'il ne l'avale pas.",
  "Troisième commande! J'en ai acheté pour tous mes amis qui ont des chats. Tout le monde adore.",
  "Le design est vraiment bien pensé. La balle change de direction de manière imprévisible, ce qui garde mon chat intéressé.",
  "Produit écologique en plus! J'apprécie que les matériaux soient recyclables. Mon chat et la planète sont contents.",
  "J'avais peur que mon vieux chat de 12 ans ne s'y intéresse pas, mais il joue avec tous les jours maintenant!",
  "La livraison a été plus rapide que prévu. Emballage soigné. Le jouet fonctionne parfaitement dès la première charge.",
  "Mon chat Siamois est très difficile avec les jouets, mais celui-ci l'a conquis immédiatement. Bravo!",
  "Super achat! Mon chat était devenu paresseux et maintenant il fait de l'exercice tous les jours grâce à cette balle.",
  "Je recommande à 100%. La qualité est là, le prix est correct, et mon chat est heureux. Que demander de plus?",
  "Commandé le vendredi, reçu le mardi. Très satisfaite de la rapidité. Mon chat Tigrou adore sa nouvelle balle.",
  "Les 3 modes de jeu sont vraiment différents. Mon chat préfère le mode rapide, ça le fait courir partout!",
  "Matériaux de qualité, pas de plastique cheap. On sent que c'est un produit bien conçu. Mon chat approuve.",
  "Parfait pour quand je suis au travail. Mon chat peut jouer seul et il ne s'ennuie plus. Fini les bêtises!",
  "J'ai comparé avec d'autres marques et Purrball est clairement au-dessus. La balle est plus réactive et durable.",
  "Mon chat Maine Coon de 8kg joue avec sans problème. La balle est assez robuste pour les gros chats aussi.",
  "Cadeau de Noël pour le chat de ma fille. Succès total! Le chat ne le lâche plus depuis.",
  "Très contente de mon achat. La couleur verte est jolie et mon chat semble la voir mieux que les autres couleurs.",
  "Après 3 mois d'utilisation quotidienne, le jouet fonctionne toujours aussi bien. Très bonne durabilité.",
]

const bodiesEN = [
  "Bought this for my cat and she absolutely loves it! The ball rolls on its own and my cat chases it for hours. Great build quality.",
  "Super fast shipping with Canada Post. My cat started playing as soon as I opened the box. The automatic mode is amazing.",
  "After trying many toys, this one is by far the best. My Bengal cat is finally properly stimulated. Thanks Purrball!",
  "The quality is really impressive. Materials are solid and non-toxic. My cat chews on the ball with no issues.",
  "Got this as a gift for my mom's cat and she's thrilled. The cat plays with it every single day. Great gift idea.",
  "Excellent product! Battery lasts a long time and USB charging is super convenient. My cat never gets tired of it.",
  "Both my cats love this toy. They take turns playing with it. It's become their all-time favorite toy.",
  "Great value for money. For the price, this is really an excellent purchase. My cat is much more active now.",
  "The toy is quiet, which is a huge plus. No noise at night when my cat decides to play at 3am!",
  "Ordered the red color and it's beautiful. My cat is attracted to the natural movements of the ball.",
  "Customer service is excellent. Had a question and they responded within 24 hours. Product is great too.",
  "My indoor cat needed stimulation. This toy is perfect, she runs and jumps like never before.",
  "Bought for my 4-month-old kitten, he's completely crazy about this toy. Ball is big enough so he can't swallow it.",
  "Third order! I've bought these for all my friends who have cats. Everyone loves them.",
  "The design is really well thought out. The ball changes direction unpredictably, keeping my cat interested.",
  "Eco-friendly product too! I appreciate that the materials are recyclable. My cat and the planet are happy.",
  "Was worried my 12-year-old cat wouldn't care, but he plays with it every day now! Amazing.",
  "Delivery was faster than expected. Careful packaging. The toy works perfectly from the first charge.",
  "My Siamese cat is very picky with toys, but this one won him over immediately. Well done!",
  "Great purchase! My cat had become lazy and now exercises daily thanks to this ball. Totally worth it.",
  "I recommend 100%. Quality is there, price is fair, and my cat is happy. What more could you ask for?",
  "Ordered Friday, received Tuesday. Very happy with the speed. My cat Tigger loves his new ball.",
  "The 3 play modes are really different. My cat prefers the fast mode, it makes him run everywhere!",
  "Quality materials, no cheap plastic. You can tell this is a well-designed product. My cat approves.",
  "Perfect for when I'm at work. My cat can play alone and doesn't get bored anymore. No more mischief!",
  "Compared with other brands and Purrball is clearly superior. The ball is more responsive and durable.",
  "My 18-pound Maine Coon plays with it no problem. The ball is sturdy enough for big cats too.",
  "Christmas gift for my daughter's cat. Total success! The cat hasn't let go of it since.",
  "Very happy with my purchase. The green color is pretty and my cat seems to see it better than other colors.",
  "After 3 months of daily use, the toy still works perfectly. Very good durability.",
]

function generateReviews(): Review[] {
  const reviews: Review[] = []
  const startDate = new Date('2024-01-15')
  const endDate = new Date('2025-12-20')
  const dateRange = endDate.getTime() - startDate.getTime()

  for (let i = 0; i < 234; i++) {
    const isEnglish = Math.random() > 0.55
    const firstName = firstNames[i % firstNames.length]
    const lastInit = lastInitials[i % lastInitials.length]
    
    // Weighted rating: mostly 5 stars
    let rating: number
    const ratingRoll = Math.random()
    if (ratingRoll < 0.78) rating = 5
    else if (ratingRoll < 0.92) rating = 4
    else if (ratingRoll < 0.95) rating = 3
    else if (ratingRoll < 0.97) rating = 2
    else rating = 1

    const randomDate = new Date(startDate.getTime() + Math.random() * dateRange)
    const dateStr = `${String(randomDate.getMonth() + 1).padStart(2, '0')}/${String(randomDate.getDate()).padStart(2, '0')}/${randomDate.getFullYear()}`

    const titles = isEnglish ? titlesEN : titlesFR
    const bodies = isEnglish ? bodiesEN : bodiesFR

    reviews.push({
      id: i + 1,
      name: `${firstName} ${lastInit}`,
      rating,
      date: dateStr,
      title: titles[i % titles.length],
      body: bodies[i % bodies.length],
      verified: Math.random() > 0.08,
      helpful: Math.floor(Math.random() * 12),
      notHelpful: Math.floor(Math.random() * 2),
    })
  }

  // Sort by date descending
  reviews.sort((a, b) => {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)
    return dateB.getTime() - dateA.getTime()
  })

  return reviews
}

const allReviews = generateReviews()

// Calculate rating distribution
const ratingCounts = [0, 0, 0, 0, 0]
allReviews.forEach(r => ratingCounts[r.rating - 1]++)
const totalReviews = allReviews.length
const avgRating = allReviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews

function StarRating({ rating, size = "w-4 h-4" }: { rating: number; size?: string }) {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map(i => (
        <Star key={i} className={`${size} ${i <= rating ? 'text-neutral-900 fill-neutral-900' : 'text-neutral-200'}`} />
      ))}
    </div>
  )
}

export default function ProductReviews() {
  const [visibleCount, setVisibleCount] = useState(10)
  const [sortBy, setSortBy] = useState<'newest' | 'highest' | 'lowest'>('newest')

  const sortedReviews = [...allReviews].sort((a, b) => {
    if (sortBy === 'highest') return b.rating - a.rating
    if (sortBy === 'lowest') return a.rating - b.rating
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  const visibleReviews = sortedReviews.slice(0, visibleCount)

  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <div className="bg-white rounded-2xl border border-neutral-100 overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-neutral-100">
          <h2 className="text-lg font-semibold text-neutral-900 mb-6">Customer Reviews</h2>
          
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            {/* Average Rating */}
            <div className="flex-shrink-0 text-center md:text-left">
              <div className="flex items-center gap-2 mb-1">
                <StarRating rating={Math.round(avgRating)} size="w-5 h-5" />
              </div>
              <p className="text-xs text-neutral-400">Based on {totalReviews} reviews</p>
            </div>

            {/* Rating Bars */}
            <div className="flex-1 space-y-1.5">
              {[5, 4, 3, 2, 1].map(star => {
                const count = ratingCounts[star - 1]
                const pct = Math.round((count / totalReviews) * 100)
                return (
                  <div key={star} className="flex items-center gap-2 text-sm">
                    <div className="flex items-center gap-0.5 w-20">
                      <StarRating rating={star} size="w-3 h-3" />
                    </div>
                    <div className="flex-1 h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-neutral-900 rounded-full" 
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="text-neutral-400 w-8 text-right text-[10px]">{pct}%</span>
                    <span className="text-neutral-300 w-8 text-right text-[10px]">({count})</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Sort */}
        <div className="px-6 py-3 border-b border-neutral-100 flex items-center gap-2">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="text-xs border border-neutral-200 rounded-full px-3 py-1.5 text-neutral-600 bg-white appearance-none pr-6"
          >
            <option value="newest">Plus récents</option>
            <option value="highest">Meilleure note</option>
            <option value="lowest">Note la plus basse</option>
          </select>
          <span className="text-[10px] text-neutral-300">{totalReviews} avis</span>
        </div>

        {/* Reviews List */}
        <div className="divide-y divide-neutral-50">
          {visibleReviews.map(review => (
            <div key={review.id} className="p-6">
              <div className="flex items-start gap-3 mb-3">
                {/* Avatar */}
                <div className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-medium text-neutral-500">{review.name.charAt(0)}</span>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <StarRating rating={review.rating} size="w-3 h-3" />
                    <span className="text-[10px] text-neutral-300">{review.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    {review.verified && (
                      <span className="inline-flex items-center gap-0.5 bg-neutral-100 text-neutral-500 text-[9px] font-medium px-1.5 py-0.5 rounded-full">
                        <CheckCircle className="w-2.5 h-2.5" />
                        Verified
                      </span>
                    )}
                    <span className="text-xs font-medium text-neutral-700">{review.name}</span>
                  </div>
                </div>
              </div>

              <h4 className="font-medium text-neutral-900 text-sm mb-1">{review.title}</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">{review.body}</p>

              {/* Helpful */}
              <div className="flex items-center gap-4 mt-3">
                <button className="flex items-center gap-1 text-[10px] text-neutral-300 hover:text-neutral-600 transition-colors">
                  <ThumbsUp className="w-3 h-3" />
                  <span>{review.helpful}</span>
                </button>
                <button className="flex items-center gap-1 text-[10px] text-neutral-300 hover:text-neutral-600 transition-colors">
                  <ThumbsDown className="w-3 h-3" />
                  <span>{review.notHelpful}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {visibleCount < totalReviews && (
          <div className="p-6 border-t border-neutral-100 text-center">
            <button
              onClick={() => setVisibleCount(prev => Math.min(prev + 15, totalReviews))}
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-medium text-xs px-6 py-2.5 rounded-full transition-all hover:scale-[1.02]"
            >
              <ChevronDown className="w-3.5 h-3.5" />
              Voir plus d'avis ({totalReviews - visibleCount} restants)
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
