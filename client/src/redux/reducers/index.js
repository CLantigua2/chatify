import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import channelReducer from './channelReducer';
import profileReducer from './profileReducer';
import drawerReducer from './drawerReducer';

// takes in other reducers and combines
export default combineReducers({
	auth: authReducer,
	errors: errorReducer,
	channel: channelReducer,
	profile: profileReducer,
	drawer: drawerReducer
});
