import React from 'react';
import Sidebar from './Sidebar';
import Comment from './Posts/Comment';
import styled from 'styled-components';

function Chatify() {
	return (
		<Container>
			<Sidebar />
			<Comment />
		</Container>
	);
}

export default Chatify;

const Container = styled.div`
	display: flex;
	width: 100%;
	flex-direction: row;
`;
