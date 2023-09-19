import { useRef } from 'react'
import { ShoppingCartSimple, X } from '@phosphor-icons/react'
import { useCart } from '@/context/CartContext'

export default function Modal() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const openModal = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal()
      document.body.style.overflowY = 'hidden'
    }
  }
  const closeModal = () => {
    if (dialogRef.current) {
      dialogRef.current.close()
      document.body.style.overflowY = 'auto'
    }
  }

  const { cart, removeItem } = useCart()

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
          {cart.length > 0 ? cart.length : 0}
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

          <div className="max-h-full divide-y divide-zinc-200 overflow-y-auto overflow-x-hidden ">
            {cart.map((item: any, index: number) => {
              return (
                <div
                  className="flex items-center justify-start gap-2 py-2"
                  key={index}
                >
                  <h1 className="text-base font-bold text-red-800">
                    {item.produto}
                  </h1>
                  <p className="text-sm font-medium text-red-800">
                    R$ {item.preco.toFixed(2)}
                  </p>
                  {/* <p className="text-sm font-medium text-red-800">
              Quantidade: {item.quantidade}
            </p> */}
                  {/* <h2 className="text-sm font-medium text-red-800">
                    Total: R${(item.preco * item.quantidade).toFixed(2)}
                  </h2> */}
                  {item.selecionar && (
                    <select
                      className="h-5 text-center text-xs"
                      name="bebidas"
                      id="bebidas"
                    >
                      {item.selecionar.map(
                        ({ name, id }: { name: string; id: number }) => (
                          <option key={id} value={name}>
                            {name}
                          </option>
                        ),
                      )}
                    </select>
                  )}
                  <button
                    className="ml-auto w-20 rounded-md bg-none p-2 text-xs  text-red-800 "
                    onClick={() => removeItem(index)}
                  >
                    Remover
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </dialog>
    </>
  )
}
