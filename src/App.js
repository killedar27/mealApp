import logo from './logo.svg';
import './App.css';
import Itemcard from './homepage';
import { Home } from './authentication/BasicApp';
import HomePage from './homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './authentication/auth_context';
import RouteConfiguration from './RouterCofiguration';

function App() {
  return (
    <>
    <AuthProvider>

    <BrowserRouter><RouteConfiguration/></BrowserRouter>
    </AuthProvider>
      {/* <HomePage/> */}
    </>
  );
}

export default App;
