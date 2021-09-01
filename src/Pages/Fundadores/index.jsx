import React from 'react';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import su from '../../assets/Su.png';
import daniel from '../../assets/daniel.png';
import igor from '../../assets/igor.png';
import paulo from '../../assets/paulo.png';
import linkedin from '../../assets/linkedin.png';
import * as S from './styles'

export default function Fundadores() {
  return (
    <>
      <Header />
      <S.Container>
       
        <S.Card>
          <img src={su}></img>        
              <p>Suellen Venâncio da Silva</p>
              <p>Desenvolvedora Full Stack</p>
             
              <S.Div>
                <img src={linkedin}/>
                <p>suellenvenancio</p> 
            </S.Div>

        </S.Card>
          

        <S.Card>            
          <img src={daniel}></img>                
          <p>Daniel de Lemos Rocha</p>
          <p>Desenvolvedor Full Stack</p>

            <S.Div>
              <img src={linkedin}/>
              <p>daniel-de-lemos-rocha-dev</p> 
            </S.Div>

        </S.Card>

        <S.Card>            
          <img src={igor}></img>           
          <p>Francisco Igor Rodrigues</p>
          <p>Desenvolvedor Full Stack</p>

              <S.Div>
                <img src={linkedin}/>
                <p>igorrodrigues-dev</p> 
              </S.Div>

        </S.Card>

        <S.Card>            
            <img src={paulo}></img>          
            <p>Paulo Sérgio</p>
            <p>Desenvolvedor Full Stack</p>

              <S.Div>
                <img src={linkedin}/>
                <p>paulo-sergio-jr</p> 
              </S.Div> 

       </S.Card>

      </S.Container>
      <Footer />
    </>
  );
}
