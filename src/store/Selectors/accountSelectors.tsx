import {RootStateType} from "../store";

export const getDetails = (state:RootStateType) => {
  return state.account.data
}