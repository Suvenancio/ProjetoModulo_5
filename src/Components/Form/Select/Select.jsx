import React from 'react';
import { LabelForm, SelectForm } from './styles';

export default function Select(props) {
  return (
    <LabelForm htmlFor={props.htmlFor}>
      {props.label}
      <SelectForm
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
