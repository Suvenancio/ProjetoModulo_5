import React from 'react';
import * as S from './styles.js';
import portal from '../../assets/portal.png';
import linkedin from '../../assets/linkedin.png';
import instagram from '../../assets/instagram.png';
import facebook from '../../assets/facebook.png';

export default function Footer() {
  return (
    <>
      <S.Footer>
        <S.Descricao>
          <h1>Dental Pride</h1>
          <p>
            A Dental Pride nasceu para oferecer a você mais qualidade de vida,
            saúde e muitos sorrisos no seu dia a dia! Nosso objetivo é propagar
            alegria para nossos investidores, colaboradores e, claro, nossos
            pacientes. Acreditamos que tudo que é bom começa com um sorriso,
            inclusive grandes negócios.
          </p>
        </S.Descricao>
        <S.Nav>
          <S.Span>Acesso Rápido</S.Span>
          <S.Link>
            <img src={portal} alt="portal" /> Portal do paciente
          </S.Link>
          <S.Link>Fundadores</S.Link>
          <S.Link>Fale Conosco</S.Link>
          <S.Link>Login</S.Link>
          <S.Link>Cadastre-se</S.Link>
        </S.Nav>
        <S.Nav>
          <S.Span>Redes Sociais</S.Span>
          <S.Link>
            <img src={linkedin} alt="linkedin" />
          </S.Link>
          <S.Link>
            <img src={facebook} alt="facebook" />
          </S.Link>
          <S.Link>
            <img src={instagram} alt="instagram" />
          </S.Link>
        </S.Nav>
      </S.Footer>
    </>
  );
}
