import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './Routes';
import './index.css';
import { LanguageProvider } from './src/context/LanguageContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <LanguageProvider>
      <AppRoutes />
    </LanguageProvider>
  </React.StrictMode>
);