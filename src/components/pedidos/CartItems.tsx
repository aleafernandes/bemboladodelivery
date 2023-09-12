export default function CartItems({
  item,
  removeItem,
}: {
  item: Array<object>
  removeItem: (id: number) => void
}) {
  return (
    <div className="absolute top-14  max-h-96  w-72 divide-y divide-zinc-200 overflow-hidden overflow-y-auto rounded-lg bg-white p-5">
      {item.map((item: any, index: number) => {
        return (
          <div className="flex flex-col gap-2 py-2" key={index}>
            <h1 className="text-base font-bold text-red-800">{item.produto}</h1>
            <p className="text-sm font-medium text-red-800">
              R$ {item.preco.toFixed(2)}
            </p>
            <p className="text-sm font-medium text-red-800">
              Quantidade: {item.quantidade}
            </p>
            <h2 className="text-sm font-medium text-red-800">
              Total: R${(item.preco * item.quantidade).toFixed(2)}
            </h2>
            {item.selecionar && (
              <select name="bebidas" id="bebidas">
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
              className="w-20 rounded-md bg-red-800 p-2  text-xs text-white"
              onClick={() => removeItem(index)}
            >
              Remover
            </button>
          </div>
        )
      })}
    </div>
  )
}
