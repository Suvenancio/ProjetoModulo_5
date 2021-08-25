import styled from 'styled-components';

export const EspHomeContainer = styled.section`
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  background-color: rgba(14, 41, 64);
`;
export const DivCard = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const EspCard = styled.div`
  margin-bottom: 3.5%;
  border-radius: 10px;
  color: #49f2c2;
  height: 413px;
  font-weight: bold;
  flex-direction: column;
  align-items: center;
  box-shadow: rgb(0 0 0 / 25%) 0px 5px 10px;
  border-radius: 8px;
  width: 18.2%;
  background-color: #090922ad;
  /* border: 0px solid #49f2c2; */
  p {
    width: 70%;
    line-height: 1.5;
    text-align: center;
    margin-left: 15%;
  }
`;

export const Img = styled.img`
  margin-top: 15px;
  width: 40%;
`;

export const DivTitulo = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  color: #49f2c2;

  margin-bottom: 30px;
  margin-left: ${(props) => props.marginLeft};
  border-bottom: 3px solid #49f2c2;
  width: ${(props) => props.width};
`;
