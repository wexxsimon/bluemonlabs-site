'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { menuItem: { href: '/portfolio', text: 'Portfólio', image: 'marketing.png' } },
    { menuItem: { href: '/sobre-nos', text: 'Sobre nós', image: 'marketing.png' } },
    { menuItem: { href: '/publicidade', text: 'Publicidade', image: 'marketing.png' } },
    { menuItem: { href: '/marketingdigital', text: 'Marketing Digital', image: 'marketing.png' } }
  ];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMenuOpen]);

  return (
    <div className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm py-0 dark:bg-gray-800 absolute px-6 md:px-12 xl:px-36">
      <nav className="md:flex max-w-[85rem] w-full h-[78px] md:h-[104px] mx-auto border-b-1 border-persian-blue-900">
        <div className="relative items-center w-full flex h-[78px] md:h-[86px] md:mt-0 md:items-center justify-between md:self-center">
          <a
            href="/"
            className="flex gap-1 font-bold text-gray-700 items-center w-32 h-8"
          >
            <Image
              width={130}
              height={18}
              alt="Logo"
              src="/assets/images/logo-bluemoonlabs.webp"
            />
          </a>
          <div className="hidden lg:flex gap-8">
            <a href="/sobre-nos" className="self-center text-sail-100">Sobre</a>
            <a href="/portfolio" className="self-center text-sail-100">Portfólio</a>
            <a href="/publicidade" className="self-center text-sail-100">Publicidade</a>
            <a href="/marketingdigital" className="self-center text-sail-100">Marketing Digital</a>
          </div>
          <div className="md:hidden w-12">
            <button
              type="button"
              className="flex justify-center items-center w-9 h-9 text-sm font-semibold rounded-lg text-persian-blue-100 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              onClick={toggleMenu}
              aria-label="Toggle navigation"
            >
              {isMenuOpen ? (
                <svg
                  className="w-4 h-4"
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
              ) : (
                <svg
                  className="w-12 h-4"
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
              )}
            </button>
          </div>
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', stiffness: 35 }}
                exit={{ x: '-100vw' }}
                className="md:hidden absolute flex flex-col gap-4 mt-4 bg-gulf-blue-900 w-full h-[100vh] top-[-16px] left-0"
              >
                <button
                  type="button"
                  className="flex justify-center items-center w-9 h-9 text-sm font-semibold rounded-lg text-persian-blue-100 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  onClick={toggleMenu}
                  aria-label="Toggle navigation"
                >
                  <svg
                    className="w-4 h-4"
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
                <div>
                <ul>
                    {menuItems.map((item, index) => (
                      <li className="flex px-5 p-8 gap-3" key={index}>
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          transition={{ type: 'spring', stiffness: 120, duration: 0.1, ease: 'easeIn', delay: (index * .3) + .2 }}
                          className={`bg-white-semi p-3 rounded-full w-[50px] h-[50px] flex justify-center items-center`}
                        >
                          <Image
                            alt={item.menuItem.text}
                            width={40}
                            height={40}
                            src={`/assets/images/icons/${item.menuItem.image}`}
                            unoptimized
                            className=''
                          />
                        </motion.div>
                        <a
                        key={index}
                        href={item.menuItem?.href ?? '#'}
                        className="self-center text-sail-100 border-b-1 border-persian-blue-100"
                        >
                          <motion.p
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            transition={{ type: 'spring', stiffness: 120, duration: 0.1, ease: 'easeIn', delay: (index * .3) + .2 }}
                          >{item.menuItem?.text ?? 'Default Text'}</motion.p>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
