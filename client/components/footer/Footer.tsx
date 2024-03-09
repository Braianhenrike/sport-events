import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {

  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      className="sm:p-16 xs:p-8 px-6 py-12 relative"
    >
      <div className="footer-gradient" />

      <div className="2xl:max-w-[1280px] w-fullmx-auto flex flex-col gap-8">
        <div className="flex items-center justify-between flex-wrap gap-5">
          <h4 className="font-bold md:text-[64px] text-[44px] text-white">Corra mais rápido</h4>
          <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px] hover:bg-blue-600 transition-colors">
            <img
              src="/running-shoes.svg"
              alt="Tênis de corrida"
              className="w-[24px] h-[24px] object-contain"
            />
            <span className="font-semibold text-[17px] text-white">Comece agora</span>
          </button>
        </div>

        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-white opacity-10" />

          <div className="flex items-center justify-between flex-wrap gap-4">
            <h4 className="font-extrabold text-[24px] text-white">Seu guia de corrida</h4>
            <p className="font-normal text-[14px] text-white opacity-50">Copyright © 2024 Guia de Corrida. Todos os direitos reservados.</p>

            <div className="flex gap-4">
              <img
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

    </motion.footer>
  );
};

export default Footer;

