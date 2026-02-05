"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface CartItem {
  id: string
  name: string
  price: number
  originalPrice: number
  image: string
  quantity: number
  variant?: string
}

interface CartContextType {
  items: CartItem[]
  addItem: (item: Omit<CartItem, "quantity">) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  subtotal: number
  discount: number
  total: number
  itemCount: number
  freeShippingProgress: number
  freeShippingThreshold: number
  openCart: () => void
  setCartOpen: (open: boolean) => void
  isCartOpen: boolean
}

const CartContext = createContext<CartContextType | undefined>(undefined)

const FREE_SHIPPING_ITEM_THRESHOLD = 2 // 2 articles pour livraison gratuite

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isClient, setIsClient] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    setIsClient(true)
    try {
      const savedCart = localStorage.getItem("happy-cat-toys-cart")
      console.log('Saved cart:', savedCart) // Debug
      
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart)
        if (Array.isArray(parsedCart)) {
          setItems(parsedCart)
        }
      } else {
        console.log('No saved cart, adding free catnip') // Debug
        
        // Auto-add free catnip on first visit
        const freeCatnip: CartItem = {
          id: 'catnip-gratuit',
          name: 'Catnip Gratuit',
          price: 0,
          originalPrice: 5.99,
          image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=400&fit=crop&crop=center',
          quantity: 1,
          variant: 'CADEAU GRATUIT'
        }
        setItems([freeCatnip])
        
        console.log('Showing popup in 1 second') // Debug
        
        // Show welcome popup immediately for testing
        setTimeout(() => {
          console.log('Creating popup now') // Debug
          
          const popup = document.createElement('div')
          popup.id = 'welcome-popup'
          popup.style.cssText = `
            position: fixed !important;
            top: 20px !important;
            right: 20px !important;
            z-index: 99999 !important;
            background-color: #10b981 !important;
            color: white !important;
            padding: 16px !important;
            border-radius: 8px !important;
            box-shadow: 0 10px 25px rgba(0,0,0,0.5) !important;
            font-family: system-ui, -apple-system, sans-serif !important;
            max-width: 300px !important;
            border: 3px solid #059669 !important;
            transform: scale(1.1) !important;
          `
          popup.innerHTML = `
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="font-size: 24px;">🎁</span>
              <div>
                <div style="font-weight: 700; font-size: 16px; margin-bottom: 4px;">BIENVENUE !</div>
                <div style="font-size: 13px; opacity: 0.95;">Catnip gratuit ajouté à votre panier</div>
              </div>
            </div>
          `
          
          document.body.appendChild(popup)
          console.log('Popup added to body:', popup) // Debug
          
          setTimeout(() => {
            console.log('Removing popup') // Debug
            if (popup && popup.parentNode) {
              popup.remove()
            }
          }, 5000)
        }, 1000)
      }
    } catch (error) {
      console.error('Cart loading error:', error) // Debug
      localStorage.removeItem("happy-cat-toys-cart")
    }
  }, [])

  useEffect(() => {
    if (isClient) {
      try {
        localStorage.setItem("happy-cat-toys-cart", JSON.stringify(items))
      } catch {
        // Silent fail
      }
    }
  }, [items, isClient])

  const addItem = (product: Omit<CartItem, "quantity">) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id)
      
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      
      return [...prevItems, { ...product, quantity: 1 }]
    })
    
    // Auto-open cart when item is added
    setIsCartOpen(true)
  }

  const openCart = () => setIsCartOpen(true)
  const setCartOpen = (open: boolean) => setIsCartOpen(open)

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id)
      return
    }
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const clearCart = () => {
    setItems([])
    localStorage.removeItem("happy-cat-toys-cart")
  }

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const discount = 0
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const shipping = totalItems >= FREE_SHIPPING_ITEM_THRESHOLD ? 0 : 7.99
  const total = subtotal - discount + shipping
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
  const freeShippingProgress = Math.min((totalItems / FREE_SHIPPING_ITEM_THRESHOLD) * 100, 100)

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        subtotal,
        discount,
        total,
        itemCount,
        freeShippingProgress,
        freeShippingThreshold: FREE_SHIPPING_ITEM_THRESHOLD,
        openCart,
        setCartOpen,
        isCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within CartProvider")
  }
  return context
}
