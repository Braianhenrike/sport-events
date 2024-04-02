import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from "react-router-dom";


const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoHome = (path: string) => {
    navigate(path);
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      className="sm:p-16 xs:p-8 px-6 py-12 relative mt-[600px]"
    >
      <div className="footer-gradient" />

      <div className="2xl:max-w-[1280px] w-full mx-auto flex flex-col gap-8">
      <div className={`flex items-center justify-between flex-wrap gap-5 ${location.pathname === "/home" ? "mx-auto" : ""}`}>

          <h4 className="font-bold md:text-xl text-sm text-white">Corra mais rápido</h4>
          {location.pathname !== "/home" && (
            <button type="button" className="flex items-center h-fit py-1 px-2 bg-[#25618b] rounded-[32px] gap-[12px] hover:bg-blue-600 transition-colors" onClick={() => handleGoHome("/home")}>
              <span className="font-semibold text-[17px] text-white">Home</span>
            </button>
          )}
        </div>
        <div className="flex flex-col">
          <div className="mb-[20px] h-[2px] bg-white opacity-10" />
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h4 className="font-extrabold text-lg text-white">Seu guia de corrida</h4>
            <p className="font-normal text-[14px] text-white opacity-50">Copyright © 2024 Guia de Corrida. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>

    </motion.footer>
  );
};

export default Footer;

