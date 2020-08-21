import { createStore } from 'redux'
import rocketReducer from '../reducers/reducer'


const store = createStore(
    rocketReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
  
  export default store
  