import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Loading from '../../../common/Loading';
import { getChannel } from '../../../../redux/actions/channelActions';
// import ChannelItem from '../sidebar/channels/ChannelItem';
import CommentForm from './CommentForm';
import { Link, withRouter } from 'react-router-dom';
import CommentFeed from './CommentFeed';
import ChannelInfo from './ChannelInfo';

class Comment extends Component {
	componentDidMount() {
		this.props.getChannel(this.props.match.params.id);
	}

	componentDidUpdate(prevProps) {
		if (prevProps.match.params !== this.props.match.params) {
			this.props.getChannel(this.props.match.params.id);
		}
	}
	render() {
		const { channel, loading } = this.props.channel;
		let channelContent;

		if (channel === null || loading || Object.keys(channel).length === 0) {
			channelContent = <Loading />;
		} else {
			channelContent = (
				<div>
					<ChannelInfo channel={channel} />
					<CommentFeed channelId={channel._id} comments={channel.comments} />
					<CommentForm channelId={channel._id} />
				</div>
			);
		}
		return <div>{channelContent}</div>;
	}
}

const mapStateToProps = (state) => ({
	channel: state.channel
});

Comment.propTypes = {
	getChannel: propTypes.func.isRequired,
	channel: propTypes.object.isRequired
};

export default withRouter(connect(mapStateToProps, { getChannel })(Comment));
