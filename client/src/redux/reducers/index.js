import { combineReducers } from 'redux';
import authReducer from './authReducer';

// takes in other reducers and combines
export default combineReducers({
	auth: authReducer
});
