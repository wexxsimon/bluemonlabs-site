import { type ReactElement } from 'react'
import Card from '../ds/Card'
import Container from '../ds/Container'

const Packs = (): ReactElement => {
  const array = [
    {
      title: 'Impulso Inicial',
      sub: 'Este pacote pode ser o ponto de partida, oferecendo os serviços básicos necessários para começar a jornada de marketing',
      iconImage: 'icon-ignite-60x61.webp',
      color: 'bg-sail-200',
      list: [
        'Criação e desenvolvimento de estratégia de marketing',
        'Identificação e análise do seu público-alvo',
        'Configuração e gerenciamento de perfis de mídia social'
      ]
    },
    {
      title: 'Órbita Estável',
      sub: 'Para o próximo nível, oferecemos uma gama mais ampla de serviços para manter e melhorar a presença online da marca',
      iconImage: 'icon-orbit-60x61.webp',
      color: 'bg-persian-blue-800',
      list: [
        'Publicidade paga nas principais redes sociais',
        'Marketing de conteúdo, incluindo blogs e artigos',
        'Email marketing',
        'Análise e relatórios de desempenho de marketing'
      ]
    },
    {
      title: 'Estrela Guia',
      sub: 'Este pacote premium pode incluir todos os serviços dos pacotes “Impulso Inicial” e “Órbita Estável”, além de:',
      iconImage: 'icon-star-01-60x61.webp',
      color: 'bg-persian-blue-950',
      list: [
        'Consultoria de marca',
        'Gestão de reputação online',
        'Análise avançada de ROI',
        'Ajustes estratégicos e otimização'
      ]
    }
  ]

  return (
    <Container
      row={false}
      paddingX={true}
      paddingY={true}
      className=" bg-white-100"
    >
      <div className="flex flex-col items-center">
        <h4 className="text-persian-blue-950 leading-light text-left md:text-center text-2xl md:text-1xl font-acumin font-semibold">
          Prepare-se para a decolagem
        </h4>
        <p className="text-black-500 leading-relaxed text-left md:text-center text-sm max-w-[515px] mt-5">
          Nossos pacotes de serviços foram cuidadosamente projetados para
          atender às suas necessidades de marketing em cada etapa da sua
          jornada.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:gap-6 mt-12 justify-center">
        {array.map((item, index) => (
          <Card
            title={item.title}
            sub={item.sub}
            iconImage={item.iconImage}
            color={item.color}
            list={item.list}
            key={item.list[index]}
            id={item.list[index]}
          />
        ))}
      </div>
    </Container>
  )
}

export default Packs
