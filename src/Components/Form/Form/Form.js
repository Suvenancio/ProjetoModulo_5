import React, { Component } from 'react';
import Form1 from './styles';

export default class Form extends Component {
  render() {
    return <Form1>{this.props.children}</Form1>;
  }
}
