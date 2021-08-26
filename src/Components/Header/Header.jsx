import React from 'react'
import * as S from './Header.styles'
import portal from '../../assets/portal.png'



const Header = () => {

        return(
            
            <S.Header>   
                <S.Nav>
                    <S.Link> <img src={portal}/> Portal do paciente</S.Link>
                    <S.Link>Fundadores</S.Link> 
                    <S.Link>Cadastre-se</S.Link>
                    <S.Link>Fale Conosco</S.Link>
                </S.Nav>

            </S.Header>
        )
    
}

export default Header