import React, { Component } from 'react';
import isEmpty from '../../validation/is-empty';
import styled from 'styled-components';
import TextFieldGroup from '../common/TextFieldGroup';
import { withRouter } from 'react-router-dom';
import { createProfile, getCurrentProfile } from '../../redux/actions/profileActions';
import { connect } from 'react-redux';

class ProfileHeader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isEditing: false,
			username: '',
			status: '',
			city: '',
			state: '',
			errors: {}
		};
	}

	changeHandler = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	setEdit = (e) => {
		this.setState({
			isEditing: true,
			status: this.props.profile.profile.status,
			username: this.props.profile.profile.username,
			city: this.props.profile.profile.location[0].city,
			state: this.props.profile.profile.location[0].state
		});
	};

	cancelEdit = () => {
		this.setState({ isEditing: false, status: this.props.profile.status });
	};

	submitProfile = () => {
		const profileData = {
			username: this.state.username,
			status: this.state.status,
			city: this.state.city,
			state: this.state.state
		};
		this.props.createProfile(profileData);
		if (isEmpty(this.state.errors)) {
			this.setState({
				isEditing: false
			});
		}
	};

	// check for new errors
	static getDerivedStateFromProps(nextProps, prevState) {
		return nextProps.errors ? { errors: nextProps.errors } : null;
	}

	componentDidUpdate(prevProps) {
		if (prevProps.errors !== this.props.errors) {
			this.setState({ errors: this.props.errors });
		}

		if (isEmpty(this.props.profile.profile)) {
			this.props.getCurrentProfile();
		}
		if (this.props.profile.profile !== prevProps.profile.profile) {
			this.props.getCurrentProfile();
			return this.setState({
				username: this.props.profile.profile.username,
				status: this.props.profile.profile.status,
				city: this.props.profile.profile.location[0].city,
				state: this.props.profile.profile.location[0].state
			});
		}
	}

	render() {
		const { profile } = this.props.profile;
		const { isEditing, errors, username, status, city, state } = this.state;
		let editInputs;
		if (isEditing === true) {
			editInputs = (
				<div>
					<TextFieldGroup
						placeholder="New username..."
						type="text"
						value={username.replace(' ', '-')}
						name="username"
						handleChange={this.changeHandler}
						errors={errors.username}
					/>
					<TextFieldGroup
						placeholder="New status..."
						type="text"
						value={status}
						name="status"
						handleChange={this.changeHandler}
						errors={errors.status}
					/>
					<TextFieldGroup
						placeholder="City..."
						type="text"
						value={city}
						name="city"
						handleChange={this.changeHandler}
						errors={errors.city}
					/>
					<TextFieldGroup
						placeholder="State..."
						type="text"
						value={state}
						name="state"
						handleChange={this.changeHandler}
						errors={errors.state}
					/>
				</div>
			);
		} else {
			editInputs = (
				<div className="edit-profile">
					{profile.username ? <p className="line">{profile.username}</p> : null}
					{profile.status ? (
						<p className="line">{profile.status}</p>
					) : (
						<p className="line">
							Y U No Make Status{' '}
							<span role="img" aria-label="Why">
								🤷‍
							</span>?
						</p>
					)}
					{isEmpty(profile.location[0].city) ? null : (
						<p className="line">City: {profile.location[0].city}</p>
					)}
					{isEmpty(profile.location[0].state) ? null : (
						<p className="line">State: {profile.location[0].state}</p>
					)}
				</div>
			);
		}
		return (
			<Container>
				<img className="rounded-circle" src={profile.user.avatar} alt="user avatar" />
				<div className="text-center">
					<h1 className="user-name">{profile.user.name}</h1>
					{editInputs}
					{isEditing ? (
						<div className="buttons">
							<Button green className="btn" onClick={() => this.submitProfile()}>
								Accept
							</Button>
							<Button red className="btn" onClick={() => this.cancelEdit()}>
								Cancel
							</Button>
						</div>
					) : (
						<div className="buttons">
							<Button white className="btn" onClick={() => this.setEdit()}>
								Edit Status
							</Button>
						</div>
					)}
				</div>
			</Container>
		);
	}
}

const mapStateToProps = (state) => ({
	profile: state.profile,
	errors: state.errors
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(withRouter(ProfileHeader));

const Container = styled.div`
	background-color: rgba(71, 125, 219, 1);
	display: flex;
	border-radius: 25px;
	justify-content: column;
	margin: 300px auto;
	min-width: 500px;
	width: 50%;
	height: 400px;
	justify-content: space-evenly;
	align-items: center;
	.rounded-circle {
		width: 200px;
		border-radius: 50%;
		min-width: 150px;
	}
	.user-name {
		font-size: 6rem;
		margin-bottom: 20px;
	}
	.line {
		font-size: 2rem;
		margin-bottom: 20px;
	}
`;

const Button = styled.button`
	cursor: pointer;
	padding: 10px;
	width: 178px;
	border-radius: 15px;
	${(props) => (props.white ? `border: 2px solid white; color: white` : null)};
	${(props) => (props.red ? `border: 2px solid rgb(255,163,140);; color: rgb(255,154,119)` : null)};
	${(props) => (props.green ? `border: 2px solid rgb(80, 230, 100); color: rgb(80, 230, 100)` : null)};
	background-color: transparent;
	font-size: 1.6rem;
	font-weight: 700;
	margin-top: 10px;
	&:first-child {
		margin-right: 37px;
	}
	&:hover {
		background: white;
		${(props) => (props.white ? `border: 2px solid white; background-color: black; color: white` : null)};
		${(props) =>
			props.red ? `border: 2px solid rgb(255,163,140);; background-color: rgb(255,154,119); color: white` : null};
		${(props) =>
			props.green
				? `border: 2px solid rgb(80, 230, 100); background-color: rgb(80, 230, 100); color: white`
				: null};
	}
`;
