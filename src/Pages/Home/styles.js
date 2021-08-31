import styled from 'styled-components';

export const P = styled.p`
  width: ${(props) => props.width};
  font-style: ${(props) => (props.serif ? 'italic' : '')};
  text-align: center;
  font-family: Verdana, ${(props) => (props.serif ? 'serif' : 'sans-serif')};
  font-size: ${(props) => props.size};
  line-height: ${(props) => props.lineHeight};
  color: ${(props) => (props.transparent ? 'white' : '#49f2c2')};
  text-shadow: 2px 2px 2px rgba(14, 41, 64);
`;

export const Section = styled.section`
  height: 550px;
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: space-around;
  align-items: center;
  background-color: rgba(14, 41, 64);
  @media (max-width: 476px) {
    flex-direction: column;
    height: 1200px;
    :nth-child(2n) {
      justify-content: center;

      height: 2000px;
    }
  }
`;

export const DivDesenho = styled.div`
  position: relative;
  height: 450px;
  box-shadow: rgb(0 0 0 / 25%) 0px 5px 10px;
  border-radius: 10px;
  width: 400px;
  background: url('https://i.pinimg.com/564x/4f/da/8e/4fda8e9a7be6a9ae7c5dc96ce811337c.jpg');
`;

export const BalaoHome = styled.div`
  position: absolute;
  height: 150px;
  align-self: flex-start;
  font-weight: bold;
  display: flex;
  width: 15%;
  left: 27%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: url('https://i.imgur.com/o9MFP5a.png?1');
  background-repeat: no-repeat;
  @media (min-width: 1400px) {
    left: 20%;
  }
  > p {
    text-align: center;
    margin-bottom: 20px;
    color: black;
    width: 100px;
    @media (min-width: 1400px) {
      margin-right: 25%;
    }
  }
  @media (max-width: 476px) {
    width: 41%;
    left: 50%;
    top: 78%;
  }
`;
export const DivCard = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 476px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const Div = styled.div`
  display: flex;
  font-weight: bold;
  justify-content: center;
  align-self: center;
  color: #49f2c2;
  margin-bottom: 30px;
  margin-left: ${(props) => props.marginLeft};
  border-bottom: 3px solid #49f2c2;
  width: ${(props) => props.width};
  > p {
    font-size: 24px;
  }
`;
