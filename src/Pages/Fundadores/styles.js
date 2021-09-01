import styled from "styled-components";

export const Container = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr ;
    gap: 30px;
 
    background-color: rgba(14,41,64);
    >img{
    max-width: 400px;
    max-height: 160px;
    padding: 20px;
    
}
`

export const Card = styled.div`
    margin:20px;
    border-radius: 20px;
    border: 0.5px solid #5ef2d7;
    background-color: #081226;
    padding: 20px;
    color: #49f2c2;
>img{
    max-width: 400px;
    max-height: 180px;
    padding: 20px;
}
`
export const Div = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1px;
    >p{
        margin-left: 5%;
    }
    >img{
    max-width: 30px;
    max-height: 30px;
    
}
`