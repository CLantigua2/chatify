import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

class Heading extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showMenu: false
		};
	}

	showMenu = (e) => {
		e.preventDefault();
		e.stopPropagation();
		this.setState({
			showMenu: !this.state.showMenu
		});
	};

	render() {
		const { auth } = this.props;
		return (
			<div>
				<Wrapper>
					<Container>
						<Image src={auth.user.avatar} alt={auth.user.name} />
						<H4>{auth.user.name}</H4>
					</Container>
					<Dontmove>
						<i onClick={this.showMenu} className="fas fa-cog" />
						{this.state.showMenu ? (
							<ul>
								<li>
									<i className="fas fa-user-cog" />
									Edit Profile
								</li>
								<hr />
								<li>
									<i className="far fa-list-alt" />
									See Channels
								</li>
								<hr />
								<li>
									<i className="fas fa-sign-out-alt" />
									Logout
								</li>
								<hr />
								<li>
									<i className="far fa-trash-alt" />
									Delete Account
								</li>
								<hr />
							</ul>
						) : null}
					</Dontmove>
				</Wrapper>
				<MakeChannel>
					<p>Make a channel</p>
					<button>
						<i className="fas fa-plus-square" />
					</button>
				</MakeChannel>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	auth: state.auth
});

export default connect(mapStateToProps)(Heading);

const Dontmove = styled.div`
	position: absolute;
	left: 195px;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	i {
		font-size: 2rem;
		color: ${(props) => props.theme.inactive};
		cursor: pointer;
		transition: 0.5s ease-in-out;
		position: relative;
		left: 5px;
		&:hover {
			color: ${(props) => props.theme.active};
			transform: rotate(360deg);
		}
	}
	ul {
		margin-top: 20px;
		box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.75);
		background: #ffffff;
		width: 100%;
		height: 278px;
		padding: 10px;
		border: 1px solid slategray;
		border-radius: 4px;
		hr {
			border-color: rgba(0, 0, 0, 0.1);
		}
		li:first-child {
			margin-top: 20px;
		}

		li {
			color: ${(props) => props.theme.inactive};
			cursor: pointer;
			transition: 0.4s ease-in-out;
			margin-bottom: 22px;
			margin-top: 22px;
			&:hover {
				color: ${(props) => props.theme.active};
			}

			i {
				margin-right: 20px;
				&:hover {
					transform: rotate(0deg);
				}
			}
		}
	}
`;

const Container = styled.div`
	display: flex;
	flex-direction: row;
	margin-bottom: 20px;
`;

const Image = styled.img`
	border-radius: 50%;
	width: 25px;
	height: 25px;
	margin-right: 10px;
`;

const MakeChannel = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	margin-bottom: 20px;
	p {
		color: ${(props) => props.theme.active};
	}
	button {
		padding: 0;
		margin: 0;
		border: transparent;
		background: transparent;
		i {
			color: ${(props) => props.theme.inactive};
			font-size: 2rem;
			cursor: pointer;
			&:hover {
				color: ${(props) => props.theme.active};
			}
		}
	}
`;
const H4 = styled.h4`color: ${(props) => props.theme.active};`;
