import styled from 'styled-components';

export const Card = styled.main`
  border-radius: 20px;
  border: 0.5px solid #5ef2d7;
  background-color: #013a40;
  display: flex;
  flex-direction: row;
  color: lavender;
  margin: 15px;
  > img {
    width: 50%;
  }
  > div {
    display: flex;
    flex-direction: column;
  }
`;
