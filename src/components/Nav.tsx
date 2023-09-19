'use client'

import Image from 'next/image'
import Link from 'next/link'

import Modal from './Modal'

const abas = [
  { path: '/', title: 'Início' },
  { path: '/#cardapio', title: 'Cardápio' },
  { path: '/pedidos', title: 'Pedido' },
]

export default function Nav() {
  return (
    <div className="container flex items-center justify-around">
      <Image
        src="/assets/logo-horizontal.svg"
        width={200}
        height={200}
        alt="logo bem bolado"
      />
      <nav className="flex items-center gap-2 font-semibold">
        <ul className="flex gap-5">
          {abas.map((el, i) => {
            return (
              <li key={i}>
                <Link href={el.path}>{el.title}</Link>
              </li>
            )
          })}
        </ul>
        <Modal />
      </nav>
    </div>
  )
}
