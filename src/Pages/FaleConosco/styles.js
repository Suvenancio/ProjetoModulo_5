import styled, { css } from 'styled-components';

export const Container = styled.main`
  background-color: rgba(14, 41, 64);
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const Lista = styled.ul`
  border-radius: 10px;
  width: 90%;

  li {
    margin-right: 20px;
    background-color: #090922ad;
    width: 100%;
    border: 1px solid #49f2c2;
    border-radius: 10px;
    align-self: center;
    margin-bottom: 10px;
    font-weight: bold;
    list-style: none;
  }
`;
export const Titulo = styled.h1`
  color: #49f2c2;
  font-weight: bold;
  font-size: 42px;
  justify-self: center;
`;

export const Div = styled.div`
  background: ${(props) => props.background};
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justifyContent};
  align-self: ${(props) => props.alignSelf};
  align-items: ${(props) => props.alignItems};
  margin: ${(props) => props.margin};
  width: 100%;
  height: ${(props) => props.height};
  ${(props) =>
    props.scroll === 'active'
      ? css`
          overflow-y: scroll;
          &::-webkit-scrollbar {
            width: 10px;
            border-radius: 5px;
            background-color: #49f2c2;
            border: 1px solid #49f2c2;
          }
        `
      : ''}
`;
export const Error = styled.span`
  color: red;
  font-weight: bold;
  font-size: 14px;
  text-shadow: 1px 1px black;
  line-height: 1rem;
  align-self: flex-start;
  margin-left: 50px;
`;
