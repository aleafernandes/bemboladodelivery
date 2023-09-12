'use client'

import Menu from '@/components/Menu'
import { listaMenu } from '@/components/lista'
import CartItems from '@/components/pedidos/CartItems'
import { useEffect, useState } from 'react'

export default function Pedidos() {
  const [cart, setCart] = useState([])
  const removeItem = (id: number) => {
    const newCart = cart.filter((item) => item.id !== id)
    setCart(newCart)
  }
  const addItem = (item: any) => {
    setCart((oldCart) => [...oldCart, item])
  }
  useEffect(() => {
    console.log(cart)
  }, [cart])
  return (
    <>
      <div>
        <h1 className="text-center font-extrabold text-xl tracking-[0.18em] uppercase text-red-800">
          Pedido
        </h1>
        <p className="py-2 italic text-xs text-center">
          Após finalizar seu pedido, o mesmo será enviado via{' '}
          <span className="font-bold text-green-600">Whatsapp</span> para a
          loja.
        </p>
      </div>
      {cart.map((menu) => (
        <CartItems key={menu.id} item={menu} removeItem={removeItem} />
      ))}
      <Menu addItem={addItem} />
    </>
  )
}
