import React, { useState, useContext } from 'react';
import * as S from './Header.styles';
import portal from '../../assets/portal.png';
import { useHistory } from 'react-router-dom';

//Parte Modal.
import Modal from '../Modals/ModalContainer';
import CadastroPaciente from '../Modals/CadastroPaciente';
import Login from '../Modals/Login';
import { Context } from '../ValidaLogin/Context';
const Header = () => {
  const [loginModal, setLoginModal] = useState(false);
  const [cadastroModal, setCadastroModal] = useState(false);
  const history = useHistory();
  const { usuario, setUsuario, logado, setLogado } = useContext(Context);

  return (
    <>
      {!logado ? (
        <S.Header>
          <S.Nav>
            <S.Link
              onClick={() => {
                setLoginModal(true);
              }}
            >
              {' '}
              <img src={portal} alt="portal" /> Portal do paciente
            </S.Link>
            {loginModal && (
              <Modal setOpenModal={setLoginModal} page={<Login />} />
            )}
            <S.Link onClick={() => history.push('/fundadores')}>
              Fundadores
            </S.Link>
            <S.Link
              onClick={() => {
                setCadastroModal(true);
              }}
            >
              Cadastre-se
            </S.Link>
            {cadastroModal && (
              <Modal
                cadastro
                setOpenModal={setCadastroModal}
                page={<CadastroPaciente />}
              />
            )}
            <S.Link onClick={() => history.push('/faleconosco')}>
              Fale Conosco
            </S.Link>
          </S.Nav>
        </S.Header>
      ) : (
        <S.Header>
          <S.Nav>
            <S.Link
              onClick={() => {
                history.push(`/portal/${usuario.ID}`);
              }}
            >
              {' '}
              <img src={portal} alt="portal" /> Portal do paciente
            </S.Link>
            <S.Link onClick={() => history.push('/fundadores')}>
              Fundadores
            </S.Link>
            <S.Link onClick={() => history.push('/faleconosco')}>
              Fale Conosco
            </S.Link>
            <S.Link
              onClick={() => {
                setUsuario(null);
                setLogado(false);
                history.push('/');
              }}
            >
              Logout
            </S.Link>
          </S.Nav>
        </S.Header>
      )}
    </>
  );
};

export default Header;
