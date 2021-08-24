import React, { Component } from 'react';
import Button from '../Form/Button/Button';

import { BannerContainer, CardBanner } from './styles';

export default class BannerHome extends Component {
  render() {
    return (
      <BannerContainer>
        <CardBanner>
          <h1>Novas unidades em:</h1>
          <h2>Paraná</h2>
          <h2>São Paulo</h2>
          <Button nome="Encontre uma unidade!" width="250px" type="submit" />
        </CardBanner>
      </BannerContainer>
    );
  }
}
