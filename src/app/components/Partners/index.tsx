import { type ReactElement } from 'react'
import Container from '../ds/Container'
import Button from '../ds/Button'

const Partners = (): ReactElement => {
  return (
    <Container
      row
      paddingX={false}
      paddingY={false}
      className="h-[430px] md:h-[650px] bg-persian-blue-950"
    >
      <div className="md:w-[35%] px-2 xl:px-16 self-center">
        <div className="w-full md:max-w-[437px] mb-6 md:mt-12 px-6 xl:mt-24">
          <h3 className=" text-white-100 leading-tight uppercase text-2xl max-w-[250px] md:max-w-[311px] md:text-3xl font-acumin font-semibold">
            Navegando Juntos
          </h3>
          <p className="text-white-100 leading-relaxed text-left text-sm max-w-[494px] mt-5">
            Nós valorizamos a confiança, a transparência e a colaboração que
            temos com os nossos clientes e parceiros. Buscamos sempre superar
            desafios, entregar ótimos resultados para construir relacionamentos
            duradouros.
          </p>
          <Button border={false} width={'168px'} href="/">
            Quero saber mais
          </Button>
        </div>
      </div>
      <div
        className="md:w-[65%]
        invisible md:visible flex content-center md:relative
        bg-pink-blue-linear-gradient
        px-8 py-10 md:py-4 bg-no-repeat bg-cover
        bg-[url('/assets/images/bg-client-3d.webp')]"
      ></div>
    </Container>
  )
}

export default Partners
