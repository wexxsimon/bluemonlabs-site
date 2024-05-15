'use client'
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    const scrolled = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrolled > window.innerHeight * 0.95) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top fixed bottom-8 right-4">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ x: '50vw', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '50vw', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 20, duration: .5 }}
            onClick={scrollToTop}
          className="bg-white-100 text-black rounded-full cursor-pointer p-2"
          >
            <svg className="h-8 w-8 text-sky-700"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="6 15 12 9 18 15" /></svg>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ScrollToTopButton;
