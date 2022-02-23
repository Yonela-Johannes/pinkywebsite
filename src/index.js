import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import CartState from './context/cart/CartState'

ReactDOM.render(
  <CartState>
  <BrowserRouter>
      <App />
  </BrowserRouter>
  </CartState>,
  document.getElementById('root')
);