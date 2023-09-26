interface DefaultProps {
  name: string
  price: number
  quantity: number
}

interface MenuItem {
  name: string
  price: number
  type: string
  flavor?: DefaultProps[]
  size?: string[]
  ingredients?: DefaultProps[]
  image: string
  additionalItems?: DefaultProps[]
}

const defaultAdditionalItems: DefaultProps[] = [
  { name: 'Queijo', price: 1.0, quantity: 0 },
  { name: 'Presunto', price: 1.5, quantity: 0 },
  { name: 'Carne', price: 2.0, quantity: 0 },
  { name: 'Ovo', price: 1.0, quantity: 0 },
  { name: 'Bacon', price: 2.0, quantity: 0 },
  { name: 'Cream Cheese', price: 1.5, quantity: 0 },
  { name: 'Molho Especial', price: 0.5, quantity: 0 },
  { name: 'Queijo Cheddar', price: 1.5, quantity: 0 },
]

export const orderMenu: MenuItem[] = [
  {
    name: 'Misto Quente',
    price: 1.99,
    type: 'sanduiche',
    ingredients: [
      { name: 'Pão de forma', price: 1.99, quantity: 1 },
      { name: 'Queijo', price: 1.99, quantity: 1 },
      { name: 'Presunto', price: 1.99, quantity: 1 },
    ],
    image: '/assets/misto-quente.png',
    additionalItems: [...defaultAdditionalItems],
  },
  {
    name: 'X-Salada',
    price: 1.99,
    type: 'sanduiche',
    ingredients: [
      { name: 'Pão Bola', price: 1.99, quantity: 1 },
      { name: 'Carne', price: 1.99, quantity: 1 },
      { name: 'Alface', price: 1.99, quantity: 1 },
      { name: 'Tomate', price: 1.99, quantity: 1 },
      { name: 'Queijo', price: 1.99, quantity: 1 },
      { name: 'Presunto', price: 1.99, quantity: 1 },
    ],
    image: '/assets/x-salada.png',
    additionalItems: [...defaultAdditionalItems],
  },
  {
    name: 'X-Burguer',
    price: 1.99,
    type: 'sanduiche',
    ingredients: [
      { name: 'Pão Bola', price: 1.99, quantity: 1 },
      { name: 'Carne', price: 1.99, quantity: 1 },
      { name: 'Queijo', price: 1.99, quantity: 1 },
    ],
    image: '/assets/x-burguer.png',
    additionalItems: [...defaultAdditionalItems],
  },
  {
    name: 'X-Bacon',
    price: 1.99,
    type: 'sanduiche',
    ingredients: [
      { name: 'Pão Bola', price: 1.99, quantity: 1 },
      { name: 'Carne', price: 1.99, quantity: 1 },
      { name: 'Bacon', price: 1.99, quantity: 1 },
      { name: 'Queijo', price: 1.99, quantity: 1 },
      { name: 'Presunto', price: 1.99, quantity: 1 },
      { name: 'Alface', price: 1.99, quantity: 1 },
      { name: 'Tomate', price: 1.99, quantity: 1 },
    ],
    image: '/assets/x-bacon.png',
    additionalItems: [...defaultAdditionalItems],
  },
  {
    name: 'X-Egg',
    price: 1.99,
    type: 'sanduiche',
    ingredients: [
      { name: 'Pão Bola', price: 1.99, quantity: 1 },
      { name: 'Carne', price: 1.99, quantity: 1 },
      { name: 'Ovo', price: 1.99, quantity: 1 },
      { name: 'Queijo', price: 1.99, quantity: 1 },
      { name: 'Presunto', price: 1.99, quantity: 1 },
      { name: 'Alface', price: 1.99, quantity: 1 },
      { name: 'Tomate', price: 1.99, quantity: 1 },
    ],
    image: '/assets/x-egg.png',
    additionalItems: [...defaultAdditionalItems],
  },
  {
    name: 'X-Calabresa',
    price: 1.99,
    type: 'sanduiche',
    ingredients: [
      { name: 'Pão Bola', price: 1.99, quantity: 1 },
      { name: 'Carne', price: 1.99, quantity: 1 },
      { name: 'Queijo', price: 1.99, quantity: 1 },
      { name: 'Presunto', price: 1.99, quantity: 1 },
      { name: 'Alface', price: 1.99, quantity: 1 },
      { name: 'Tomate', price: 1.99, quantity: 1 },
    ],
    image: '/assets/x-calabresa.png',
    additionalItems: [...defaultAdditionalItems],
  },
  {
    name: 'X-Frango',
    price: 1.99,
    type: 'sanduiche',
    ingredients: [
      { name: 'Pão Bola', price: 1.99, quantity: 1 },
      { name: 'Frango', price: 1.99, quantity: 1 },
      { name: 'Queijo', price: 1.99, quantity: 1 },
      { name: 'Presunto', price: 1.99, quantity: 1 },
      { name: 'Alface', price: 1.99, quantity: 1 },
      { name: 'Tomate', price: 1.99, quantity: 1 },
    ],
    image: '/assets/x-frango.png',
    additionalItems: [...defaultAdditionalItems],
  },
  {
    name: 'X-Tudo',
    price: 1.99,
    type: 'sanduiche',
    ingredients: [
      { name: 'Pão Bola', price: 1.99, quantity: 1 },
      { name: 'Carne', price: 1.99, quantity: 1 },
      { name: 'Frango', price: 1.99, quantity: 1 },
      { name: 'Bacon', price: 1.99, quantity: 1 },
      { name: 'Ovo', price: 1.99, quantity: 1 },
      { name: 'Calabresa', price: 1.99, quantity: 1 },
      { name: 'Queijo', price: 1.99, quantity: 1 },
      { name: 'Presunto', price: 1.99, quantity: 1 },
      { name: 'Alface', price: 1.99, quantity: 1 },
      { name: 'Tomate', price: 1.99, quantity: 1 },
    ],
    image: '/assets/x-tudo.png',
    additionalItems: [...defaultAdditionalItems],
  },
  {
    name: 'A Moda Bem Bolado',
    price: 1.99,
    type: 'sanduiche',
    ingredients: [
      { name: 'Pão Bola', price: 1.99, quantity: 1 },
      { name: 'Carne Temperada', price: 1.99, quantity: 1 },
      { name: 'Cebola Caramelizada', price: 1.99, quantity: 1 },
      { name: 'Queijo Cheddar', price: 1.99, quantity: 1 },
      { name: 'Molho Especial', price: 1.99, quantity: 1 },
      { name: 'Alface', price: 1.99, quantity: 1 },
      { name: 'Tomate', price: 1.99, quantity: 1 },
    ],
    image: '/assets/moda-bem-bolado.png',
    additionalItems: [...defaultAdditionalItems],
  },
  {
    name: 'Suco Natural',
    price: 1.99,
    type: 'bebidas',
    flavor: [
      { name: 'Laranja', price: 1.99, quantity: 0 },
      { name: 'Acerola', price: 1.99, quantity: 0 },
      { name: 'Cajá', price: 1.99, quantity: 0 },
      { name: 'Manga', price: 1.99, quantity: 0 },
      { name: 'Cajú', price: 1.99, quantity: 0 },
      { name: 'Goiaba', price: 1.99, quantity: 0 },
      { name: 'Abacaxi', price: 1.99, quantity: 0 },
      { name: 'Graviola', price: 1.99, quantity: 0 },
    ],
    size: ['300ml', '1L'],
    additionalItems: [{ name: 'Leite', price: 1.99, quantity: 0 }],
    image: '/assets/suco-laranja.png',
  },
  {
    name: 'Refrigerantes',
    price: 1.99,
    type: 'bebidas',
    flavor: [
      { name: 'Coca Cola', price: 1.99, quantity: 1 },
      { name: 'Coca Cola Zero', price: 1.99, quantity: 0 },
      { name: 'Guaraná', price: 1.99, quantity: 0 },
      { name: 'Fanta Laranja', price: 1.99, quantity: 0 },
      { name: 'Fanta Uva', price: 1.99, quantity: 0 },
      { name: 'Sprite', price: 1.99, quantity: 0 },
      { name: 'Pepsi', price: 1.99, quantity: 0 },
    ],
    size: ['500ml', '1L'],
    image: '/assets/refrigerantes.png',
  },
  {
    name: 'Batata Frita',
    price: 1.99,
    type: 'acompanhamento',
    size: ['P - 100g', 'M - 150g', 'G - 200g'],
    image: '/assets/batata-frita.png',
  },
  {
    name: 'Batata Frita Canoa',
    price: 1.99,
    type: 'acompanhamento',
    size: ['P - 100g', 'M - 150g', 'G - 200g'],
    image: '/assets/batata-canoa.png',
  },
  {
    name: 'Combo Bem Bolado',
    price: 1.99,
    type: 'combo',
    ingredients: [
      { name: 'Pão Bola', price: 1.99, quantity: 1 },
      { name: 'Carne Temperada', price: 1.99, quantity: 1 },
      { name: 'Cebola Caramelizada', price: 1.99, quantity: 1 },
      { name: 'Queijo Cheddar', price: 1.99, quantity: 1 },
      { name: 'Molho Especial', price: 1.99, quantity: 1 },
      { name: 'Alface', price: 1.99, quantity: 1 },
      { name: 'Tomate', price: 1.99, quantity: 1 },
    ],
    image: '',
    additionalItems: [...defaultAdditionalItems],
  },
]
