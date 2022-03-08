import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App1 from './App1';
import { TodoProvider } from './Context/TodoContext';

ReactDOM.render(
  <React.StrictMode>
  <TodoProvider>
    <App />
    {/* <App1 /> */}
    </TodoProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
