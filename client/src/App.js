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

class App extends Component {
	render() {
		return (
			<div>
				<GlobalStyle />
				<ThemeProvider theme={theme}>
					<div>
						<Route exact path="/" component={Landing} />
						<Route exact path="/register" component={Register} />
						<Route exact path="/login" component={Login} />
					</div>
				</ThemeProvider>
			</div>
		);
	}
}

export default App;
