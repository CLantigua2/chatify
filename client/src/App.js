import React from 'react';
// styling
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './globalStyle';
import styled from 'styled-components';
// libraries
import { Route, Switch } from 'react-router-dom';
// components
import Landing from './components/landing/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import PrivateRoute from './components/common/PrivateRoute';
import Comment from './components/chatify/dashboard/Posts/Comment';
import Sidebar from './components/chatify/dashboard/Sidebar';
import ChatifyLanding from './components/landing/ChatifyLanding';
import Dashboard from './components/profile/Dashboard';

const App = () => {
	return (
		<Container>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<div>
					<Route exact path="/" component={Landing} />
					<Route exact path="/register" component={Register} />
					<Route exact path="/login" component={Login} />
					<AppContainer>
						<Switch>
							<PrivateRoute strict path="/chatify" component={Sidebar} />
						</Switch>
						<Switch>
							<PrivateRoute exact path="/chatify" component={ChatifyLanding} />
						</Switch>
						<Switch>
							<PrivateRoute exact path="/dashboard" component={Dashboard} />
						</Switch>
						<Switch>
							<PrivateRoute exact path="/chatify/:id" component={Comment} />
						</Switch>
					</AppContainer>
				</div>
			</ThemeProvider>
		</Container>
	);
};

export default App;
const Container = styled.div`height: 100%;`;
const AppContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
`;
