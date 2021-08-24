import styled from 'styled-components';

export const PortalHomeContainer = styled.section`
  height: 550px;

  display: flex;
  align-items: center;
  background-color: rgba(14, 41, 64);
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
`;

export const BalaoP = styled.p`
  text-align: center;
  margin-bottom: 20px;
  color: black;
  width: 100px;
  @media (min-width: 1400px) {
    margin-right: 25%;
  }
`;

export const DivDesenho = styled.div`
  margin-left: 100px;
  position: relative;
  height: 450px;
  border: 2px solid #49f2c2;
  border-radius: 10px;
  width: 400px;
  background: url('https://i.pinimg.com/564x/4f/da/8e/4fda8e9a7be6a9ae7c5dc96ce811337c.jpg');
`;
