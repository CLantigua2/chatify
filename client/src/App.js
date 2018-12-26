import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './globalStyle';
import { Route, Switch } from 'react-router-dom';
import Landing from './components/landing/Landing';
import Register from './components/auth/Register';

class App extends Component {
	render() {
		return (
			<div>
				<GlobalStyle />
				<ThemeProvider theme={theme}>
					<div>
						<Route exact path="/" component={Landing} />
						<Route exact path="/register" component={Register} />
					</div>
				</ThemeProvider>
			</div>
		);
	}
}

export default App;
