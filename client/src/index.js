import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './redux/store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './redux/actions/authActions';
import { clearCurrentProfile } from './redux/actions/profileActions';

// check for token
if (localStorage.jwt) {
	// set auth token header to auth
	setAuthToken(localStorage.jwt);
	// decode token and get user info
	const decoded = jwt_decode(localStorage.jwt);
	// set user and isAuthenticated
	store.dispatch(setCurrentUser(decoded));

	// check for expired token
	const currentTime = Date.now() / 1000;
	if (decoded.exp < currentTime) {
		// logout user
		store.dispatch(logoutUser());
		// clear current profile
		store.dispatch(clearCurrentProfile());
		// Redirect to login
		window.location.href = '/login';
	}
}

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
