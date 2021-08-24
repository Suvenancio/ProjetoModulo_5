import React, { Component } from 'react'

import styled from 'styled-components';

export const ButtonGlobal = styled.button`
  margin-left: 250px;
  width: ${props => props.width}; //150px
  height: ${props => props.height}; // 30px
  border-radius: 5px;
  border: 1px solid #49f2c2;
  background: #49f2c2;
  cursor: pointer;
  &:hover {
    background:linear-gradient(to bottom, #468ccf 5%, #63b8ee 100%);
	  background-color:#468ccf;
  };
  &:active{
    position:relative;
	  top:1px;
  }
`;

export default class Button extends Component {
    render() {
        return (<>
            <ButtonGlobal width={this.props.width}
            height={this.props.height}
            type={this.props.type} 
            onClick={this.props.onClick}
            className={this.props.className}
            >{this.props.children}</ButtonGlobal>
        </>)
    }
}
