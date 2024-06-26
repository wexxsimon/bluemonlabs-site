import { type ReactElement } from 'react'
import Button from '../ds/Button'

const Banner = (): ReactElement => {
  return (
    <section className="">
      <div className="flex flex-col items-start md:flex-row max-w-[1180px] bg-sail-200 mx-6 md:mx-auto mt-12 md:mt-24 mb-12 md:mb-32 px-6 py-12 md:py-12 md:px-16">
        <div className="md:w-[65%]">
          <h4
            className="leading-light text-1xl md:text-2xl
                text-persian-blue-950 font-acumin font-semibold"
          >
            Conheça os nossos serviços
          </h4>
          <p className="text-persian-blue-950 leading-relaxed text-left text-sm max-w-[450px] mt-2">
            Visite a nossa página de serviços e descubra como potencializar seu
            negócio com mais detalhes sobre cada serviço, os benefícios, os
            resultados esperados e os casos de sucesso.
          </p>
        </div>
        <div className="md:w-[35%] flex items-center justify-center mt-6 md:mt-0">
          <Button dark width={'290px'} outline href={'/servicos'}>Faça parte dessa transformação</Button>
        </div>
      </div>
    </section>
  )
}

export default Banner
