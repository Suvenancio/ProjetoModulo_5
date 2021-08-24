import React, { Component } from 'react'
import styled from 'styled-components';

export const LabelForm = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: bold;
  margin-bottom: 10px;
  color: #49f2c2;
`;

export const InputForm = styled.input`
  margin-top: 10px;
  background-color: #0e2940;
  border-radius: 10px;
  border: 1px solid #49f2c2;
  display: flex;
  width: ${props=> props.width};
  height: ${props=> props.height};
  color: white;
  &:hover {
    border: 1px solid #415989;
  };
`;

export default class Input extends Component {
    render() {
        return (<>
            <LabelForm>{this.props.children} 
            <InputForm type={this.props.type}
            width={this.props.width}
            height={this.props.height}
            name={this.props.name} 
            onChange={this.props.onChange} 
            className={this.props.className}
            style={this.props.style}
            placeholder={this.props.placeholder}/>
            </LabelForm>
        </>)
    }
}