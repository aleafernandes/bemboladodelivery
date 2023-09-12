import '@/styles/globals.css'
import type { Metadata } from 'next'
import { poppins } from '@/styles/fonts'
import { ReactNode } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { CartProvider } from '@/context/CartContext'

export const metadata: Metadata = {
  title: 'Bem Bolado Burguer - Delivery',
  description: 'Hamburgueria Delivery - Uau Sensacional',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body
        className={`${poppins.className} w-screen min-h-screen overflow-x-hidden bg-[#FFE17B]`}
      >
        <CartProvider>
          <Nav />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
