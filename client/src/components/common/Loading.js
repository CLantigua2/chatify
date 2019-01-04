import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loading = () => {
	const letters = [
		{
			delay: '0s',
			letter: 'L'
		},
		{
			delay: '.1s',
			letter: 'o'
		},
		{
			delay: '.2s',
			letter: 'a'
		},
		{
			delay: '.3s',
			letter: 'd'
		},
		{
			delay: '.4s',
			letter: 'i'
		},
		{
			delay: '.5s',
			letter: 'n'
		},
		{
			delay: '.6s',
			letter: 'g'
		},
		{
			delay: '.7s',
			classname: 'period',
			letter: '.'
		},
		{
			delay: '.8s',
			classname: 'period',
			letter: '.'
		},
		{
			delay: '.9s',
			classname: 'period',
			letter: '.'
		}
	];

	return (
		<DotWrapper>
			{letters.map((item) => (
				<Dot key={item.delay} className={item.classname ? item.classname : null} delay={item.delay}>
					<h2>{item.letter}</h2>
				</Dot>
			))}
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
	animation: ${BounceAnimation} 0.5s ease-in-out infinite;
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
