import React, { Component } from 'react';
import isEmpty from '../../validation/is-empty';

class ProfileHeader extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div className="row">
        <img className="rounded-circle" src={profile.user.avatar} alt="user avatar" />
        <div className="text-center">
          <h1 className="display-4 text-center">{profile.user.name}</h1>
          {isEmpty(profile.status) ? null : <p>{profile.status}</p>}
          {isEmpty(profile.location.city) ? null : <p>{profile.location.city}</p>}
          {isEmpty(profile.location.state) ? null : <p>{profile.location.state}</p>}
        </div>
      </div>
    );
  }
}

export default ProfileHeader;