import { combineReducers } from 'redux';
import objList from './objReducer'

const rootReducers = () => combineReducers({
  objList,
})

export default rootReducers
