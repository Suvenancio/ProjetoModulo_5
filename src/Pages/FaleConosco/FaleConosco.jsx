import React, { useState } from 'react';
import Select from '../../Components/Form/Select/Select';
import Textarea from '../../Components/Form/Textarea/Textarea';
import Button from '../../Components/Form/Button/Button';
import Input from '../../Components/Form/Input/Input';
import FormContainer from '../../Components/Form/FormContainer/FormContainer';
import * as S from './styles';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import BannerHome from '../../Components/BannerHome/BannerHome';

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
      <S.Container>
        <BannerHome />
        <S.Div display="flex" direction="row">
          <FormContainer>
            <h1>Fale conosco!</h1>
            <S.Div direction="row" display="flex" justifyContent="center">
              <Select
                widthResponsive="400px"
                labelAlign="flex-start"
                width="292px"
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
                widthResponsive="400px"
                labelAlign="flex-start"
                width="292px"
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
            </S.Div>
            <Input
              width="585px"
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
              width="585px"
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
              width="585px"
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
              width="585px"
              htmlFor="Mensagem"
              placeholder="Digite sua mensagem"
              name="Mensagem"
              type="text"
            >
              Mensagem:
            </Textarea>

            <S.Div
              display="flex"
              direction="row-reverse"
              alignSelf="center"
              margin="0px 77px 0px 0px"
            >
              <Button width="150px" height="30px" type="submit">
                Enviar
              </Button>
            </S.Div>
          </FormContainer>
          <FormContainer>
            <h1>Procure uma unidade próxima a você</h1>
            <Select
              label=" Escolha a cidade que deseja encontrar uma de nossas unidades."
              htmlFor="Cidade unidade"
              onChange={requisicaoUnidade}
              width="585px"
              labelAlign="center"
            >
              <option>Selecione</option>
              <option value="Rio de Janeiro">Rio de Janeiro</option>
              <option value="São Paulo">São Paulo</option>
              <option value="Curitiba">Curitiba</option>
            </Select>

            <S.Div scroll="active">
              {data &&
                data.map((item) =>
                  item.address.includes(selectValue) ? (
                    <div>
                      <S.Lista>
                        <li>
                          <p>Endereço: {item.address}</p>
                          <p>Email: {item.email}</p>
                          <p>Telefone: {item.phone}</p>
                        </li>
                      </S.Lista>
                    </div>
                  ) : (
                    ''
                  )
                )}
            </S.Div>
          </FormContainer>
        </S.Div>
      </S.Container>
      <Footer />
    </>
  );
}
