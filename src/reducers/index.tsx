import { combineReducers } from 'redux';
import objList from './objReducer'
import selectedItem from './selectedObjReducer'
import user from './userReducer'

const rootReducers = () => combineReducers({
  objList,
  selectedItem,
  user,
})

export default rootReducers
