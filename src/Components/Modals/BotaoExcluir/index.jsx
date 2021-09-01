import React, { useContext } from 'react';
import Button from '../../Form/Button';
import { useHistory } from 'react-router-dom';
import { Context } from '../../ValidaLogin/Context';

const Excluir = () => {
  const { setUsuario, setLogado, usuario } = useContext(Context);
  const history = useHistory();

  const exclui = async () => {
    await fetch(
      `https://projeto-dentista-api-m4.herokuapp.com/paciente/${usuario.CPF}`,
      {
        method: 'DELETE',
        headers: {
          'Access-Control-Allow-Origin':
            'https://projeto-dentista-api-m4.herokuapp.com/paciente',
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
      }
    );
    setLogado(false);
    setUsuario(null);
    history.push('/');
  };

  return (
    <div>
      <p> Tem certeza que deseja excluir seu cadastro?</p>
      <Button onClick={exclui}>Sim</Button>
      <Button onClick={() => history.push('/portal')}>Cancelar</Button>
    </div>
  );
};

export default Excluir;
