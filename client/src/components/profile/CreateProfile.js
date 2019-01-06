import React, { Component } from 'react';
import Bleep from '../common/Pagination';
import styled from 'styled-components';
import bg from '../../img/createprofilebg.jpg';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../redux/actions/profileActions';
import { logoutUser } from '../../redux/actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';
import Fade from 'react-reveal/Fade';
import { withRouter } from 'react-router-dom';

class CreateProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displaySocialInputs: false,
			username: '',
			city: '',
			state: '',
			status: '',
			errors: {},
			question1: false,
			question2: false,
			question3: false,
			question4: false
		};
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.errors) {
			return { errors: nextProps.errors };
		}
		return null;
	}

	changeHandler = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	clickQuestion = (e, id) => {
		e.preventDefault();
		this.setState({
			...{
				question1: false,
				question2: false,
				question3: false,
				question4: false
			},
			...{ [`question${id}`]: !this.state[`question${id}`] }
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		const { username, city, state, status } = this.state;
		const profileData = {
			username,
			city,
			state,
			status
		};
		this.props.createProfile(profileData, this.props.history);
	};
	render() {
		const { errors, question1, question2, question3, question4, username, city, state, status } = this.state;
		return (
			<Container>
				<Fade>
					<div className="wrapper">
						<h1 className="create-profile-header">Create Profile</h1>
						<div className="bleep">
							<div className="bleep-wrapper">
								<ul className="pagination">
									<Bleep active={question1} />
									<Bleep active={question2} />
									<Bleep active={question3} />
									<Bleep active={question4} />
								</ul>
							</div>
						</div>
						<form onSubmit={this.onSubmit}>
							<TextFieldGroup
								clickHandler={(e) => this.clickQuestion(e, 1)}
								placeholder="* Profile username"
								name="username"
								value={username.replace(' ', '-')}
								active={question1}
								handleChange={this.changeHandler}
								error={errors.username}
								info="A unique username for your profile URL. Your full name, nickname"
							/>
							<TextFieldGroup
								clickHandler={(e) => this.clickQuestion(e, 2)}
								placeholder="Your status"
								name="status"
								active={question2}
								value={status}
								handleChange={this.changeHandler}
								error={errors.status}
								info="write a status for your friends to see"
							/>
							<TextFieldGroup
								clickHandler={(e) => this.clickQuestion(e, 3)}
								placeholder="Your City"
								name="city"
								active={question3}
								value={city}
								handleChange={this.changeHandler}
								error={errors.city}
								info="Let us know what City you're from"
							/>
							<TextFieldGroup
								clickHandler={(e) => this.clickQuestion(e, 4)}
								placeholder="Your State"
								active={question4}
								name="state"
								value={state}
								handleChange={this.changeHandler}
								error={errors.state}
								maxlength="2"
								info="What state are you from? Two letters only"
							/>
							<button type="submit" className="btn">
								<i className="fas fa-robot" />
								<p>Submit</p>
							</button>
						</form>
						<button type="submit" className="btn" onClick={() => this.props.logoutUser()}>
							<i className="fas fa-robot" />
							<p>Logout</p>
						</button>
					</div>
				</Fade>
			</Container>
		);
	}
}

CreateProfile.proTypes = {
	profile: propTypes.object.isRequired,
	errors: propTypes.object.isRequired,
	createProfile: propTypes.func.isRequired,
	logoutUser: propTypes.func.isRequired
};

const mapStateToProps = (state) => ({
	profile: state.profile,
	errors: state.errors
});

export default connect(mapStateToProps, { createProfile, logoutUser })(withRouter(CreateProfile));

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: url(${bg});
	background-repeat: no-repeat;
	background-size: cover;
	overflow: hidden;
	.form-text {
		font-size: 1.6rem;
	}
	.wrapper {
		margin-top: 100px;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.create-profile-header {
			color: white;
		}
		.bleep-wrapper {
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-top: 10%;
		}

		.pagination__item {
			display: inline-block;
			margin: 0 10px;
		}
		.pagination__link {
			position: relative;
			text-indent: -99em;
			display: block;
			width: 30px;
			height: 30px;
			border: none;
			background: transparent;
			padding: 0;
			margin: 0 10px;
		}
		.pagination__link:before,
		.pagination__link:after {
			content: '';
			display: block;
			position: absolute;
			top: 0;
			width: 100%;
			height: 100%;
			border-radius: 50%;
			border: 3px solid #ecf0f1;
			transition: all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
		}
		.pagination__link:before {
			background: #ecf0f1;
			transform: scale(0.2);
		}
		.pagination__link:hover:after {
			transform: scale(1.1);
		}
		.pagination__link.is_active:before {
			transform: scale(0.5);
		}
		.pagination__link.is_active:after {
			transform: scale(0.2);
		}
		form {
			display: flex;
			flex-direction: column;
			width: 500px;
			justify-content: center;
			margin-top: 50px;
			.btn {
				cursor: pointer;
				display: flex;
				justify-content: space-around;
				align-items: center;
				background-color: transparent;
				width: 200px;
				padding: 18px;
				margin: 20px auto;
				border: 2px solid #4ef18f;
				border-radius: 25px;
				box-sizing: border-box;
				-webkit-text-decoration: none;
				text-decoration: none;
				font-family: 'Roboto', sans-serif;
				font-weight: 300;
				font-size: 2rem;
				color: #4ef18f;
				text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
				text-align: center;
				-webkit-transition: all 0.2s;
				transition: all 0.2s;
				i,
				p {
					font-size: 2rem;
					color: #4ef18f;
				}

				&:hover {
					background: #4ef18f;
					border: 2px solid white;
					background-color: #4ef18f;
				}
			}
		}
		.btn {
			cursor: pointer;
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			margin: 0 auto;
			color: rgba(200, 0, 0, 1);
			font-family: 'Roboto', sans-serif;
			font-weight: 300;
			font-size: 2rem;
			text-decoration: none;
			background: transparent;
			border: 2px solid rgba(200, 0, 0, 1);
			text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);

			width: 200px;
			padding: 18px;
			border-radius: 25px;
			i,
			p {
				font-size: 2rem;
				color: rgba(200, 0, 0, 1);
			}
			&:hover {
				background: rgba(200, 0, 0, 1);
				border: 2px solid #ffffff;
				color: #ffffff;
			}
		}
	}
`;
