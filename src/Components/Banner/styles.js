import styled, { css } from 'styled-components';

export const Container = styled.section`
  background-image: url(${(props) => props.url});
  opacity: ${(props) => props.opacity};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: ${(props) => props.bannerPosition};
  height: 350px;
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  @media (min-width: 1400px) {
    background-position: ${(props) =>
      props.bannerPositionResponsive === 'atendimento'
        ? css`
            background-position: 0%;
            background-position-y: 30%;
            background-position-x: 50%;
          `
        : props.bannerPositionResponsive};
  }
`;
