import styled from 'styled-components'

export const Card = styled.main`
    border-radius: 20px;
    border: 0.5px solid #5EF2D7;
    background-color: #090922ad;
    display: flex;
    flex-direction: row;
    color: lavender;
    margin: 15px;
    font-size: 1em;
    
    >img{
        width: 30%;
        height: 60%;
    }
    >div{
        display: flex;
        flex-direction: column;
        width: 40%;
        height: 90%;
    }
    >p{
        width: 30%;
    }
`
