import axios from 'axios';

import {
	ADD_CHANNEL,
	GET_ERRORS,
	CLEAR_ERRORS,
	GET_CHANNELS,
	GET_CHANNEL,
	CHANNEL_LOADING,
	DELETE_CHANNEL,
	DELETE_COMMENT
} from './types';

// Add Post
export const addChannel = (channelData) => (dispatch) => {
	dispatch(clearErrors());
	axios
		.post('/api/channels', channelData)
		.then((res) =>
			dispatch({
				type: ADD_CHANNEL,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		);
};

// Get Posts
export const getChannels = (load = true) => async (dispatch) => {
	if (load) {
		await dispatch(setChannelLoading);
		await dispatch(clearErrors());
	}
	await axios
		.get('/api/channels')
		.then((res) =>
			dispatch({
				type: GET_CHANNELS,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_CHANNELS,
				payload: null
			})
		);
};

// Get Post
export const getChannel = (id) => (dispatch) => {
	dispatch(setChannelLoading());
	axios
		.get(`/api/channels/${id}`)
		.then((res) =>
			dispatch({
				type: GET_CHANNEL,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_CHANNEL,
				payload: null
			})
		);
};

// Delete Post
export const deleteChannel = (id) => (dispatch) => {
	axios
		.delete(`/api/channels/${id}`)
		.then((res) =>
			dispatch({
				type: DELETE_CHANNEL,
				payload: id
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		);
};

// Add Like
export const addLike = (id) => (dispatch) => {
	axios.post(`/api/channels/like/${id}`).then((res) => dispatch(getChannels())).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		})
	);
};

// Remove Like
export const removeLike = (id) => (dispatch) => {
	axios.post(`/api/channels/unlike/${id}`).then((res) => dispatch(getChannels())).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		})
	);
};

// Add Comment
export const addComment = (channelId, newComment) => (dispatch) => {
	dispatch(clearErrors());
	axios
		.post(`/api/channels/comment/${channelId}`, newComment)
		.then((res) =>
			dispatch({
				type: GET_CHANNEL,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		);
};

// Delete Comment
export const deleteComment = (channelId, commentId) => (dispatch) => {
	axios
		.delete(`/api/Channels/comment/${channelId}/${commentId}`)
		.then((res) =>
			dispatch({
				type: DELETE_COMMENT,
				payload: commentId
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		);
};

// Set loading state
export const setChannelLoading = () => {
	return {
		type: CHANNEL_LOADING
	};
};

// Clear errors
export const clearErrors = () => {
	return {
		type: CLEAR_ERRORS
	};
};
