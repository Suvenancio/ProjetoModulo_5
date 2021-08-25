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
//Main
export const Main = styled.main`
    display: grid;
    grid-template-areas: 
    "title title"
    "img form";
    align-items: center;
    gap: 20px;
    padding-bottom: 10px;
    justify-content: center;
    background: #0e2940;
`
//Forms
export const Forms = styled.form`
    grid-area: form;
    border: 1px solid #141414;
    border-radius: 5%;
    background: #090922ad;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: 1s ${openMain};
`
//titulo:
export const Title = styled.h1`
    color: #49f2c2;
    grid-area: title;
`
//Img
export const ImgCadastro = styled.img`
    grid-area: img;
    height: 550px;
    border: 1px solid #141414;
    border-radius: 10%;
    animation: 1.7s ${openMain};
`
//Span
export const SpanMens = styled.span`
    color : red;
`