import Menu from '../Menu/menu';

import { useState, useEffect } from 'react';

import { motion } from 'framer-motion';

import { slideIn, textVariant } from '../utils/motion';

function HomePage() {
  const [objectPosition, setObjectPosition] = useState('center bottom');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1280) {
        setObjectPosition('center');
      } else {
        setObjectPosition('bottom');
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="h-screen overflow-y-auto">
      <Menu />
      <motion.div
        variants={textVariant(1.1)}
        initial="hidden"
        animate="show"
        className="text-center mt-14 relative z-10"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-8xl text-slate-300 font-bold mb-[-10px]">Trajetória do atleta</h1>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        initial="hidden"
        animate="show"
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="flex items-center justify-center">
          <div className="w-96 md:h-80 lg:h-96 xl:h-[400px] 2xl:h-[600px] md:w-3/5 lg:w-3/5 relative overflow-hidden rounded-b-3xl">
            <div
              className="rounded-tl-[140px] absolute inset-x-0 h-6 bg-gradient-to-r from-blue-950 to-blue-200 h-[300px] z-[-1] rounded-tr-3xl "
            >
            </div>
            <img
              src="../../img/bg-stadium.jpg"
              alt="Pista de corrida no estádio"
              className="object-cover pt-4 w-full h-full rounded-tl-[140px] rounded-tr-3xl rounded-b-3xl"
              style={{ objectPosition, objectFit: 'cover' }}
            />
          </div>
        </div>
        <motion.div className="absolute top-52 md:top-64 lg:top-80 xl:top-80 2xl:top-[525px] right-0 sm:right-44 md:right-52 xl:right-64  2xl:right-96 3xl:right- transform -translate-x-1/2">
          <motion.div className="w-24 sm:w-32 2xl:w-40 h-24 sm:h-32 2xl:h-40  bg-gradient-to-r from-blue-950 to-blue-200 rounded-full opacity-80 flex flex-col items-center justify-center">
            <p className="text-balance text-center">Run with us</p>
            <p className="text-balance text-center mb-1">↓</p>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        variants={textVariant(1.1)}
        initial="hidden"
        animate="show"
        className="text-center mt-24 relative z-10">
        <p className="mx-auto max-w-[1000px] text-lg lg:text-2xl xl:text-4xl text-center text-slate-200">
          Seja bem-vindo ao nosso site dedicado aos entusiastas de corrida e atletismo! Aqui você encontrará informações úteis sobre eventos, dicas de treinamento, receitas saudáveis, e muito mais para ajudar a melhorar sua performance e promover um estilo de vida ativo e saudável. Explore nossos conteúdos e descubra como dar o próximo passo na sua trajetória como atleta.
        </p>
      </motion.div>
    </div >
  );
}
export default HomePage;
