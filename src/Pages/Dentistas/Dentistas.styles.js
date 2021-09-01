import styled, { keyframes } from 'styled-components';

const openMain = keyframes`
    from{
        opacity: 0;
        transform: translateX(-20px)
    }to{
        opacity: 1;
    }
}
`;

export const Container = styled.div`
  background-color: #0e2940;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 20px;
  animation: 1s ${openMain};
`;
export const Div = styled.div`
  align-items: center;
  background: ${(props) => props.background};
  display: flex;
  flex-direction: row;
  height: ${(props) => props.height};
  justify-content: center;
  margin: ${(props) => props.margin};
  padding: 30px 0;
  width: 100%;
  animation: 1s ${openMain};
  @media (max-width: 476px) {
    flex-direction: column;
    height: auto;
  }
`;
export const Titulo = styled.h1`
  color: #49f2c2;
  font-size: 42px;
  font-weight: bold;
  justify-self: center;
`;
