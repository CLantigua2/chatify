import { TOGGLE_DRAWER } from '../actions/types';

const initialState = {
	drawer: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case TOGGLE_DRAWER:
			return {
				...state,
				drawer: !state.drawer
			};
		default:
			return state;
	}
}
