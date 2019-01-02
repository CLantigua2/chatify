import { DRAWER_OPEN, DRAWER_CLOSE } from '../actions/types';

const initialState = {
	drawer: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case DRAWER_OPEN:
			return {
				...state,
				drawer: true
			};
		case DRAWER_CLOSE:
			return {
				...state,
				drawer: false
			};
		default:
			return state;
	}
}
