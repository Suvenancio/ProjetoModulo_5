import React from 'react';
import * as S from './Cards.styles';

const Card = (props) => {
  return (
    <S.Card>
      <img src={props.foto} alt="dentista" />
      <div>
        <p>{props.nome}</p>
        <p>{props.especialidade}</p>
        <p>{props.cro}</p>
      </div>
    </S.Card>
  );
};

export default Card;
