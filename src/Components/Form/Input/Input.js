import React, { Component } from 'react';
import { InputForm } from './styles';

export default class Input extends Component {
  render() {
    return (
      <InputForm
        placeholder={this.props.placeholder}
        name={this.props.name}
        type={this.props.type}
      />
    );
  }
}
