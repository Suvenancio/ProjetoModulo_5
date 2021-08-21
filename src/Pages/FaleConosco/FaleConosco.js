import React, { Component } from 'react';
import Form from '../../Components/Form/Form/Form';
import Select from '../../Components/Form/Select/Select';
import styled from 'styled-components';
import Main from '../../Components/Main/Main';
import Label from '../../Components/Form/Label/Label';
import Input from '../../Components/Form/Input/Input';
import Textarea from '../../Components/Form/Textarea/Textarea';
import Button from '../../Components/Form/Button/Button';

const Div = styled.div`
  display: flex;
  flex-direction: row;
`;

export default class FaleConosco extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>teste</h1>
        </header>
        <Main>
          <Form>
            <h1>Fale conosco!</h1>
            <Div>
              <Label>
                Estado:
                <Select name="Estado" id="estado">
                  <option name="Selecione" disabled selected>
                    Selecione
                  </option>
                  <option name="Rio de Janeiro">Rio de Janeiro</option>
                  <option name="São Paulo">São Paulo</option>
                  <option name="Paraná">Paraná</option>
                </Select>
              </Label>
              <Label>
                Cidade:
                <Select name="Cidade" id="cidade">
                  <option name="Selecione" disabled selected>
                    Selecione
                  </option>
                  <option name="Rio de Janeiro">Rio de Janeiro</option>
                  <option name="São Paulo">São Paulo</option>
                  <option name="Paraná">Curitiba</option>
                </Select>
              </Label>
            </Div>
            <Label nome="Assunto:" htmlFor="Assunto">
              <Input placeholder="Digite aqui" name="Assunto" type="text" />
            </Label>
            <Label nome=" Nome:" htmlFor="Nome">
              <Input placeholder="Digite seu nome" name="Nome" type="text" />
            </Label>
            <Label nome="Email:" htmlFor="Email">
              <Input placeholder="Digite seu email" name="Email" type="email" />
            </Label>
            <Label htmlFor="Mensagem">
              Mensagem:
              <Textarea
                placeholder="Digite sua mensagem"
                name="Mensagem"
                type="text"
              />
            </Label>
            <Button nome="Enviar" type="submit" />
          </Form>
          <Form>
            <h1>Procure uma unidade próxima a você</h1>
            <Select>
              <option></option>
            </Select>
          </Form>
        </Main>
      </div>
    );
  }
}
