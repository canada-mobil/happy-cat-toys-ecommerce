"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Footer from "@/components/footer"

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen bg-[#f5f2ed]">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-[#6b8e7b] hover:text-[#5a7a66] transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>
          
          <h1 className="text-4xl font-serif font-semibold text-foreground mb-4">
            Politique de Confidentialité
          </h1>
          <p className="text-muted-foreground">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>
        </div>

        <div className="bg-white rounded-lg p-8 border border-border space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Chez Purrball, nous nous engageons à protéger votre vie privée et vos données personnelles. 
              Cette politique de confidentialité explique comment nous collectons, utilisons, stockons et protégeons 
              vos informations lorsque vous utilisez notre site web et nos services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Informations que nous collectons</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Informations personnelles</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Nom et prénom</li>
                  <li>Adresse e-mail</li>
                  <li>Adresse de livraison et de facturation</li>
                  <li>Numéro de téléphone</li>
                  <li>Date de naissance (pour vérification)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Informations de commande</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Historique des achats</li>
                  <li>Préférences de produits</li>
                  <li>Informations de paiement (traitées de manière sécurisée)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Données techniques</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Adresse IP</li>
                  <li>Type de navigateur et version</li>
                  <li>Données de navigation sur notre site</li>
                  <li>Cookies et technologies similaires</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Comment nous utilisons vos informations</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Traiter et expédier vos commandes</li>
              <li>Vous contacter concernant vos commandes</li>
              <li>Améliorer nos produits et services</li>
              <li>Vous envoyer des communications marketing (avec votre consentement)</li>
              <li>Prévenir la fraude et assurer la sécurité</li>
              <li>Respecter nos obligations légales</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Partage de vos informations</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nous ne vendons jamais vos données personnelles. Nous pouvons partager vos informations uniquement dans les cas suivants :
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Avec nos partenaires de livraison pour expédier vos commandes</li>
              <li>Avec nos processeurs de paiement sécurisés</li>
              <li>Avec les autorités légales si requis par la loi</li>
              <li>Avec votre consentement explicite</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Sécurité des données</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nous utilisons des mesures de sécurité techniques et organisationnelles appropriées pour protéger 
              vos données personnelles contre l'accès non autorisé, la divulgation, l'altération ou la destruction. 
              Toutes les transactions de paiement sont cryptées et traitées via des plateformes sécurisées.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Vos droits</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Conformément aux lois canadiennes sur la protection de la vie privée, vous avez le droit de :
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Accéder à vos données personnelles</li>
              <li>Corriger des informations inexactes</li>
              <li>Demander la suppression de vos données</li>
              <li>Vous opposer au traitement de vos données</li>
              <li>Retirer votre consentement à tout moment</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nous utilisons des cookies pour améliorer votre expérience sur notre site, mémoriser vos préférences 
              et analyser le trafic. Vous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Conservation des données</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nous conservons vos données personnelles aussi longtemps que nécessaire pour fournir nos services, 
              respecter nos obligations légales et résoudre les litiges. Les données de commande sont généralement 
              conservées pendant 7 ans à des fins comptables.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, 
              contactez-nous :
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-foreground font-medium">Purrball</p>
              <p className="text-muted-foreground">Email : support@purrball.ca</p>
              <p className="text-muted-foreground">Téléphone : 1-800-CAT-TOYS</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Modifications</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
              Les modifications seront publiées sur cette page avec une date de mise à jour révisée. 
              Nous vous encourageons à consulter régulièrement cette politique.
            </p>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
