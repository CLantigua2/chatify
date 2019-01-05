import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { deleteComment, editComment } from '../../../../redux/actions/channelActions';
import { getProfiles } from '../../../../redux/actions/profileActions';
import styled, { keyframes } from 'styled-components';
import Moment from 'react-moment';
import TextAreaFieldGroup from '../../../common/TextAreaFieldGroup';
import Fade from 'react-reveal/Fade';

class CommentItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: this.props.comment.text,
			isEditing: false,
			mouseEntered: false,
			errors: {},
			show: true
		};
	}
	componentDidMount() {
		this.props.getProfiles();
	}

	editTrue = (e) => {
		e.stopPropagation();
		this.setState({ isEditing: true });
	};

	onDeleteClick = (channelId, commentId) => {
		this.setState({ show: !this.state.show });
		setTimeout(() => {
			this.props.deleteComment(channelId, commentId);
		}, 2000);
	};

	mouseOver = () => {
		this.setState({ mouseEntered: !this.state.mouseEntered });
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	render() {
		const { comment, channelId, auth } = this.props;
		const { isEditing, mouseEntered, text, errors } = this.state;
		return (
			<Fade top opposite collapse when={this.state.show}>
				<Container onClick={this.mouseOver} className={this.state.show ? 'show' : 'hide'}>
					<div className="user">
						<img className="avatar" src={comment.avatar} alt="comment user avatar" />
						<div className="stats">
							<p className="name">{comment.name}</p>
							<p className="date">
								posted <Moment format="DD/MM/YYYY HH:mm">{comment.date}</Moment>
							</p>
							{comment.user === auth.user.id && mouseEntered === true ? (
								<i onClick={this.editTrue} className="fas fa-pencil-alt edit-post" title="edit post" />
							) : null}
						</div>
					</div>
					{!isEditing ? (
						<p className="lead">{comment.text}</p>
					) : (
						<Form onSubmit={this.onSubmit}>
							<TextAreaFieldGroup
								// placeholder="Reply to post"
								name="text"
								value={text}
								handleChange={this.handleChange}
								error={errors.text}
							/>
						</Form>
					)}
					{comment.user === auth.user.id && !isEditing && mouseEntered ? (
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
					) : isEditing ? (
						<i
							className="fas fa-check saveEdit"
							onClick={(e) => {
								e.preventDefault();
								this.props.editComment(channelId, comment._id, text);
							}}
						/>
					) : null}
				</Container>
			</Fade>
		);
	}
}

CommentItem.propTypes = {
	deleteComment: propTypes.func.isRequired,
	comment: propTypes.object.isRequired,
	channelId: propTypes.string.isRequired,
	auth: propTypes.object.isRequired,
	editComment: propTypes.func.isRequired,
	editTrue: propTypes.func,
	onDeleteClick: propTypes.func,
	mouseOver: propTypes.func,
	handleChange: propTypes.func,
	getProfiles: propTypes.func.isRequired,
	errors: propTypes.object
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	profiles: state.profiles
});

export default connect(mapStateToProps, { deleteComment, editComment, getProfiles })(CommentItem);

const SlideDown = keyframes`
	0% { opacity: 1, top: 0}
	50% { opacity: 0.5, top: 10px}
	100% { opacity: 0, top: 20px}
`;

const Form = styled.form`
	width: 100%;
	textarea {
		width: 100%;
	}
`;

const Container = styled.div`
	div.deleted {
		position: relative;
		animation: ${SlideDown} 0.5s ease-in;
	}
	cursor: pointer;
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
			max-width: 900px;
			min-width: 500px;
			justify-content: space-between;
			.name {
				font-weight: bold;
				font-size: 1.8rem;
				margin-bottom: 5px;
			}
			.date {
				font-size: 1.4rem;
				color: rgba(0, 0, 0, 0.5);
				time {
					color: rgba(0, 0, 0, 0.5);
				}
			}
			.edit-post {
				cursor: pointer;
				margin-left: 10px;
				font-size: 1.4rem;
				&:hover {
					color: ${(props) => props.theme.active};
				}
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
