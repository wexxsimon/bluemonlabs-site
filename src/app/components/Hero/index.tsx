import { type ReactElement } from 'react'
import Products from '../Products'
import Button from '../ds/Button'

const Hero = (): ReactElement => {
  return (
    <section
      className="bg-moon justify-between bg-[#101353] bg-no-repeat bg-left md:bg-top bg-cover w-full flex flex-col"
      style={{ animation: 'animatedBackground 40s linear infinite' }}
    >
      <div className="xl:h-[355px] md:ml-6 xl:mx-32 mt-40 md:mt-48 flex flex-col-reverse justify-center md:flex-row px-6">
        <div className="flex flex-col items-start md:h-[255px] md:w-1/2 mb-16 md:mb-0">
          <h2 className="text-white-100 leading-light text-2xl md:text-3xl font-acumin font-semibold">
            Transformação digital <br />
            <span className="font-acumin font-light">
              para pequenas e médias empresas
            </span>
          </h2>
          <p className="text-persian-blue-100 leading-relaxed text-left text-sm max-w-[438px] my-6">
            Equipe multidisciplinar e experiente com domínio de ferramentas e
            metodologias avançadas para desenvolver uma comunicação efetiva e
            sem custos adicionais
          </p>
          <Button
            dark={false}
            className="mt-6"
            width={'136px'}
            outline
            href={'/'}
          >
            Quero saber mais
          </Button>
        </div>
        <div className="bg-no-repeat hidden md:block bg-contain bg-top w-full md:w-[380px] h-[107px] md:h-[292px] bg-[url('/assets/images/bg-window-man.webp')] mt-24 md:mt-0"></div>
      </div>
      <Products />
    </section>
  )
}

export default Hero
