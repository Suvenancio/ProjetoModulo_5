import React from 'react'

import styled from 'styled-components';

const ButtonGlobal = styled.button`
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

export default function Button (props) {
        return (
            <ButtonGlobal width={props.width}
            height={props.height}
            type={props.type} 
            onClick={props.onClick}
            className={props.className}
            >{props.children}</ButtonGlobal>
        )
}
