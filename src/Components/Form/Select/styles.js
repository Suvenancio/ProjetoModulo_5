import styled from 'styled-components';

export const SelectForm = styled.select`
  margin-top: 10px;
  margin-left: 5px;
  cursor: pointer;
  background-color: #013a40;
  border-radius: 10px;
  border: 1px solid #49f2c2;
  display: flex;
  width: ${(props) => props.width};
  height: 30px;
  align-items: center;
  flex-direction: row;
  option {
    color: #49f2c2;
  }
  @media (min-width: 1400px) {
    width: 400px;
  }
  &::placeholder {
    color: #49f2c2;
  }
`;

export const LabelForm = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: bold;
  margin-bottom: 10px;
`;
