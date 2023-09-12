export default function CartItems({
  item,
  removeItem,
}: {
  item: Array<object>
  removeItem: (id: number) => void
}) {
  return (
    <div className="absolute top-14  w-72  max-h-96 overflow-hidden overflow-y-auto divide-y divide-zinc-200 rounded-lg p-5 bg-white">
      {item.map((item: object, index: number) => {
        return (
          <div className="flex flex-col gap-2 py-2" key={index}>
            <h1 className="text-red-800 font-bold text-base">{item.produto}</h1>
            <p className="text-red-800 font-medium text-sm">
              R$ {item.preco.toFixed(2)}
            </p>
            <p className="text-red-800 font-medium text-sm">
              Quantidade: {item.quantidade}
            </p>
            <h2 className="text-red-800 font-medium text-sm">
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
              className="bg-red-800 rounded-md p-2 w-20  text-xs text-white"
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
