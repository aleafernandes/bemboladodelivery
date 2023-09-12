'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCartSimple } from '@phosphor-icons/react'
import CartItems from './pedidos/CartItems'
import { useCart } from '@/context/CartContext'
import { useState } from 'react'

const abas = [
  { path: '/', title: 'Início' },
  { path: '/#cardapio', title: 'Cardápio' },
  { path: '/pedidos', title: 'Pedido' },
]

export default function Nav() {
  const { removeItem, cart } = useCart()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div className="flex items-center justify-around container">
      <Image
        src="/assets/logo-horizontal.svg"
        width={200}
        height={200}
        alt="logo bem bolado"
      />
      <nav className="font-semibold flex gap-2 items-center">
        <ul className="flex gap-5">
          {abas.map((el, i) => {
            return (
              <li key={i}>
                <Link href={el.path}>{el.title}</Link>
              </li>
            )
          })}
        </ul>
        <div className="relative">
          {isOpen && <CartItems item={cart} removeItem={removeItem} />}
          <button className="relative" onClick={() => setIsOpen(!isOpen)}>
            <div className="absolute w-4 h-4 rounded-full bg-red-700 text-white text-xs z-10 top-0 right-0">
              {cart.length > 0 ? cart.length : 0}
            </div>
            <ShoppingCartSimple
              className="relative fill-[#388d5e]"
              size={32}
              weight="fill"
            />
          </button>
        </div>
      </nav>
    </div>
  )
}
