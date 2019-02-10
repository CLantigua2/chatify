import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
import { GET_ERRORS, SET_CURRENT_USER, CLEAR_ERRORS } from './types';
import jwt_decode from 'jwt-decode';
const baseURL = process.env.REACT_APP_SERVER_URL


// Register user

export const registerUser = (userData, history) => async (dispatch) => {
	await axios.post(`${baseURL}/users/register`, userData).then((res) => history.push('/login')).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		})
	);
};

// Login - get user token
export const loginUser = (userData) => async (dispatch) => {
	await axios
		.post(`${baseURL}/users/login`, userData)
		.then((res) => {
			// Save to localstorage
			const { token } = res.data;
			//set token to localstorage
			localStorage.setItem('jwt', token);
			// Set token to auth header
			setAuthToken(token);
			// Decode token to get user data
			const decoded = jwt_decode(token);
			// Set current user
			dispatch(setCurrentUser(decoded));
		})
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		);
};

// Set logged in user
export const setCurrentUser = (decoded) => {
	return {
		type: SET_CURRENT_USER,
		payload: decoded
	};
};

// Log user out
export const logoutUser = () => async (dispatch) => {
	// Remove token from localstorage
	await localStorage.removeItem('jwt');
	// remove auth header for future requests
	await setAuthToken(false);
	// set current user to empty object {} which will set isAuthenticated to false
	await dispatch(setCurrentUser({}));
};

// clear errors
export const clearErrors = () => {
	return {
		type: CLEAR_ERRORS
	};
};
