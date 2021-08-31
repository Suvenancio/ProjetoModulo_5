import React, { useState, useEffect} from 'react'
import Button from '../../Form/Button'
import { useHistory } from 'react-router-dom';

const Excluir = () => {

  
    const history = useHistory()

 const exclui = async () => {

        await fetch('https://projeto-dentista-api-m4.herokuapp.com/paciente/000.000.000-00',{
            method: 'DELETE',            
            headers: {
                "Access-Control-Allow-Origin": "https://projeto-dentista-api-m4.herokuapp.com/paciente",
                "Accept" : "application/json",
                "Content-type": "application/json"
            }
        })

        history.push('/')
    }


    return (
        <div>
           
            <p> Tem certeza que deseja excluir seu cadastro?</p>
                    <Button 
                    onClick={exclui}
                    >Sim</Button> 
                    <Button
                    onClick={() => history.push('/portal') }
                    >Cancelar</Button>
        </div>
    )
}

export default Excluir
