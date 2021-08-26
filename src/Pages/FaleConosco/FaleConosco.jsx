import React, { useState } from 'react';
import Select from '../../Components/Form/Select/Select';
import Textarea from '../../Components/Form/Textarea/Textarea';
import Button from '../../Components/Form/Button/Button';
import Input from '../../Components/Form/Input/Input';
import FormContainer from '../../Components/Form/FormContainer/FormContainer';
import { ContainerFale, Div, DivButton, DivUnidade, Unidade } from './styles';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

export default function FaleConosco() {
  const [selectValue, setSelectValue] = useState('');
  const [data, setData] = useState(null);

  const requisicaoUnidade = async (e) => {
    let cidade = e.target.value;
    let response = await fetch('https://still-atoll-05418.herokuapp.com/store')
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((res) => res);
    setSelectValue(cidade);
    setData(response.result);
  };

  return (
    <>
      <Header />
      <ContainerFale>
        <FormContainer>
          <h1>Fale conosco!</h1>
          <Div>
            <Select
              width="200px"
              label="Estado:"
              htmlFor="Estado"
              name="Estado"
              id="estado"
            >
              <option name="Selecione" disabled selected>
                Selecione
              </option>
              <option name="Rio de Janeiro">Rio de Janeiro</option>
              <option name="São Paulo">São Paulo</option>
              <option name="Paraná">Paraná</option>
            </Select>
            <Select
              width="200px"
              label="Cidade:"
              htmlFor="Cidade"
              name="Cidade"
              id="cidade"
            >
              <option name="Selecione" disabled selected>
                Selecione
              </option>
              <option name="Rio de Janeiro">Rio de Janeiro</option>
              <option name="São Paulo">São Paulo</option>
              <option name="Paraná">Curitiba</option>
            </Select>
          </Div>
          <Input
            width="400px"
            height="30px"
            htmlFor="Assunto"
            type="text"
            nome="Assunto:"
            name="Assunto"
            placeholder="Digite aqui"
          >
            Assunto:
          </Input>
          <Input
            width="400px"
            height="30px"
            nome="Nome:"
            htmlFor="Nome"
            placeholder="Digite seu nome"
            name="Nome"
            type="text"
          >
            Nome:
          </Input>
          <Input
            width="400px"
            height="30px"
            nome="Email:"
            htmlFor="Email"
            placeholder="Digite seu email"
            name="Email"
            type="email"
          >
            Email:
          </Input>
          <Textarea
            htmlFor="Mensagem"
            placeholder="Digite sua mensagem"
            name="Mensagem"
            type="text"
          >
            Mensagem:
          </Textarea>

          <DivButton>
            <Button width="150px" height="30px" type="submit">
              Enviar
            </Button>
          </DivButton>
        </FormContainer>
        <FormContainer>
          <h1>Procure uma unidade próxima a você</h1>
          <Select
            label=" Escolha a cidade que deseja encontrar uma de nossas unidades."
            htmlFor="Cidade unidade"
            onChange={requisicaoUnidade}
            width="410px"
          >
            <option>Selecione</option>
            <option value="Rio de Janeiro">Rio de Janeiro</option>
            <option value="São Paulo">São Paulo</option>
            <option value="Curitiba">Curitiba</option>
          </Select>

          <DivUnidade>
            {data &&
              data.map((item) => {
                if (item.address.includes(selectValue)) {
                  return (
                    <div>
                      <Unidade>
                        <li>
                          <p>Endereço: {item.address}</p>
                          <p>Email: {item.email}</p>
                          <p>Telefone: {item.phone}</p>
                        </li>
                      </Unidade>
                    </div>
                  );
                }
              })}
          </DivUnidade>
        </FormContainer>
      </ContainerFale>
      <Footer />
    </>
  );
}
