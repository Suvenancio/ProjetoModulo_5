import React from 'react';
import styled from 'styled-components';

export const SelectForm = styled.select`
  margin-top: 10px;
  margin-left: 5px;
  cursor: pointer;
  background-color: #013a40;
  border-radius: 10px;
  border: 1px solid #49f2c2;
  display: flex;
  width: ${(props) => props.width};
  height: 30px;
  align-items: center;
  flex-direction: row;
  option {
    color: #49f2c2;
  }
  @media (min-width: 1400px) {
    width: ${(props) => props.widthResponsive};
  }
  &::placeholder {
    color: #49f2c2;
  }
`;

export const LabelForm = styled.label`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.labelAlign};
  font-weight: bold;
  margin-bottom: 10px;
`;

export default function Select(props) {
  return (
    <LabelForm labelAlign={props.labelAlign} htmlFor={props.htmlFor}>
      {props.label}
      <SelectForm
        widthResponsive={props.widthResponsive}
        onChange={props.onChange}
        width={props.width}
        name={props.name}
        id={props.id}
      >
        {props.children}
      </SelectForm>
    </LabelForm>
  );
}
