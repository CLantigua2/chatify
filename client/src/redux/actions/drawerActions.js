import { DRAWER_OPEN, DRAWER_CLOSE } from './types';

export const drawerOpen = () => {
	return {
		type: DRAWER_OPEN
	};
};
export const drawerClose = () => {
	return {
		type: DRAWER_CLOSE
	};
};
