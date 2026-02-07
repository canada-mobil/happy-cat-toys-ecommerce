"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Footer from "@/components/footer"

export default function PolitiqueRemboursementPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-neutral-900 hover:text-black transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>
          
          <h1 className="text-4xl font-semibold text-neutral-900 mb-4">
            Politique de Remboursement
          </h1>
          <p className="text-neutral-400">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>
        </div>

        <div className="bg-white rounded-lg p-8 border border-neutral-200 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">1. Notre engagement</h2>
            <p className="text-neutral-400 leading-relaxed">
              Chez Happy Cat Toys, votre satisfaction est notre priorité. Nous offrons une politique de remboursement 
              généreuse pour vous assurer une expérience d'achat sans souci. Si vous n'êtes pas entièrement satisfait 
              de votre achat, nous sommes là pour vous aider.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">2. Période de remboursement</h2>
            <div className="bg-neutral-900 bg-opacity-10 p-6 rounded-lg mb-4">
              <p className="text-neutral-900 font-semibold text-lg">
                🕒 Vous avez 30 jours pour demander un remboursement
              </p>
              <p className="text-neutral-400 mt-2">
                La période commence à compter de la date de réception de votre commande.
              </p>
            </div>
            <ul className="list-disc list-inside text-neutral-400 space-y-2">
              <li>Remboursement complet si demandé dans les 30 jours</li>
              <li>Aucune question posée pour les retours dans cette période</li>
              <li>Frais de retour gratuits pour les défauts de fabrication</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">3. Conditions de remboursement</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-neutral-900 mb-2">✅ Produits éligibles</h3>
                <ul className="list-disc list-inside text-neutral-400 space-y-1">
                  <li>Jouets pour chats non utilisés ou légèrement utilisés</li>
                  <li>Accessoires dans leur emballage d'origine</li>
                  <li>Produits défectueux ou endommagés</li>
                  <li>Commandes incorrectes de notre part</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-neutral-900 mb-2">❌ Produits non éligibles</h3>
                <ul className="list-disc list-inside text-neutral-400 space-y-1">
                  <li>Produits personnalisés ou sur mesure</li>
                  <li>Jouets fortement endommagés par l'usage</li>
                  <li>Produits retournés après 30 jours</li>
                  <li>Articles en promotion finale (si spécifié)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">4. Comment demander un remboursement</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-neutral-900 mb-3">📧 Étape 1 : Contactez-nous</h3>
                <p className="text-neutral-400 mb-2">Envoyez-nous un email avec :</p>
                <ul className="list-disc list-inside text-neutral-400 space-y-1">
                  <li>Votre numéro de commande</li>
                  <li>Raison du retour</li>
                  <li>Photos du produit (si défectueux)</li>
                </ul>
                <p className="text-neutral-900 font-medium mt-3">📧 support@happycattoys.ca</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-neutral-900 mb-3">📦 Étape 2 : Retournez le produit</h3>
                <ul className="list-disc list-inside text-neutral-400 space-y-1">
                  <li>Nous vous enverrons une étiquette de retour prépayée</li>
                  <li>Emballez soigneusement le produit</li>
                  <li>Incluez tous les accessoires et emballages</li>
                  <li>Utilisez l'étiquette fournie pour l'expédition</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-neutral-900 mb-3">💰 Étape 3 : Recevez votre remboursement</h3>
                <ul className="list-disc list-inside text-neutral-400 space-y-1">
                  <li>Inspection du produit retourné (1-2 jours ouvrables)</li>
                  <li>Remboursement traité sur votre méthode de paiement originale</li>
                  <li>Délai de traitement : 3-5 jours ouvrables</li>
                  <li>Confirmation par email une fois traité</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">5. Types de remboursement</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-neutral-200 rounded-lg p-6">
                <h3 className="text-lg font-medium text-neutral-900 mb-3">💳 Remboursement complet</h3>
                <ul className="list-disc list-inside text-neutral-400 space-y-1 text-sm">
                  <li>Produit défectueux</li>
                  <li>Erreur de notre part</li>
                  <li>Retour dans les 7 premiers jours</li>
                  <li>Inclut les frais de livraison</li>
                </ul>
              </div>

              <div className="border border-neutral-200 rounded-lg p-6">
                <h3 className="text-lg font-medium text-neutral-900 mb-3">💰 Remboursement partiel</h3>
                <ul className="list-disc list-inside text-neutral-400 space-y-1 text-sm">
                  <li>Retour après 7 jours</li>
                  <li>Produit légèrement utilisé</li>
                  <li>Emballage manquant</li>
                  <li>Frais de livraison non inclus</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">6. Frais de retour</h2>
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <h3 className="text-green-800 font-medium mb-2">🆓 Retours gratuits</h3>
                <ul className="list-disc list-inside text-green-700 space-y-1 text-sm">
                  <li>Produits défectueux ou endommagés</li>
                  <li>Erreur de commande de notre part</li>
                  <li>Retours dans les 7 premiers jours</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <h3 className="text-yellow-800 font-medium mb-2">💸 Frais de retour à votre charge</h3>
                <ul className="list-disc list-inside text-yellow-700 space-y-1 text-sm">
                  <li>Changement d'avis après 7 jours</li>
                  <li>Commande du mauvais produit</li>
                  <li>Frais forfaitaire : $4.99 CAD</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">7. Échanges</h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              Nous acceptons les échanges dans les mêmes conditions que les remboursements. 
              Pour un échange :
            </p>
            <ul className="list-disc list-inside text-neutral-400 space-y-2">
              <li>Contactez-nous pour organiser l'échange</li>
              <li>Retournez le produit original</li>
              <li>Nous expédierons le nouveau produit dès réception</li>
              <li>Différence de prix applicable si nécessaire</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">8. Garantie qualité</h2>
            <div className="bg-neutral-900 bg-opacity-10 p-6 rounded-lg">
              <h3 className="text-neutral-900 font-semibold mb-3">🛡️ Garantie 2 mois</h3>
              <p className="text-neutral-400 leading-relaxed">
                Tous nos produits sont couverts par une garantie de 2 mois contre les défauts de fabrication. 
                Si un problème survient après la période de remboursement de 30 jours, nous offrons :
              </p>
              <ul className="list-disc list-inside text-neutral-400 mt-3 space-y-1">
                <li>Remplacement gratuit du produit défectueux</li>
                <li>Réparation si possible</li>
                <li>Remboursement si remplacement impossible</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">9. Cas spéciaux</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-neutral-900 mb-2">🚚 Colis endommagé à la livraison</h3>
                <p className="text-neutral-400">
                  Contactez-nous immédiatement avec des photos. Nous organiserons un remplacement 
                  ou un remboursement complet sans frais.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-neutral-900 mb-2">📦 Colis perdu</h3>
                <p className="text-neutral-400">
                  Si votre commande est perdue en transit, nous remplacerons gratuitement 
                  ou rembourserons intégralement après vérification avec le transporteur.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">10. Contact</h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              Notre équipe de service client est là pour vous aider avec tous vos besoins de remboursement :
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-neutral-900 font-medium">Happy Cat Toys - Service Client</p>
              <p className="text-neutral-400">📧 Email : support@happycattoys.ca</p>
              <p className="text-neutral-400">📞 Téléphone : 1-800-CAT-TOYS</p>
              <p className="text-neutral-400">🕒 Heures : Lun-Ven 9h-17h (EST)</p>
              <p className="text-neutral-400 mt-3 text-sm">
                💬 Réponse garantie sous 24h pour toutes les demandes de remboursement
              </p>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
