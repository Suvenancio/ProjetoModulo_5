import styled from 'styled-components';

export const Header = styled.header`
  background-color: #2e8c7b;
  width: 100%;
  height: 80px;
  font-family: 'Work Sans', sans-serif;
  color: whitesmoke;
  font-size: 1.2em;
  > img {
    max-width: 120px;
    max-height: 60px;
  }
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const Link = styled.a`
  padding: 20px;
  > img {
    justify-content: center;
  }
`;
