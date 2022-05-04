import {RootStateType} from "../store";

export const getList = (state: RootStateType) => {
    return state.list.listDetails
}