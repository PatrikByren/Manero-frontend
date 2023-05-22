import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserProvider } from './context/profilecontext/UserContext';
import { ProductProvider } from './context/Productcontext/ProductContext';
import { CartProvider } from './context/Shoppingcartcontext/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
    <ProductProvider>
    <UserProvider>
      <App />
    </UserProvider>
    </ProductProvider>
    </CartProvider>
  </React.StrictMode>
);


