import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {AccountReducer} from "./AccountReducer";

const middlewareEnhancer = applyMiddleware(thunkMiddleware )
const composedEnhancers = compose(middlewareEnhancer)

const rootReducer = combineReducers({account: AccountReducer})

export const store = createStore(rootReducer, undefined ,composedEnhancers)
