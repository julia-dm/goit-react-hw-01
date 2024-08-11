import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';  // Правильний шлях до App.jsx
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
