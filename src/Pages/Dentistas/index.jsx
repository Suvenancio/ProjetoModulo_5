import Card from '../../Components/Cards';
import { useState } from 'react';
import * as S from './Dentistas.styles';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Banner from '../../Components/Banner';
import imgBanner from '../../assets/banner-dentistas.jpg';
import Select from '../../Components/Form/Select';

const Dentistas = () => {
  const [api, setApi] = useState([]);
  const [apiChegou, setApichegou] = useState(false);
  const [select, setSelect] = useState('');
  const [loading, setLoading] = useState(false);

  const request = async (e) => {
    setLoading(true);
    let cidade = e.target.value;
    await fetch('https://damp-journey-22615.herokuapp.com/dentista')
      .then((res) => res.json())
      .then((result) => {
        setApi(result);
        setSelect(cidade);
        setApichegou(true);
        setLoading(false);
      });
  };

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

      <S.Main>
        <Select
          onChange={request}
          label="Selecione sua cidade e veja os dentistas conveniados"
          width="400px"
        >
          <option defaultvalue="">Selecione</option>
          <option value="Curitiba">Curitiba</option>
          <option value="Rio de Janeiro">Rio de Janeiro</option>
          <option value="São Paulo">São Paulo</option>
        </Select>
        <S.Container>
          {loading && <S.Loading />}
          {!!api && apiChegou
            ? api.map((item) =>
                item.CIDADE.includes(select) ? (
                  <Card
                    foto={item.FOTO}
                    nome={item.NOME}
                    especialidade={item.ESPECIALIDADE}
                    cro={item.CRO}
                  />
                ) : null
              )
            : null}
        </S.Container>
      </S.Main>

      <Footer />
    </>
  );
};

export default Dentistas;
