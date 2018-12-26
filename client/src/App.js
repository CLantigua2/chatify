import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './globalStyle';

class App extends Component {
	render() {
		return (
			<div>
				<GlobalStyle />
				<ThemeProvider theme={theme}>
					<h1>hello world</h1>
				</ThemeProvider>
			</div>
		);
	}
}

export default App;
