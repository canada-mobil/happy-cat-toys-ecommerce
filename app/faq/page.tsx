"use client"

import Link from "next/link"
import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"
import Footer from "@/components/footer"

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const faqData = [
    {
      category: "Commandes & Livraison",
      questions: [
        {
          question: "Combien de temps prend la livraison ?",
          answer: "Nous offrons une livraison rapide de 2-3 jours ouvrables partout au Canada. Les commandes passées avant 14h sont généralement expédiées le jour même. Vous recevrez un email de confirmation avec le numéro de suivi dès l'expédition."
        },
        {
          question: "La livraison est-elle gratuite ?",
          answer: "Oui ! La livraison est gratuite pour toute commande de 2 articles ou plus. Pour les commandes d'un seul article, les frais de livraison sont de $4.99 CAD."
        },
        {
          question: "Dans quelles régions livrez-vous ?",
          answer: "Nous livrons partout au Canada, incluant toutes les provinces et territoires. Malheureusement, nous ne livrons pas à l'international pour le moment."
        },
        {
          question: "Puis-je modifier ma commande après l'avoir passée ?",
          answer: "Vous pouvez modifier votre commande dans les 2 heures suivant la confirmation, en nous contactant immédiatement. Après ce délai, la commande est généralement déjà en préparation."
        },
        {
          question: "Comment puis-je suivre ma commande ?",
          answer: "Dès l'expédition, vous recevrez un email avec votre numéro de suivi Postes Canada. Vous pouvez suivre votre colis en temps réel sur le site de Postes Canada ou directement depuis votre compte client."
        }
      ]
    },
    {
      category: "Produits & Qualité",
      questions: [
        {
          question: "Vos produits sont-ils sécuritaires pour les chats ?",
          answer: "Absolument ! Tous nos jouets sont fabriqués avec des matériaux non toxiques et testés pour la sécurité des félins. Nous respectons les normes canadiennes les plus strictes et chaque produit passe des tests de qualité rigoureux."
        },
        {
          question: "Quelle est la durée de vie de vos jouets ?",
          answer: "Nos jouets sont conçus pour durer ! Nous offrons une garantie de 2 ans sur tous nos produits contre les défauts de fabrication. La durée de vie dépend du style de jeu de votre chat, mais nos clients rapportent généralement plusieurs mois à années d'utilisation."
        },
        {
          question: "Avez-vous des jouets pour chatons ?",
          answer: "Oui ! Nous avons une sélection spéciale de jouets adaptés aux chatons de 3 mois et plus. Ces jouets sont plus petits, plus doux et parfaitement sécuritaires pour les jeunes félins en développement."
        },
        {
          question: "Mes produits sont-ils vraiment 100% canadiens ?",
          answer: "Oui ! Nous sommes fiers d'être 100% canadiens. Nos produits sont conçus, fabriqués et assemblés au Canada par des artisans locaux. Nous supportons l'économie locale et garantissons la qualité canadienne."
        },
        {
          question: "Comment nettoyer les jouets ?",
          answer: "La plupart de nos jouets peuvent être nettoyés avec un chiffon humide et du savon doux. Pour les jouets en tissu, beaucoup sont lavables en machine (cycle délicat). Consultez les instructions spécifiques sur chaque produit."
        }
      ]
    },
    {
      category: "Retours & Remboursements",
      questions: [
        {
          question: "Quelle est votre politique de retour ?",
          answer: "Nous offrons 30 jours pour retourner tout produit, sans questions posées ! Si vous n'êtes pas satisfait, contactez-nous et nous organiserons le retour. Les retours dans les 7 premiers jours incluent même les frais de livraison."
        },
        {
          question: "Puis-je retourner un jouet que mon chat a utilisé ?",
          answer: "Bien sûr ! Nous comprenons que les chats doivent tester leurs jouets. Tant que le produit est dans un état raisonnablement propre et hygiénique, vous pouvez le retourner dans les 30 jours."
        },
        {
          question: "Combien de temps pour recevoir mon remboursement ?",
          answer: "Une fois que nous recevons votre retour, nous l'inspectons sous 1-2 jours ouvrables. Le remboursement est ensuite traité sous 3-5 jours ouvrables sur votre méthode de paiement originale."
        },
        {
          question: "Puis-je échanger un produit ?",
          answer: "Absolument ! Les échanges suivent le même processus que les retours. Contactez-nous, retournez l'article original, et nous expédierons le nouveau produit dès réception. Si le nouveau produit coûte plus cher, nous vous facturerons la différence."
        },
        {
          question: "Que faire si mon colis arrive endommagé ?",
          answer: "Contactez-nous immédiatement avec des photos du colis et du produit endommagé. Nous organiserons un remplacement ou un remboursement complet sans frais. Ne retournez pas le produit sans notre accord préalable."
        }
      ]
    },
    {
      category: "Paiement & Sécurité",
      questions: [
        {
          question: "Quels modes de paiement acceptez-vous ?",
          answer: "Nous acceptons toutes les cartes de crédit majeures : Visa, Mastercard, American Express et UnionPay. Tous les paiements sont traités de manière sécurisée via notre plateforme de paiement cryptée."
        },
        {
          question: "Mes informations de paiement sont-elles sécurisées ?",
          answer: "Absolument ! Nous utilisons un cryptage SSL de niveau bancaire et ne stockons jamais vos informations de carte de crédit. Toutes les transactions sont traitées par des processeurs de paiement certifiés PCI-DSS."
        },
        {
          question: "Pourquoi demandez-vous ma date de naissance ?",
          answer: "La date de naissance est requise pour la vérification de sécurité et pour confirmer que vous avez au moins 13 ans (âge minimum pour passer commande). Cette information n'est utilisée qu'à des fins de sécurité."
        },
        {
          question: "Puis-je payer en plusieurs fois ?",
          answer: "Pour le moment, nous n'offrons que le paiement complet au moment de la commande. Cependant, vous pouvez utiliser les options de paiement échelonné de votre carte de crédit si disponibles."
        },
        {
          question: "Que faire si ma carte est refusée ?",
          answer: "Vérifiez d'abord vos informations (numéro, date d'expiration, CVV). Si le problème persiste, contactez votre banque car il peut y avoir une restriction sur les achats en ligne. Vous pouvez aussi essayer une autre carte."
        }
      ]
    },
    {
      category: "Compte Client",
      questions: [
        {
          question: "Dois-je créer un compte pour commander ?",
          answer: "Oui, un compte est requis pour passer commande. Cela nous permet de traiter votre commande efficacement, vous envoyer les mises à jour de suivi, et vous offrir un meilleur service client."
        },
        {
          question: "Comment puis-je voir l'historique de mes commandes ?",
          answer: "Connectez-vous à votre compte client et accédez à la section 'Mes Commandes'. Vous y trouverez l'historique complet avec les détails, statuts et numéros de suivi de toutes vos commandes."
        },
        {
          question: "Puis-je modifier mes informations personnelles ?",
          answer: "Oui ! Dans votre compte client, vous pouvez modifier votre adresse, numéro de téléphone, et préférences de communication. Pour changer votre email, contactez notre service client."
        },
        {
          question: "Comment supprimer mon compte ?",
          answer: "Pour supprimer votre compte et toutes vos données personnelles, contactez notre service client à support@purrball.ca. Nous traiterons votre demande sous 48h conformément à nos politiques de confidentialité."
        },
        {
          question: "J'ai oublié mon mot de passe, que faire ?",
          answer: "Cliquez sur 'Mot de passe oublié' sur la page de connexion. Entrez votre email et nous vous enverrons un lien pour réinitialiser votre mot de passe de manière sécurisée."
        }
      ]
    },
    {
      category: "Service Client",
      questions: [
        {
          question: "Comment vous contacter ?",
          answer: "Vous pouvez nous joindre par email à support@purrball.ca (réponse sous 24h) ou par téléphone au 1-800-CAT-TOYS du lundi au vendredi de 9h à 17h (EST). Nous sommes là pour vous aider !"
        },
        {
          question: "Dans quelle langue offrez-vous le support ?",
          answer: "Nous offrons un support complet en français et en anglais. Notre équipe bilingue peut vous aider dans la langue de votre choix pour tous vos besoins."
        },
        {
          question: "Avez-vous un programme de fidélité ?",
          answer: "Nous travaillons actuellement sur un programme de récompenses pour nos clients fidèles ! En attendant, suivez-nous sur nos réseaux sociaux pour être informé des promotions spéciales et nouveautés."
        },
        {
          question: "Puis-je visiter votre magasin physique ?",
          answer: "Pour le moment, nous sommes exclusivement en ligne pour vous offrir les meilleurs prix et une sélection optimale. Cela nous permet de nous concentrer sur la qualité de nos produits et la rapidité de livraison."
        },
        {
          question: "Offrez-vous des conseils pour choisir les jouets ?",
          answer: "Absolument ! Notre équipe d'experts félins peut vous conseiller sur les meilleurs jouets selon l'âge, la personnalité et les préférences de votre chat. Contactez-nous, nous adorons parler de nos amis félins !"
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-neutral-900 transition-colors mb-6 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>
          
          <h1 className="text-3xl font-semibold text-neutral-900 mb-3 tracking-tight">
            Questions Fréquentes
          </h1>
          <p className="text-neutral-400 text-sm">
            Trouvez rapidement les réponses à vos questions sur Purrball
          </p>
        </div>

        <div className="space-y-6">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl border border-neutral-100 overflow-hidden">
              <div className="bg-neutral-50 px-6 py-4">
                <h2 className="text-sm font-semibold text-neutral-900">
                  {category.category}
                </h2>
              </div>
              
              <div className="divide-y divide-neutral-100">
                {category.questions.map((item, questionIndex) => {
                  const globalIndex = categoryIndex * 100 + questionIndex
                  const isOpen = openItems.includes(globalIndex)
                  
                  return (
                    <div key={questionIndex}>
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full px-6 py-4 text-left hover:bg-neutral-50 transition-colors flex items-center justify-between"
                      >
                        <h3 className="font-medium text-neutral-900 pr-4 text-sm">
                          {item.question}
                        </h3>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                        )}
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <p className="text-neutral-500 text-sm leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-neutral-50 rounded-2xl p-8 text-center">
          <h2 className="text-lg font-semibold text-neutral-900 mb-3 tracking-tight">
            Vous ne trouvez pas votre réponse ?
          </h2>
          <p className="text-neutral-400 mb-6 text-sm">
            Notre équipe de service client est là pour vous aider avec toutes vos questions !
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-5 border border-neutral-100">
              <h3 className="font-medium text-neutral-900 mb-1 text-sm">Email</h3>
              <p className="text-neutral-500 text-xs mb-0.5">support@purrball.ca</p>
              <p className="text-neutral-300 text-[10px]">Réponse garantie sous 24h</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-neutral-100">
              <h3 className="font-medium text-neutral-900 mb-1 text-sm">Téléphone</h3>
              <p className="text-neutral-500 text-xs mb-0.5">1-800-CAT-TOYS</p>
              <p className="text-neutral-300 text-[10px]">Lun-Ven 9h-17h (EST)</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
