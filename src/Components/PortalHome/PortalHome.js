import React, { Component } from 'react';
import {
  BalaoHome,
  BalaoP,
  DivDesenho,
  PortalHomeContainer,
  CardLoginHome,
} from './styles';
import Button from '../Form/Button/Button';

export default class PortalHome extends Component {
  render() {
    return (
      <PortalHomeContainer>
        <DivDesenho />
        <BalaoHome>
          <BalaoP>Agora com portal do cliente!</BalaoP>
        </BalaoHome>
        <CardLoginHome>
          <p>Faça o login e agende sua avaliação!</p>
          <Button type="submit" nome="Login" width="100px" />
        </CardLoginHome>
      </PortalHomeContainer>
    );
  }
}
