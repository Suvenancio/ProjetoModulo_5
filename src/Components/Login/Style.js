import styled, { keyframes } from "styled-components";

const openMain = keyframes`
    from{
        opacity: 0;
        transform: translateX(-20px)
    }to{
        opacity: 1;
    }
}
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  border: 1px solid #49f2c2;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background: #090922ad;
  margin:5px 30% 5px 30%;
`
export const Title = styled.h1`
  color: #49f2c2;
`;

export const Forms = styled.form`
  grid-area: form;
  border: 1px solid #49f2c2;
  border-radius: 10px;
  background: #090922ad;
  padding: 10px;
  animation: 1s ${openMain};
  margin-bottom: 20px;
  button{
    align-items: center;
    justify-content: center;
  }
`;
export const SpanMens = styled.span`
  color:red;
  font-size: 12px;
`;