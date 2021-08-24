import React, { Component } from 'react'

//Moment
import moment from 'moment'

//Components
import InputCadastro from '../../Components/FormCadastro/InputCadastro/InputCadastro'
import ButtonCadastro from '../../Components/FormCadastro/ButtonCadastro/ButtonCadastro'
import {MainCadastro} from '../../Components/FormCadastro/MainCadastro/MainCadastro'
import {TitleCadastro} from '../../Components/FormCadastro/TitleCadastro/TitleCadastro'
import {ImgCadastro} from '../../Components/FormCadastro/ImgCadastro/ImgCadastro'
import {FormsCadastro} from '../../Components/FormCadastro/FormsCadastro/FormsCadastro'
import {SpanMens} from '../../Components/FormCadastro/Span/Span'


//img
import imgCadastro from '../../assents/imgCadastro.jpeg'

export default class CadastroPaciente extends Component {
    constructor(props){
        super(props)
        this.state = {
            nome : "",
            email: "",
            data_nascimento: "",
            cpf: "",
            endereco: "",
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
                if(event.target.value.length > 4)
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
            case "endereco" :
                this.setState({endereco : event.target.value})
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
    handleSubmit = (event) =>{
        event.preventDefault()
        let json = {
            nome : this.state.nome,
            email : this.state.email,
            data_nascimento: this.state.data_nascimento,
            cpf: this.state.cpf,
            endereco: this.state.endereco,
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
        fetch('https://projeto-dentista-api-m4.herokuapp.com/paciente',requestOptions)
        .then(response => response.json())
        .then(json => this.confirmaDados(json))
    }
    confirmaDados = (json) =>{
        console.log(json)
    }

    render() {
        return (
            <MainCadastro>
                <TitleCadastro>Cadastro:</TitleCadastro>
                <ImgCadastro src={imgCadastro} alt="imagem Cadastro"/>
                <FormsCadastro onSubmit={this.handleSubmit}>
                    {/* Nome */}
                    <InputCadastro type="text" name="nome" placeholder=" nome completo" onChange={this.handleInputChange}>Nome: </InputCadastro>
                    { this.state.NomeInvalido === true && <SpanMens>Nome inválido</SpanMens>}
                    {/* Email */}
                    <InputCadastro type="email" name="email" placeholder=" seuemail@email.com" onChange={this.handleInputChange}>Email: </InputCadastro>
                    { this.state.EmailInvalido === true && <SpanMens>Email Inválido</SpanMens>}
                    {/* Data Nascimento */}
                    <InputCadastro style={{textAlign: "center"}} type="date" name="data_nascimento" onChange={this.handleInputChange}>Data de Nascimento: </InputCadastro>
                    { this.state.Data_nascimentoInvalido === true && <SpanMens>Data de Nascimento Inválida</SpanMens>}
                    {/* CPF */}
                    <InputCadastro type="text" name="cpf" placeholder=" 000.000.000-00" onChange={this.handleInputChange}>CPF: </InputCadastro>
                    { this.state.CpfInvalido === true && <SpanMens>CPF Inválido</SpanMens>}
                    {/* Endereço */}
                    <InputCadastro type="text" name="endereco" onChange={this.handleInputChange}>Endereço: </InputCadastro>
                    { this.state.EnderecoInvalido === true && <SpanMens>Endereço Inválido</SpanMens>}
                    {/* Cidade */}
                    <InputCadastro type="text" name="cidade" placeholder=" Rio de janeiro" onChange={this.handleInputChange}>Cidade: </InputCadastro>
                    { this.state.CidadeInvalido === true && <SpanMens>Cidade Inválida</SpanMens>}
                    {/* Telefone */}
                    <InputCadastro type="text" name="telefone" placeholder=" (xx)xxxxx-xxxx" onChange={this.handleInputChange}>Telefone:</InputCadastro>
                    { this.state.TelefoneInvalido === true && <SpanMens>Telefone Inválido</SpanMens>}

                    <ButtonCadastro type="submit">Enviar</ButtonCadastro>
                </FormsCadastro>
            </MainCadastro>
        )
    }
}