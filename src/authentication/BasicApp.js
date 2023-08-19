import { useContext ,useState} from "react";
import {BrowserRouter,Route,Routes,Link,Navigate,useNavigate} from "react-router-dom";
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
    const navigator=useNavigate()
     const [userName, setUserName] = useState()
     const [password, setPassword] = useState()
     const handleLogin= ()=>{
        login(userName,password)
        navigator('/')
     }
    return <>
        <h1>Login Page</h1>
        <input type="text" onChange={(e)=>setUserName(e.target.value)} value={userName}></input>
        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password}></input>
        <button onClick={handleLogin}>Login</button>

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