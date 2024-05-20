import { type ReactElement } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './components/Footer'
import ScrollToTopButton from './components/ScrollToTopButton'
import Navbar from './components/Navbar'


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
      <meta name="google-site-verification" content="d_WTemhflUJi7nZZGSpysaYOIvumP2m7RNwHHJbSchc" />
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  )
}
