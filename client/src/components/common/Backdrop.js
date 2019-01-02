import React from 'react';
import styled from 'styled-components';

const Backdrop = () => {
	return <Overlay className="backdrop" />;
};

export default Backdrop;
const Overlay = styled.div`
	position: fixed;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.5);
	z-index: 100;
`;
