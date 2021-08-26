import React from 'react';
import Button from '../Form/Button/Button';

import { BannerContainer, CardBanner } from './styles';

export default function BannerHome() {
  return (
    <BannerContainer>
      <CardBanner>
        <h1>Novas unidades em:</h1>
        <h2>Paraná</h2>
        <h2>São Paulo</h2>

        <Button width="160px" height="40px" type="submit">
          Encontre uma unidade!
        </Button>
      </CardBanner>
    </BannerContainer>
  );
}
