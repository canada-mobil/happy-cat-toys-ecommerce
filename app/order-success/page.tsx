import Header from "@/components/header"
import Footer from "@/components/footer"
import { CheckCircle, Package, Truck, Heart, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function OrderSuccess() {
  const orderDetails = {
    orderNumber: "HC-2024-001234",
    email: "client@example.com",
    total: "47.97",
    estimatedDelivery: "7-9 février 2026"
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>

          {/* Success Message */}
          <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            Commande confirmée !
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Merci pour votre achat ! Votre chat va adorer ses nouveaux jouets.
          </p>

          {/* Order Summary Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8 text-left">
            <h2 className="text-xl font-semibold text-foreground mb-4 text-center">
              Résumé de votre commande
            </h2>
            
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-muted-foreground">Numéro de commande</span>
                <span className="font-medium">{orderDetails.orderNumber}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-muted-foreground">Email de confirmation</span>
                <span className="font-medium">{orderDetails.email}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-muted-foreground">Total payé</span>
                <span className="font-bold text-[#6b8e7b]">${orderDetails.total} CAD</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">Livraison estimée</span>
                <span className="font-medium">{orderDetails.estimatedDelivery}</span>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-[#f5f2ed] rounded-xl p-6 mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Prochaines étapes
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-left">
                <div className="w-8 h-8 bg-[#6b8e7b] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">Confirmation par email</p>
                  <p className="text-sm text-muted-foreground">Vous recevrez un email de confirmation dans quelques minutes</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-left">
                <div className="w-8 h-8 bg-[#6b8e7b] rounded-full flex items-center justify-center flex-shrink-0">
                  <Package className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Préparation de votre commande</p>
                  <p className="text-sm text-muted-foreground">Nous préparons vos jouets avec le plus grand soin</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-left">
                <div className="w-8 h-8 bg-[#6b8e7b] rounded-full flex items-center justify-center flex-shrink-0">
                  <Truck className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Expédition et livraison</p>
                  <p className="text-sm text-muted-foreground">Livraison gratuite en 2-3 jours ouvrables</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/order-tracking"
              className="bg-[#6b8e7b] hover:bg-[#5a7a66] text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              Suivre ma commande
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/produits"
              className="border border-[#6b8e7b] text-[#6b8e7b] hover:bg-[#6b8e7b] hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Continuer mes achats
            </Link>
          </div>

          {/* Thank You Message */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Heart className="w-5 h-5 text-red-500" />
              <span className="text-lg font-semibold text-foreground">Merci de votre confiance !</span>
              <Heart className="w-5 h-5 text-red-500" />
            </div>
            <p className="text-muted-foreground">
              Chez Happy Cat Toys, nous nous engageons à offrir les meilleurs jouets pour rendre votre chat heureux. 
              N'hésitez pas à nous contacter si vous avez des questions !
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
