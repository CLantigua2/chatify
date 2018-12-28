import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { deleteChannel } from '../../../../redux/actions/channelActions';

class ChannelItem extends Component {
	render() {
		const { channel, auth, showActions } = this.props;
		return <div />;
	}
}

const mapStateToProps = (state) => ({
	auth: state.auth
});

export default connect(mapStateToProps, { deleteChannel })(ChannelItem);
