
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

