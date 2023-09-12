'use client'
import Image from 'next/image'
import { listaMenu } from './lista'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'

function errorImage(e: any) {
  e.target.src = '/assets/orange-error.png'
}

const abaMenu = [
  { title: 'Sanduíches', tipo: 'sanduiche' },
  { title: 'Bebidas', tipo: 'bebidas' },
  { title: 'Acompanhamentos', tipo: 'acompanhamento' },
  { title: 'Combos', tipo: 'combo' },
]

export default function Menu() {
  const { addItem } = useCart()
  const currentPage = usePathname()
  const [filterType, setFilterType] = useState<string>('sanduiche')
  return (
    <section id="cardapio" className="bg-[#FFF9C9] py-8 w-full">
      <h1 className="text-center font-extrabold text-xl tracking-[0.18em] uppercase text-red-800">
        Cardápio
      </h1>
      <p className="py-2 italic text-xs text-center">
        <span className="not-italic font-bold">Adicionais: </span>
        Queijo,Presunto,Carne,Ovo,Bacon,Cream Cheese,Molho Especial,Queijo
        Cheddar.
      </p>
      <div>
        <ul className="flex gap-y-2 justify-center py-5">
          {abaMenu.map((menu, i) => {
            return (
              <li
                className="text-amber-600 cursor-pointer font-semibold  p-1.5"
                onClick={() => setFilterType(menu.tipo)}
                key={i}
              >
                {menu.title}
              </li>
            )
          })}
        </ul>
      </div>
      <div className="grid grid-cols-3 place-items-center gap-y-2">
        {listaMenu
          .filter((menu) => !filterType || menu.tipo === filterType)
          .map((menu, index) => {
            return (
              <div
                className="w-80 h-80 p-1 flex flex-col items-center justify-center gap-2"
                key={index}
              >
                <div className="flex flex-col items-center justify-center gap-2 w-72 h-72">
                  <Image
                    onError={errorImage}
                    src={menu.imagem}
                    width={150}
                    height={150}
                    alt="produto"
                  />
                  <h3 className="text-red-800 font-medium text-lg">
                    {menu.produto}
                  </h3>
                  <p className="text-center italic text-sm">{menu.descricao}</p>
                </div>
                {currentPage === '/pedidos' && (
                  <button
                    onClick={() => addItem(menu)}
                    className="p-3  bg-[#388d5e] rounded-xl  text-white font-medium w-50 text-xs"
                  >
                    Adicionar ao Carrinho
                  </button>
                )}
              </div>
            )
          })}
      </div>
      {currentPage !== '/pedidos' && (
        <div className="flex justify-center gap-y-6 py-5">
          <button className="p-3  bg-[#820000] rounded-2xl text-white font-medium">
            <Link href="/pedidos">FAÇA SEU PEDIDO</Link>
          </button>
        </div>
      )}
    </section>
  )
}
