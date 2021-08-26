import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import './scss/global.css';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-1olg8n5r.us.auth0.com"
      clientId="pFSiz98Zu6wdb362MviU8yBV3mHrLYfs"
      redirectUri={window.location.origin}
      audience="https://euro-trip/"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
