import {ActionTypes, RootStateType} from "./store";
import {listType} from "../API/ListAPI/listTypes";
import {listAPI} from "../API/ListAPI/ListAPI";
import {Dispatch} from "redux";

const SET_LIST = 'list/SET_LIST'

export {}
const initialState = {
    listDetails: null as unknown as listType
}
type initialStateType = typeof initialState

export const ListReducer = (state = initialState, action:ActionTypes): initialStateType => {
    switch (action.type) {
        case SET_LIST:
            return {...state, listDetails:action.list}
        default: return state
    }
}

export const listActions = {
    setList: (list:listType) => ({type: SET_LIST, list} as const)
}

export const GetList = (id: number) => async (dispatch: Dispatch<ActionTypes>, getState:()=>RootStateType) => {
    const list = await listAPI.getList(id)
    dispatch(listActions.setList(list))
}

