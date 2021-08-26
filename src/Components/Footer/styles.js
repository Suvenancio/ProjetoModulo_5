import styled from 'styled-components';

export const Footer = styled.footer`
  background-color: #2e8c7b;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 230px;
  font-family: 'Work Sans', sans-serif;
  color: whitesmoke;
  font-size: 1.2em;
`;

export const Nav = styled.nav`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-self: flex-end;
  align-items: flex-start;
`;
export const Descricao = styled.div`
  display: flex;
  height: 220px;
  font-size: 1;
  flex-direction: column;
  align-items: flex-start;
  width: 95%;
  margin-left: 42px;
  justify-content: space-around;
  p {
    width: 70%;
    text-align: start;
  }
`;
export const Link = styled.a`
  padding: 5px;
  > img {
    justify-content: center;
  }
`;

export const Span = styled.span`
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 12px;
`;
