import { type ReactElement } from 'react'
import Image from 'next/image'

const Products = (): ReactElement => {
  return (
    <div
      className="flex flex-col md:flex-row xl:flex-wrap md:h-[160px]
    md:pl-0 xl:pl-20 bg-persian-blue-800 overflow-hidden"
    >
      <div className="md:w-[60%] px-4 md:px-2 xl:px-6 self-center">
        <ul
          className="flex content-center flex-row flex-wrap justify-around
        md:justify-around xl:justify-between md:items-center text-persian-blue-100
        uppercase md:gap-0 xl:mr-10 mb-8 md:mb-0 md:ml-0 xl:ml-12"
        >
          <li className="w-[160px] md:w-[96px] flex md:flex-col mt-8 md:mt-0">
            <Image
              src="/assets/images/icons/icon-idea.svg"
              className="mr-1 md:mx-0"
              alt=""
              width={40}
              height={40}
            />
            <p
              className="mt-1 md:mt-3 font-acumincondensed-300
              text-xs leading-relaxed"
            >
              Criação <br className="" />
              <span className="text-persian-blue-300">de Conteúdo</span>
            </p>
          </li>
          <li className="w-[150px] bg-persian-blue-800 md:w-[96px] flex md:flex-col mt-8 md:mt-0">
            <Image
              src="/assets/images/icons/icon-grafic.webp"
              className="mr-1 md:mx-0"
              alt=""
              width={40}
              height={40}
            />
            <p
              className="mt-1 md:mt-3 font-acumincondensed-300
              text-xs leading-relaxed"
            >
              Design
              <br />
              <span className="text-persian-blue-300">Gráfico</span>
            </p>
          </li>
          <li
            className="w-[150px] bg-persian-blue-800  md:w-[96px]
            flex md:flex-col mt-8 md:mt-0"
          >
            <Image
              src="/assets/images/icons/icon-alienflag.svg"
              className="mr-1 md:mx-0"
              alt=""
              width={40}
              height={40}
            />
            <p
              className="mt-1 md:mt-3 font-acumincondensed-300
            text-xs leading-relaxed"
            >
              Publicidade <br />
              <span className="text-persian-blue-300">e Propaganda</span>
            </p>
          </li>
          <li className="w-[150px] bg-persian-blue-800 md:w-[96px] flex md:flex-col mt-8 md:mt-0">
            <Image
              src="/assets/images/icons/icon-start.svg"
              className="mr-1 md:mx-0"
              alt=""
              width={40}
              height={40}
            />
            <p
              className="mt-1 md:mt-3 font-acumincondensed-300
              text-xs leading-relaxed"
            >
              Marketing <br className="" />
              <span className="text-persian-blue-300">Digital</span>
            </p>
          </li>
        </ul>
      </div>
      <div
        className="
        flex content-center
        md:w-[40%] bg-persian-blue-950
        px-6 md:px-10 py-10 md:py-4"
      >
        <ul
          className="
          flex content-center md:flex-row
          flex-wrap md:justify-start w-full
          list-none gap-12 md:gap-5 md:ml-14 md:mt-1"
        >
          <li className="md:w-[150px] flex">
            <p
              className="mt-3 font-acumincondensed-300
              text-xs text-persian-blue-100 uppercase
              leading-relaxed"
            >
              Design
              <br />
              <span className="text-persian-blue-300">para Web</span>
            </p>
          </li>
          <li className="md:w-[150px] flex">
            <p
              className="mt-3 font-acumincondensed-300 text-xs
             text-persian-blue-100 uppercase leading-relaxed"
            >
              Desenvolvimento <br />
              <span className="text-persian-blue-300">Web</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Products
