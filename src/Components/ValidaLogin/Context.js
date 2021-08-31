import React, {createContext, useState} from 'react';

const Context = createContext();


function AuthProvider({ children }) {
    const [token,setToken] = useState(false)
    const [usuario, setUsuario] = useState(null)


    return(
        <Context.Provider value={{token,setToken, usuario, setUsuario}}>
        {children}
        </Context.Provider>
    )
}

export {Context,AuthProvider}