'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCartSimple } from '@phosphor-icons/react'

const abas = [
  { path: '/', title: 'Início' },
  { path: '/#cardapio', title: 'Cardápio' },
  { path: '/pedidos', title: 'Pedido' },
]

export default function Nav() {
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
          <ShoppingCartSimple size={32} weight="fill" />
        </div>
      </nav>
    </div>
  )
}