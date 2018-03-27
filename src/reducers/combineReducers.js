import {combineReducers} from 'redux'

// import all reducers of our app
import drawer from './drawer'
import helloReducer from './hello'

// This structure will be actual structure of our state.
const reducers = {
  hello: helloReducer,
  drawer,
}

export default combineReducers(reducers)
