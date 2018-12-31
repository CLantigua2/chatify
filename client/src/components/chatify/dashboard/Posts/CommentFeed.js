import React, { Component } from 'react';
import propTypes from 'prop-types';
import CommentItem from './CommentItem';
import styled from 'styled-components';

class CommentFeed extends Component {
	render() {
		const { comments, channelId } = this.props;
		return (
			<Container>
				{comments.map((comment) => <CommentItem key={comment._id} comment={comment} channelId={channelId} />)}
			</Container>
		);
	}
}

CommentFeed.propTypes = {
	comments: propTypes.array.isRequired,
	channelId: propTypes.string.isRequired
};

export default CommentFeed;

const Container = styled.div`height: 84vh;`;
