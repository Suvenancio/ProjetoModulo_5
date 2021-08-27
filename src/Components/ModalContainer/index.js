import React from 'react'
import styled from 'styled-components'

const ModalBackground = styled.div`
    position: fixed; /* Fique no lugar */
    z-index: 1; /* Sente-se no topo */
    padding-top: 100px; /* Localização da caixa */
    left: 0;
    top: 0;
    width: 100%; /* Largura completa */
    height: 100%; /* Altura */
    overflow: auto; 
    background-color: rgba(0,0,0,0.4);
`
const ModalContainer = styled.div`
    background-color: #141414;
    margin: auto;
    padding: 20px;
    border: 2px solid #49f2c2;
    width: 95%;
    border-radius: 10px;
`
const Button = styled.button`
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    border-radius: 50%;
    &:hover,:focus{
    color: #49f2c2;
    text-decoration: none;
    cursor: pointer;
    }
`

export default function Modal(props) {
    return(
        <ModalBackground>
            <ModalContainer>
                <Button onClick={()=>{props.setOpenModal(false)}}> X </Button>
                {props.page}
            </ModalContainer>
        </ModalBackground>
    );
}
