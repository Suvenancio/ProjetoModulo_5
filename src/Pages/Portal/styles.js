import styled, { css } from 'styled-components';
export const Container = styled.main`
  background-color: rgba(14, 41, 64);
`;
export const Section = styled.section`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const Div = styled.div`
  display: flex;
  background: ${(props) => props.background};
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  align-self: ${(props) => props.alignSelf};
  ${(props) =>
    props.scroll === 'active'
      ? css`
          overflow-y: scroll;
          &::-webkit-scrollbar {
            width: 10px;
            border-radius: 5px;
            background-color: #49f2c2;
          }
        `
      : ''};
`;

export const Lista = styled.ul`
  padding: 0;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  display: flex;
  flex-wrap: wrap;
  color: #49f2c2;
  align-items: flex-start;
  justify-content: center;
  li {
    display: flex;
    margin: 10px;
    flex-direction: column;
    align-items: ${(props) => (props.pCentro ? 'center' : '')};
    background-color: #090922ad;
    width: 100%;
    width: ${(props) => props.widthItem};
    border: 1px solid #49f2c2;
    border-radius: 10px;
    text-align: ${(props) => (props.pCentro ? 'center' : '')};
    font-weight: bold;
    list-style: none;

    > p {
      margin-left: 10px;
    }
  }
`;

export const Titulo = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.background};
  display: flex;
  text-align: center;
  border-radius: 50%;

  flex-direction: ${(props) => props.flexDirection};
  justify-content: center;
  align-self: center;
  margin-bottom: 15px;
  color: #49f2c2;

  p {
    padding: ${(props) => props.padding};
    border-bottom: 3px solid #49f2c2;
    ${(props) =>
      props.aConsulta
        ? css`
            border: none;
            line-height: 1.5;
          `
        : ''}
    margin-top: 10px;

    font-weight: bold;
  }
  font-size: ${(props) => props.fontSize};
`;
