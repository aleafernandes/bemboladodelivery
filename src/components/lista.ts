interface MenuItem {
  imagem: string
  produto: string
  descricao: string
  preco: number
  tipo: string
  selecionar?: Array<object>
  adicionaLeite?: boolean
  quantidade: number
  id: number
}

export const listaMenu: MenuItem[] = [
  {
    imagem: '/assets/misto-quente.png',
    produto: 'Misto Quente',
    descricao: 'Pão de forma, Queijo e Presunto. ',
    preco: 1.0,
    tipo: 'sanduiche',
    quantidade: 1,
    id: 1,
  },
  {
    imagem: '/assets/x-salada.png',
    produto: 'X-Salada',
    descricao: 'Pão Bola, Carne, Alface, Tomate, Queijo e Presunto. ',
    preco: 1.0,
    tipo: 'sanduiche',
    quantidade: 1,
    id: 2,
  },
  {
    imagem: '/assets/x-burguer.png',
    produto: 'X-Burguer',
    descricao: 'Pão Bola, Carne, e Queijo. ',
    preco: 1.0,
    tipo: 'sanduiche',
    quantidade: 1,
    id: 3,
  },
  {
    imagem: '/assets/x-bacon.png',
    produto: 'X-Bacon',
    descricao: 'Pão Bola, Carne, Bacon, Queijo, Presunto, Alface e Tomate. ',
    preco: 1.0,
    tipo: 'sanduiche',
    quantidade: 1,
    id: 4,
  },
  {
    imagem: '/assets/x-egg.png',
    produto: 'X-Egg',
    descricao: 'Pão Bola, Carne, Ovo, Queijo, Presunto, Alface e Tomate. ',
    preco: 1.0,
    tipo: 'sanduiche',
    quantidade: 1,
    id: 5,
  },
  {
    imagem: '/assets/x-calabresa.png',
    produto: 'X-Calabresa',
    descricao:
      'Pão Bola, Carne, Calabresa, Queijo, Presunto, Alface e Tomate. ',
    preco: 1.0,
    tipo: 'sanduiche',
    quantidade: 1,
    id: 6,
  },
  {
    imagem: '/assets/x-frango.png',
    produto: 'X-Frango',
    descricao: 'Pão Bola, Frango, Queijo, Presunto, Alface, Tomate.. ',
    preco: 1.0,
    tipo: 'sanduiche',
    quantidade: 1,
    id: 7,
  },
  {
    imagem: '/assets/x-tudo.png',
    produto: 'X-Tudo',
    descricao:
      'Pão bola, Carne,Frango, Bacon,Ovo, Calabresa, Queijo, Presunto, Alface e Tomate. ',
    preco: 1.0,
    tipo: 'sanduiche',
    quantidade: 1,
    id: 8,
  },
  {
    imagem: '/assets/moda-bem-bolado.png',
    produto: 'A Moda Bem Bolado',
    descricao:
      'Pão bola, Carne Temperada, Cebola Caramelizada, Queijo Cheddar, Molho Especial, Alface e Tomate. ',
    preco: 1.0,
    tipo: 'sanduiche',
    quantidade: 1,
    id: 9,
  },
  {
    imagem: '/assets/suco-laranja.png',
    produto: 'Suco Natural',
    descricao: 'Suco em Garrafa de 300ml ou 1L',
    preco: 1.0,
    tipo: 'bebidas',
    selecionar: [
      { name: 'Laranja', id: 1 },
      { name: 'Acerola', id: 2 },
      { name: 'Cajá', id: 3 },
      { name: 'Manga', id: 4 },
      { name: 'Cajú', id: 5 },
      { name: 'Goiaba', id: 6 },
      { name: 'Abacaxi', id: 7 },
      { name: 'Graviola', id: 8 },
    ],
    adicionaLeite: false,
    quantidade: 1,
    id: 10,
  },
  {
    imagem: '/assets/refrigerantes.png',
    produto: 'Refrigerantes',
    descricao: 'Refrigerante em lata, 500ml ou 1L',
    preco: 1.0,
    tipo: 'bebidas',
    selecionar: [
      { name: 'Coca Cola', id: 1 },
      { name: 'Coca Cola Zero', id: 2 },
      { name: 'Guaraná', id: 3 },
      { name: 'Fanta Laranja', id: 4 },
      { name: 'Fanta Uva', id: 5 },
      { name: 'Sprite', id: 6 },
      { name: 'Pepsi', id: 7 },
    ],
    quantidade: 1,
    id: 11,
  },
  {
    imagem: '/assets/batata-frita.png',
    produto: 'Batata Frita',
    descricao: 'Batata frita tradicional',
    preco: 1.0,
    tipo: 'acompanhamento',
    quantidade: 1,
    id: 12,
  },
  {
    imagem: '/assets/batata-canoa.png',
    produto: 'Batata Frita Canoa',
    descricao: 'Batata frita artesanal com corte especial',
    preco: 1.0,
    tipo: 'acompanhamento',
    quantidade: 1,
    id: 13,
  },
  {
    imagem: '',
    produto: 'Combo Bem Bolado 1',
    descricao: 'X-Salada; Batata; Suco ou Refrigerante.',
    preco: 1.0,
    tipo: 'combo',
    quantidade: 1,
    id: 14,
  },
]
