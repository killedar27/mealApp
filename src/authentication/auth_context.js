import {createContext,useContext,useState} from 'react';

export const AuthContext = createContext();


export const AuthProvider = ({...props}) => {
    const [authenticated,setAuthenticated]=useState(true);

    const login = (userName,password) => {
        if(userName==='Admin' && password==='admin')
        setAuthenticated(true);
    }

    const logout = ()=>{
        setAuthenticated(false);
    }
    return (<AuthContext.Provider value={{login,logout,authenticated}} {...props}/>)
}

