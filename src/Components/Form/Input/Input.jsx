import React from 'react';
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
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: white;
  &:hover {
    border: 1px solid #415989;
  }
`;

export default function Input(props) {
  return (
    <>
      <LabelForm htmlFor={props.htmlFor}>
        {props.children}
        <InputForm
          type={props.type}
          width={props.width}
          height={props.height}
          name={props.name}
          onChange={props.onChange}
          onClick={props.onClick}
          value={props.value}
          className={props.className}
          style={props.style}
          placeholder={props.placeholder}
        />
      </LabelForm>
    </>
  );
}
