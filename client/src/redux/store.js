import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import invariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import { saveToLocalStorage, loadFromLocalStore } from './storeActions';
import throttle from 'lodash/throttle';

// calls to load state from local storage
// create an initial state object
const middleware = [ invariant(), thunk, createLogger() ];
const persistedState = loadFromLocalStore();
const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });
const store = createStore(rootReducer, persistedState, composeEnhancers(applyMiddleware(...middleware)));

store.subscribe(throttle(() => saveToLocalStorage(store.getState())), 1000);

if (module.hot) {
	module.hot.accept('./reducers/', () => {
		store.replaceReducer(require('./reducers/').default);
	});
}

export default store;
