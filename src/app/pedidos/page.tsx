'use client'

import Menu from '@/components/Menu'

export default function Pedidos() {
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
      <Menu />
    </>
  )
}
