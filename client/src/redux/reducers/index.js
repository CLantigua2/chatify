import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';

// takes in other reducers and combines
export default combineReducers({
	auth: authReducer,
	errors: errorReducer
});
