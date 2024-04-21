import { type ReactElement } from 'react'
import Image from 'next/image'

export default function Method (): ReactElement {
  return (
    <section
      className="
        flex flex-col"
    >
      <div className="flex flex-wrap">
        <div
          className="
              flex content-end justify-end
              md:w-[35%] md:h-[213px] xl:h-[288px] bg-sail-200 pt-12 md:pt-16 xl:pt-24 rounded-br-[71px]"
        >
          <div
            className=" bg-no-repeat hidden md:block bg-contain
                    bg-top w-full md:w-[380px] h-[107px] md:h-[292px]
                    bg-[url('/assets/images/bg-space-window-3d.webp')] mt-24 md:mt-0 md:-mr-[23px]"
          ></div>
        </div>
        <div className="md:w-[65%] px-6 md:px-12 xl:px-24">
          <div className="w-full md:max-w-[437px] md:mb-6 md:mt-12 xl:mt-24">
            <h3 className=" text-persian-blue-950 leading-tight text-2xl sm:max-w-[350px] md:max-w-[400px] md:text-3xl font-acumin font-semibold">
              Acompanhamos a trajetória dos seus negócios
            </h3>
            <p className="text-persian-blue-950 leading-relaxed text-left text-sm max-w-[494px] mt-5">
              Oferecendo soluções eficazes para superar desafios de comunicação e marketing digital e alcançar resultados positivos.
            </p>
          </div>
          <div className="md:mt-16">
            <ul
              className="flex content-center flex-row flex-wrap justify-start
                 md:justify-between uppercase px-4 xl:mr-0 mb-0 md:ml-0 md:max-w-[600px] xl:max-w-[700px]"
            >
              <li
                className="w-[150px] flex flex-row
                    mr-2 md:mr-5 md:mb-5 xl:mr-0 md:items-center mt-8 md:mt-0"
              >
                <Image
                  src="/assets/images/icons/icon-trip-60x61.webp"
                  className="mr-3 md:mr-1"
                  alt=""
                  width={40}
                  height={40}
                />
                <p
                  className="mt-1 md:mt-0 md:ml-2 font-acumincondensed font-semibold
                        text-xs leading-relaxed text-persian-blue-950"
                >
                  Jornada
                  <br className="" />
                  <span>do Cliente</span>
                </p>
              </li>
              <li className="w-[150px] flex flex-row mr-2 md:mr-5 md:mb-5 xl:mr-0 md:items-center mt-8 md:mt-0">
                <Image
                  src="/assets/images/icons/icon-pack-60x61.webp"
                  className="mr-3 md:mr-1"
                  alt=""
                  width={40}
                  height={40}
                />
                <p
                  className="mt-1 md:mt-0 md:ml-2 font-acumincondensed font-semibold
                        text-xs leading-relaxed text-persian-blue-950"
                >
                  Pacotes
                  <br />
                  <span>Personalizados</span>
                </p>
              </li>
              <li
                className="w-[150px]
                      flex flex-row mr-2 md:mr-5 md:mb-5 xl:mr-0 md:items-center mt-8 md:mt-0"
              >
                <Image
                  src="/assets/images/icons/icon-otimization-60x61.webp"
                  className="mr-3 md:mr-1"
                  alt=""
                  width={40}
                  height={40}
                />
                <p
                  className="mt-1 md:mt-0 md:ml-2 font-acumincondensed font-semibold
                      text-xs leading-relaxed text-persian-blue-950"
                >
                  Análises
                  <br />
                  <span>e Otimizações</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
