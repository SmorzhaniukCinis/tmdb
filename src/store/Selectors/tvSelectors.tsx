import {RootStateType} from "../store";

export const getIsTVLoading = (state:RootStateType) => {
    return state.tv.isLoading
}
export const getTVDetails = (state:RootStateType) => {
    return state.tv.tvDetails
}
export const getTVStatsSelector = (state:RootStateType) => {
    return state.tv.tvStats
}
export const getTVSeason = (state:RootStateType) => {
    return state.tv.seasonsDetails
}