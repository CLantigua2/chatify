import React, { Component } from 'react';
import isEmpty from '../../validation/is-empty';
import styled from 'styled-components';
import TextFieldGroup from '../common/TextFieldGroup';
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

	componentDidUpdate(prevProps) {
		if (prevProps.errors !== this.props.errors) {
			this.setState({ errors: this.props.errors });
		}

		const profile = this.props.profile.profile;
		const { username = '', status = '', location: { city = '', state = '' } } = profile;
		// if (profile) {
		// 	if (prevProps.profile !== profile) {
		// 		return { username, status, city, state });
		// 	}
		// }

		if (isEmpty(profile)) {
			this.props.getCurrentProfile();
		}
	}

	changeHandler = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	setEdit = (e) => {
		const profile = this.props.profile.profile;
		this.setState({
			isEditing: true,
			status: profile.status,
			username: profile.username,
			city: profile.location[0].city,
			state: profile.location[0].state
		});
	};

	cancelEdit = (e) => {
		this.setState({ isEditing: false, newStatus: this.props.profile.status });
	};

	submitProfile = (e) => {
		const profileData = {
			username: this.state.username.replace(' ', '-'),
			status: this.state.status,
			city: this.state.city,
			state: this.state.state
		};
		this.props.createProfile(profileData);
	};

	render() {
		const { profile } = this.props.profile;
		const { isEditing, errors, username, status, city, state } = this.state;
		let editInputs;
		if (isEditing === true) {
			editInputs = (
				<div>
					<TextFieldGroup
						type="text"
						placeholder="New username.."
						value={username}
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
					{isEmpty(profile.username) ? null : <p className="line">{profile.username}</p>}
					{isEmpty(profile.status) ? (
						<p className="line">
							Y U No Make Status{' '}
							<span role="img" aria-label="Why">
								🤷‍
							</span>?
						</p>
					) : (
						<p className="line">{profile.status}</p>
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
						<div>
							<button className="accept-btn" onClick={() => this.submitProfile()}>
								Accept
							</button>
							<button className="cancel-btn" onClick={() => this.cancelEdit()}>
								Cancel
							</button>
						</div>
					) : (
						<button className="edit-btn" onClick={() => this.setEdit()}>
							Edit Status
						</button>
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

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(ProfileHeader);

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
