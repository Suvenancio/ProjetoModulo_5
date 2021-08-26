import styled, { css } from 'styled-components';

export const Container = styled.main`
  background-color: rgba(14, 41, 64);
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const Lista = styled.ul`
  border: 1px solid #49f2c2;
  background-color: #013a40;
  border-radius: 10px;
  width: 90%;
  margin-left: 10px;
  li {
    font-weight: bold;
    list-style: none;
  }
`;

export const Div = styled.div`
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justifyContent};
  align-self: ${(props) => props.alignSelf};
  margin: ${(props) => props.margin};
  width: 100%;
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
