import React,{useState} from 'react'
import Modal from '../../Components/ModalContainer'
import CadastroPaciente from '../../Pages/CadastroPaciente/CadastroPaciente'

export default function ModalPage() {
    const [openModal,setOpenModal] = useState(false)

    return (<div>
        <button onClick={()=>{setOpenModal(true)}}>Cadastre-se</button>
        {openModal && <Modal setOpenModal={setOpenModal}><CadastroPaciente/></Modal>}
    </div>)
}
