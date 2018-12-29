import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChannelItem from './ChannelItem';

class ChannelFeed extends Component {
	render() {
		const { channels } = this.props;
		// map through post item component in reverse to put new channels on the bottom
		return channels.map((channel) => <ChannelItem key={channel._id} channel={channel} />).reverse();
	}
}

ChannelFeed.propTypes = {
	channels: PropTypes.array.isRequired
};

export default ChannelFeed;
