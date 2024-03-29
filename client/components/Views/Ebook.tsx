import Layout from "../Layout/Layout";

const Ebook = () => {
  const ebook = {
    imagem: '/caminho/para/imagem.jpg',
    titulo: 'Título do Ebook',
    descricao: 'Descrição do Ebook',
    preco: '$9.99',
    urlCompra: 'https://outro.site'
  };

  return (
    <Layout>
      <div className="flex items-center justify-center h-screen">
        <div className="max-w-lg mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-5xl m-4">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img className="h-48 w-full object-cover md:w-48" src={ebook.imagem} alt={ebook.titulo} />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{ebook.titulo}</div>
              <p className="mt-2 text-gray-500">{ebook.descricao}</p>
              <div className="mt-4">
                <div className="text-lg leading-6 font-medium space-y-1">
                  <p className="text-gray-500">{ebook.preco}</p>
                </div>
                <div className="mt-2">
                  <a href={ebook.urlCompra} className="text-indigo-500 underline">Comprar agora</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Ebook;
