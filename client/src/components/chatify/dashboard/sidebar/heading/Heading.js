import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

class Heading extends Component {
	render() {
		const { auth } = this.props;
		console.log(auth);
		return (
			<Container>
				<Image src={auth.user.avatar} alt="" />
				<H4>{auth.user.name}</H4>
			</Container>
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

const H4 = styled.h4`color: ${(props) => props.theme.active};`;
