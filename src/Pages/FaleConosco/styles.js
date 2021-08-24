import styled from 'styled-components';
export const Div = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Unidade = styled.ul`
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

export const DivUnidade = styled.div`
  overflow-y: scroll;
  width: 100%;
  &::-webkit-scrollbar {
    width: 10px;
    border-radius: 5px;
    background-color: #49f2c2;
    border: 1px solid #49f2c2;
  }
`;

export const DivButton = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-self: flex-end;
  margin-right: 130px;
`;
