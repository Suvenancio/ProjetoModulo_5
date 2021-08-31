import React, {useState} from 'react'
import Button from '../Form/Button'
import Excluir from '../Modals/Excluir'
import Modal from '../Modals/ModalContainer'

 const Delete = () => {

    const [ isVisible, setIsVisible] = useState(false)
    return (
        <div>
            <Button onClick={() => setIsVisible(true)}>Excluir perfil</Button>

            {isVisible &&
                <Modal 
                page={<Excluir />}
                />
            }
        </div>
    )
}

export default Delete