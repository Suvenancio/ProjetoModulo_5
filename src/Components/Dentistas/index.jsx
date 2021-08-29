import Card from '../Cards/Card'
import { useState } from 'react';
import * as S from './Dentistas.styles';
import Select from '../Form/Select/Select'


const Dentistas = () => {

    const [api, setApi] = useState([]);
    const [select, setSelect] = useState('');
    const [ apiChegou, setApichegou] = useState(false)


  const request = async (e)=>{
    let cidade = e.target.value;
    let res = await fetch('http://damp-journey-22615.herokuapp.com/dentista')
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result)
                setApi(result)
                setSelect(cidade)
                setApichegou(true)
            })
     }       

    return(

         <S.Main >
            <Select
                onChange={request}
                label="Selecione sua cidade e veja os dentistas conveniados"
                width="400px"
            >
                <option>Selecione</option>
                <option value="Curitiba">Curitiba</option>
                <option value="Rio de Janeiro">Rio de Janeiro</option>
                <option value="São Paulo">São Paulo</option>
               
            </Select>
        <S.Container>
            {
            !!api && apiChegou ? (
                api.map((item) => {
                    if (item.CIDADE.includes(select)){
                        return(
                            <Card foto={item.FOTO} nome={item.NOME} 
                                especialidade={item.ESPECIALIDADE} cro={item.CRO}/>

                        )
                    }
                })
            ) : (null)
            }
        </S.Container>  
         </S.Main>      
       
    )
}

export default Dentistas