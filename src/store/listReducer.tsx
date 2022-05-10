import {ActionTypes, RootStateType} from "./store";
import {createListData, editListData, listType} from "../API/ListAPI/listTypes";
import {listAPI} from "../API/ListAPI/ListAPI";
import {Dispatch} from "redux";

const SET_LIST = 'list/SET_LIST'
const SET_LOADING = 'list/SET_LOADING'

export {}
const initialState = {
    listDetails: null as unknown as listType,
    isLoading: false
}
type initialStateType = typeof initialState

export const ListReducer = (state = initialState, action:ActionTypes): initialStateType => {
    switch (action.type) {
        case SET_LIST:
            return {...state, listDetails: action.list}
        case SET_LOADING:
            return {...state, isLoading: action.isLoading}
        default: return state
    }
}

export const listActions = {
    setList: (list:listType) => ({type: SET_LIST, list} as const),
    setLoading: (isLoading:boolean) => ({type: SET_LOADING, isLoading} as const),
}

export const GetList = (id: number) => async (dispatch: Dispatch<ActionTypes>, getState:()=>RootStateType) => {
    dispatch(listActions.setLoading(true))
    const list = await listAPI.getList(id)
    dispatch(listActions.setList(list))
    dispatch(listActions.setLoading(false))
}
export const CreateList = (listDetails:createListData) => async (dispatch: Dispatch<ActionTypes>, getState:()=>RootStateType) => {
    dispatch(listActions.setLoading(true))
    const res = await listAPI.createList(listDetails)
    if (res.success) {
        dispatch(listActions.setLoading(false))
    }
}
export const EditList = (listDetails:editListData, id:number) => async (dispatch: Dispatch<ActionTypes>, getState:()=>RootStateType) => {
    dispatch(listActions.setLoading(true))
    const res = await listAPI.editList(listDetails, id)
    if (res.success) {
        dispatch(listActions.setLoading(false))
    }
}
export const DeleteList = (id:number) => async (dispatch: Dispatch<ActionTypes>, getState:()=>RootStateType) => {
    dispatch(listActions.setLoading(true))
    const res = await listAPI.deleteList(id)
    if (res.success) {
        dispatch(listActions.setLoading(false))
    }
}
export const addListItem = (ListId:number, itemId:number) => async (dispatch: Dispatch<ActionTypes>, getState:()=>RootStateType) => {
    const sessionId = getState().auth.sessionId
    const res = await listAPI.addListItem(itemId, ListId, sessionId)
    if (res.status_code === 8) {
        alert("this item already exist in this list")
    }
}
export const deleteListItem = (listId:number, itemId:number) => async (dispatch: Dispatch<ActionTypes>, getState:()=>RootStateType) => {
    const sessionId = getState().auth.sessionId
    const res = await listAPI.deleteListItem(itemId, listId, sessionId)
    if(res.status_code === 13) {
        const list = await listAPI.getList(listId)
        dispatch(listActions.setList(list))
    } else {
        alert(res.status_message)
    }
}

