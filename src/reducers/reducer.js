const defaultState = {
  rockets: []
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_ROCKET': 
    return {
      ...state,
      rockets: action.payload
    }
    default: return state
  }
}

export default reducer
