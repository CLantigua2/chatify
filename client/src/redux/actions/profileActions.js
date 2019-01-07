import axios from 'axios';
import {
	GET_PROFILE,
	PROFILE_LOADING,
	GET_ERRORS,
	CLEAR_CURRENT_PROFILE,
	SET_CURRENT_USER,
	GET_PROFILES
} from './types';

// get current profile
export const getCurrentProfile = () => (dispatch) => {
	dispatch(setProfileLoading());
	axios
		.get('/profile')
		.then((res) => {
			dispatch({
				type: GET_PROFILE,
				payload: res.data
			});
		})
		.catch((err) => {
			dispatch({
				type: GET_PROFILE,
				payload: {}
			});
		});
};
// get current profile by username
export const getProfileByUsername = (id) => (dispatch) => {
	dispatch(setProfileLoading());
	axios
		.get(`/profile/username/${id}`)
		.then((res) => {
			dispatch({
				type: GET_PROFILE,
				payload: res.data
			});
		})
		.catch((err) => {
			dispatch({
				type: GET_PROFILE,
				payload: null
			});
		});
};

// create profile
export const createProfile = (profileData, history) => (dispatch) => {
	axios
		.post('/profile', profileData)
		.then((res) =>
			dispatch({
				type: GET_PROFILE,
				payload: res.data
			})
		)
		.then((res) => history.push('/dashboard'))
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: {}
			})
		);
};

// Get All Profiles
export const getProfiles = () => (dispatch) => {
	dispatch(setProfileLoading());
	axios
		.get('/profile/all')
		.then((res) => {
			dispatch({
				type: GET_PROFILES,
				payload: res.data
			});
		})
		.catch((err) => {
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			});
		});
};

// Delete account & profile
export const deleteAccount = () => (dispatch) => {
	if (window.confirm('Are you sure? This can NOT be undone!')) {
		axios
			.delete('/profile')
			.then((res) =>
				dispatch({
					type: SET_CURRENT_USER,
					payload: {}
				})
			)
			.catch((err) =>
				dispatch({
					type: GET_ERRORS,
					payload: err.response.data
				})
			);
	}
};

// Profile loading
export const setProfileLoading = () => {
	return {
		type: PROFILE_LOADING
	};
};

// Clear Profile
export const clearCurrentProfile = () => {
	return {
		type: CLEAR_CURRENT_PROFILE
	};
};
