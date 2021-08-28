import React, { useEffect, useState } from 'react';
import FormContainer from '../Form/FormContainer';
import Input from '../Form/Input';

import Select from '../Form/Select';

export default function TarefasTeste() {
  const [selectValue, setSelectValue] = useState('');
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://damp-journey-22615.herokuapp.com/dentista')
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  const handleChange = (e) => {
    setSelectValue(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div>
      <FormContainer>
        <Select
          onChange={handleChange}
          widthResponsive="400px"
          labelAlign="flex-start"
          width="292px"
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
          onChange={handleChange}
          widthResponsive="400px"
          labelAlign="flex-start"
          width="292px"
          label=" Dentista:"
          htmlFor="Dentista"
          name="Dentista"
          id="dentista"
        >
          <option defaultvalue name="Selecione" selected>
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
        <Input type="date">Data da consulta:</Input>
        <Input type="time">Horário da consulta:</Input>

        <Select
          onChange={handleChange}
          widthResponsive="400px"
          labelAlign="flex-start"
          width="292px"
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
      </FormContainer>
    </div>
  );
}
