import { createStore, combineReducers } from 'redux'
import rocketReducer from '../reducers/reducer'

const rootReducer = combineReducers({
    data: rocketReducer
  })

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
  
  export default store
  