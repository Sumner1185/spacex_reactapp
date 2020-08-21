const defaultState = {
  rockets: [],
  loaded: false
}

const rocketReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_ROCKETS': 
    return {
      ...action.payload
    }
    default: return state
  }
}

export default rocketReducer
