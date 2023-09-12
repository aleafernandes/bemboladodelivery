'use client'

import { ReactNode, createContext, useContext, useState } from 'react'

interface CartItem {
  imagem: string
  produto: string
  descricao: string
  preco: number
  tipo: string
  quantidade: number
  id: number
}

interface CartContextValue {
  cart: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: number) => void
  updateItem: (id: number, quantidade: number) => void
  clearCart: () => void
  getTotal: () => number
}

const CartContext = createContext<CartContextValue | undefined>(undefined)

export const useCart = (): CartContextValue => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([])

  const addItem = (item: CartItem) => {
    setCart([...cart, item])
  }

  const removeItem = (id: number) => {
    setCart(cart.filter((item, index) => index !== id))
  }

  const updateItem = (id: number, quantidade: number) => {
    setCart(
      cart.map((item) => (item.id === id ? { ...item, quantidade } : item)),
    )
  }

  const clearCart = () => {
    setCart([])
  }

  const getTotal = (): number => {
    return cart.reduce((acc, item) => acc + item.preco * item.quantidade, 0)
  }

  // const sendCart = (item: CartItem) => {}

  const value = {
    cart,
    addItem,
    removeItem,
    updateItem,
    clearCart,
    getTotal,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
