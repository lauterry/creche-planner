import { createStore, combineReducers, applyMiddleware } from 'redux'
import enfantsReducer from "./enfantsReducer";
import logger from 'redux-logger'

const rootReducer = combineReducers({
	enfants: enfantsReducer
});

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;

