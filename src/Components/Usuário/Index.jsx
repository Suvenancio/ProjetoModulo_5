import React, {useEffect, useState} from 'react';
import * as S from './Usuario.styles'


const Usuario = () => {

    const [ api, setApi] = useState([])
    const [ apiChegou, setApichegou] = useState(false)

    useEffect((x) => {
        fetch(`https://projeto-dentista-api-m4.herokuapp.com/paciente`)
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result)
                setApi(result)
                setApichegou(true)
            })
   
    }, [])



    return (

        <S.Main>

            { !!api && apiChegou ? (
                api.map((item) => {
                    if(item.CPF == '111.111.111-01')
                    return(
                        <div>
                        <p>Nome: {item.NOME}</p>
                        <p>Email: {item.EMAIL}</p>
                        <p>Data de nascimento: {item.Data_Nascimento}</p>
                        <p>CPF:{item.CPF}</p>
                        <p>Endereço: {item.ENDERECO}, {item.CIDADE}</p>
                        <p>Telefone: {item.TELEFONE}</p>
                        </div>
                        )
                    }
                )
            ) : (null)
            }
        </S.Main>
    
    )
}

export default Usuario
