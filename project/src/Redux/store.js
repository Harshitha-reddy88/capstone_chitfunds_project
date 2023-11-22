import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import courseReducer from "./ChitfundReducer/Reducer"
import thunk from "redux-thunk";

const rootReducer = combineReducers({ chitfund: courseReducer });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);