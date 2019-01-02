import React from 'react';
import styled from 'styled-components';
import Channels from '../../sidebar/channels/Channels';
import Heading from '../../sidebar/heading/Heading';

const SideDrawer = () => {
	return (
		<Nav className="side-drawer">
			<Heading />
			<Channels />
		</Nav>
	);
};

export default SideDrawer;

const Nav = styled.nav`
	padding: 22px;
	margin-top: 70px;
	height: 100%;
	background: ${(props) => props.theme.sidebar};
	box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0;
	left: 0;
	width: 240px;
`;
