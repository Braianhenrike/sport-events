import React from 'react';
import { useRadix } from '@radix-ui/react-query-builder';
import { Tailwind } from '@tailwindcss/react';
import Layout from "../Layout/Layout";


const EbookeAlimentos = () => {
  const { query, setQuery } = useRadix();

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="container mx-auto">
      <Tailwind>
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-3xl font-bold">Alimente-se Bem, Viva Melhor</h1>
          <p className="text-xl mt-4">Descubra o segredo para uma vida mais saudável e feliz com este ebook completo.</p>
          <img src="image.jpg" alt="Imagem de um prato nutritivo e delicioso" className="w-full max-w-lg mt-8" />
          <div className="flex flex-col items-center justify-center mt-12">
            <input type="text" placeholder="Digite seu e-mail para receber o ebook" className="border border-gray-300 rounded-md p-2 w-full max-w-md mb-4" onChange={handleQueryChange} />
            <button className="bg-blue-500 text-white rounded-md p-2 w-full max-w-md hover:bg-blue-600">Baixar Ebook Grátis</button>
          </div>
        </div>
      </Tailwind>
    </div>
  );
};

export default EbookeAlimentos;
