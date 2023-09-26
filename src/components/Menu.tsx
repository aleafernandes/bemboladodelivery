'use client'
import Image from 'next/image'
import { orderMenu } from '@/types/Menu'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useMenu } from '@/context/MenuContext'

function errorImage(e: any) {
  e.target.src = '/assets/orange-error.png'
}

const abaMenu = [
  { title: 'Sanduíches', type: 'sanduiche' },
  { title: 'Bebidas', type: 'bebidas' },
  { title: 'Acompanhamentos', type: 'acompanhamento' },
  { title: 'Combos', type: 'combo' },
]

export default function Menu() {
  const { addItem } = useMenu()
  const currentPage = usePathname()
  const [filterType, setFilterType] = useState<string>('sanduiche')
  return (
    <section id="cardapio" className="w-full bg-[#FFF9C9] py-8">
      {currentPage !== '/pedidos' && (
        <h1 className="text-center text-xl font-extrabold uppercase tracking-[0.18em] text-red-800">
          Cardápio
        </h1>
      )}
      <p className="py-2 text-center text-xs italic">
        <span className="font-bold not-italic">Adicionais: </span>
        Queijo,Presunto,Carne,Ovo,Bacon,Cream Cheese,Molho Especial,Queijo
        Cheddar.
      </p>
      <div>
        <ul className="flex justify-center gap-y-2 py-5">
          {abaMenu.map((menu, i) => {
            return (
              <li
                className="cursor-pointer p-1.5 font-semibold  text-amber-600"
                onClick={() => setFilterType(menu.type)}
                key={i}
              >
                {menu.title}
              </li>
            )
          })}
        </ul>
      </div>
      <div className="grid grid-cols-3 place-items-center gap-y-2">
        {orderMenu
          .filter((menu) => !filterType || menu.type === filterType)
          .map((menu, index) => {
            return (
              <div
                className="flex h-80 w-80 flex-col items-center justify-center gap-2 p-1"
                key={index}
              >
                <div className="flex h-72 w-72 flex-col items-center justify-center gap-2">
                  <Image
                    onError={errorImage}
                    src={menu.image}
                    width={150}
                    height={150}
                    alt="produto"
                  />
                  <h3 className="text-lg font-medium text-red-800">
                    {menu.name}
                  </h3>
                  <div className="flex flex-wrap justify-center gap-1">
                    {menu.ingredients?.map((ingredient, index) => {
                      return (
                        <p className="text-center text-sm italic" key={index}>
                          {index < (menu.ingredients?.length ?? 0) - 1
                            ? ` ${ingredient.name},`
                            : ingredient.name}
                        </p>
                      )
                    })}
                  </div>
                </div>
                {currentPage === '/pedidos' && (
                  <button
                    onClick={() => addItem(menu)}
                    className="w-50  rounded-xl bg-[#388d5e]  p-3 text-xs font-medium text-white"
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
          <button className="rounded-2xl  bg-[#820000] p-3 font-medium text-white">
            <Link href="/pedidos">FAÇA SEU PEDIDO</Link>
          </button>
        </div>
      )}
    </section>
  )
}
