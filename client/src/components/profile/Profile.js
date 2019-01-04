import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProfileHeader from './ProfileHeader';
import ProfileAbout from './ProfileAbout';
import Loading from '../common/Loading';
import { getProfileByUsername } from '../../redux/actions/profileActions';

class Profile extends Component {
	componentDidMount() {
		const { username } = this.props.match.params;
		username && this.props.getProfileByUsername(username);
	}

	componentDidUpdate(nextProps) {
		if (nextProps.profile.profile === null && this.props.profile.loading) {
			this.props.history.push('/not-found');
		}
	}

	render() {
		const { profile, loading } = this.props.profile;
		let profileContent;

		if (profile === null || loading) {
			profileContent = <Loading />;
		} else {
			profileContent = (
				<div>
					<div className="row">
						<div className="col-md-6">
							<Link className="btn btn-light mb-3 float-left" to="/profiles">
								Back
							</Link>
						</div>
						<div className="col-md-6" />
					</div>
					<ProfileHeader profile={profile} />
					<ProfileAbout profile={profile} />
				</div>
			);
		}
		return (
			<div className="profile">
				<div className="container">
					<div className="row">
						<div className="col-mid-12">{profileContent}</div>
					</div>
				</div>
			</div>
		);
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
