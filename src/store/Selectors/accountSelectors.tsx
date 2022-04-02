import {RootStateType} from "../store";

export const getDetails = (state:RootStateType) => {
  return state.account.data
}
export const getIsDarkTheme = (state:RootStateType) => {
  return state.account.isDarkTheme
}