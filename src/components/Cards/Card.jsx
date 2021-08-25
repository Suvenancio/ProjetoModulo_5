import React, { Component } from 'react'
import * as S from './Cards.styles'


const Card = (props) => {
 
        return(
            <S.Card>
                <img  src={props.foto}/>
                <div>
                    <p>{props.nome}</p>
                    <p>{props.especialidade}</p>
                    <p>{props.cro}</p>
                </div>
        </S.Card>
        )
    
}

export default Card