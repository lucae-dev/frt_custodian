import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';

const rootEl = document.getElementById('root');
if (!rootEl) throw new Error('#root container missing in index.html');

ReactDOM
  .createRoot(rootEl)
  .render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );