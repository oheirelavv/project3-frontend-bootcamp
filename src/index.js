import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN}
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
    authorizationParams={{
      // redirect_uri: window.location.origin
      redirect_uri: 'http://localhost:3001c/profile'
      // audience: 'http://localhost:3000', //backend server
      // scope: 'read:current_user'
    }}>
    <App />
  </Auth0Provider>
);
