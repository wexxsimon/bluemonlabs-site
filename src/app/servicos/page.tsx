"use client";
import React, { useEffect, useState, useRef } from 'react';
import Image from "next/image";
import UseScrollPosition from '../hooks/useScrollPosition';
import { motion } from 'framer-motion';
import { servicesData } from '../data/services';

interface services {
  id: number;
  titulo: string;
  descricao: string;
  altText: string;
  image: string;
  alternativeTitle: string;
}

const services: React.FC = () => {
  const [services, setServices] = useState<services[]>([]);
  const [backgroundColor, setBackgroundColor] = useState('bg-persian-blue-700');
  const articleRefs = useRef<(HTMLElement | null)[]>([]);
  const scrollY = UseScrollPosition()
  const sectionRef = useRef<HTMLDivElement>(null);
  const [centerIndex, setcenterIndex] = useState<number | null>(null);



  useEffect(() => {
    setServices(servicesData);
  }, [])

  useEffect(() => {
    const adjustViewportHeight = () => {
      if (sectionRef.current) {
        const sectionHeight = sectionRef.current.offsetHeight;
        document.documentElement.style.setProperty('--vh', `${sectionHeight * 0.01 - 500}px`);
      }
    };
    adjustViewportHeight();
    window.addEventListener('resize', adjustViewportHeight);
    return () => window.removeEventListener('resize', adjustViewportHeight);
  }, []);

  function verificarIconeAcima(elemento: HTMLElement, indice: number) {
    const rect = elemento.getBoundingClientRect();
    const alturaTela = window.innerHeight || document.documentElement.clientHeight;

    const iconeAcima = rect.top < alturaTela / 2;

    if (iconeAcima) {
      setcenterIndex(indice);
    } else {
      if (centerIndex === indice) {
        setcenterIndex(null);
      }
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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

    if (scrollPercentage >= part1Start && scrollPercentage < part1End) {
      setBackgroundColor('bg-persian-blue-700');
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
  };

  useEffect(() => {
    const handleScroll = () => {
      articleRefs.current.forEach((article, index) => {
        if (article) {
          verificarIconeAcima(article, index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  },[scrollY])

  return (
    <section ref={sectionRef} className={`flex flex-col pb-48 ${backgroundColor}`}>
      <div className="flex flex-wrap mt-36">
        <motion.div
          transition={{ duration: 1, ease: 'easeIn' }}
          className={`
              flex content-end justify-end
              md:w-[35%] md:h-[1600px] bg-sail-200 pt-12 md:pt-16 xl:pt-24 rounded-br-[250px] rounded-tr-[250px]`}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ x: 1000 }}
            transition={{ type: 'spring', stiffness:120, duration: .1, ease: 'easeIn', delay: .9 }}
            className="sticky top-36 bg-no-repeat hidden md:block bg-contain
                    bg-top w-full md:w-[380px] h-[107px] md:h-[215px]
                    bg-[url('/assets/images/bg-space-window-3d.webp')] mt-24 md:mt-0 md:-mr-[63px]"
          ></motion.div>
        </motion.div>
        <div className="md:w-[65%] px-6 md:px-12 xl:px-24">
        <div className="w-full md:max-w-[437px] md:mb-6 md:mt-12 xl:mt-24">
            <h3 className="leading-tight text-white-100 text-2xl sm:max-w-[350px] md:max-w-[400px] md:text-3xl font-acumin font-semibold">
              Acompanhamos a trajetória dos seus negócios
            </h3>
            <p className="leading-relaxed text-left text-sm max-w-[494px] mt-5  text-persian-blue-200">
              Acreditamos que todas as empresas, independentemente do tamanho, merecem ter acesso ao melhor do marketing digital. Nossa equipe multidisciplinar e experiente está pronta para ajudar sua empresa a navegar pelo mundo digital.
            </p>
          </div>
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              ref={el => articleRefs.current[index] = el}
              data-id={service.id}
              className="flex flex-column flex-wrap justify-start xl:mr-0 mb-0 md:ml-0 my-24 h-[180px]"
            >
              <div className='w-14 block'>
                {centerIndex === index && (
                  <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ x: 1000 }}
                  transition={{ type: 'spring', stiffness:120, duration: .1, ease: 'easeIn', delay: 0 }}
                  >
                      <Image
                        alt={service.altText}
                        width={51}
                        height={51}
                        src={`/assets/images/icons/${service.image}`}
                        unoptimized
                      />
                  </motion.div>
                )}
              </div>
              <div className="flex flex-col ml-4 mr-2 md:mr-5 xl:mr-0 mt-8 md:mt-0 ">
                { centerIndex === index ? (
                  <motion.h4
                  initial={{ rotateX: 90, opacity: 0}}
                  animate={{ rotateX: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: .3 }}
                    className="w-auto mt-1 md:mt-0 text-2xl font-acumincondensed font-semibold text-white-100">
                    {service.alternativeTitle}
                    </motion.h4>
                    ) : (
                    <h4
                    className="mt-1 md:mt-0 text-2xl font-acumincondensed font-semibold text-white-100">
                    {service.titulo}
                    </h4>
                )}
                <p className="text-sm mt-2 text-white-100 md:max-w-[494px] ">
                  {service.descricao}
                </p>
                <div className="flex flex-row justify-evenly mt-4 md:mt-0">
                <div className='w-14 mt-6 block'>
                  {centerIndex === index && (
                    <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ x: 1000 }}
                    transition={{ type: 'spring', stiffness:120, duration: .1, ease: 'easeIn', delay: .4 }}
                    >
                        <Image
                          alt={service.altText}
                          width={51}
                          height={51}
                          src={`/assets/images/icons/${service.image}`}
                          unoptimized
                        />
                    </motion.div>
                  )}
                </div>
                <div className='w-14 mt-6 block'>
                  {centerIndex === index && (
                    <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ x: 1000 }}
                    transition={{ type: 'spring', stiffness:120, duration: .1, ease: 'easeIn', delay: .45 }}
                    >
                        <Image
                          alt={service.altText}
                          width={51}
                          height={51}
                          src={`/assets/images/icons/${service.image}`}
                          unoptimized
                        />
                    </motion.div>
                  )}
                </div>
                <div className='w-14 mt-6 block'>
                  {centerIndex === index && (
                    <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ x: 1000 }}
                    transition={{ type: 'spring', stiffness:120, duration: .1, ease: 'easeIn', delay: .50 }}
                    >
                        <Image
                          alt={service.altText}
                          width={51}
                          height={51}
                          src={`/assets/images/icons/${service.image}`}
                          unoptimized
                        />
                    </motion.div>
                  )}
                </div>
                <div className='w-14 mt-6 block'>
                  {centerIndex === index && (
                    <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ x: 1000 }}
                    transition={{ type: 'spring', stiffness:120, duration: .1, ease: 'easeIn', delay: .55 }}
                    >
                        <Image
                          alt={service.altText}
                          width={51}
                          height={51}
                          src={`/assets/images/icons/${service.image}`}
                          unoptimized
                        />
                    </motion.div>
                  )}
                </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default services;