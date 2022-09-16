import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { RoutesProvider } from './router';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RoutesProvider />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
