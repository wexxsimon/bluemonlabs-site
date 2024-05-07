"use client";
import React, { useEffect, useState, useRef } from 'react';
import Image from "next/image";
import UseScrollPosition from '../hooks/useScrollPosition';
import { motion, useScroll, useSpring } from 'framer-motion';

interface Servico {
  id: number;
  titulo: string;
  descricao: string;
  altText: string;
  image: string;
}

const Servicos: React.FC = () => {
  const [servicos, setServicos] = useState<Servico[]>([]);
  const [backgroundColor, setBackgroundColor] = useState('bg-persian-blue-700');
  const articleRefs = useRef<(HTMLElement | null)[]>([]);
  const scrollY = UseScrollPosition()
  const { scrollYProgress } = useScroll();
  const [scr, setScr] = useState<any>({});


  const servicosData = [
      {
        id: 1,
        titulo: "Estratégia de Marketing Digital",
        descricao: "Desenvolvemos uma estratégia de marketing digital personalizada para o seu negócio, levando em consideração seus objetivos, público-alvo e orçamento.",
        altText: "Ícone Estratégia",
        image: "sinal-4.png"
      },
      {
        id: 2,
        titulo: "Publicidade e Propaganda",
        descricao: "Criamos campanhas publicitárias eficazes que aumentam a visibilidade da sua marca, atraem novos clientes e impulsionam as vendas.",
        altText: "Ícone Publicidade",
        image: "sinal-4.png"
      },
      {
        id: 3,
        titulo: "SEO (Search Engine Optimization)",
        descricao: "Melhoramos a visibilidade do seu site nos motores de busca, aumentando o tráfego orgânico e atraindo visitantes qualificados.",
        altText: "Ícone SEO",
        image: "sinal-2.png"
      },
      {
        id: 4,
        titulo: "Gestão de Redes Sociais",
        descricao: "Gerenciamos suas redes sociais, criando conteúdo relevante e envolvente que promove o engajamento do público e fortalece a presença online da sua marca.",
        altText: "Ícone Redes Sociais",
        image: "sinal-4.png"
      },
      {
        id: 5,
        titulo: "Análise e Relatórios",
        descricao: "Fornecemos relatórios detalhados e análises de desempenho para ajudá-lo a entender o impacto das nossas estratégias de marketing digital no seu negócio.",
        altText: "Ícone Análise",
        image: "sinal-4.png"
      }
  ];

  useEffect(() => {
    setServicos(servicosData)
  }, [])

  const handleScroll = () => {
    const viewportHeight = window.visualViewport?.height || 0;
    const scrollPosition = window.scrollY;
    const totalScrollHeight = document.documentElement.scrollHeight - viewportHeight;
    const scrollPercentage = (scrollPosition / totalScrollHeight) * 100;

    // Defina os limites para cada parte da tela (em porcentagem)
    const part1Start = 0;
    const part1End = 16.67; // 1/6 da tela
    const part2Start = 16.67;
    const part2End = 33.33; // 2/6 da tela
    const part3Start = 33.33;
    const part3End = 50; // 3/6 da tela
    const part4Start = 50;
    const part4End = 66.67; // 4/6 da tela
    const part5Start = 66.67;
    const part5End = 83.33; // 5/6 da tela
    const part6Start = 83.33;
    const part6End = 100; // Toda a tela

    // Verifique em qual parte da tela estamos e atualize a cor de fundo
    if (scrollPercentage >= part1Start && scrollPercentage < part1End) {
      setBackgroundColor('bg-persian-blue-700'); // Substitua 'bg-color-1' pela classe de cor desejada
    } else if (scrollPercentage >= part2Start && scrollPercentage < part2End) {
      setBackgroundColor('bg-persian-blue-600');
    } else if (scrollPercentage >= part3Start && scrollPercentage < part3End) {
      setBackgroundColor('bg-sail-600');
    } else if (scrollPercentage >= part4Start && scrollPercentage < part4End) {
      setBackgroundColor('bg-sail-500');
    } else if (scrollPercentage >= part5Start && scrollPercentage < part5End) {
      setBackgroundColor('bg-gulf-blue-600');
    } else if (scrollPercentage >= part6Start && scrollPercentage <= part6End) {
      setBackgroundColor('bg-gulf-blue-500');
    }

    console.log('Estamos na parte ' + Math.ceil(scrollPercentage / (100 / 6)) + ' da tela.');
    console.log('Porcentagem de scroll:', scrollPercentage.toFixed(2) + '%');
  };

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    setScr(scaleX);
  }, [scrollYProgress]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  },[scrollY])

  return (
    <section className={`flex flex-col pb-48 ${backgroundColor}`}>
      <div className="flex flex-wrap mt-36">
      <div
          className="
              flex content-end justify-end
              md:w-[35%] md:h-[213px] xl:h-[288px] bg-sail-200 pt-12 md:pt-16 xl:pt-24 rounded-br-[71px]"
        >
          <motion.div className="progress-bar bg-black-100 w-100" style={{ scaleX: scr }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
          />
          <div
            className="fixed bg-no-repeat hidden md:block bg-contain
                    bg-top w-full md:w-[380px] h-[107px] md:h-[900px]
                    bg-[url('/assets/images/bg-space-window-3d.webp')] mt-24 md:mt-0 md:-mr-[23px]"
          ></div>
        </div>
        <div className="md:w-[65%] px-6 md:px-12 xl:px-24">
        <div className="w-full md:max-w-[437px] md:mb-6 md:mt-12 xl:mt-24">
            <h3 className="leading-tight text-white-100 text-2xl sm:max-w-[350px] md:max-w-[400px] md:text-3xl font-acumin font-semibold">
              Acompanhamos a trajetória dos seus negócios
            </h3>
            <p className="leading-relaxed text-left text-sm max-w-[494px] mt-5  text-persian-blue-200">
              Acreditamos que todas as empresas, independentemente do tamanho, merecem ter acesso ao melhor do marketing digital. Nossa equipe multidisciplinar e experiente está pronta para ajudar sua empresa a navegar pelo mundo digital.
            </p>
          </div>
          {servicos.map((servico, index) => (
            <article
              key={servico.id}
              ref={el => articleRefs.current[index] = el}
              data-id={servico.id}
              className="flex flex-col flex-wrap justify-start md:justify-between my-40 xl:mr-0 mb-0 md:ml-0"
            >
              <div className="flex flex-row mr-2 md:mr-5 xl:mr-0 md:items-end mt-8 md:mt-0 ">
                <Image
                  alt={servico.altText}
                  width={51}
                  height={51}
                  src={`/assets/images/icons/${servico.image}`}
                  unoptimized
                />
                <h4 className="mt-1 md:mt-0 md:ml-2 font-acumincondensed font-semibold text-white-100">
                  {servico.titulo}
                </h4>
              </div>
              <p className="text-sm mt-2 text-white-100 md:max-w-[494px] ">
                {servico.descricao}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicos;