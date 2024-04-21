import { type ReactElement } from 'react'
import Image from 'next/image'
import Container from '../ds/Container'

const Footer = (): ReactElement => {
  const links = [
    { href: '/sobre-nos', text: 'Sobre nós' },
    { href: '/servicos', text: 'Nossos Serviços' },
    { href: '/portfolio', text: 'Portfólio' },
    { href: '/carreiras', text: 'Carreiras' },
    { href: '/contato', text: 'Contato' },
    { href: '/blog', text: 'Blog' },
    { href: '/clientes', text: 'Nossos Clientes' },
    { href: '/parceiros', text: 'Parceiros' },
    { href: '/imprensa', text: 'Imprensa' },
    { href: '/eventos', text: 'Eventos' },
    { href: '/projetos', text: 'Serviço Social' }
  ]

  return (
    <Container
      row={false}
      paddingX
      paddingY={false}
      className="bg-persian-blue-950 justify-start border-t-8 border-t-persian-blue-700"
    >
      <footer className="md:flex md:flex-row justify-between mx-0 md:mx-24 border-b-1 pt-14 pb-4 border-persian-blue-900 content">
        <div className="md:w-1/4 text-xs text-white-100 md:pr-6">
          <a className="" href="#!">
            <Image
              src="/assets/images/logo-bluemoonlabs.webp"
              alt="Logo"
              width="199"
              height="28"
            />
          </a>
          <p className="mt-2 text-persian-blue-100">Publicidade e Marketing Digital</p>
          <p className="hidden leading-5 mt-4 md:mt-5 text-left text-persian-blue-100">
            Somos uma consultoria de transformação digital que utiliza
            ferramentas e tecnologias modernas para implementar estratégias
            inovadoras e criativas
          </p>
        </div>
        <div className="md:w-2/4 mt-12 md:mt-0">
          <ul className="hidden flex-row w-full flex-wrap list-unstyled text-persian-blue-100 text-xs">
            {links.map((link) => (
              <li className="h-[25px]  w-1/2 md:w-1/3 my-1" key={link.href}>
                <a href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-3/2 pt-12 md:pt-0 pb-3">
          <ul className="flex flex-row justify-start md:justify-end gap-6">
            <li className="nav-item">
              <a className="nav-link link-dark" target="blank" href="https://www.instagram.com/bluemoon.labs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="#ecf3ff"
                  className="bi bi-youtube"
                  viewBox="0 0 48 48"
                >
                  <path d="M9 4C6.2504839 4 4 6.2504839 4 9L4 41C4 43.749516 6.2504839 46 9 46L25.832031 46A1.0001 1.0001 0 0 0 26.158203 46L31.832031 46A1.0001 1.0001 0 0 0 32.158203 46L41 46C43.749516 46 46 43.749516 46 41L46 9C46 6.2504839 43.749516 4 41 4L9 4zM9 6L41 6C42.668484 6 44 7.3315161 44 9L44 41C44 42.668484 42.668484 44 41 44L33 44L33 30L36.820312 30L38.220703 23L33 23L33 21C33 20.442508 33.05305 20.398929 33.240234 20.277344C33.427419 20.155758 34.005822 20 35 20L38 20L38 14.369141L37.429688 14.097656C37.429688 14.097656 35.132647 13 32 13C29.75 13 27.901588 13.896453 26.71875 15.375C25.535912 16.853547 25 18.833333 25 21L25 23L22 23L22 30L25 30L25 44L9 44C7.3315161 44 6 42.668484 6 41L6 9C6 7.3315161 7.3315161 6 9 6zM32 15C34.079062 15 35.38736 15.458455 36 15.701172L36 18L35 18C33.849178 18 32.926956 18.0952 32.150391 18.599609C31.373826 19.104024 31 20.061492 31 21L31 25L35.779297 25L35.179688 28L31 28L31 44L27 44L27 28L24 28L24 25L27 25L27 21C27 19.166667 27.464088 17.646453 28.28125 16.625C29.098412 15.603547 30.25 15 32 15z" />
                </svg>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-light" target="blank" href="https://www.instagram.com/bluemoon.labs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="#ecf3ff"
                  className="bi bi-youtube"
                  viewBox="0 0 48 48"
                >
                  <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <div className="flex flex-col pt-3 h-[84px] justify-start">
        <span className="text-[0.68rem] text-persian-blue-900 self-center mt-2">
          Blue Moon Labs  -  2024
        </span>
      </div>
    </Container>
  )
}

export default Footer
