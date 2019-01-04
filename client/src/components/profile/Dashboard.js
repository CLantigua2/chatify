import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { getCurrentProfile, deleteAccount } from '../../redux/actions/profileActions';
import Loading from '../common/Loading';
import CreateProfile from './CreateProfile';
import Profile from './Profile';
import { withRouter } from 'react-router-dom';

class Dashboard extends Component {
	componentDidMount() {
		this.props.getCurrentProfile();
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
					<div>
						<p className="lead text-muted">
							Welcome <Link to={`/profile/${profile.username}`}>{user.name}</Link>
						</p>
						<Profile />
						<button onClick={this.onDeleteClick} className="btn btn-danger">
							Delete My Account
						</button>
					</div>
				);
			} else {
				dashboardContent = <CreateProfile />;
			}
		}
		return <div className="dashboard">{dashboardContent}</div>;
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

export default withRouter(connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard));
