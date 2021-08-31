import React,{useState,useContext} from 'react'
import Modal from '../../Components/ModalContainer'

import CadastroPaciente from '../../Components/CadastroPaciente/CadastroPaciente'
import Login from '../../Components/Login/Login'

import {Context} from '../../Components/ValidaLogin/Context'

export default function ModalPage() {
    const [loginModal,setLoginModal] = useState(false)
    const [cadastroModal, setCadastroModal] = useState(false)

    const {usuario} = useContext(Context)

    return (<div>
        <div>
        <button onClick={()=>{setCadastroModal(true)}}>Cadastre-se</button>
        {cadastroModal && <Modal setOpenModal={ setCadastroModal} page={<CadastroPaciente/>}/>}
        </div>
        {console.log(usuario)}
        <div>
        <button onClick={()=>{setLoginModal(true)}}>Login</button>
        {loginModal && <Modal setOpenModal={setLoginModal} page={<Login/>}/>}
        </div>
    </div>)
}
