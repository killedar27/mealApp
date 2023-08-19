import logo from './logo.svg';
import './App.css';
import Itemcard from './homepage';
import { Home } from './authentication/BasicApp';
import HomePage from './homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './authentication/auth_context';
import RouteConfiguration from './router/RouterCofiguration';
import { CartProvider } from './cart/cartProvider';

import Navbars from './navbar';
import { PriceProvider } from './setPrice';
import { OrderProvider } from './order/orderProvider';

function App() {
  return (
    <>
    <AuthProvider>
      <OrderProvider>
      <CartProvider>
      <PriceProvider>
      <BrowserRouter>
        <Navbars/>
        <RouteConfiguration/>
      </BrowserRouter>
      </PriceProvider>
      </CartProvider>
      </OrderProvider>
    </AuthProvider>
      {/* <HomePage/> */}
    </>
  );
}

export default App;
