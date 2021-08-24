import React, { Component } from 'react';
import Form from '../../Components/Form/Form/Form';
import Select from '../../Components/Form/Select/Select';
import { Div, DivButton, DivUnidade, Unidade } from './styles';
import Main from '../../Components/Main/Main';
import Label from '../../Components/Form/Label/Label';
import Input from '../../Components/Form/Input/Input';
import Textarea from '../../Components/Form/Textarea/Textarea';
import Button from '../../Components/Form/Button/Button';
import { SelectEscolhaUnidade } from '../../Components/Form/Select/styles';

export default class FaleConosco extends Component {
  constructor(props) {
    super(props);
    this.state = { selectValue: '' };
  }
  requisicaoUnidade = async (e) => {
    let cidade = e.target.value;
    let response = await fetch('https://still-atoll-05418.herokuapp.com/store')
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((res) => res);
    this.setState({ data: response.result, selectValue: cidade });
  };

  render() {
    return (
      <div>
        <Main>
          <Form>
            <h1>Fale conosco!</h1>
            <Div>
              <Label htmlFor="Estado">
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
              <Label htmlFor="Cidade">
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
              Assunto:
              <Input placeholder="Digite aqui" name="Assunto" type="text" />
            </Label>
            <Label nome="Nome:" htmlFor="Nome">
              Nome:
              <Input placeholder="Digite seu nome" name="Nome" type="text" />
            </Label>
            <Label nome="Email:" htmlFor="Email">
              Email:
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
            <DivButton>
              <Button width="150px" nome="Enviar" type="submit" />
            </DivButton>
          </Form>
          <Form>
            <h1>Procure uma unidade próxima a você</h1>
            <Label htmlFor="Cidade unidade">
              Escolha a cidade que deseja encontrar uma de nossas unidades.
              <SelectEscolhaUnidade onChange={this.requisicaoUnidade}>
                <option>Selecione</option>
                <option value="Rio de Janeiro">Rio de Janeiro</option>
                <option value="São Paulo">São Paulo</option>
                <option value="Curitiba">Curitiba</option>
              </SelectEscolhaUnidade>
            </Label>
            <DivUnidade>
              {this.state.data &&
                this.state.data.map((item) => {
                  if (item.address.includes(this.state.selectValue)) {
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
          </Form>
        </Main>
      </div>
    );
  }
}
