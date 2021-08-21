import React, { Component } from 'react';
import { ButtonForm } from './styles';
export default class Button extends Component {
  render() {
    return <ButtonForm type={this.props.type}>{this.props.nome}</ButtonForm>;
  }
}
