import React from 'react';
import styled from 'styled-components';
import Channels from './channels/Channels';
import Heading from './heading/Heading';

const SideDrawer = (props) => {
	return (
		<Nav show={props.show}>
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
	width: 70%;
	max-width: 250px;
	z-index: 200;
	transition: 0.3s ease-in-out;
	transform: ${({ show }) => (show ? 'translateX(-237px)' : 'translateX(0)')};

	.channel-list {
		display: flex;
		flex-direction: column;
		height: 100%;
		list-style: none;
		li {
			margin: 1rem 0;
		}
	}
`;
