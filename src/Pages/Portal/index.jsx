import React, { useState, useEffect, useContext } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import FormContainer from '../../Components/Form/FormContainer';
import Input from '../../Components/Form/Input';
import * as S from './styles';
import Select from '../../Components/Form/Select';
import Button from '../../Components/Form/Button';
import Banner from '../../Components/Banner';
import imgBanner from '../../assets/banner-portal.png';
import Modal from '../../Components/Modals/Modal/';
import styled from 'styled-components';

//Context - Pegar dados paciente.
/* import {Context} from '../../Components/ValidaLogin/Context' */

export default function Portal() {
  const [selectValue, setSelectValue] = useState('');
  const [data, setData] = useState(null);
  const [consultas, setConsultas] = useState([]);
  const [comDesconto, setComDesconto] = useState(false);
  const [semDesconto, setSemDesconto] = useState(true);
  const [avaliacaoFeita, setAvaliacaoFeita] = useState(false);
  const [modal, setModal] = useState(false);

  /* const {usuario} = useContext(Context) */
  const cpf = 0;

  useEffect(() => {
    fetch('http://damp-journey-22615.herokuapp.com/dentista')
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, []);
  useEffect(() => {
    fetch(`https://consulta-paciente.herokuapp.com/consultas/${cpf}`)
      .then((res) => res.json())
      .then((result) => {
        setConsultas(result);
      });
  }, []);

  const avaliacao = (e) => {
    e.preventDefault();
    setComDesconto(true);
    setSemDesconto(false);
    setAvaliacaoFeita(true);
  };
  const handleChange = (e) => {
    setSelectValue(e.target.value);
  };

  const Texto = () => {
    return (
      <S.ModalGroup>
        <Input>De 0 a 10 o quanto você avalia o nosso atendimento?</Input>;
        <Input>
          De 0 a 10 o quanto você recomendaria nosso atendimento a um amigo?
        </Input>
        <Button
          onClick={() => {
            setModal(false);
            setAvaliacaoFeita(true);
            setComDesconto(true);
            setSemDesconto(false);
          }}
          width="100px"
          height="30px"
          alignSelf="center"
        >
          Enviar
        </Button>
      </S.ModalGroup>
    );
  };

  const P = styled.p`
    padding: 0 20px;
    font-size: 1.5rem;
    color: #49f2c2;
    font-weight: bold;
  `;

  const TextoAgradecimento = () => {
    return <P>Obrigado por nos avaliar!</P>;
  };

  const ModalAvaliacao = () => {
    return <Modal setOpenModal={setModal} page={<Texto />} />;
  };

  const ModalAgradecimento = () => {
    return (
      <Modal setOpenModal={setAvaliacaoFeita} page={<TextoAgradecimento />} />
    );
  };
  return (
    <div>
      <Header />

      <S.Container>
        <Banner bannerPosition="center" url={imgBanner}>
          <S.Div
            width="100%"
            alignItems="center"
            display="flex"
            justifyContent="center"
            background="rgba(0,0,0,0.7)"
          >
            <S.Titulo fontSize="42px">Portal do paciente</S.Titulo>
          </S.Div>
        </Banner>
        <S.Section>
          <S.Div flexDirection="column" width="50%">
            <S.Titulo padding="10px" fontSize="24px">
              <p>Consultas</p>
            </S.Titulo>
            <S.Div
              scroll="active"
              justifyContent="center"
              height="300px"
              width="100%"
            >
              <S.Lista width="95%" height="100%">
                <li>
                  <p>Data:</p>
                  <p>Hora:</p>
                  <p>Dentista:</p>
                  <p>Descricao:</p>
                </li>
              </S.Lista>
            </S.Div>
          </S.Div>
        </S.Section>
        <S.Section height="500px" flexDirection="column">
          <S.Titulo fontSize="24px" width="100%" padding="10px">
            <p>Agendamento de consultas</p>
          </S.Titulo>
          <S.Div justifyContent="space-around">
            <FormContainer width="65%">
              <Select
                onChange={handleChange}
                widthResponsive="400px"
                labelAlign="flex-start"
                width="585px"
                label="Cidade:"
                htmlFor="Cidade"
                name="Cidade"
                id="cidade"
              >
                <option defaultvalue name="Selecione" selected>
                  Selecione
                </option>
                <option value="Rio de Janeiro" name="Rio de Janeiro">
                  Rio de Janeiro
                </option>
                <option value="São Paulo" name="São Paulo">
                  São Paulo
                </option>
                <option value="Curitiba" name="Curitiba">
                  Curitiba
                </option>
              </Select>
              <Select
                widthResponsive="400px"
                labelAlign="flex-start"
                width="585px"
                label=" Dentista:"
                htmlFor="Dentista"
                name="Dentista"
                id="dentista"
              >
                <option defaultvalue name="Selecione">
                  Selecione
                </option>
                {data &&
                  data.map((item, index) =>
                    item.CIDADE.includes(selectValue) ? (
                      <option key={index} value={item.NOME}>
                        {item.NOME}
                      </option>
                    ) : (
                      ''
                    )
                  )}
              </Select>
              <S.Div>
                <Input width="292px" type="date">
                  Data da consulta:
                </Input>
                <Input width="292px" type="time">
                  Horário da consulta:
                </Input>
              </S.Div>
              <Select
                onChange={handleChange}
                widthResponsive="400px"
                labelAlign="flex-start"
                width="585px"
                label="Tipo de Consulta:"
                htmlFor="Consulta"
                name="Consulta"
                id="consulta"
              >
                <option value="defaultvalue">Selecione</option>
                <option value="Clínico geral">Clínico geral</option>
                <option value="Odontopediatra">Odontopediatra</option>
                <option value="Ortodontista">Ortodontista</option>
                <option value="Endodontista">Endodontista</option>
                <option
                  value="Periodontista
"
                >
                  Periodontista
                </option>
                <option value="Estomatologista"> Estomatologista</option>
                <option value="Especialista em Dentística Restauradora">
                  Especialista em Dentística Restauradora
                </option>
                <option value="Protesista">Protesista</option>
                <option value="Cirurgião bucomaxilofacial">
                  Cirurgião bucomaxilofacial
                </option>
                <option value="Especialista em Disfunção Temporomandibular e dor orofacial">
                  Especialista em Disfunção Temporomandibular e dor orofacial
                </option>
              </Select>
              <Button width="80px" height="30px" alignSelf="flex-end">
                Enviar
              </Button>
            </FormContainer>
            <S.Div width="60%" height="100%" justifyContent="center">
              <S.Titulo
                width="55%"
                height="100%"
                padding="15px"
                background="#090922ad"
                aConsulta
                flexDirection="column"
                fontSize="22px"
              >
                <p>
                  Agora você pode agendar sua consulta sem sair de casa! A nossa
                  rede procura sempre trazer o maior conforto para você.
                </p>
              </S.Titulo>
            </S.Div>
          </S.Div>
        </S.Section>
        <S.Section height="500px">
          <S.Div width="50%" flexDirection="column" height="475px">
            <S.Titulo fontSize="24px">
              <p>Cupons de Descontos</p>
            </S.Titulo>
            <S.Lista pCentro widthItem="250px">
              {semDesconto && (
                <>
                  <li>
                    <p>
                      Avalie-nos e ganhe cupons de desconto para utilizar na
                      hora de pagar o seu tratamento!
                    </p>
                  </li>
                </>
              )}
              {comDesconto && (
                <>
                  <li>
                    <h1>ae324y</h1>
                    <p>5%</p>
                    <p>Válido até 10/11</p>
                  </li>
                  <li>
                    <h1>23es87a</h1>
                    <p>5%</p>
                    <p>Válido até 10/11</p>
                  </li>
                  <li>
                    <h1>3usa71</h1>
                    <p>10%</p>
                    <p>Válido até 10/11</p>
                  </li>
                  <li>
                    <h1>j432sv</h1>
                    <p>15%</p>
                    <p>Válido até 10/11</p>
                  </li>
                </>
              )}
            </S.Lista>
          </S.Div>
          {modal && ModalAvaliacao()}
          {avaliacaoFeita && ModalAgradecimento()}
          <S.Div width="50%" alignSelf="flex-start" justifyContent="center">
            <S.Titulo aConsulta fontSize="28px" flexDirection="column">
              <p>Faça aqui sua avaliação</p>
              <Button onClick={() => setModal(true)} height="30px">
                Avaliar
              </Button>
            </S.Titulo>
          </S.Div>
        </S.Section>
      </S.Container>
      <Footer />
    </div>
  );
}
