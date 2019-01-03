import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loading = () => {
	return (
		<DotWrapper>
			<Dot delay="0s">
				<h2>L</h2>
			</Dot>
			<Dot delay=".1s">
				<h2>o</h2>
			</Dot>
			<Dot delay=".2s">
				<h2>a</h2>
			</Dot>
			<Dot delay="3s">
				<h2>d</h2>
			</Dot>
			<Dot delay=".4s">
				<h2>i</h2>
			</Dot>
			<Dot delay=".5">
				<h2>n</h2>
			</Dot>
			<Dot delay=".6s">
				<h2>g</h2>
			</Dot>
			<Dot delay=".7" className="period">
				<h2>. </h2>
			</Dot>
			<Dot delay=".8s" className="period">
				<h2>. </h2>
			</Dot>
			<Dot delay=".9" className="period">
				<h2>. </h2>
			</Dot>
		</DotWrapper>
	);
};

export default Loading;

const BounceAnimation = keyframes`
  0% { margin-bottom: 0;}
  50% { margin-bottom: 20px }
  100% { margin-bottom: 0}
`;

const Dot = styled.div`
	animation: ${BounceAnimation} 0.5s linear infinite;
	animation-delay: ${(props) => props.delay};
`;

const DotWrapper = styled.div`
	display: flex;
	align-items: flex-end;
	position: fixed;
	top: 50%;
	left: 50%;
	margin-top: -50px;
	margin-left: -100px;
	.period {
		margin-left: 10px;
	}
`;
