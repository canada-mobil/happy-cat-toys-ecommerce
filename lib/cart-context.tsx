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

  const addItem = (item: Omit<CartItem, "quantity">) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id)
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i))
      }

      // Check if it's a premium toy being added
      const isPremiumToy = item.price > 20
      const freeGiftExists = prev.find((i) => i.id === "free-catnip-sample")

      // Add toy
      const newItems = [...prev, { ...item, quantity: 1 }]

      // Auto-add free catnip sample if adding premium toy and gift doesn't exist
      if (isPremiumToy && !freeGiftExists) {
        newItems.push({
          id: "free-catnip-sample",
          name: "Échantillon Herbe à Chat Premium",
          price: 0,
          originalPrice: 4.99,
          image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=400&fit=crop&crop=center",
          quantity: 1,
          variant: "CADEAU GRATUIT",
        })
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
