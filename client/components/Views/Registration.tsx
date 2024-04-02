import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaShoppingCart } from 'react-icons/fa';

import { Card } from '../ui/card';
import { Form, FormLabel } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

import Layout from "../Layout/Layout";
import { createUser } from '../../axios_helper';

const Registration = () => {



  const [kitCount, setKitCount] = useState(0);
  const [noKitCount, setNoKitCount] = useState(0);
  const methods = useForm();
  const { handleSubmit: handleFormSubmit } = methods;

  const [formData, setFormData] = useState({
    nome: "",
    dataNascimento: "",
    telefone: "",
    sexo: "",
    email: "",
    equipe: "",
    cidade: "",
    kit: "",
    tamanhoCamiseta: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
  
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  const isFormValid = formData.nome !== '' && formData.email !== '' && formData.telefone !== '' && formData.dataNascimento !== '' && formData.cidade !== '' && (kitCount > 0 || noKitCount > 0);

  const onSubmit = async (data: any) => {
    try {
      await createUser(formData);
      console.log("Usuário criado com sucesso!");
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
    }
  };


  return (
    <Layout>
      <div>
        <Card className="mt-20">
          <div className="text-center">
            <h1 className="text-slate-100 text-3xl">
              Corrida Rústica 5K São Marcos
            </h1>
            <p className="text-blue-400">21 - abril - 2024</p>
          </div>
        </Card>
        <Card className="text-slate-300 mt-9">

          <Form {...methods}>
            <form onSubmit={handleFormSubmit(onSubmit)} className="grid grid-cols-2 gap-4 b">
              <div className="p-4">
                <Input
                  name="nome"
                  label="Nome completo"
                  value={formData.nome}
                  onChange={handleInputChange}
                />

                <Input
                  name="email"
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />

                <Input
                  name="telefone"
                  label="Telefone"
                  value={formData.telefone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="p-7 mt-3">
                <div className="bg-slate-100 rounded-xl">
                  <div className="bg-slate-800 rounded-t-lg grid grid-cols-3 items-center">
                    <FormLabel className="ml-2 text-base">Inscrições</FormLabel>
                    <div className="col-start-4">
                      <FormLabel className="flex items-center mr-4">
                        <FaShoppingCart /> R$ 0,00
                      </FormLabel>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="ml-6">
                      <p>Com kit</p>
                      <p>R$ 50,00</p>
                    </div>
                    <div className="mr-6 flex items-center">
                      <button
                        className="w-5 h-5 flex items-center justify-center rounded-full border border-gray-300"
                        onClick={() => setKitCount(kitCount > 0 ? kitCount - 1 : 0)}
                        disabled={kitCount === 0}
                      >
                        <span className='mb-1'>-</span>
                      </button>
                      <div className='p-2'>
                        {kitCount}
                      </div>
                      <button
                        className="w-5 h-5 flex items-center justify-center rounded-full border border-gray-300"
                        onClick={() => setKitCount(kitCount + 1)}>
                        <span className='mb-1'>+</span>
                      </button>
                    </div>
                  </div>

                  <hr className="my-4" />

                  <div className="flex justify-between items-center">
                    <div className="ml-6">
                      <p>Sem kit</p>
                      <p>R$ 30,00</p>
                    </div>
                    <div className="mr-6 flex items-center space-">
                      <button
                        className="w-5 h-5 flex items-center justify-center rounded-full border border-gray-300"
                        onClick={() => setNoKitCount(noKitCount > 0 ? noKitCount - 1 : 0)}
                        disabled={noKitCount === 0}
                      >
                        <span className='mb-1'>-</span>
                      </button>
                      <div className='p-2'>
                        {noKitCount}
                      </div>
                      <button
                        className="w-5 h-5 flex items-center justify-center rounded-full border border-gray-300"
                        onClick={() => setNoKitCount(noKitCount + 1)}
                      >
                        <span className='mb-1'>+</span>
                      </button>
                    </div>
                  </div>

                  <hr className="my-4" />

                  <div className="flex justify-center">
                    <Button type="submit" disabled={!isFormValid}>
                      Enviar
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-[-90px] p-4">
                <Input
                  name="dataNascimento"
                  label="Data de nascimento"
                  type="date"
                  value={formData.dataNascimento}
                  onChange={handleInputChange}
                />

                <Input
                  name="equipe"
                  label="Equipe (opcional)"
                  value={formData.equipe}
                  onChange={handleInputChange}
                />
                <Input
                  name="cidade"
                  label="Cidade"
                  value={formData.cidade}
                  onChange={handleInputChange}
                />
              </div>
              <div className="p-7 mt-[-40px]">
                <h1 className="text-xl text-slate-100">Decrição do evento</h1>
                <p className="text-slate-300 text-sm mt-3">
                  A Corrida Rústica faz parte das atividades esportivas da Secretaria de
                  Cultura, Desporto e Turismo de São Marcos, onde visa além da integração
                  entre atletas, a saúde e bem estar de todos os competidores,
                  proporcionando aos cidadãos esporte e lazer e aos visitantes uma
                  calorosa recepção da Cidade.
                </p>
                <div className="flex justify-end mt-[40px] text-slate-500">
                  <a href="/">Regulamento completo aqui</a>
                  {/* Add link to regulation */}
                </div>
              </div>
            </form>
          </Form>
        </Card>
      </div>
    </Layout>
  );
};

export default Registration;