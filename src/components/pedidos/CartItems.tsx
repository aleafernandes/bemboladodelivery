export default function CartItems({
  item,
  removeItem,
}: {
  item: any
  removeItem: (id: number) => void
}) {
  return (
    <div>
      <h1>{item.produto}</h1>
      <p>R$ {item.preco.toFixed(2)}</p>
      <p>Quantidade: {item.quantidade}</p>
      <h2>Total: R${(item.preco * item.quantidade).toFixed(2)}</h2>
      {item.selecionar && (
        <select name="bebidas" id="bebidas">
          {item.selecionar.map((sabor: string) => (
            <option key={sabor.id} value={sabor.name}>
              {sabor.name}
            </option>
          ))}
        </select>
      )}
      <button
        className="bg-[#f03c3c] rounded-md p-1 text-white "
        onClick={() => removeItem(item.id)}
      >
        Remover
      </button>
    </div>
  )
}