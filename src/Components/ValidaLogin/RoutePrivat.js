import {Route,Redirect} from 'react-router-dom'
import React,{useContext} from 'react'
import {Context} from './Context'

const RoutePrivat = ({component : Component, ...rest})=> {
    const {token} = useContext(Context);

    return(
        <Route
        {...rest}
        render={()=> token 
            ?<Component {...rest}/>
            :<Redirect to='/'/>
        }
        /> 
    )
}   
export default RoutePrivat