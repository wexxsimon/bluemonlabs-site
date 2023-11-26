import { type ReactElement } from 'react'
import Banner from './components/Banner'
import Hero from './components/Hero'
import Method from './components/Method'
import Packs from './components/Packs'
import Partners from './components/Partners'

export default function Home(): ReactElement {
  return (
    <main>
      <Hero />
      <Method />
      <Banner />
      <Partners />
      <Packs />
      <Banner />
    </main>
  )
}
