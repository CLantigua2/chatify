import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getChannels } from '../../../../redux/actions/channelActions';
import propTypes from 'prop-types';
import ChannelFeed from './ChannelFeed';
import Loading from '../../../common/Loading';

class Channels extends Component {
	componentDidMount() {
		this.props.getChannels();
	}
	render() {
		const { channels, loading } = this.props.channel;
		let channelContent;

		if (channels === null || loading) {
			channelContent = <Loading />;
		} else {
			channelContent = <ChannelFeed channels={channels} />;
		}

		return <div>{channelContent}</div>;
	}
}

Channels.propTypes = {
	getChannels: propTypes.func.isRequired,
	channel: propTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	channel: state.channel
});

export default connect(mapStateToProps, { getChannels })(Channels);
