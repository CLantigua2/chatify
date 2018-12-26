import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './globalStyle';
import { Route } from 'react-router-dom';
import Landing from './components/landing/Landing';

class App extends Component {
	render() {
		return (
			<div>
				<GlobalStyle />
				<ThemeProvider theme={theme}>
					<Route to="/" component={Landing} />
				</ThemeProvider>
			</div>
		);
	}
}

export default App;
