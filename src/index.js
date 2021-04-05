import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';


const domain = "dev-m1x3x0b0.us.auth0.com"
const clientId = "84Wtb82oKQJWwg94hZxo3hM3XGz31cco"

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider 
      domain = { domain }
      clientId = { clientId }
      redirectUri = {window.location.origin} 
    >
      
      <App>
      
      </App>
    </Auth0Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
