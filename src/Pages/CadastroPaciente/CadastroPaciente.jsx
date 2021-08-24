import React, { Component } from 'react'

//Moment
import moment from 'moment'

//Components
import Input from '../../Components/FormCadastro/Input/Input'
import Button from '../../Components/FormCadastro/Button/Button'
import {Main,Forms,Title,ImgCadastro} from './StyleCadastro'
import {SpanMens} from '../../Components/FormCadastro/Span/Span'


//img
import imgCadastro from '../../assets/imgCadastro.jpeg'

export default class CadastroPaciente extends Component {
    constructor(props){
        super(props)
        this.state = {
            nome : "",
            email: "",
            data_nascimento: "",
            cpf: "",
            bairro: "",
            rua: "",
            cidade: "",
            telefone: "",
            NomeInvalido: false,
            EmailInvalido: false,
            Data_nascimentoInvalido:false,
            CpfInvalido: false,
            EnderecoInvalido:false,
            CidadeInvalido:false,
            TelefoneInvalido:false
        }
    }
    handleInputChange = (event) =>{
        switch (event.target.name){
            case "nome" :
                //Validação Nome
                if(event.target.value.length > 7)
                    this.setState({nome: event.target.value, NomeInvalido : false})
                else
                    this.setState({NomeInvalido : true})
                break
            case "email" :
                //Validação Email - Usando RegEx
                const regEmail = /\w@.+(.com|.com.br)$/g;
                if(event.target.value.match(regEmail) != null)
                    this.setState({email : event.target.value, EmailInvalido : false})
                else
                    this.setState({EmailInvalido : true})
                break
            
            case "data_nascimento" :
                //Validação Data de Nascimento - Usando Moment para pegar as datas.
                const dataNascimento = moment(event.target.value).format("DD/MM/YYYY")
                const dataAtual = moment().format('DD/MM/YYYY')
                if(dataNascimento < dataAtual){
                    this.setState({data_nascimento : dataNascimento, Data_nascimentoInvalido: false})
                }else{
                    this.setState({Data_nascimentoInvalido : true})
                }
                break
            case "cpf" :
                //Validação CPF - Usando RegEx
                const regexCpf = /\d{3}\.\d{3}\.\d{3}-\d{2}/g
                if(event.target.value.match(regexCpf) != null)
                    this.setState({cpf : event.target.value, CpfInvalido : false})
                else
                    this.setState({CpfInvalido : true})
                break
            case "bairro":
                    this.setState({bairro : event.target.value})
                break
            case "rua" :
                this.setState({rua: event.target.value})
                break
            case "cidade" :
                this.setState({cidade : event.target.value})
                break
            case "telefone" :
                //Validr numero de telefone - Usando RegEx
                const regexTelefone = /^\(\d\d\)\s?\d{5}-?\d{4}$/g
                if(event.target.value.match(regexTelefone))
                    this.setState({telefone : event.target.value, TelefoneInvalido:false})
                else
                    this.setState({TelefoneInvalido : true})
                break   
            default :
                throw new Error('Campo Invalido')
        }
    }
    handleSubmit = async (event) =>{
        event.preventDefault()
        let json = {
            nome : this.state.nome,
            email : this.state.email,
            data_nascimento: this.state.data_nascimento,
            cpf: this.state.cpf,
            endereco: `Bairro:${this.state.bairro} Rua:${this.state.rua}`,
            cidade: this.state.cidade,
            telefone: this.state.telefone
        }
        const requestOptions = {
            method: 'POST',
            headers: {
                Accept:"application/json",
                "Content-type": "application/json; charset=utf-8"},
            body: JSON.stringify(json)
        }
        await fetch('https://projeto-dentista-api-m4.herokuapp.com/paciente',requestOptions)
            .then(response => response.json())
            .then(json => this.confirmaDados(json))
    }

    confirmaDados = (json) =>{
       console.log(json)
    }

    render() {
        return (
            <Main>
                <Title>Cadastro:</Title>
                <ImgCadastro src={imgCadastro} alt="imagem Cadastro"/>
                <Forms onSubmit={this.handleSubmit}>
                    {/* Nome */}
                    <Input type="text" name="nome" placeholder=" nome completo" onChange={this.handleInputChange} width="300px" height="30px">Nome: </Input>
                    { this.state.NomeInvalido === true && <SpanMens>Nome inválido</SpanMens>}
                    {/* Email */}
                    <Input type="email" name="email" placeholder=" seuemail@email.com" onChange={this.handleInputChange} width="300px" height="30px">Email: </Input>
                    { this.state.EmailInvalido === true && <SpanMens>Email Inválido</SpanMens>}
                    {/* Data Nascimento */}
                    <Input style={{textAlign: "center"}} type="date" name="data_nascimento" onChange={this.handleInputChange} width="300px" height="30px">Data de Nascimento: </Input>
                    { this.state.Data_nascimentoInvalido === true && <SpanMens>Data de Nascimento Inválida</SpanMens>}
                    {/* CPF */}
                    <Input type="text" name="cpf" placeholder=" 000.000.000-00" onChange={this.handleInputChange} width="300px" height="30px">CPF: </Input>
                    { this.state.CpfInvalido === true && <SpanMens>CPF Inválido</SpanMens>}
                    {/* Bairro */}
                    <Input type="text" name="bairro" placeholder=" Bairro" onChange={this.handleInputChange} width="300px" height="30px">Bairro: </Input>
                    { this.state.EnderecoInvalido === true && <SpanMens>Bairro Inválido</SpanMens>}
                    {/* Rua */}
                    <Input type="text" name="rua" placeholder=" Rua" onChange={this.handleInputChange} width="300px" height="30px">Rua: </Input>
                    { this.state.EnderecoInvalido === true && <SpanMens>Rua Inválida</SpanMens>}
                    {/* Cidade */}
                    <Input type="text" name="cidade" placeholder=" Rio de janeiro" onChange={this.handleInputChange} width="300px" height="30px">Cidade: </Input>
                    { this.state.CidadeInvalido === true && <SpanMens>Cidade Inválida</SpanMens>}
                    {/* Telefone */}
                    <Input type="text" name="telefone" placeholder=" (xx)xxxxx-xxxx" onChange={this.handleInputChange} width="300px" height="30px">Telefone:</Input>
                    { this.state.TelefoneInvalido === true && <SpanMens>Telefone Inválido</SpanMens>}

                    <Button width="150px" height="30px" type="submit">Enviar</Button>
                </Forms>
            </Main>
        )
    }
}