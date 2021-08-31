import styled from 'styled-components';

export const Container = styled.div`
    background-color: #0e2940;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 20px;

`;
export const Main = styled.main`
    background-color: #0e2940;
    color: white;

    
    >label{
      align-items: center;
      font-size: 1.5em;
      padding: 10px;
      justify-content: space-between;
    }
`
