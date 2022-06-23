import {ActionTypes} from "./store";
import {Dispatch} from "redux";
import {MovieType, person, TVType} from "../API/SearchAPI/searchTypes";
import {searchAPI} from "../API/SearchAPI/searchAPI";
import {CommonResType} from "../API/accountAPI/accountTypes";
import {reviewType} from "../API/ReviewAPI/ReviewTypes";
import {reviewAPI} from "../API/ReviewAPI/ReviewAPI";

const SET_REVIEW = 'review/SET_REVIEW'
const SET_LOADING = 'review/SET_LOADING'


const initialState = {
    Review: {} as reviewType,
    isLoading: false
}
type initialStateType = typeof initialState

export const ReviewReducer = (state = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case SET_REVIEW:
            return {...state, Review: action.review}
        case SET_LOADING:
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}

export const reviewActions = {
    setReview: (review: reviewType) => ({type: SET_REVIEW, review} as const),
    setLoading: (isLoading: boolean) => ({type: SET_LOADING, isLoading} as const),
}

export const GetReview = (id: string) =>
    async (dispatch: Dispatch<ActionTypes>) => {
        dispatch(reviewActions.setLoading(true))
        const result = await reviewAPI.getReview(id)
        dispatch(reviewActions.setReview(result))
        dispatch(reviewActions.setLoading(false))
    }