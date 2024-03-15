import React, { useState } from "react";
import { Box, Form, Input, Select, Checkbox, Button } from '../ui';
import Layout from "../Layout/Layout";

const Registration = () => {
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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validação de dados

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

    // Envio dos dados

    // Integração com pagamento por PIX

    // Redirecionamento para página de confirmação

    alert("Inscrição realizada com sucesso!");
  };

  return (
    <Layout>
      <Box>
        <h1>Corrida Rústica 5K São Marcos</h1>
        <p>21 de abril de 2024</p>
        <p>
          A Corrida Rústica faz parte das atividades esportivas da Secretaria de
          Cultura, Desporto e Turismo de São Marcos, onde visa além da integração
          entre atletas, a saúde e bem estar de todos os competidores,
          proporcionando aos cidadãos esporte e lazer e aos visitantes uma
          calorosa recepção da Cidade.
        </p>
        <a href="https://www.chip5.com.br/saomarcos5k/">Regulamento completo</a>
      </Box>

      <Box>
        <h2>Inscrição</h2>

        <Form onSubmit={handleSubmit}>
          <Input
            name="nome"
            label="Nome completo"
            value={formData.nome}
            onChange={handleInputChange}
          />

          <Input
            name="dataNascimento"
            label="Data de nascimento"
            type="date"
            value={formData.dataNascimento}
            onChange={handleInputChange}
          />

          <Input
            name="telefone"
            label="Telefone"
            value={formData.telefone}
            onChange={handleInputChange}
          />

          <Select
            name="sexo"
            label="Sexo"
            value={formData.sexo}
            onChange={handleInputChange}
          >
            <option value="">Selecione</option>
            <option value="feminino">Feminino</option>
            <option value="masculino">Masculino</option>
          </Select>

          <Input
            name="email"
            label="Email"
            type="email"
            value={formData.email}
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

          <Select
            name="kit"
            label="Opção com ou sem kit"
            value={formData.kit}
            onChange={handleInputChange}
          >
            <option value="">Selecione</option>
            <option value="semKit">Sem kit</option>
            <option value="comKit">Com kit</option>
          </Select>

          {formData.kit === "comKit" && (
            <Select
              name="tamanhoCamiseta"
              label="Tamanho da camiseta"
              value={formData.tamanhoCamiseta}
              onChange={handleInputChange}
            >
              <option value="">Selecione</option>
              <option value="p">P</option>
              <option value="m">M</option>
              <option value="g">G</option>
              <option value="gg">GG</option>
            </Select>
          )}

          <Select
            name="categoria"
            label="Categoria"
            value={formData.categoria}
            onChange={handleInputChange}
          >
            <option value="">Selecione</option>
            <option value="02-06">02 a 06 anos</option>
            <option value="07-09">07 a 09 anos</option>
            <option value="10-15">10 a 15 anos</option>
            <option value="16-19">16 a 19 anos</option>
            <option value="20-24">20 a 24 anos</option>
            <option value="25-29">25 a 29 anos</option>
            <option value="30-34">30 a 34 anos</option>
            <option value="35-39">35 a 39 anos</option>
            <option value="40-44">40 a 44 anos</option>
            <option value="45-49">45 a 49 anos</option>
            <option value="50-54">50 a 54 anos</option>
            <option value="55-59">55 a 59 anos</option>
            <option value="60-64">60 a 64 anos</option>
            <option value="65">65 anos acima</option>
          </Select>

          <Checkbox
            name="cienciaRegulamento"
            label="Li e concordo com o regulamento"
            value={formData.cienciaRegulamento}
            onChange={handleInputChange}
          />

          <Checkbox
            name="cienciaPix"
            label="Li e concordo com o pagamento por PIX"
            value={formData.cienciaPix}
            onChange={handleInputChange}
          />

          <Button type="submit">Enviar</Button>
        </Form>
      </Box>
    </Layout>
  );
};

export default Registration;