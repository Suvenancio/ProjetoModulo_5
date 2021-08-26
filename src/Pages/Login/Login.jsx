import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      cpf: '',
    };
  }
  handleInputChange = (event) => {
    switch (event.target.name) {
      case 'email':
        this.setState({ email: event.target.value });
        break;
      case 'cpf':
        this.setState({ cpf: event.target.value });
        break;
      default:
        throw new Error('Campo Invalido');
    }
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    let json = {
      email: this.state.email,
      cpf: this.state.cpf,
    };
    await fetch(
      `https://projeto-dentista-api-m4.herokuapp.com/paciente/login/email:${json.email} cpf:${json.cpf}`
    )
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  render() {
    return (
      <section>
        <h1>Login</h1>
        <form
          style={{ display: 'flex', flexDirection: 'column' }}
          onSubmit={this.handleSubmit}
        >
          <label>
            Email:{' '}
            <input
              type="email"
              name="email"
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            cpf:{' '}
            <input type="text" name="cpf" onChange={this.handleInputChange} />
          </label>
          <button type="submit">Entrar</button>
        </form>
      </section>
    );
  }
}
//matheusTo@hotmail.com
//333.333.333-21
