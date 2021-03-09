import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
	<Auth0Provider
		domain="media-plug.us.auth0.com"
		clientId="BJm9VPSj2WT45T9OYTEREVIYDsQvs4mH"
		redirectUri={window.location.origin}
	>
		<App />
	</Auth0Provider>,
	document.getElementById('root')
);


