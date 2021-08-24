import styled from 'styled-components';

export const BannerContainer = styled.section`
  background-image: url('https://elevareodontologia.com.br/wp-content/uploads/2020/04/elevare_lentes_de_contato_dental.jpg');
  border-bottom: 1px solid #49f2c2;
  background-size: cover;
  background-position: left center;
  height: 350px;
  display: flex;
  font-weight: bold;
  flex-direction: row-reverse;
`;

export const CardBanner = styled.div`
  background-color: rgba(14, 41, 64, 0.8);

  border: 1px solid #49f2c2;
  border-radius: 30px;
  margin-right: 30px;
  margin-top: 20px;
  width: 25%;
  height: 80%;
  color: #49f2c2;
  display: flex;
  justify-content: space-evenly;
  padding: 15px;
  flex-direction: column;
  align-items: center;
`;
