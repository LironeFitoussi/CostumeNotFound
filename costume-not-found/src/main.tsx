import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n.ts'; // Import i18n configuration

// Create root element and render the app
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
