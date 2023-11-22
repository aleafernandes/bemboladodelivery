import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import { MenuProvider } from '@/context/MenuContext'
import { fontDefault } from '@/styles/fonts'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Bem Bolado Burguer - Delivery',
  description: 'Hamburgueria Delivery - Uau Sensacional',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body
        className={`${fontDefault.className} min-h-screen w-screen overflow-x-hidden bg-gradient-to-br from-[#FFC149] to-[#F4B266] text-white before:pointer-events-none before:fixed before:inset-0 before:bg-[url(/assets/pattern.png)] before:bg-repeat before:opacity-5 before:[background-size:_250px]`}
      >
        <MenuProvider>
          <Nav />
          {children}
          <Footer />
        </MenuProvider>
      </body>
    </html>
  )
}
