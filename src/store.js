import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form'
import enfantsReducer from "./enfantsReducer";
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const rootReducer = combineReducers({
	form: formReducer,
	enfants: enfantsReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;

