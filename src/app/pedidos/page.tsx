'use client'

import Menu from '@/components/Menu'

export default function Pedidos() {
  return (
    <>
      <div>
        <h1 className="text-center text-xl font-extrabold uppercase tracking-[0.18em] text-red-800">
          Pedido
        </h1>
        <p className="py-2 text-center text-xs italic">
          Após finalizar seu pedido, o mesmo será enviado via{' '}
          <span className="font-bold text-green-600">Whatsapp</span> para a
          loja.
        </p>
      </div>
      <Menu />
    </>
  )
}
