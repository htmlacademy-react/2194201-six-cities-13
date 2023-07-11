import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { NUMBER_OFFERS } from './constants';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App numberOffers={NUMBER_OFFERS} />
  </React.StrictMode>
);
