import Header from "@/components/header"
import Footer from "@/components/footer"
import { XCircle, RefreshCw, CreditCard, HelpCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function OrderFailed() {
  const failureReasons = [
    {
      icon: CreditCard,
      title: "Problème de paiement",
      description: "Votre carte a été refusée ou les informations sont incorrectes"
    },
    {
      icon: RefreshCw,
      title: "Erreur technique",
      description: "Un problème temporaire s'est produit lors du traitement"
    },
    {
      icon: HelpCircle,
      title: "Autre problème",
      description: "Contactez-nous pour une assistance personnalisée"
    }
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Error Icon */}
          <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <XCircle className="w-12 h-12 text-white" />
          </div>

          {/* Error Message */}
          <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            Échec de la commande
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Nous n'avons pas pu traiter votre commande. Ne vous inquiétez pas, aucun montant n'a été débité.
          </p>

          {/* Error Details Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8 text-left">
            <h2 className="text-xl font-semibold text-foreground mb-4 text-center">
              Que s'est-il passé ?
            </h2>
            
            <div className="space-y-4">
              {failureReasons.map((reason, index) => {
                const Icon = reason.icon
                return (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon className="w-4 h-4 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">{reason.title}</h3>
                      <p className="text-sm text-muted-foreground">{reason.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Solutions */}
          <div className="bg-[#f5f2ed] rounded-xl p-6 mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Comment résoudre le problème ?
            </h3>
            
            <div className="space-y-3 text-left">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#6b8e7b] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white font-bold text-xs">1</span>
                </div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Vérifiez vos informations de paiement</strong> - 
                  Assurez-vous que votre carte n'est pas expirée et que les informations sont correctes
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#6b8e7b] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white font-bold text-xs">2</span>
                </div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Essayez une autre méthode de paiement</strong> - 
                  Utilisez une autre carte ou PayPal si disponible
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#6b8e7b] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white font-bold text-xs">3</span>
                </div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Contactez votre banque</strong> - 
                  Votre banque peut avoir bloqué la transaction par sécurité
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/cart"
              className="bg-[#6b8e7b] hover:bg-[#5a7a66] text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              Réessayer la commande
            </Link>
            <Link
              href="/produits"
              className="border border-[#6b8e7b] text-[#6b8e7b] hover:bg-[#6b8e7b] hover:text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour aux produits
            </Link>
          </div>

          {/* Support Section */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Besoin d'aide ?
            </h3>
            <p className="text-muted-foreground mb-4">
              Notre équipe de support est disponible pour vous aider à résoudre ce problème rapidement.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
              >
                Contacter le support
              </Link>
              <Link
                href="/faq"
                className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-lg font-medium transition-colors text-sm"
              >
                Voir la FAQ
              </Link>
              <a
                href="mailto:support@purrball.ca"
                className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-lg font-medium transition-colors text-sm"
              >
                Email direct
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
