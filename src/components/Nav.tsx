'use client'

import Image from 'next/image'
import Link from 'next/link'

import Modal from './Modal'
import { useState } from 'react'

const abas = [
  { path: '/', title: 'Início' },
  { path: '/#cardapio', title: 'Cardápio' },
  { path: '/pedidos', title: 'Pedido' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const buttonHandler = () => setOpen((current: any) => !current)

  return (
    <div className="container flex items-center justify-around">
      <Image
        className="z-20 mx-auto py-4 md:mx-0"
        src="/assets/logo-horizontal.svg"
        width={200}
        height={200}
        alt="logo bem bolado"
      />
      <button
        aria-label="navbutton"
        onClick={buttonHandler}
        className="z-20 block md:hidden"
      >
        <Image
          draggable={false}
          src={`/assets/${open ? 'close-menu' : 'hamburger-menu'}.svg`}
          width={24}
          height={24}
          alt=""
        />
      </button>
      <nav className="flex flex-col items-center gap-2 font-semibold md:flex-row">
        <ul
          className={`absolute left-0 top-0 md:static ${
            open ? 'h-screen bg-[#F1A050] text-white' : 'h-0'
          } flex w-full flex-col items-center justify-center gap-4 overflow-hidden transition-all duration-500 md:h-auto md:flex-row md:items-start md:justify-end md:gap-4`}
        >
          {abas.map((el, i) => {
            return (
              <li key={i}>
                <Link href={el.path}>{el.title}</Link>
              </li>
            )
          })}
          <Modal />
        </ul>
      </nav>
    </div>
  )
}
