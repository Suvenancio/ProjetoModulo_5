import styled from 'styled-components';

export const ButtonForm = styled.button`
  width: ${(props) => props.width};
  height: 30px;
  border-radius: 5px;
  border: 1px solid #49f2c2;
  background-color: #49f2c2;
  cursor: pointer;
  &:hover {
    background-color: rgba(14, 41, 64, 0.8);
    color: #49f2c2;
  }
`;
