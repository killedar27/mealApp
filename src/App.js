import logo from './logo.svg';
import './App.css';
import Itemcard from './homepage';
import { Home } from './authentication/BasicApp';
import HomePage from './homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './authentication/auth_context';
import RouteConfiguration from './RouterCofiguration';
import { CartProvider } from './cart/cartProvider';

import Navbars from './navbar';
import { PriceProvider } from './setPrice';

function App() {
  return (
    <>
    <AuthProvider>
      <CartProvider>
      <PriceProvider>
      <BrowserRouter>
        <Navbars/>
        <RouteConfiguration/>
      </BrowserRouter>
      </PriceProvider>
      </CartProvider>
    </AuthProvider>
      {/* <HomePage/> */}
    </>
  );
}

export default App;
