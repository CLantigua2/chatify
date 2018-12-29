import React from 'react';
import styled from 'styled-components';
import Channels from './sidebar/channels/Channels';
import Heading from './sidebar/heading/Heading';

function Sidebar() {
	return (
		<Container>
			<Heading />
			<Channels />
		</Container>
	);
}

export default Sidebar;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px;
	background: ${(props) => props.theme.sidebar};
	height: 100vh;
	width: 200px;
	overflow: auto;
`;
