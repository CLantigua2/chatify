import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Loading from '../../../common/Loading';
import { getChannel } from '../../../../redux/actions/channelActions';
// import ChannelItem from '../sidebar/channels/ChannelItem';
import CommentForm from './CommentForm';
import { withRouter } from 'react-router-dom';
import CommentFeed from './CommentFeed';
import ChannelInfo from './ChannelInfo';
import styled from 'styled-components';

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
				<React.Fragment>
					<ChannelInfo channel={channel} />
					<Feed>
						<div className="style-1">
							<CommentFeed channelId={channel._id} comments={channel.comments} />
						</div>
					</Feed>
					<CommentForm channelId={channel._id} />
				</React.Fragment>
			);
		}
		return <Container>{channelContent}</Container>;
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

const Container = styled.div`width: 92%;`;

const Feed = styled.div`
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
