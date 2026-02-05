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
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart)
        if (Array.isArray(parsedCart)) {
          setItems(parsedCart)
        }
      }
    } catch {
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
    // First add the main product
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id)
      let newItems = [...prevItems]
      
      if (existingItem) {
        newItems = prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        newItems = [...prevItems, { ...product, quantity: 1 }]
      }
      
      // Auto-add free catnip DIRECTLY in the same state update
      if (product.id !== 'catnip-gratuit') {
        const hasCatnip = newItems.find(item => item.id === 'catnip-gratuit')
        if (!hasCatnip) {
          const freeCatnip: CartItem = {
            id: 'catnip-gratuit',
            name: 'Catnip Gratuit',
            price: 0,
            originalPrice: 5.99,
            image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=400&fit=crop&crop=center',
            quantity: 1,
            variant: 'CADEAU GRATUIT'
          }
          newItems.push(freeCatnip)
          
          // Show popup notification
          setTimeout(() => {
            const popup = document.createElement('div')
            popup.style.cssText = `
              position: fixed;
              top: 20px;
              right: 20px;
              z-index: 99999;
              background: #10b981;
              color: white;
              padding: 16px;
              border-radius: 12px;
              box-shadow: 0 10px 25px rgba(0,0,0,0.2);
              font-family: system-ui;
              font-size: 14px;
              font-weight: 600;
              min-width: 250px;
              animation: slideIn 0.3s ease-out;
            `
            popup.innerHTML = `
              🎁 Cadeau ajouté !<br>
              <span style="font-size: 12px; opacity: 0.9;">Catnip gratuit dans votre panier</span>
            `
            
            // Add animation keyframes
            if (!document.querySelector('#popup-animation')) {
              const style = document.createElement('style')
              style.id = 'popup-animation'
              style.textContent = `
                @keyframes slideIn {
                  from { transform: translateX(100%); opacity: 0; }
                  to { transform: translateX(0); opacity: 1; }
                }
              `
              document.head.appendChild(style)
            }
            
            document.body.appendChild(popup)
            
            setTimeout(() => {
              if (popup.parentNode) {
                popup.style.animation = 'slideIn 0.3s ease-out reverse'
                setTimeout(() => popup.remove(), 300)
              }
            }, 3000)
          }, 100)
        }
      }
      
      return newItems
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
