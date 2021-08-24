import styled,{keyframes} from "styled-components";

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

//Img
export const ImgCadastro = styled.img`
    grid-area: img;
    height: 500px;
    border: 1px solid #141414;
    border-radius: 10%;
    animation: 1.7s ${openMain};
`