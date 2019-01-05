import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProfileHeader from './ProfileHeader';
import Loading from '../common/Loading';
import { getProfileByUsername } from '../../redux/actions/profileActions';
import styled from 'styled-components';
import bg from '../../img/profile.jpg';

class Profile extends Component {
	componentDidMount() {
		const { username } = this.props.match.params;
		username && this.props.getProfileByUsername(username);
	}

	render() {
		const { profile, loading } = this.props.profile;
		console.log(profile);
		let profileContent;

		if (profile === null || loading) {
			profileContent = <Loading />;
		} else {
			profileContent = (
				<Container>
					<ProfileHeader profile={profile} />
				</Container>
			);
		}
		return <Container>{profileContent}</Container>;
	}
}

Profile.propTypes = {
	profile: PropTypes.object.isRequired,
	getProfileByUsername: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
	profile: state.profile
});

export default connect(mapStateToProps, { getProfileByUsername })(Profile);

const Container = styled.div`
	background: url(${bg});
	background-size: cover;
	background-repeat: no-repeat;
	width: 100%;
	min-width: 500px;
	height: 100vh;
	padding: 50px;
`;
