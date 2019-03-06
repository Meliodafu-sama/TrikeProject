import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import makeRootReducer from "./reducers";
import { createLogger } from "redux-logger";

const log = createLogger({ diff:true, collapsed:true });

export default (initialState = {}) => {
	//Middleware Config
	const middleware = [thunk, log];
	//Store Enhancers
	const enhancers = [];
	//Store Instantiation
	const store = createStore(
		makeRootReducer(),
		initialState,
		compose(
				applyMiddleware(...middleware),
				...enhancers
			)
		);
	return store;
};