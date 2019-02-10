import axios from 'axios';

import {
	ADD_CHANNEL,
	GET_ERRORS,
	CLEAR_ERRORS,
	GET_CHANNELS,
	GET_CHANNEL,
	CHANNEL_LOADING,
	DELETE_CHANNEL,
	DELETE_COMMENT,
	EDIT_COMMENT
} from './types';
const baseURL = process.env.REACT_APP_SERVER_URL

// Add Post
export const addChannel = (channelData) => async (dispatch) => {
	await dispatch(clearErrors());
	await axios
		.post(`${baseURL}/channels`, channelData)
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
		await dispatch(clearErrors());
	}
	await axios
		.get(`${baseURL}/channels`)
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
export const getChannel = (id) => async (dispatch) => {
	await dispatch(setChannelLoading());
	await axios
		.get(`${baseURL}/channels/${id}`)
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
export const deleteChannel = (id) => async (dispatch) => {
	await axios
		.delete(`${baseURL}/channels/${id}`)
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
export const addLike = (id) => async (dispatch) => {
	await axios.post(`${baseURL}/channels/like/${id}`).then((res) => dispatch(getChannels())).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		})
	);
};

// Remove Like
export const removeLike = (id) => async (dispatch) => {
	await axios.post(`${baseURL}/channels/unlike/${id}`).then((res) => dispatch(getChannels())).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		})
	);
};

// Add Comment
export const addComment = (channelId, newComment) => async (dispatch) => {
	await dispatch(clearErrors());
	await axios
		.post(`${baseURL}/channels/comment/${channelId}`, newComment)
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
// Add Comment
export const editComment = (channelId, commentId, textData) => async (dispatch) => {
	await dispatch(clearErrors());
	await axios
		.put(`${baseURL}/channels/comment/${channelId}/${commentId}`, textData)
		.then((res) =>
			dispatch({
				type: EDIT_COMMENT,
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
export const deleteComment = (channelId, commentId) => async (dispatch) => {
	await axios
		.delete(`${baseURL}/Channels/comment/${channelId}/${commentId}`)
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
