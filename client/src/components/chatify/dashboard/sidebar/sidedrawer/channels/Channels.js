import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getChannels } from '../../../../../../redux/actions/channelActions';
import propTypes from 'prop-types';
import ChannelFeed from './ChannelFeed';
import Loading from '../../../../../common/Loading';

class Channels extends Component {
	componentDidMount() {
		this.props.getChannels();
	}

	shouldComponentUpdate(nextProps) {
		if (nextProps.channel.channels !== this.props.channel.channels) {
			return this.props.channel.channels;
		} else {
			return false;
		}
	}

	render() {
		const { channels, loading } = this.props.channel;
		let channelContent;

		if (channels === null || loading) {
			channelContent = <Loading />;
		} else {
			channelContent = <ChannelFeed channels={channels} />;
		}

		return <React.Fragment>{channelContent}</React.Fragment>;
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
