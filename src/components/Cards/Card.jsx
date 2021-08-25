import React, { Component } from 'react'
import * as S from './Cards.styles'


const Card = (props) => {
 
        return(
            <S.Card>
                <img  src={props.foto}/>
                    <div>
                        <p>Dr(a) {props.nome}</p>
                        <p>Especialidade : {props.especialidade}</p>
                        <p>CRO : {props.cro}</p>
                    </div>
            </S.Card>
        )
    
}

export default Card