import React from 'react';
import bg from '../../img/chatifylanding.jpg';
import styled from 'styled-components';

const ChatifyLanding = () => {
	return (
		<Container>
			<h1>Welcome to Chat||fy</h1>
			<h3>Let's start a frienship</h3>
		</Container>
	);
};

export default ChatifyLanding;

const Container = styled.div`
	background: url(${bg});
	background-repeat: no-repeat;
	background-size: cover;
	width: 100vw;
	height: 100vh;
	min-width: 500px;
	overflow: hidden;
	margin: 0 auto;
	h1 {
		font-size: 9rem;
		width: 100%;
		font-weight: bold;
		text-align: center;
		color: ${(props) => props.theme.active};
		margin: 200px 0 0 0;
	}
	h3 {
		font-size: 6rem;
		width: 100%;
		font-weight: bold;
		text-align: center;
		color: ${(props) => props.theme.inactive};
		margin: 6px 0 0 0;
	}
`;
