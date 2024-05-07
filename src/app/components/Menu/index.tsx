import { type ReactElement } from 'react'
import Image from 'next/image'

export default function Menu(): ReactElement {

  return (
    <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm py-0 dark:bg-gray-800 absolute px-6 md:px-12 xl:px-36">
      <nav
        className="md:flex max-w-[85rem] w-full h-[78px] md:h-[104px] mx-auto border-b-1 border-persian-blue-900"
        aria-label="Global"
      >
        <div className="relative w-full h-[78px] md:h-[86px] mt-5 md:mt-0 md:flex md:items-center md:justify-between md:self-center">
          <div className="flex items-center justify-between">
            <a
              className="flex-none text-xl font-semibold dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="/"
              aria-label="Logo BlueMoonLabs"
            >
              <Image
                width={130}
                height={18}
                alt=""
                src="/assets/images/logo-bluemoonlabs.webp"
                className="w-[66%] h-auto"
              />
            </a>
            <div className="md:hidden">
              <button
                type="button"
                className="hs-collapse-toggle flex justify-center items-center w-9 h-9 text-sm font-semibold rounded-lg text-persian-blue-100 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <svg
                  className="hs-collapse-open:hidden flex-shrink-0 w-12 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" x2="40" y1="6" y2="6" />
                  <line x1="3" x2="40" y1="12" y2="12" />
                  <line x1="3" x2="40" y1="18" y2="18" />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
          >
            <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500">
              <div className="flex flex-col gap-x-0 mt-5 divide-y divide-dashed divide-gray-200 md:flex-row md:items-center md:justify-end md:gap-x-7 md:mt-0 md:ps-7 md:divide-y-0 md:divide-solid dark:divide-gray-700">
                <a
                  className="hidden font-acumin-300 text-xs text-persian-blue-100 py-3 md:py-6 hover:text-persian-blue-300 hover:animate-pulse"
                  href="#"
                  aria-current="page"
                >
                  Home
                </a>

                <a
                  className="font-acumin-300 text-xs text-persian-blue-100 hover:text-persian-blue-300 hover:animate-pulse py-3 md:py-6 dark:text-persian-blue-100 dark:hover:text-persian-blue-100 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="/servicos"
                >
                  Serviços
                </a>

                <div className="pt-3 md:pt-0">
                  <a
                    className="py-1 px-4 inline-flex items-center gap-x-2 font-acumin-300 text-xs font-semibold rounded-full border border-transparent bg-persian-blue-100 text-persian-blue-900 hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                  >
                    <Image
                      src="/assets/images/icons/whatsapp.svg"
                      width={20}
                      height={20}
                      alt=""
                    />
                    61 - 9141 2503
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
