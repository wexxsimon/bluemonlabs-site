"use client";
import React, { useEffect, useState, useRef } from 'react';
import Image from "next/image";
import UseScrollPosition from '../hooks/useScrollPosition';
import { AnimatePresence, motion } from 'framer-motion';
import { servicesData } from '../data/services';
import IgniteBg from '../components/ds/IgniteBg';

interface services {
  id: number;
  titulo: string;
  descricao: string;
  beneficios: string;
  altText: string;
  image: string;
  alternativeTitle: string;
}

const Services = () => {
  const [services, setServices] = useState<services[]>([]);
  const [backgroundImage, setBackgroundImage] = useState('bg-people-01.png');
  const [backgroundColor, setBackgroundColor] = useState('bg-gulf-blue-950');
  const [backgroundColorSVG, setBackgroundColorSVG] = useState('#0e0f52');
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

    const createScrollSetting = (start: number, end: number, color: string, image: string, svgColor: string) => ({ start, end, color, image, svgColor });


    const scrollSettings = [
      createScrollSetting(0, 9, 'bg-gulf-blue-950', 'bg-people-01.png', '#0e0f52'),
      createScrollSetting(9, 28, 'bg-color-selector-ads', 'bg-people-02.png', '#14146b'),
      createScrollSetting(28, 48, 'bg-color-selector-social-media', 'bg-people-06.png', '#2529c6'),
      createScrollSetting(48, 67, 'bg-color-selector-seo', 'bg-people-03.png', '#191e96'),
      createScrollSetting(67, 86, 'bg-color-selector-social-media', 'bg-people-05.png', '#2529c6'),
      createScrollSetting(86, 100, 'bg-color-selector-data-cience', 'bg-people-04.png', '#39adf7'),
    ];
    scrollSettings.forEach(setting => {
      if (scrollPercentage >= setting.start && scrollPercentage < setting.end) {
        console.log('porcentagem', scrollPercentage)
        setBackgroundColor(setting.color);
        setBackgroundImage(setting.image);
        setBackgroundColorSVG(setting.svgColor)
      }
    });
  };

  useEffect(() => {
    const verificarIconeAcima = (elemento: HTMLElement, indice: number): void => {
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
    };

    const handleScroll = () => {
      articleRefs.current.forEach((article, index) => {
        if (article) {
          verificarIconeAcima(article, index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll,);
  }, [centerIndex]);

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
              md:w-[35%] md:h-auto bg-sail-200 pt-12 md:pt-16 xl:pt-24 rounded-br-[250px] rounded-tr-[250px]`}
        >
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 1 }}
  className={`sticky top-36 bg-no-repeat hidden md:block bg-cover bg-top w-full md:w-[282px] h-[107px] md:h-[282px] bg-[url('/assets/images/${backgroundImage}')] mt-24 md:mt-0 rounded-full`}
>
  {services.map((service, index) => (
    <motion.div
      key={service.id}
      ref={el => {
        articleRefs.current[index] = el;
      }}
      data-id={service.id}
      className={`${centerIndex === index ? 'flex' : 'hidden' } relative w-[282px] h-[282px] flex justify-center items-center`}
    >
        {centerIndex === index && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ type: 'spring', stiffness: 120, duration: 0.1, ease: 'easeIn', delay: .2 }}
            className={`absolute bg-white-semi p-5 rounded-full w-[250px] h-[250px] flex justify-center items-center`}
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
    </motion.div>
  ))}


  <IgniteBg style={'relative md:h-[351px] right-[47px] md-w-[351px] top-[-1436px]'} color={backgroundColorSVG} size={351} />

          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ x: 1000 }}
            transition={{ type: 'spring', stiffness:120, duration: .1, ease: 'easeIn', delay: .9 }}
            className={`top-36 bg-no-repeat invisible absolute md:block bg-cover
            bg-top w-full md:w-[384px] h-[107px] md:h-[289px]
            bg-[url('/assets/images/bg-client-3d-crop.webp')] mt-24 md:mt-0 md:-mr-[63px]
            `}
          >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ x: 1000 }}
            transition={{ type: 'spring', stiffness:120, duration: .1, ease: 'easeIn', delay: .9 }}
            className={`top-36 bg-no-repeat invisible absolute md:block bg-cover
            bg-top w-full md:w-[384px] h-[107px] md:h-[289px]
            bg-[url('/assets/images/bg-people-01.png')] mt-24 md:mt-0 md:-mr-[63px]
            `}
          ></motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ x: 1000 }}
            transition={{ type: 'spring', stiffness:120, duration: .1, ease: 'easeIn', delay: .9 }}
            className={`top-36 bg-no-repeat invisible absolute md:block bg-cover
            bg-top w-full md:w-[384px] h-[107px] md:h-[289px]
            bg-[url('/assets/images/bg-people-02.png')] mt-24 md:mt-0 md:-mr-[63px]
            `}
          ></motion.div>
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ x: 1000 }}
            transition={{ type: 'spring', stiffness:120, duration: .1, ease: 'easeIn', delay: .9 }}
            className={`top-36 bg-no-repeat invisible absolute md:block bg-cover
            bg-top w-full md:w-[384px] h-[107px] md:h-[289px]
            bg-[url('/assets/images/bg-people-03.png')] mt-24 md:mt-0 md:-mr-[63px]
            `}
          ></motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ x: 1000 }}
            transition={{ type: 'spring', stiffness:120, duration: .1, ease: 'easeIn', delay: .9 }}
            className={`top-36 bg-no-repeat invisible absolute md:block bg-cover
            bg-top w-full md:w-[384px] h-[107px] md:h-[289px]
            bg-[url('/assets/images/bg-people-04.png')] mt-24 md:mt-0 md:-mr-[63px]
            `}
          ></motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ x: 1000 }}
            transition={{ type: 'spring', stiffness:120, duration: .1, ease: 'easeIn', delay: .9 }}
            className={`top-36 bg-no-repeat invisible absolute md:block bg-cover
            bg-top w-full md:w-[384px] h-[107px] md:h-[289px]
            bg-[url('/assets/images/bg-people-05.png')] mt-24 md:mt-0 md:-mr-[63px]
            `}
          ></motion.div>
                    <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ x: 1000 }}
            transition={{ type: 'spring', stiffness:120, duration: .1, ease: 'easeIn', delay: .9 }}
            className={`top-36 bg-no-repeat invisible absolute md:block bg-cover
            bg-top w-full md:w-[384px] h-[107px] md:h-[289px]
            bg-[url('/assets/images/bg-people-06.png')] mt-24 md:mt-0 md:-mr-[63px]
            `}
          ></motion.div>
          </motion.div>
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
                ref={el => {
                  articleRefs.current[index] = el;
              }}
                data-id={service.id}
                className="flex flex-column flex-wrap justify-start xl:mr-0 mb-0 md:ml-0 my-28 py-12 h-[70vh] gap-5"
                >
                  <div className='w-20 block'>
                  <AnimatePresence>
                    {centerIndex === index && (
                      <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          transition={{ type: 'spring', stiffness: 120, duration: .1, ease: 'easeIn', delay: 0 }}
                          className='bg-sail-200 p-5 rounded-full'
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
                </AnimatePresence>
              </div>
              <div className="flex flex-col ml-4 mr-2 md:mr-5 xl:mr-0 mt-8 md:mt-0 ">
                {centerIndex === index ? (
                  <motion.h4
                    initial={{ opacity: .5 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: .3, ease: 'easeInOut' }}
                    className="mt-1 md:mt-0 text-2xl font-acumincondensed font-semibold text-white-100 max-w-[420px]">
                    {service.titulo}
                  </motion.h4>) : (
                  <motion.h4
                    initial={{ opacity: 1 }}
                    animate={{ opacity: .5 }}
                    transition={{ duration: 1, delay: .3, ease: 'easeInOut' }}
                    className="mt-1 md:mt-0 text-2xl font-acumincondensed font-semibold text-white-100 max-w-[420px]">
                    {service.titulo}
                  </motion.h4>
                )}
                {centerIndex === index ? (
                  <motion.p
                    initial={{ opacity: .5 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: .3, ease: 'easeInOut' }}
                    className="leading-relaxed text-sm mt-5 text-sail-200 md:max-w-[494px] ">
                    {service.descricao}
                  </motion.p>
                ) : (
                  <motion.p
                      transition={{ duration: 1, delay: .3, ease: 'easeInOut' }}
                      initial={{ opacity: .5 }} // Começa de cima para baixo
                      animate={{ opacity:.5 }} // Termina na posição original
                    className="leading-relaxed text-sm mt-5 text-sail-200 md:max-w-[494px] ">
                    {service.descricao}
                  </motion.p>
                )}
                <AnimatePresence>
                  {centerIndex === index && (
                    <motion.p
                      initial={{ rotateX: 90, y: -25, opacity: 0 }} // Começa de cima para baixo
                      animate={{ rotateX: 0, y: 0, opacity: 1 }} // Termina na posição original
                      exit={{ rotateX: 90, y: -25, opacity: 0 }}
                      transition={{ duration: 1, delay: 0.1, ease: 'easeInOut' }}
                      className="leading-relaxed text-sm mt-2 text-sail-200 md:max-w-[494px]"
                      >
                        {service.beneficios}
                    </motion.p>
                  )}
              </AnimatePresence>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;