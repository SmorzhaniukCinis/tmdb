import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {authActions, AuthReducer} from "./authReducer";
import {accountActions, AccountReducer} from "./accountReducer";
import {listActions, ListReducer} from "./listReducer";
import {searchActions, searchReducer} from "./searchReducer";
import {movieActions, MovieReducer} from "./movieReducer";
import {PersonActions, PersonReducer} from "./personReducer";
import {reviewActions, ReviewReducer} from "./ReviewReducer";
import {tvActions, TVReducer} from "./TVReducer";
import {mediaActions, MediaReducer} from "./mediaReducer";
import {episodeActions, EpisodeReducer} from "./episodeReducer";
import {discoverMediaActions, DiscoverMediaReducer} from "./discoverMediaReducer";


const rootReducer = combineReducers({
    auth: AuthReducer,
    list: ListReducer,
    account: AccountReducer,
    search: searchReducer,
    movie: MovieReducer,
    person: PersonReducer,
    review: ReviewReducer,
    tv: TVReducer,
    media: MediaReducer,
    episode: EpisodeReducer,
    discoverMedia: DiscoverMediaReducer
})
export type RootStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunk))

type InferValueType<T> = T extends { [key: string]: infer U } ? U : never
export type ActionTypes = ReturnType<InferValueType<typeof
    authActions
    | typeof accountActions
    | typeof listActions
    | typeof movieActions
    | typeof reviewActions
    | typeof discoverMediaActions
    | typeof tvActions
    | typeof PersonActions
    | typeof mediaActions
    | typeof episodeActions
    | typeof searchActions>>

// @ts-ignore
window.store = store