"use client"

import Link from "next/link"
import { ArrowLeft, Package, RefreshCw, Clock, CheckCircle } from "lucide-react"
import Footer from "@/components/footer"

export default function RetoursEchangesPage() {
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
            Retours & Échanges
          </h1>
          <p className="text-neutral-400">
            Guide complet pour retourner ou échanger vos produits Happy Cat Toys
          </p>
        </div>

        <div className="bg-white rounded-lg p-8 border border-neutral-200 space-y-8">
          <section>
            <div className="bg-blue-800 bg-opacity-10 p-6 rounded-lg mb-6">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                <Package className="w-6 h-6" />
                Politique de retour simple
              </h2>
              <p className="text-neutral-400 leading-relaxed">
                Chez Happy Cat Toys, nous voulons que vous et votre chat soyez 100% satisfaits. 
                Si ce n'est pas le cas, nous facilitons les retours et échanges avec notre politique généreuse de 30 jours.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-6">🕒 Délais de retour</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-green-200 bg-green-50 p-6 rounded-lg text-center">
                <Clock className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-green-800 mb-2">0-7 jours</h3>
                <p className="text-green-700 text-sm">Remboursement complet + frais de livraison</p>
              </div>
              
              <div className="border border-yellow-200 bg-yellow-50 p-6 rounded-lg text-center">
                <Clock className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
                <h3 className="font-semibold text-yellow-800 mb-2">8-30 jours</h3>
                <p className="text-yellow-700 text-sm">Remboursement complet (frais de retour $4.99)</p>
              </div>
              
              <div className="border border-red-200 bg-red-50 p-6 rounded-lg text-center">
                <Clock className="w-8 h-8 text-red-600 mx-auto mb-3" />
                <h3 className="font-semibold text-red-800 mb-2">30+ jours</h3>
                <p className="text-red-700 text-sm">Garantie 2 mois pour défauts uniquement</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-6">📦 Comment retourner un produit</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-800 text-white rounded-full flex items-center justify-center font-semibold">1</div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Contactez notre équipe</h3>
                  <p className="text-neutral-400 mb-2">Envoyez-nous un email avec :</p>
                  <ul className="list-disc list-inside text-neutral-400 space-y-1 text-sm">
                    <li>Numéro de commande (HCT...)</li>
                    <li>Nom du produit à retourner</li>
                    <li>Raison du retour</li>
                    <li>Photos si le produit est défectueux</li>
                  </ul>
                  <div className="mt-3 p-3 bg-gray-50 rounded">
                    <p className="text-neutral-900 font-medium">📧 support@happycattoys.ca</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-800 text-white rounded-full flex items-center justify-center font-semibold">2</div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Recevez votre étiquette de retour</h3>
                  <p className="text-neutral-400">
                    Nous vous enverrons par email une étiquette de retour prépayée dans les 24h. 
                    Imprimez-la et collez-la sur votre colis.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-800 text-white rounded-full flex items-center justify-center font-semibold">3</div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Emballez soigneusement</h3>
                  <ul className="list-disc list-inside text-neutral-400 space-y-1">
                    <li>Utilisez l'emballage original si possible</li>
                    <li>Incluez tous les accessoires et instructions</li>
                    <li>Protégez le produit avec du papier bulle</li>
                    <li>Assurez-vous que le produit est propre</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-800 text-white rounded-full flex items-center justify-center font-semibold">4</div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Expédiez votre retour</h3>
                  <p className="text-neutral-400">
                    Déposez le colis à un point de collecte Postes Canada ou programmez une collecte. 
                    Gardez le reçu de dépôt comme preuve d'expédition.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-800 text-white rounded-full flex items-center justify-center font-semibold">5</div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Recevez votre remboursement</h3>
                  <p className="text-neutral-400">
                    Une fois reçu et inspecté (1-2 jours), nous traiterons votre remboursement. 
                    Vous recevrez l'argent sur votre méthode de paiement originale sous 3-5 jours ouvrables.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-6 flex items-center gap-2">
              <RefreshCw className="w-6 h-6" />
              Échanges
            </h2>
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">🔄 Processus d'échange simplifié</h3>
              <p className="text-blue-700 mb-4">
                Vous préférez échanger plutôt que retourner ? Nous facilitons le processus !
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-blue-800 font-medium">Même processus que les retours</p>
                    <p className="text-blue-700 text-sm">Contactez-nous et mentionnez que vous voulez un échange</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-blue-800 font-medium">Expédition prioritaire</p>
                    <p className="text-blue-700 text-sm">Nous expédions votre nouveau produit dès réception de l'ancien</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-blue-800 font-medium">Différence de prix</p>
                    <p className="text-blue-700 text-sm">Si le nouveau produit coûte plus cher, nous vous facturerons la différence</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-6">✅ Conditions de retour</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-green-200 rounded-lg p-6">
                <h3 className="font-semibold text-green-800 mb-4">✅ Accepté pour retour</h3>
                <ul className="space-y-2 text-green-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-1 text-green-600" />
                    <span className="text-sm">Jouets non utilisés ou légèrement utilisés</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-1 text-green-600" />
                    <span className="text-sm">Produits dans leur emballage original</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-1 text-green-600" />
                    <span className="text-sm">Articles défectueux ou endommagés</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-1 text-green-600" />
                    <span className="text-sm">Erreurs de commande de notre part</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-1 text-green-600" />
                    <span className="text-sm">Produits propres et hygiéniques</span>
                  </li>
                </ul>
              </div>

              <div className="border border-red-200 rounded-lg p-6">
                <h3 className="font-semibold text-red-800 mb-4">❌ Non accepté</h3>
                <ul className="space-y-2 text-red-700">
                  <li className="flex items-start gap-2">
                    <span className="w-4 h-4 mt-1 text-red-600">❌</span>
                    <span className="text-sm">Jouets fortement endommagés par l'usage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-4 h-4 mt-1 text-red-600">❌</span>
                    <span className="text-sm">Produits personnalisés ou sur mesure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-4 h-4 mt-1 text-red-600">❌</span>
                    <span className="text-sm">Articles retournés après 30 jours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-4 h-4 mt-1 text-red-600">❌</span>
                    <span className="text-sm">Produits sales ou non hygiéniques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-4 h-4 mt-1 text-red-600">❌</span>
                    <span className="text-sm">Emballage et accessoires manquants</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-6">💰 Frais de retour</h2>
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <h3 className="text-green-800 font-semibold mb-2">🆓 Retours gratuits</h3>
                <ul className="text-green-700 space-y-1 text-sm">
                  <li>• Produits défectueux ou endommagés à la réception</li>
                  <li>• Erreur de commande de notre part</li>
                  <li>• Retours dans les 7 premiers jours (toute raison)</li>
                  <li>• Échanges de taille ou couleur</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <h3 className="text-yellow-800 font-semibold mb-2">💸 Frais de retour : $4.99 CAD</h3>
                <ul className="text-yellow-700 space-y-1 text-sm">
                  <li>• Changement d'avis après 7 jours</li>
                  <li>• Commande du mauvais produit</li>
                  <li>• Retour pour raisons personnelles</li>
                </ul>
                <p className="text-yellow-700 text-xs mt-2">
                  * Les frais sont déduits automatiquement de votre remboursement
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-6">🚚 Situations spéciales</h2>
            <div className="space-y-4">
              <div className="border border-neutral-200 rounded-lg p-6">
                <h3 className="font-semibold text-neutral-900 mb-3">📦 Colis endommagé à la livraison</h3>
                <p className="text-neutral-400 mb-2">
                  Si votre colis arrive endommagé :
                </p>
                <ul className="list-disc list-inside text-neutral-400 space-y-1 text-sm">
                  <li>Prenez des photos du colis et du produit</li>
                  <li>Contactez-nous immédiatement</li>
                  <li>Ne retournez pas le produit sans notre accord</li>
                  <li>Remplacement ou remboursement complet garanti</li>
                </ul>
              </div>

              <div className="border border-neutral-200 rounded-lg p-6">
                <h3 className="font-semibold text-neutral-900 mb-3">📮 Colis perdu en transit</h3>
                <p className="text-neutral-400 mb-2">
                  Si votre retour se perd pendant l'expédition :
                </p>
                <ul className="list-disc list-inside text-neutral-400 space-y-1 text-sm">
                  <li>Gardez votre reçu de dépôt Postes Canada</li>
                  <li>Nous lancerons une enquête avec le transporteur</li>
                  <li>Remboursement traité dès confirmation de la perte</li>
                  <li>Aucun frais supplémentaire à votre charge</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-6">❓ Questions fréquentes</h2>
            <div className="space-y-4">
              <div className="border border-neutral-200 rounded-lg p-4">
                <h3 className="font-semibold text-neutral-900 mb-2">Puis-je retourner un jouet que mon chat a utilisé ?</h3>
                <p className="text-neutral-400 text-sm">
                  Oui, tant que le jouet est dans un état raisonnablement propre et que vous êtes dans la période de 30 jours. 
                  Nous comprenons que les chats doivent tester leurs jouets !
                </p>
              </div>

              <div className="border border-neutral-200 rounded-lg p-4">
                <h3 className="font-semibold text-neutral-900 mb-2">Combien de temps pour recevoir mon remboursement ?</h3>
                <p className="text-neutral-400 text-sm">
                  Une fois que nous recevons votre retour, l'inspection prend 1-2 jours ouvrables. 
                  Le remboursement est ensuite traité sous 3-5 jours ouvrables sur votre méthode de paiement originale.
                </p>
              </div>

              <div className="border border-neutral-200 rounded-lg p-4">
                <h3 className="font-semibold text-neutral-900 mb-2">Puis-je échanger contre un produit plus cher ?</h3>
                <p className="text-neutral-400 text-sm">
                  Absolument ! Nous vous facturerons simplement la différence de prix. 
                  Le paiement se fait de manière sécurisée par email ou téléphone.
                </p>
              </div>

              <div className="border border-neutral-200 rounded-lg p-4">
                <h3 className="font-semibold text-neutral-900 mb-2">Que se passe-t-il si j'ai perdu l'emballage original ?</h3>
                <p className="text-neutral-400 text-sm">
                  Ce n'est pas un problème ! Emballez simplement le produit de manière sécurisée. 
                  Cependant, assurez-vous d'inclure tous les accessoires et instructions.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">📞 Besoin d'aide ?</h2>
            <div className="bg-blue-800 bg-opacity-10 p-6 rounded-lg">
              <p className="text-neutral-400 mb-4">
                Notre équipe de service client est là pour vous aider avec tous vos retours et échanges :
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-neutral-900 font-medium">📧 Email</p>
                  <p className="text-neutral-400">support@happycattoys.ca</p>
                  <p className="text-neutral-400 text-sm">Réponse sous 24h garantie</p>
                </div>
                <div>
                  <p className="text-neutral-900 font-medium">📞 Téléphone</p>
                  <p className="text-neutral-400">1-800-CAT-TOYS</p>
                  <p className="text-neutral-400 text-sm">Lun-Ven 9h-17h (EST)</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
