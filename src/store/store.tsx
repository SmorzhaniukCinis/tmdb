import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {authActions, AuthReducer} from "./authReducer";
import {accountActions, AccountReducer} from "./accountReducer";
import {listActions, ListReducer} from "./listReducer";


const rootReducer = combineReducers({
    auth: AuthReducer ,
    list: ListReducer ,
    account:AccountReducer})
export type RootStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunk))

type InferValueType<T> = T extends { [key: string]: infer U } ? U : never
export type ActionTypes = ReturnType<InferValueType<typeof authActions | typeof accountActions | typeof listActions>>

// @ts-ignore
window.store = store