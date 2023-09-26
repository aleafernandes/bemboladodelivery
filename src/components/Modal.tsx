import { useRef } from 'react'
import { ShoppingCartSimple, X } from '@phosphor-icons/react'
import { useMenu } from '@/context/MenuContext'
import Link from 'next/link'

export default function Modal() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const openModal = () => {
    dialogRef.current?.showModal()
    document.body.style.overflowY = 'hidden'
  }
  const closeModal = () => {
    dialogRef.current?.close()
    document.body.style.overflowY = 'auto'
  }

  const {
    menu,
    removeItem,
    increaseAdditionalItemQuantity,
    increaseIngredientQuantity,
    decreaseAdditionalItemQuantity,
    decreaseIngredientQuantity,
    calculateItemTotal,
    calculateTotal,
    setSelectedFlavor,
    setSelectedSize,
  } = useMenu()

  return (
    <>
      <div className="relative">
        <button onClick={openModal}>
          <ShoppingCartSimple
            className="relative fill-[#388d5e]"
            size={32}
            weight="fill"
          />
        </button>
        <div className="absolute right-0 top-0 z-10 grid h-4 w-4 place-items-center rounded-full bg-red-700 text-xs text-white">
          {menu.length > 0 ? menu.length : 0}
        </div>
      </div>
      {/* DIALOG */}
      <dialog
        className="relative h-3/4 w-1/2 overflow-hidden rounded p-4"
        ref={dialogRef}
      >
        <div className="flex h-full flex-col">
          <div className="flex justify-between">
            Pedidos
            <button className="float-right" onClick={closeModal}>
              <X size={22} color="black" weight="bold" />
            </button>
          </div>

          <div className="max-h-full flex-1 divide-y  divide-zinc-200 overflow-y-auto overflow-x-hidden ">
            {menu.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="container space-y-4 py-4 font-mono"
                >
                  <div className="flex items-center justify-between">
                    <p>
                      {item.name} - R${calculateItemTotal(item).toFixed(2)}
                    </p>
                    <button onClick={() => removeItem(itemIndex)}>
                      Remover
                    </button>
                  </div>
                  <div className="space-x-4">
                    {item.flavor && (
                      <select
                        onChange={(e) =>
                          setSelectedFlavor(itemIndex, e.target.value)
                        }
                        className="rounded bg-none p-2"
                      >
                        <option selected hidden>
                          Selecione Sabor
                        </option>
                        {item.flavor?.map((flavor) => {
                          return (
                            <option key={flavor?.name} value={flavor?.name}>
                              {flavor?.name}
                            </option>
                          )
                        })}
                      </select>
                    )}
                    {item.size && (
                      <select
                        onChange={(e) =>
                          setSelectedSize(itemIndex, e.target.value)
                        }
                        className="rounded bg-none p-2"
                      >
                        <option selected hidden>
                          Selecione o Tamanho
                        </option>
                        {item.size?.map((size) => {
                          return (
                            <option key={size} value={size}>
                              {size}
                            </option>
                          )
                        })}
                      </select>
                    )}
                  </div>
                  {item.ingredients && (
                    <div className="relative">
                      <input
                        type="checkbox"
                        id={`${itemIndex}-ing`}
                        className="peer sr-only"
                      />
                      <label
                        htmlFor={`${itemIndex}-ing`}
                        className="text-blue-600"
                      >
                        Ingredientes
                      </label>
                      <div className="hidden space-y-2 peer-checked:block">
                        {item.ingredients?.map((ing, ingredientIndex) => {
                          return (
                            <div
                              key={ingredientIndex}
                              className="flex items-center justify-between"
                            >
                              {ing.name}
                              <div className="flex items-center divide-x overflow-hidden rounded border py-1">
                                <button
                                  onClick={() =>
                                    decreaseIngredientQuantity(
                                      itemIndex,
                                      ingredientIndex,
                                    )
                                  }
                                  className="px-2 text-blue-600 disabled:text-gray-400"
                                >
                                  -
                                </button>
                                <span className="px-2 text-center">
                                  {ing.quantity}
                                </span>
                                <button
                                  onClick={() =>
                                    increaseIngredientQuantity(
                                      itemIndex,
                                      ingredientIndex,
                                    )
                                  }
                                  className="px-2 text-blue-600 disabled:text-gray-400"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )}
                  {item.additionalItems && (
                    <div className="relative">
                      <input
                        type="checkbox"
                        id={`${itemIndex}-add`}
                        className="peer sr-only"
                      />
                      <label
                        htmlFor={`${itemIndex}-add`}
                        className="text-blue-600"
                      >
                        Adicionais
                      </label>
                      <div className="hidden space-y-2 peer-checked:block">
                        {item.additionalItems?.map((add, additionalIndex) => {
                          return (
                            <div
                              key={additionalIndex}
                              className="flex items-center justify-between"
                            >
                              {add.name}
                              <div className="flex items-center divide-x overflow-hidden rounded border py-1">
                                <button
                                  onClick={() =>
                                    decreaseAdditionalItemQuantity(
                                      itemIndex,
                                      additionalIndex,
                                    )
                                  }
                                  className="px-2 text-blue-600 disabled:text-gray-400"
                                >
                                  -
                                </button>
                                <span className="px-2 text-center">
                                  {add.quantity}
                                </span>
                                <button
                                  onClick={() =>
                                    increaseAdditionalItemQuantity(
                                      itemIndex,
                                      additionalIndex,
                                    )
                                  }
                                  className="px-2 text-blue-600 disabled:text-gray-400"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
          <footer className="flex justify-between">
            <Link href="/checkout">Finalizar Pedido</Link>
            Total R$ {calculateTotal().toFixed(2)}
          </footer>
        </div>
      </dialog>
    </>
  )
}
