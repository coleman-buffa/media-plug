import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
	<Auth0Provider
		// Use the following for deployment
		// domain={domain}
		// clientId={clientId}
		// redirectUri="https://media-plug.herokuapp.com/explore"

		// Use the following for local testing
		// Make sure to remove secrets before deploying
		domain="media-plug.us.auth0.com"
		clientId="BJm9VPSj2WT45T9OYTEREVIYDsQvs4mH"
		redirectUri={window.location.origin}
	>
		<App />
	</Auth0Provider>,
	document.getElementById('root')
);


