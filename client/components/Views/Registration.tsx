import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaShoppingCart } from 'react-icons/fa';

import { Card } from '../ui/card';
import { Form, FormLabel } from '../ui/form';
import { Input } from '../ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Checkbox } from '../ui/checkbox';
import { Button } from '../ui/button';

import Layout from "../Layout/Layout";

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
    categoria: "",
    cienciaRegulamento: false,
    cienciaPix: false,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!formData.nome) {
      alert("Preencha o campo nome");
      return;
    }

    if (!formData.dataNascimento) {
      alert("Preencha o campo data de nascimento");
      return;
    }

    if (!formData.telefone) {
      alert("Preencha o campo telefone");
      return;
    }

    if (!formData.sexo) {
      alert("Preencha o campo sexo");
      return;
    }

    if (!formData.email) {
      alert("Preencha o campo email");
      return;
    }

    if (!formData.cidade) {
      alert("Preencha o campo cidade");
      return;
    }

    if (!formData.kit) {
      alert("Escolha a opção com ou sem kit");
      return;
    }

    if (formData.kit === "comKit" && !formData.tamanhoCamiseta) {
      alert("Escolha o tamanho da camiseta");
      return;
    }

    if (!formData.categoria) {
      alert("Escolha a sua categoria");
      return;
    }

    if (!formData.cienciaRegulamento) {
      alert("É necessário confirmar que você leu o regulamento");
      return;
    }

    if (!formData.cienciaPix) {
      alert("É necessário confirmar que você leu sobre o pagamento por PIX");
      return;
    }

    alert("Inscrição realizada com sucesso!");
  };

  const onSubmit = (data: any) => {
    console.log(data);
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
                      <FormLabel className="flex items-center">
                        <FaShoppingCart /> R$ 0,00
                      </FormLabel>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p>Com kit</p>
                      <p>R$ 30,00</p>
                    </div>
                    <div>
                      <button
                        onClick={() => setKitCount(kitCount > 0 ? kitCount - 1 : 0)}
                        disabled={kitCount === 0}
                      >
                        -
                      </button>
                      {kitCount}
                      <button onClick={() => setKitCount(kitCount + 1)}>+</button>
                    </div>
                  </div>

                  <hr className="my-4" />

                  <div className="flex justify-between items-center">
                    <div>
                      <p>Sem kit</p>
                      <p>R$ 30,00</p>
                    </div>
                    <div>
                      <button
                        onClick={() => setNoKitCount(noKitCount > 0 ? noKitCount - 1 : 0)}
                        disabled={noKitCount === 0}
                      >
                        -
                      </button>
                      {noKitCount}
                      <button onClick={() => setNoKitCount(noKitCount + 1)}>+</button>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <Button type="submit">Enviar</Button>
                  </div>
                </div>
              </div>

              <div className="mt-[-60px] p-4">
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