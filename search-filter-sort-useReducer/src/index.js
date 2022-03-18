import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './contexts/Context';

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <CartProvider>
    <App />
    </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
