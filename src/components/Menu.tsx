'use client'
import { useMenu } from '@/context/MenuContext'
import { orderMenu } from '@/types/Menu'
import { CaretUpDown, PlusCircle } from '@phosphor-icons/react'
import Image from 'next/image'
import { useState } from 'react'

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
  const [filterType, setFilterType] = useState<string>('sanduiche')

  return (
    <div
      id="cardapio"
      className="flex w-full flex-col items-center justify-center gap-11 bg-gradient-to-br from-[#18181B] to-[#27272A] py-10"
    >
      <div className="flex flex-col items-center justify-center gap-6">
        <span className="text-center text-[2rem] uppercase">Cardápio</span>
        <span className="text-center leading-normal">
          Adicionais: Queijo, Presunto, Carne, Ovo, Bacon, Cream Cheese, Molho
          Especial, Queijo Cheddar.
        </span>
      </div>
      <div className="flex h-24 items-center justify-end self-stretch px-28 py-2">
        <div className="flex items-center gap-2 rounded-lg bg-white px-4 py-2">
          <span className="text-lg uppercase text-black">Categoria</span>
          <CaretUpDown size={24} fill="black" weight="fill" />
        </div>
      </div>
      <div className="flex w-full flex-wrap content-start items-start gap-x-[8.625rem] gap-y-[4.3125rem] md:px-28">
        {orderMenu
          .filter((menu) => !filterType || menu.type === filterType)
          .map((menu, index) => {
            return (
              <div
                key={index}
                className="flex h-96 w-80 shrink-0 flex-col items-center gap-3 rounded-lg bg-white p-4 text-black"
              >
                <div className="flex items-start justify-end self-stretch">
                  <PlusCircle
                    onClick={() => addItem(menu)}
                    className="cursor-pointer transition-colors duration-300 hover:fill-[#32b346]"
                    size={32}
                    fill="#3DD655"
                    weight="fill"
                  />
                </div>
                <Image
                  onError={errorImage}
                  src={menu.image}
                  width={200}
                  height={200}
                  alt="produto"
                />
                <div className="flex flex-col items-center justify-center gap-3 self-stretch p-3">
                  <span className="uppercase">{menu.name}</span>
                  <div className="flex flex-wrap items-center justify-center gap-0.5">
                    {menu.ingredients?.map((ingredient, index) => {
                      return (
                        <span
                          className="text-center text-xs uppercase opacity-50"
                          key={index}
                        >
                          {index < (menu.ingredients?.length ?? 0) - 1
                            ? ` ${ingredient.name},`
                            : ingredient.name}
                        </span>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}
