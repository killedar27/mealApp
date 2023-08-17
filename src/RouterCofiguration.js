import {BrowserRouter,Route,Routes,Redirect,Navigate} from 'react-router-dom'
// import {AboutUs,Products,Events,Services,History,Errorpage} from './simpleRouterDemo';
// import ProtectedRoute from '../authentication/ProtectedRoute';
// import { Home } from '../authentication/BasicApp';
// import { AddProduct, Login, Logout } from '../authentication/BasicApp';
import { CategoryDetail } from './categoryDetails';
import HomePage from './homepage';
// import { Login, Logout } from './authentication/BasicApp';
import ProtectedRoute from './authentication/ProtectedRoute';
import { Login, Logout } from './authentication/BasicApp';
export default function RouteConfiguration(){
    return <>

        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='logout' element={<Logout/>}/>
            {/* <Route path='add' element={<ProtectedRoute component={AddProduct}/>}/> */}
            <Route path='category/:categoryName' element={<CategoryDetail/>}/>
            {/* <Route path='/abc/:xyz' element={<SomeElement/>}/>  whatever you have passed after colon will be treatedas a param and must be imported with same name in destination file*/}
        </Routes>
    </>
}