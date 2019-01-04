import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProfileHeader from './ProfileHeader';
import Loading from '../common/Loading';
import { getProfileByUsername } from '../../redux/actions/profileActions';
import styled from 'styled-components';

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
				<React.Fragment>
					<ProfileHeader profile={profile} />
				</React.Fragment>
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
	margin: 100px auto 100px auto;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
`;
