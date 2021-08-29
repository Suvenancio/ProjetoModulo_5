import React, { useEffect, useState } from 'react';
import FormContainer from '../Form/FormContainer';
import Input from '../Form/Input';
import * as S from './styles';
import Select from '../Form/Select';
import Button from '../Form/Button';

export default function TarefasTeste() {
  const [selectValue, setSelectValue] = useState('');
  const [data, setData] = useState(null);
  const [consultas, setConsultas] = useState([]);

  useEffect(() => {
    fetch('http://damp-journey-22615.herokuapp.com/dentista')
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  const handleChange = (e) => {
    setSelectValue(e.target.value);
  };
  return (
    <div>
      <S.Section>
        <S.Div flexDirection="column" width="50%">
          <S.Titulo padding="10px">
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
        <S.Titulo width="100%" padding="10px">
          <p>Agendamento de consultas</p>
        </S.Titulo>
        <S.Div justifyContent="space-around">
          <FormContainer width="55%">
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
              backColor="#090922ad"
              aConsulta
              flexDirection="column"
            >
              <p>
                Agora você pode agendar sua consulta sem sair de casa! A nossa
                rede procura sempre trazer o maior conforto para você
              </p>
            </S.Titulo>
          </S.Div>
        </S.Div>
      </S.Section>
    </div>
  );
}
