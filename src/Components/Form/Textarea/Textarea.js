import React, { Component } from 'react';
import { TextareaForm } from './styles';

export default class Textarea extends Component {
  render() {
    return (
      <>
        <TextareaForm
          placeholder={this.props.placeholder}
          name={this.props.name}
          type={this.props.type}
        />
      </>
    );
  }
}
