import React, { Component } from 'react';
import isEmpty from '../../validation/is-empty';
import styled from 'styled-components';

class ProfileHeader extends Component {
	render() {
		const { profile } = this.props;

		return (
			<Container>
				<img className="rounded-circle" src={profile.user.avatar} alt="user avatar" />
				<div className="text-center">
					<h1 className="user-name">{profile.user.name}</h1>
					{isEmpty(profile.username) ? null : <p className="line">{profile.username}</p>}
					{isEmpty(profile.status) ? null : <p className="line">{profile.status}</p>}
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
