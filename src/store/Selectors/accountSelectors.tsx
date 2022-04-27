import {RootStateType} from "../store";

export const getDetails = (state:RootStateType) => {
  return state.account.details
}
export const getIsDarkTheme = (state:RootStateType) => {
  return state.account.isDarkTheme
}
export const getCreatedLists = (state:RootStateType) => {
  return state.account.createdLists
}