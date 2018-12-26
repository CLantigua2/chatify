import React, { Component } from 'react';
import styled from 'styled-components';
import Robot from '../../img/robot.png';
import Zoom from 'react-reveal/Zoom';
import p1 from '../../img/p1.png';
import p2 from '../../img/p2.jpg';
import p3 from '../../img/p3.jpg';
import slack from '../../img/slack.PNG';
import { Link } from 'react-router-dom';

class Landing extends Component {
	render() {
		return (
			<Container>
				<Header>
					<Zoom>
						<Logo src={Robot} alt="Chatify logo robot" />
					</Zoom>
					<Zoom>
						<About>
							<h1>Chat||fy</h1>
							<p>Join your friends today.</p>
							<div>
								<img src={p1} alt="first friend avatar" />
								<img src={p2} alt="second friend avatar" />
								<img src={p3} alt="third friend avatar" />
							</div>
							<Links>
								<Button to="/sign-in" primary="true">
									<span>Sign In</span>
								</Button>
								<Button to="/register">
									<span>Register</span>
								</Button>
							</Links>
						</About>
						<div>
							<img src={slack} alt="slack thumbnail" />
						</div>
					</Zoom>
				</Header>
			</Container>
		);
	}
}

export default Landing;

const Container = styled.div`
	background: #816fea;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	height: 100vh;
`;

const Header = styled.div`
	width: 82%;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	margin: 0 auto;

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
	div {
		img {
			width: 400px;
			border-radius: 25px;
			box-shadow: 3px 6px 22px 0px rgba(0, 0, 0, 0.75);
			transition: 0.5s ease-in-out;
			&:hover {
				transform: scale(1.2);
			}
		}
	}
`;

const About = styled.div`
	background: rgba(0, 0, 0, 0.3);
	padding: 35px;
	border-radius: 10px;
	box-shadow: 3px 6px 22px 0px rgba(0, 0, 0, 0.75);
	height: 400px;
	transition: 0.5s ease-in-out;
	&:hover {
		transform: scale(1.2);
	}
	div {
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
	}
`;

const Links = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: flex-end;
	height: 100px;
`;

const Button = styled(Link)`
  background-color: ${(props) => (props.primary ? 'rgb(28,184,65)' : 'rgb(202, 60, 60)')};
  width: 120px;
	display: inline-block;
	border-radius: 4px;
	border: none;
	font-weight: bold;
	text-align: center;
	font-size: 18px;
	padding: 10px;
	transition: all 0.5s;
	cursor: pointer;
	margin: 5px;
	span {
    color: #ffffff;
		cursor: pointer;
		display: inline-block;
		position: relative;
		transition: 0.5s;
	}
	span:after {
		content: '\00bb';
		position: absolute;
		opacity: 0;
		top: 0;
		right: -20px;
		transition: 0.5s;
	}
	&:hover span {
		padding-right: 25px;
	}
	&:hover span:after {
		opacity: 1;
		right: 0;
	}
`;

const Logo = styled.img`width: 500px;`;
