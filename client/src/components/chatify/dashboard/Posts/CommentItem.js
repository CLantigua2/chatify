import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { deleteComment } from '../../../../redux/actions/channelActions';
import { Link } from 'react-router-dom';

class CommentItem extends Component {
	onDeleteClick(channelId, commentId) {
		this.props.deleteComment(channelId, commentId);
	}
	render() {
		const { comment, channelId, auth } = this.props;
		return (
			<div className="card card-body mb-3">
				<div className="row">
					<div className="col-md-2">
						<Link to={`/profile/${comment.handle}`}>
							<img
								className="rounded-circle d-none d-md-block"
								src={comment.avatar}
								alt="comment user avatar"
							/>
						</Link>
						<br />
						<p className="text-center">{comment.name}</p>
					</div>
					<div className="col-md-10">
						<p className="lead">{comment.text}</p>
						{comment.user === auth.user.id ? (
							<button
								onClick={(e) => {
									e.preventDefault();
									this.onDeleteClick(channelId, comment._id);
								}}
								type="button"
								className="btn btn-danger mr-1"
							>
								<i className="fas fa-times" />
							</button>
						) : null}
					</div>
				</div>
			</div>
		);
	}
}

CommentItem.propTypes = {
	deleteComment: propTypes.func.isRequired,
	comment: propTypes.object.isRequired,
	channelId: propTypes.string.isRequired,
	auth: propTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
