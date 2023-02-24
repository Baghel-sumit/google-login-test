import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId='299371230166-lig3tagbr72km5b15kcsemqcrb142kj2.apps.googleusercontent.com'>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
