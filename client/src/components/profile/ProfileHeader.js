import React, { Component } from 'react';
import isEmpty from '../../validation/is-empty';
import styled from 'styled-components';
import TextFieldGroup from '../common/TextFieldGroup';

class ProfileHeader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isEditing: false,
			newStatus: ''
		};
	}

	changeHandler = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	setEdit = (e) => {
		this.setState({ isEditing: !this.state.isEditing });
	};

	render() {
		const { profile } = this.props;
		const { isEditing } = this.state;
		return (
			<Container>
				<img className="rounded-circle" src={profile.user.avatar} alt="user avatar" />
				<div className="text-center">
					<h1 className="user-name">{profile.user.name}</h1>
					{isEmpty(profile.username) ? null : <p className="line">{profile.username}</p>}
					{isEmpty(profile.status) ? null : <p className="line">{profile.status}</p>}
					{isEditing ? (
						<div>
							<button onClick={() => this.setEdit()} className="accept-btn">
								Accept
							</button>
							<button className="cancel-btn">Cancel</button>
						</div>
					) : (
						<button className="edit-btn">Edit Status</button>
					)}
					{isEmpty(profile.city) ? null : <p className="line">City: {profile.city}</p>}
					{isEmpty(profile.state) ? null : <p className="line">State: {profile.state}</p>}
				</div>
			</Container>
		);
	}
}

export default ProfileHeader;

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
