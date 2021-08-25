import React from 'react';
import {
  ButtonCardMedico,
  CardMedicoHome,
  DescMedico,
  MedicoHomeContainer,
  TituloMedico,
} from './styles';

export default function MedicoHome() {
  return (
    <MedicoHomeContainer>
      <CardMedicoHome>
        <TituloMedico>"Um sorriso muda tudo!"</TituloMedico>
        <DescMedico>
          Nós temos médicos de todos os departamentos para deixar ainda mais
          perfeito a curva mais bonita do ser humano: o SORRISO!
        </DescMedico>
        <ButtonCardMedico>Conheça nossos doutores!</ButtonCardMedico>
      </CardMedicoHome>
    </MedicoHomeContainer>
  );
}