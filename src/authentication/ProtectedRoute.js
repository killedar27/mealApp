import { useContext } from "react";
import { useLocation,Navigate } from "react-router-dom";
import { AuthContext } from "./auth_context";

const ProtectedRoute = ({
    component:Component,
    ...props
})=>{
    let {authenticated} = useContext(AuthContext);
    const location  = useLocation();

    if(!authenticated){
        console.log("From Protected Location "+ location);
        return <Navigate to="/login" replace={true}/>
    }else{
        return <Component {...props}/>
    }
}

export default ProtectedRoute;