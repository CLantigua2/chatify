import React, { Component } from 'react';
import propTypes from 'prop-types';
import CommentItem from './CommentItem';

class CommentFeed extends Component {
	render() {
		const { comments, channelId } = this.props;
		return comments.map((comment) => <CommentItem key={comment._id} comment={comment} channelId={channelId} />);
	}
}

CommentFeed.propTypes = {
	comments: propTypes.array.isRequired,
	channelId: propTypes.string.isRequired
};

export default CommentFeed;
