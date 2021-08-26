import React from 'react'
import styled from 'styled-components'

const ModalBackground = styled.div` /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4);
`
const ModalContainer = styled.div`
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
`
const Button = styled.button`
    color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  border-radius: 50%;
  &:hover,:focus{
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`
const Title = styled.div`

`
const Body = styled.div`

`
const Footer = styled.div`
    flex: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`
//Passou uma função igual props.
export default function Modal(props) {

    /* useEffect(()=>{
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${props.text}`)
        .then(res => res.json())
        .then(json => console.log(json.drinks))
    },[]) */
    
    return(
        <ModalBackground>
            <ModalContainer>
                <Button onClick={()=>{props.closeModal(false)}}> X </Button>
                <Title>
                    <h1>{props.text}</h1>
                </Title>
                <Body>
                    <p>Em contrução</p>
                </Body>
                <Footer>
                    <button onClick={()=>{props.closeModal(false)}}>Cancel</button>
                    <button>Continue</button>
                </Footer>
            </ModalContainer>
        </ModalBackground>
    );
}
