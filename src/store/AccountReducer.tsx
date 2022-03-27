import {createRequestToken} from "../API/authAPI";

const initialState = {
    test: 'hello'
}

export const AccountReducer = (state= initialState, action:any) => {
  switch (action.type) {
      case "sd":
          return {...state, test : action.text}
      default: return state
  }
}

export const createRequestTokenThunk = () =>  async (dispatch:any) => {
    debugger
    const res:any = await createRequestToken()
    if (res.success) {
        window.location.replace(
            `https://www.themoviedb.org/authenticate/${res.request_token}?redirect_to=http://localhost:3000`
        )
        dispatch({type: 'sd', test: 'success'})
    }
}

