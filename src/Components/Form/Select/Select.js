import React, { Component } from 'react';
import { SelectForm } from './styles';

export default class Select extends Component {
  render() {
    return (
      <SelectForm name={this.props.name} id={this.props.id}>
        {this.props.children}
      </SelectForm>
    );
  }
}
