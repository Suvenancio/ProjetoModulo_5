import Card from '../../Components/Cards';
import { useEffect, useState } from 'react';
import * as S from './Dentistas.styles';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Banner from '../../Components/Banner';
import imgBanner from '../../assets/banner-dentistas.jpg';
const Dentistas = () => {
  const [api, setApi] = useState([]);
  const [apiChegou, setApichegou] = useState(false);

  useEffect(() => {
    fetch('https://damp-journey-22615.herokuapp.com/dentista')
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setApi(result);
        setApichegou(true);
      });
  }, []);

  return (
    <>
      <Header />
      <Banner
        bannerPositionResponsive="atendimento"
        opacity="0.5"
        bannerPosition="top center"
        url={imgBanner}
      >
        <S.Div
          alignItems="center"
          display="flex"
          justifyContent="center"
          background="rgba(0,0,0,0.7)"
        >
          <S.Titulo>Dentistas</S.Titulo>
        </S.Div>
      </Banner>

      <S.Container>
        {!!api && apiChegou ? (
          api.map((item) => (
            <Card
              foto={item.FOTO}
              nome={item.NOME}
              especialidade={item.ESPECIALIDADE}
              cro={item.CRO}
            />
          ))
        ) : (
          <p>Erro ao carregar!</p>
        )}
      </S.Container>
      <Footer />
    </>
  );
};

export default Dentistas;
