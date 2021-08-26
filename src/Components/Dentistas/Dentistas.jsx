import Card from '../Cards/Card'
import { useEffect, useState } from 'react';
import * as S from './Dentistas.styles'


const Dentistas = () => {

    const [api, setApi] = useState([]);
    const [ apiChegou, setApichegou] = useState(false)


    useEffect(()=>{
        fetch('http://damp-journey-22615.herokuapp.com/dentista')
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result)
                setApi(result)
                setApichegou(true)
            }
        )
    },[])

    return(
      
         <S.Container >
            {
            !!api && apiChegou ? (
                api.map((item) =>
                    <Card foto={item.FOTO} nome={item.NOME} 
                    especialidade={item.ESPECIALIDADE} cro={item.CRO}/>
                    
                )
            ) : (<p>Erro ao carregar!</p>)
            }
         </S.Container>      
       
    )
}

export default Dentistas