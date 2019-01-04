import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import { saveToLocalStorage, loadFromLocalStore } from './storeActions';
import { throttle } from 'lodash';

// calls to load state from local storage
// create an initial state object
const middleware = [ thunk, createLogger() ];
const persistedState = loadFromLocalStore();

const store = createStore(rootReducer, persistedState, compose(applyMiddleware(...middleware)));

store.subscribe(throttle(() => saveToLocalStorage(store.getState())), 1000);

export default store;
