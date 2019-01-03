import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Loading from '../../../common/Loading';
import { getChannel } from '../../../../redux/actions/channelActions';
// import ChannelItem from '../sidebar/channels/ChannelItem';
import CommentForm from './CommentForm';
import { withRouter } from 'react-router-dom';
import CommentFeed from './CommentFeed';
import Toolbar from './Toolbar';
import styled from 'styled-components';

class Comment extends Component {
	componentDidMount() {
		this.props.getChannel(this.props.match.params.id);
	}

	componentDidUpdate(prevProps) {
		if (this.props.match.params.id !== prevProps.match.params.id) {
			return this.props.getChannel(this.props.match.params.id);
		} else {
			return false;
		}
	}

	render() {
		const { channel, loading } = this.props.channel;
		return (
			<Container>
				<Toolbar channel={channel} />
				<Feed>
					<div className="Comment">
						{channel === null || loading || Object.keys(channel).length === 0 ? (
							<Loading />
						) : (
							<CommentFeed channelId={channel._id} comments={channel.comments} />
						)}
					</div>
				</Feed>
				{channel === null || loading || Object.keys(channel).length === 0 ? (
					<Loading />
				) : (
					<CommentForm channelId={channel._id} />
				)}
			</Container>
		);
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

const Container = styled.div`
	width: 100%;
	max-width: 2454px;
	margin-left: 71px;
	min-width: 500px;
`;

const Feed = styled.div`
	margin-top: 85px;
	max-height: 80%;
	overflow-y: scroll;
	::-webkit-scrollbar {
		width: 20px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		box-shadow: inset 0 0 5px grey;
		border-radius: 10px;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: ${(props) => props.theme.sidebar};
		border-radius: 10px;
		display: none;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: ${(props) => props.theme.inactive};
		display: block;
	}
`;
