import React, { Component } from 'react';
import { BalaoHome, BalaoP, DivDesenho, PortalHomeContainer } from './styles';

export default class PortalHome extends Component {
  render() {
    return (
      <PortalHomeContainer>
        <DivDesenho />
        <BalaoHome>
          <BalaoP>Agora com portal do cliente!</BalaoP>
        </BalaoHome>
      </PortalHomeContainer>
    );
  }
}
