import React,{useState} from 'react';
import * as S from './Header.styles';
import portal from '../../assets/portal.png';

//Parte Modal.
import Modal from '../../Components/ModalContainer'
import CadastroPaciente from '../../Components/CadastroPaciente/CadastroPaciente'
import Login from '../../Components/Login/Login'

const Header = () => {
  const [loginModal,setLoginModal] = useState(false)
  const [cadastroModal, setCadastroModal] = useState(false)

  return (
    <S.Header>
      <S.Nav>
        <S.Link onClick={()=>{setLoginModal(true)}}>
          {' '}
          <img src={portal} alt="portal" /> Portal do paciente
        </S.Link>
        {loginModal && <Modal setOpenModal={setLoginModal} page={<Login/>}/>}
        <S.Link>Fundadores</S.Link>
        <S.Link onClick={()=>{setCadastroModal(true)}}>Cadastre-se</S.Link>
        {cadastroModal && <Modal setOpenModal={ setCadastroModal} page={<CadastroPaciente/>}/>}
        <S.Link>Fale Conosco</S.Link>
      </S.Nav>
    </S.Header>
  );
};

export default Header;
