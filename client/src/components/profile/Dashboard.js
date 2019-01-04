import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { getCurrentProfile, deleteAccount } from '../../redux/actions/profileActions';
import Loading from '../common/Loading';
import Fade from 'react-reveal';
import { withRouter } from 'react-router-dom';
import bg from '../../img/Space.jpg';
import styled from 'styled-components';

class Dashboard extends Component {
	state = {
		redirect: false
	};
	componentDidMount() {
		this.props.getCurrentProfile();
		const { profile, loading } = this.props.profile;
		if (profile !== null || loading === false) {
			this.id = setTimeout(() => this.setState({ redirect: true }), 5000);
		}
	}

	componentWillUnmount() {
		clearTimeout(this.id);
	}

	onDeleteClick = (e) => {
		this.props.deleteAccount();
	};

	render() {
		const { user } = this.props.auth;
		const { profile, loading } = this.props.profile;
		let dashboardContent;
		if (profile === null || loading) {
			dashboardContent = <Loading />;
		} else {
			// check if logged in user has profile data
			if (Object.keys(profile).length > 0) {
				dashboardContent = (
					<Container>
						<Fade>
							<div className="wrapper">
								<h1 className="lead">Welcome back {user.name}</h1>
								<h3 className="setup">Let's get to chatting...</h3>
							</div>
						</Fade>
					</Container>
				);
			}
		}
		return (
			<div className="dashboard">{this.state.redirect ? <Redirect to="/chatify/home" /> : dashboardContent}</div>
		);
	}
}

Dashboard.propTypes = {
	getCurrentProfile: propTypes.func.isRequired,
	deleteAccount: propTypes.func.isRequired,
	auth: propTypes.object.isRequired,
	profile: propTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	profile: state.profile,
	auth: state.auth
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(withRouter(Dashboard));

const Container = styled.div`
	background-image: url(${bg});
	background-size: cover;
	background-repeat: no-repeat;
	overflow: hidden;
	width: 100vw;
	height: 100vh;
	display: flex;
	/* flex-direction: column; */
	justify-content: center;
	.wrapper {
		display: flex;
		flex-direction: column;
		height: 300px;
		text-align: center;
		margin-top: 100px;
		justify-content: space-around;
		.lead {
			/* margin: 100px auto 0 auto; */
			font-size: 7rem;
			color: white;
		}
		.setup {
			/* margin: 50px auto 0 auto; */
			font-size: 5rem;
			color: rgba(200, 200, 200, 0.7);
		}
		a.btn {
			margin: 0 auto;
			color: #209cee;
			font-size: 2rem;
			text-decoration: none;
			background: transparent;
			border: 2px solid #209cee;
			width: 200px;
			padding: 18px;
			border-radius: 25px;
			&:hover {
				background: #209cee;
				border: 2px solid #ffffff;
				color: #ffffff;
			}
		}
	}
`;
