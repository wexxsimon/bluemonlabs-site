import React, { useState, useEffect } from 'react';

const UseScrollPosition = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Adiciona o ouvinte de evento de rolagem quando o componente é montado
    window.addEventListener('scroll', handleScroll);
    // Remove o ouvinte de evento de rolagem quando o componente é desmontado
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Array vazio indica que este useEffect será executado apenas uma vez, quando o componente for montado

  return scrollY;
};

export default UseScrollPosition;
