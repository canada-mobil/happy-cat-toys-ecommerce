"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Footer from "@/components/footer"

export default function ConditionsUtilisationPage() {
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
            Conditions d'Utilisation
          </h1>
          <p className="text-neutral-400">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>
        </div>

        <div className="bg-white rounded-lg p-8 border border-neutral-200 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">1. Acceptation des conditions</h2>
            <p className="text-neutral-400 leading-relaxed">
              En accédant et en utilisant le site web Happy Cat Toys, vous acceptez d'être lié par ces conditions d'utilisation. 
              Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">2. Description du service</h2>
            <p className="text-neutral-400 leading-relaxed">
              Happy Cat Toys est une boutique en ligne spécialisée dans la vente de jouets et accessoires pour chats. 
              Nous proposons des produits de qualité premium, 100% canadiens, avec livraison rapide partout au Canada.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">3. Utilisation du site</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-neutral-900 mb-2">Utilisation autorisée</h3>
                <ul className="list-disc list-inside text-neutral-400 space-y-1">
                  <li>Parcourir et acheter nos produits pour usage personnel</li>
                  <li>Créer un compte client</li>
                  <li>Laisser des avis sur les produits achetés</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-neutral-900 mb-2">Utilisation interdite</h3>
                <ul className="list-disc list-inside text-neutral-400 space-y-1">
                  <li>Utiliser le site à des fins commerciales sans autorisation</li>
                  <li>Copier, reproduire ou distribuer le contenu du site</li>
                  <li>Tenter d'accéder aux systèmes non autorisés</li>
                  <li>Publier du contenu offensant ou inapproprié</li>
                  <li>Utiliser des robots ou scripts automatisés</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">4. Comptes utilisateurs</h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              Pour passer commande, vous devez créer un compte avec des informations exactes et à jour. Vous êtes responsable de :
            </p>
            <ul className="list-disc list-inside text-neutral-400 space-y-2">
              <li>Maintenir la confidentialité de vos identifiants</li>
              <li>Toutes les activités sous votre compte</li>
              <li>Nous notifier immédiatement en cas d'utilisation non autorisée</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">5. Commandes et paiements</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-neutral-900 mb-2">Processus de commande</h3>
                <ul className="list-disc list-inside text-neutral-400 space-y-1">
                  <li>Toutes les commandes sont sujettes à acceptation</li>
                  <li>Nous nous réservons le droit de refuser toute commande</li>
                  <li>Les prix sont en dollars canadiens (CAD) et incluent les taxes applicables</li>
                  <li>Les frais de livraison sont calculés selon la destination</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-neutral-900 mb-2">Paiement</h3>
                <ul className="list-disc list-inside text-neutral-400 space-y-1">
                  <li>Paiement requis au moment de la commande</li>
                  <li>Cartes acceptées : Visa, Mastercard, American Express, UnionPay</li>
                  <li>Tous les paiements sont traités de manière sécurisée</li>
                  <li>Vérification d'âge requise (13 ans minimum)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">6. Livraison</h2>
            <ul className="list-disc list-inside text-neutral-400 space-y-2">
              <li>Livraison standard : 2-3 jours ouvrables</li>
              <li>Livraison gratuite pour 2 articles ou plus</li>
              <li>Livraison uniquement au Canada</li>
              <li>Les délais peuvent varier selon la destination et les conditions météorologiques</li>
              <li>Vous serez notifié par email du suivi de votre commande</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">7. Propriété intellectuelle</h2>
            <p className="text-neutral-400 leading-relaxed">
              Tout le contenu de ce site (textes, images, logos, designs) est la propriété de Happy Cat Toys 
              et est protégé par les lois sur le droit d'auteur. Toute reproduction non autorisée est interdite.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">8. Garanties et responsabilité</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-neutral-900 mb-2">Garantie produits</h3>
                <ul className="list-disc list-inside text-neutral-400 space-y-1">
                  <li>Garantie de 2 ans sur tous nos produits</li>
                  <li>Remplacement gratuit en cas de défaut de fabrication</li>
                  <li>Garantie limitée aux défauts matériels</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-neutral-900 mb-2">Limitation de responsabilité</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Notre responsabilité est limitée au montant payé pour le produit. Nous ne sommes pas responsables 
                  des dommages indirects, consécutifs ou punitifs.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">9. Résiliation</h2>
            <p className="text-neutral-400 leading-relaxed">
              Nous nous réservons le droit de suspendre ou résilier votre accès au site en cas de violation 
              de ces conditions d'utilisation, sans préavis et à notre seule discrétion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">10. Droit applicable</h2>
            <p className="text-neutral-400 leading-relaxed">
              Ces conditions sont régies par les lois du Canada et de la province où Happy Cat Toys est établi. 
              Tout litige sera soumis à la juridiction exclusive des tribunaux canadiens compétents.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">11. Modifications</h2>
            <p className="text-neutral-400 leading-relaxed">
              Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications 
              prendront effet dès leur publication sur le site. Il est de votre responsabilité de consulter 
              régulièrement ces conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">12. Contact</h2>
            <p className="text-neutral-400 leading-relaxed">
              Pour toute question concernant ces conditions d'utilisation, contactez-nous :
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-neutral-900 font-medium">Happy Cat Toys</p>
              <p className="text-neutral-400">Email : support@happycattoys.ca</p>
              <p className="text-neutral-400">Téléphone : 1-800-CAT-TOYS</p>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
