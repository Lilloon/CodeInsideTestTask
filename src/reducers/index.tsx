import { combineReducers } from 'redux';
import objList from './objReducer'
import selectedItem from './selectedObjReducer'

const rootReducers = () => combineReducers({
  objList,
  selectedItem,
})

export default rootReducers
