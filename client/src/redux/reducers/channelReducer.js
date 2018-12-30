import {
	ADD_CHANNEL,
	GET_CHANNELS,
	GET_CHANNEL,
	DELETE_CHANNEL,
	CHANNEL_LOADING,
	DELETE_COMMENT,
	EDIT_COMMENT
} from '../actions/types';

const initialState = {
	channels: [],
	channel: {},
	loading: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case CHANNEL_LOADING:
			return {
				...state,
				loading: true
			};
		case GET_CHANNELS:
			return {
				...state,
				channels: action.payload,
				loading: false
			};
		case GET_CHANNEL:
			return {
				...state,
				channel: action.payload,
				loading: false
			};
		case ADD_CHANNEL:
			return {
				...state,
				channels: [ action.payload, ...state.channels ]
			};
		case DELETE_CHANNEL:
			return {
				...state,
				channels: state.channels.filter((channel) => channel._id !== action.payload)
			};
		case EDIT_COMMENT:
			return {
				...state,
				channels: action.payload,
				loading: false
			};
		case DELETE_COMMENT:
			return {
				...state,
				channel: {
					...state.channel,
					comments: state.channel.comments.filter((comment) => comment._id !== action.payload)
				}
			};
		default:
			return state;
	}
}
