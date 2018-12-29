import React from 'react';
import Channels from './channels/Channels';
import styled from 'styled-components';

function Sidebar() {
	return (
		<Container>
			<Channels />
		</Container>
	);
}

export default Sidebar;

const Container = styled.div`
	display: flex;
	justify-content: center;
	background: ${(props) => props.theme.sidebar};
	height: 100vh;
	width: 10%;
	overflow: auto;
`;
