import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DAppProvider } from "@usedapp/core";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* We wrap our entire app with DAppProvider to allow access to Eth accounts */}
    <DAppProvider config={{}}>
      <App />
    </DAppProvider>
  </React.StrictMode>
);


reportWebVitals();
