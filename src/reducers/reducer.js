const defaultState = {
  rockets: [],
  loaded: false,
  rocketDesc: false
}

const rocketReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_ROCKETS': 
    return {
      ...action.payload
    }
    // case 'CHANGE_DESC': 
    // return {
    //   rockets: state.rockets,
    //   loaded: state.loaded,
    //   rocketDesc: action
    // }
    default: return state
  }
}

export default rocketReducer
