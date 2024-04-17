import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';

const handleSubmit = data => {
  console.log('Form submitted with data:', data);
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
