import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

class Heading extends Component {
	render() {
		const { auth } = this.props;
		console.log(auth);
		return (
			<div>
				<Container>
					<Image src={auth.user.avatar} alt={auth.user.name} />
					<H4>{auth.user.name}</H4>
				</Container>
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
