import { useContext } from "react";
import {BrowserRouter,Route,Routes,Link,Navigate} from "react-router-dom";
import {AuthContext,AuthProvider} from './auth_context';


export const Home = () => {
    const {authenticated} = useContext(AuthContext)
    return <>
        <h1>Home Page</h1>
        <h2>You are {authenticated ? "Logged In" : "Logged Out"}</h2>
        <Link to="/login">Login</Link>
    </>
}

export function Login(){
    const {authenticated,login} = useContext(AuthContext)

    return <>
        <h1>Login Page</h1>
        <button onClick={login}>Login</button>
        <h2>YOu are {authenticated ? "Logged In" : "Logged Out"}</h2>
        <Link to="/add">Add a new Product</Link>
    </>
}

export function Logout(){
    const {authenticated,logout} = useContext(AuthContext)

    return <>
        <h1>Logout Page</h1>
        <button onClick={logout}>Logout</button>
        <h2> You are {authenticated ? "Logged in" : "Logged Out "}</h2>
    </>
}

export function AddProduct(){
    const {authenticated,logout} = useContext(AuthContext)

    return <>
        <h1>Add new Product</h1>
        <button onClick={logout}>Logout</button>
        <h2> You are {authenticated ? "Logged in" : "Logged Out "}</h2>
    </>
}