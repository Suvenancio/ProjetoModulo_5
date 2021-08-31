import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Card } from '../Cards/Cards.styles'
import Input from '../Form/Input'

const Editar = () => {

    const [ nome, setNome] = useState('')
    const [ email, setEmail] = useState('')
    const [ nascimento, setNascimento] = useState('')
    const [ cpf, setCpf] = useState('')
    const [ endereco, setEndereco] = useState('')
    const [ cidade, setCidade] = useState('')
    const [ telefone, setTelefone] = useState('')    
    const [ status, setStatus] = useState({
        type:'',
        mensagem: ''
    })

   
    useEffect(() => {
        fetch('https://projeto-dentista-api-m4.herokuapp.com/paciente/222.222.222-02')
        .then((res) => res.json())
        .then((result) => {
            setNome(result.NOME)
            setEmail(result.EMAIL)
            setNascimento(result.Data_Nascimento)
            setCpf(result.CPF)
            setEndereco(result.ENDERECO)
            setCidade(result.CIDADE)
            setTelefone(result.TELEFONE)

        })
    }, [])
 
    
    const edit = async e => {
       e.preventDefault()
        console.log(nome, email, cpf, endereco, cidade, telefone)
               

        await fetch('https://projeto-dentista-api-m4.herokuapp.com/paciente/222.222.222-02',{
            method: 'PATCH',            
            headers: {
    
                "Access-Control-Allow-Origin": "https://projeto-dentista-api-m4.herokuapp.com/paciente",
                "Accept" : "application/json",
                "Content-type": "application/json"

            },
            body: JSON.stringify({nome, email, nascimento, cpf, endereco, cidade, telefone})
            

        }).then((res) => res.json())
        .then((result) => {
            console.log(result)
            if(result.erro){
                setStatus({
                    type:'erro',
                    mensagem: result.mensagem
                })
            }else{
                setStatus({
                    type:'success',
                    mensagem: result.mensagem
                })
            }
        }).catch(() => {
            setStatus({
                type:'success',
                mensagem: 'Cadastro não alterado, tente novamente mais tarde1'
            })
        })
            
    }

    return ( <>

        <form onSubmit={edit}>
            <Input 
            value={nome}
            onChange={ e => setNome(e.target.value)}
            />
            <Input
                value={email}
                onChange={ e => setEmail(e.target.value)}
                />
            <Input 
                value={nascimento}
                onChange={ e => setEmail(e.target.value)}
            />
            <Input 
                value={cpf}
                onChange={ e => setCpf(e.target.value)}
            />
            <Input
                value={endereco}
                onChange={ e => setEndereco(e.target.value)}
            />
            <Input
                value={cidade}
                onChange={ e => setCidade(e.target.value)}
            />
            <Input
                value={telefone}
                onChange={ e => setTelefone(e.target.value)}
            />

            <button>Clique</button>
        </form>    
            
            </>
    )
}

export default Editar
