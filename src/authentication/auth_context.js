import {createContext,useContext,useState} from 'react';

export const AuthContext = createContext();


export const AuthProvider = ({...props}) => {
    const [authenticated,setAuthenticated]=useState(false);

    const login = () => {
        setAuthenticated(true);
    }

    const logout = ()=>{
        setAuthenticated(false);
    }
    return (<AuthContext.Provider value={{login,logout,authenticated}} {...props}/>)
}

