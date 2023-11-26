import { type ReactElement } from 'react'
import Link from 'next/link'
import Products from '../Products'

const Hero = (): ReactElement => {
  return (
    <section
      className="bg-moon justify-between bg-[#101353] bg-no-repeat bg-top bg-cover w-full flex flex-col"
      style={{ animation: 'animatedBackground 40s linear infinite' }}
    >
      <div className="md:max-w-[1140px] xl:max-w-[1440] xl:h-[355px] mx-auto mt-40 md:mt-48 flex flex-col-reverse md:flex-row px-6 md:px-10">
        <div className="w-full md:w-2/3 mb-16">
          <h2 className="text-white-100 leading-light text-2xl md:text-3xl font-acumin font-semibold">
            Transformação digital <br />
            <span className="text-white-100 font-acumin font-light">
              para pequenas e médias empresas
            </span>
          </h2>
          <p className="text-sail-200 leading-relaxed text-left text-sm max-w-[438px] mt-5">
            Equipe multidisciplinar e experiente com domínio de ferramentas e
            metodologias avançadas para desenvolver uma comunicação efetiva e
            sem custos adicionais
          </p>
          <Link
            href="/"
            className="block bg-transparent font-acumin font-light text-sm text-white-100 border-white-100 border-2 rounded-full max-w-[168px] text-center py-1.5 px-3 mt-8"
          >
            Quero saber mais
          </Link>
        </div>
        <div className="bg-no-repeat hidden md:block bg-contain bg-top w-full md:w-[380px] h-[107px] md:h-[292px] bg-[url('/assets/images/bg-window-man.webp')] mt-24 md:mt-0"></div>
      </div>
      <Products />
    </section>
  )
}

export default Hero
