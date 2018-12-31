import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextAreaFieldGroup from '../../../common/TextAreaFieldGroup';
import { addComment } from '../../../../redux/actions/channelActions';
import styled from 'styled-components';

class CommentForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			errors: {}
		};
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	componentDidUpdate(prevProps) {
		if (prevProps.errors !== this.props.errors) {
			this.setState({ errors: this.props.errors });
		}
	}

	onSubmit = (e) => {
		e.preventDefault();
		// get user who's making the post from auth
		const { user } = this.props.auth;
		const { channelId } = this.props;
		// get the channel from state
		const newComment = {
			text: this.state.text,
			name: user.name,
			avatar: user.avatar
		};

		this.props.addComment(channelId, newComment);
		this.setState({
			text: ''
		});
	};

	render() {
		const { errors, text } = this.state;
		return (
			<Form onSubmit={this.onSubmit}>
				<TextAreaFieldGroup
					placeholder="Reply to post"
					name="text"
					value={text}
					handleChange={this.handleChange}
					error={errors.text}
				/>
				<button className="btn">Submit</button>
			</Form>
		);
	}
}

CommentForm.propTypes = {
	addComment: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired,
	channelId: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
	errors: state.errors,
	auth: state.auth
});

export default connect(mapStateToProps, { addComment })(CommentForm);

const Form = styled.form`
	border: 1px solid black;
	border-radius: 10px;
	position: relative;
	min-width: 97.5%;
	display: flex;
	flex-direction: right;
	flex-wrap: nowrap;
	margin-left: 10px;
	margin-top: 20px;
	padding: 2px;
	textarea {
		width: 84.9vw;
		border-radius: 10px 0 0 10px;
		border: transparent;
	}
	.btn {
		border-radius: 0 8px 8px 0;
		background: rgba(0, 177, 0, 0.6);
		padding: 10px;
		cursor: pointer;
	}
`;
