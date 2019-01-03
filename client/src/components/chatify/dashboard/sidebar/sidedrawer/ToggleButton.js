import React from 'react';
import styled from 'styled-components';

const ToggleButton = (props) => (
	<Button className="toggle-button" onClick={props.drawerHandler}>
		<div className="toggle-button__line" />
		<div className="toggle-button__line" />
		<div className="toggle-button__line" />
	</Button>
);

export default ToggleButton;

const Button = styled.button`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	height: 24px;
	width: 36px;
	background: transparent;
	border: none;
	padding: 0;
	cursor: pointer;
	&:focus {
		outline: none;
		border: none;
	}

	.toggle-button__line {
		width: 30px;
		height: 2px;
		background: white;
	}
`;
