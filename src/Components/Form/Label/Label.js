import React, { Component } from 'react';
import { LabelForm } from './styles';

export default class Label extends Component {
  render() {
    return (
      <LabelForm htmlFor={this.props.htmlFor}>{this.props.children}</LabelForm>
    );
  }
}
