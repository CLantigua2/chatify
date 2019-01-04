// Saves state to local storage
export function saveToLocalStorage(state) {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem('state', serializedState);
	} catch (err) {
		console.log(err);
	}
}

// loads local storage into redux state
export function loadFromLocalStore() {
	try {
		const serializedState = localStorage.getItem('state');
		if (serializedState === null) return undefined;
		return JSON.parse(serializedState);
	} catch (err) {
		console.log(err);
		return undefined;
	}
}
