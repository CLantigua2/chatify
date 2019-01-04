import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../validation/is-empty';

class ProfileAbout extends Component {
  render() {
    const { profile } = this.props;
    // Get first name
    const firstName = profile.user.name.trim().split(' ')[0];
    return (
      <div className="profile">
        <h3 className="profile-firstname">{firstName}'s Status</h3>
        <p className="lead">
          {isEmpty(profile.status) ? (
            <span>{firstName} does not have a status</span>
          ) : (
              <span>{profile.status}</span>
            )}
        </p>
      </div>
    );
  }
}
ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};
export default ProfileAbout;