import styled from 'styled-components';

export const MedicoHomeContainer = styled.section`
  height: 350px;
  background-image: url('https://blog.pitagoras.com.br/wp-content/uploads/2020/04/original-4842418e8bdceabd26b67abfe3b6e521.jpg');
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: cover;
`;

export const TituloMedico = styled.p`
  font-style: italic;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 24px;
  line-height: 20px;
  color: white;
  text-shadow: 2px 2px 2px rgba(14, 41, 64);
`;

export const DescMedico = styled.p`
  font-family: Verdana, sans-serif;
  font-size: 20px;
  line-height: 1.5;
  color: white;
  text-shadow: 2px 2px 2px rgba(14, 41, 64);
`;

export const CardMedicoHome = styled.div`
  width: 20%;
  padding: 20px;
  padding-top: 30px;
`;

export const ButtonCardMedico = styled.button`
  border: 3px solid #49f2c2;
  height: 50px;
  background-color: Transparent;
  background-repeat: no-repeat;
  font-size: 16px;
  color: white;
  text-shadow: 2px 2px 2px rgba(14, 41, 64);

  cursor: pointer;
  &:hover {
    width: 218px;
  }
`;
