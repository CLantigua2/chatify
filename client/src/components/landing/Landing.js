import React, { Component } from 'react';
import styled from 'styled-components';
import Robot from '../../img/robot.png';
import p1 from '../../img/p1.png';
import p2 from '../../img/p2.jpg';
import p3 from '../../img/p3.jpg';

class Landing extends Component {
	render() {
		return (
			<Container>
				<Header>
					<Logo src={Robot} alt="Chatify logo robot" />
					<About>
						<h1>Chatify</h1>
						<p>Join your friends today.</p>
						<Friends>
							<img src={p1} alt="" />
							<img src={p2} alt="" />
							<img src={p3} alt="" />
						</Friends>
					</About>
				</Header>
			</Container>
		);
	}
}

export default Landing;

const Friends = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	img {
		border-radius: 50%;
		width: 50px;
		height: 50px;
		box-shadow: 3px 6px 22px 0px rgba(0, 0, 0, 0.75);
	}
`;

const About = styled.div`
	background: rgba(0, 0, 0, 0.3);
	padding: 35px;
	border-radius: 10px;
	box-shadow: 3px 6px 22px 0px rgba(0, 0, 0, 0.75);
`;

const Container = styled.div`
	background: #816fea;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

const Header = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 1000px;

	h1 {
		font-family: 'ZCOOL XiaoWei', serif;
		font-size: 6rem;
	}
	p {
		border-top: 2px solid ${(props) => props.theme.offWhite};
		padding: 40px;
		margin-top: 30px;
		color: ${(props) => props.theme.offWhite};
	}
`;

const Logo = styled.img`width: 500px;`;
