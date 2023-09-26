'use client'

import React, { ReactNode, createContext, useCallback, useContext } from 'react'

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
  selectedFlavor?: string
  selectedSize?: string
  ingredients?: DefaultProps[]
  image: string
  additionalItems?: DefaultProps[]
}

interface MenuContextProps {
  menu: MenuItem[]
  setMenu: React.Dispatch<React.SetStateAction<MenuItem[]>>
  addItem: (item: MenuItem) => void
  removeItem: (index: number) => void
  increaseIngredientQuantity: (
    itemIndex: number,
    ingredientIndex: number,
  ) => void
  decreaseIngredientQuantity: (
    itemIndex: number,
    ingredientIndex: number,
  ) => void
  increaseAdditionalItemQuantity: (
    itemIndex: number,
    additionalItemIndex: number,
  ) => void
  decreaseAdditionalItemQuantity: (
    itemIndex: number,
    additionalItemIndex: number,
  ) => void
  calculateTotal: () => number
  calculateItemTotal: (item: MenuItem) => number
  setSelectedFlavor: (itemIndex: number, flavor: string) => void
  setSelectedSize: (itemIndex: number, size: string) => void
  formatOrderText: () => string
}

const MenuContext = createContext<MenuContextProps | undefined>(undefined)

export const useMenu = (): MenuContextProps => {
  const context = useContext(MenuContext)
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider')
  }
  return context
}

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [menu, setMenu] = React.useState<MenuItem[]>([])

  const addItem = useCallback((item: MenuItem) => {
    setMenu((prevMenu) => [...prevMenu, item])
  }, [])

  const removeItem = useCallback((index: number) => {
    setMenu((prevMenu) => prevMenu.filter((_, i) => i !== index))
  }, [])

  const increaseIngredientQuantity = useCallback(
    (itemIndex: number, ingredientIndex: number) => {
      setMenu((prevMenu) =>
        prevMenu.map((item, i) =>
          i === itemIndex && item.ingredients
            ? {
                ...item,
                ingredients: item.ingredients.map((ingredient, j) =>
                  j === ingredientIndex
                    ? { ...ingredient, quantity: ingredient.quantity + 1 }
                    : ingredient,
                ),
              }
            : item,
        ),
      )
    },
    [],
  )

  const increaseAdditionalItemQuantity = useCallback(
    (itemIndex: number, additionalItemIndex: number) => {
      setMenu((prevMenu) =>
        prevMenu.map((item, i) =>
          i === itemIndex && item.additionalItems
            ? {
                ...item,
                additionalItems: item.additionalItems.map(
                  (additionalItem, j) =>
                    j === additionalItemIndex
                      ? {
                          ...additionalItem,
                          quantity: additionalItem.quantity + 1,
                        }
                      : additionalItem,
                ),
              }
            : item,
        ),
      )
    },
    [],
  )

  const decreaseIngredientQuantity = useCallback(
    (itemIndex: number, ingredientIndex: number) => {
      setMenu((prevMenu) =>
        prevMenu.map((item, i) =>
          i === itemIndex && item.ingredients
            ? {
                ...item,
                ingredients: item.ingredients.map((ingredient, j) =>
                  j === ingredientIndex
                    ? {
                        ...ingredient,
                        quantity: Math.max(0, ingredient.quantity - 1),
                      }
                    : ingredient,
                ),
              }
            : item,
        ),
      )
    },
    [],
  )

  const decreaseAdditionalItemQuantity = useCallback(
    (itemIndex: number, additionalItemIndex: number) => {
      setMenu((prevMenu) =>
        prevMenu.map((item, i) =>
          i === itemIndex && item.additionalItems
            ? {
                ...item,
                additionalItems: item.additionalItems.map(
                  (additionalItem, j) =>
                    j === additionalItemIndex
                      ? {
                          ...additionalItem,
                          quantity: Math.max(0, additionalItem.quantity - 1),
                        }
                      : additionalItem,
                ),
              }
            : item,
        ),
      )
    },
    [],
  )

  const calculateTotal = useCallback(() => {
    return menu.reduce((acc, item) => acc + calculateItemTotal(item), 0)
  }, [menu])

  const calculateItemTotal = useCallback((item: MenuItem) => {
    let total = item.price

    // Calculando o preço total dos additionalItems
    if (item.additionalItems) {
      total += item.additionalItems.reduce(
        (acc, additional) => acc + additional.price * additional.quantity,
        0,
      )
    }

    // Calculando o preço total dos ingredients
    if (item.ingredients) {
      total += item.ingredients.reduce(
        (acc, ingredient) => acc + ingredient.price * ingredient.quantity,
        0,
      )
    }

    return total
  }, [])

  const setSelectedFlavor = useCallback((itemIndex: number, flavor: string) => {
    setMenu((prevMenu) =>
      prevMenu.map((item, i) =>
        i === itemIndex ? { ...item, selectedFlavor: flavor } : item,
      ),
    )
  }, [])

  const setSelectedSize = useCallback((itemIndex: number, size: string) => {
    setMenu((prevMenu) =>
      prevMenu.map((item, i) =>
        i === itemIndex ? { ...item, selectedSize: size } : item,
      ),
    )
  }, [])

  const formatOrderText = useCallback(() => {
    return (
      menu
        .map((item, index) => {
          let orderText = `Nome: ${item.name}\n`

          if (item.selectedSize) {
            orderText += `Tamanho: ${item.selectedSize}\n`
          }

          if (item.selectedFlavor) {
            orderText += `Sabor: ${item.selectedFlavor}\n`
          }

          if (item.ingredients && item.ingredients.length > 0) {
            orderText += `Ingredientes:\n`
            orderText +=
              item.ingredients
                .map(
                  (ingredient) =>
                    `  - ${ingredient.name} x${ingredient.quantity} (R$ ${(
                      ingredient.price * ingredient.quantity
                    ).toFixed(2)})`,
                )
                .join('\n') + '\n'
          }

          if (item.additionalItems && item.additionalItems.length > 0) {
            const additionalItemsText = item.additionalItems
              .filter((additional) => additional.quantity > 0)
              .map(
                (additional) =>
                  `  - ${additional.name} x${additional.quantity} (R$ ${(
                    additional.price * additional.quantity
                  ).toFixed(2)})`,
              )
              .join('\n')

            if (additionalItemsText) {
              orderText += `Itens Adicionais:\n${additionalItemsText}\n`
            }
          }

          orderText += `Preço do Item: R$ ${calculateItemTotal(item).toFixed(
            2,
          )}\n`

          return orderText
        })
        .join('\n') + `\nPreço Total: R$ ${calculateTotal().toFixed(2)}`
    )
  }, [menu, calculateItemTotal, calculateTotal])

  const data = {
    menu,
    setMenu,
    addItem,
    removeItem,
    increaseIngredientQuantity,
    increaseAdditionalItemQuantity,
    decreaseIngredientQuantity,
    decreaseAdditionalItemQuantity,
    calculateTotal,
    calculateItemTotal,
    setSelectedFlavor,
    setSelectedSize,
    formatOrderText,
  }

  return <MenuContext.Provider value={data}>{children}</MenuContext.Provider>
}
