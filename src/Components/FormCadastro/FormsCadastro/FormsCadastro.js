import styled, { keyframes } from "styled-components";

//Animação
const openMain = keyframes`
    from{
        opacity: 0;
        transform: translateX(-20px)
    }to{
        opacity: 1;
    }
}
`

export const FormsCadastro = styled.form`
    grid-area: form;
    border: 1px solid #141414;
    border-radius: 5%;
    background: #090922ad;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: 1s ${openMain};
`