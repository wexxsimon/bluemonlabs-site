import { type ReactElement } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Menu from './components/Menu'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blue Moon Labs',
  description: 'Tranformação digital para pequenas e médias empresas.'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}): ReactElement {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Menu />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
