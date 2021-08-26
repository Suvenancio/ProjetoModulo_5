import React from 'react';
import {
  BalaoHome,
  BalaoP,
  DivDesenho,
  PortalHomeContainer,
  CardPortal,
  DivP,
} from './styles';
import Button from '../Form/Button/Button';

export default function PortalHome() {
  return (
    <PortalHomeContainer>
      <DivDesenho />
      <BalaoHome>
        <BalaoP>Agora com portal do cliente!</BalaoP>
      </BalaoHome>
      <CardPortal>
        <DivP>
          <h1>Faça o login e agende sua avaliação!</h1>
        </DivP>
        <Button type="submit" height="40px" width="100px">
          Login
        </Button>
      </CardPortal>

      <CardPortal>
        <DivP>
          <h1>Ou cadastre-se e tenha vários benefícios!</h1>
        </DivP>
        <Button type="submit" height="40px" width="100px">
          Cadastrar
        </Button>
      </CardPortal>
    </PortalHomeContainer>
  );
}
