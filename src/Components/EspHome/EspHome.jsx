import React from 'react';
import { DivCard, EspCard, EspHomeContainer, Img, DivTitulo } from './styles';
import card3Img from '../../assets/card-3-home.png';
import card2Img from '../../assets/card-2-home.png';
import card4Img from '../../assets/card-4-home.png';
import card1Img from '../../assets/card-1-home.png';

export default function EspHome() {
  return (
    <EspHomeContainer>
      <DivTitulo width="20%">
        <h1>Especialidades</h1>
      </DivTitulo>
      <DivCard>
        <EspCard>
          <Img src={card1Img} />
          <DivTitulo width="50%" marginLeft="62px">
            <h1>Exames Especializados</h1>
          </DivTitulo>
          <p>
            Exames especiais para ter o melhor diagnóstico para você ter o
            tratamento adequado.
          </p>
        </EspCard>
        <EspCard>
          <Img src={card2Img} />
          <DivTitulo width="50%" marginLeft="62px">
            <h1>Restauração Dentária</h1>
          </DivTitulo>
          <p>
            Restaurações da melhor qualidade para recuperar o seu dente que foi
            afetado por alguma razão.
          </p>
        </EspCard>
        <EspCard>
          <Img src={card3Img} alt="card3" />
          <DivTitulo width="50%" marginLeft="62px">
            <h1>Aparelho Ortodôntico</h1>
          </DivTitulo>
          <p>
            Um dos tratamentos mais comuns, temos aparelhos de todas as formas
            que deseja.
          </p>
        </EspCard>
        <EspCard>
          <Img src={card4Img} />
          <DivTitulo width="53.5%" marginLeft="62px">
            <h1>Remoção de Cáries</h1>
          </DivTitulo>
          <p>
            Médicos totalmente capacitados para acabar com o seu problema sem
            você ficar sentindo dores.
          </p>
        </EspCard>
      </DivCard>
    </EspHomeContainer>
  );
}
