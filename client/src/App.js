import React, { Component } from 'react';
// styling
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './globalStyle';
// libraries
import { Route, Switch } from 'react-router-dom';
// components
import Landing from './components/landing/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import PrivateRoute from './components/common/PrivateRoute';

const App = (history) => {
	return (
		<div>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<connectedRouter history={history}>
					<div>
						<Route exact path="/" component={Landing} />
						<Route exact path="/register" component={Register} />
						<Route exact path="/login" component={Login} />
					</div>
				</connectedRouter>
			</ThemeProvider>
		</div>
	);
};

export default App;
