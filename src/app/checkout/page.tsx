'use client'

import { useMenu } from '@/context/MenuContext'

export default function Checkout() {
  const { formatOrderText } = useMenu()
  return <div>{formatOrderText()}</div>
}
