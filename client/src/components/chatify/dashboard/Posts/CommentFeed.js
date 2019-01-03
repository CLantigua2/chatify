import React, { Component } from 'react';
import propTypes from 'prop-types';
import CommentItem from './CommentItem';
import styled from 'styled-components';
import Robot from '../../../../img/robot.png';

class CommentFeed extends Component {
	render() {
		const { comments, channelId } = this.props;
		return (
			<Container>
				{comments.length === 0 ? (
					<Wrapper>
						<div className="user">
							<img className="avatar" src={Robot} alt="Chatty-bot" />
							<div className="stats">
								<p className="name">Chatty-bot</p>
							</div>
						</div>
						<p className="lead">
							No one has post here yet{' '}
							<span role="img" aria-label="crying emojie">
								😭
							</span>{' '}
							why don't you start it off for us.
						</p>
					</Wrapper>
				) : (
					comments.map((comment) => <CommentItem key={comment._id} comment={comment} channelId={channelId} />)
				)}
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

const Wrapper = styled.div`
	max-width: 2368px;
	margin-left: 0px;
	border-radius: 10px;
	box-shadow: 0px 6px 46px -11px rgba(0, 0, 0, 0.75);
	border: 1px solid rgba(0, 0, 0, 0.2);
	margin-bottom: 10px;
	overflow: auto;
	max-height: 500px;
	min-height: 226px;
	padding: 15px;
	.user {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-bottom: 10px;
		width: 300px;
		.avatar {
			width: 45px;
			height: 45px;
			border-radius: 50%;
			margin-right: 15px;
		}
		.stats {
			display: flex;
			flex-direction: row;
			align-items: center;
			height: 50px;
			min-width: 100%;
			justify-content: space-between;
			.name {
				font-weight: bold;
				font-size: 1.8rem;
				margin-bottom: 5px;
			}
		}
	}
	.lead {
		border-top: 1px dotted rgba(0, 0, 0, 0.2);
		padding: 20px;
		margin-left: 55px;
		font-family: 'Sarabun', sans-serif;
		font-size: 2rem;
	}
	.saveEdit {
		font-size: 1.4rem;
		color: green;
		cursor: pointer;
	}
`;
