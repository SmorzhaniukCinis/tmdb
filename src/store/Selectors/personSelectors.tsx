import {RootStateType} from "../store";

export const getPersonDetails = (state:RootStateType) => {
    return state.person.personDetails
}