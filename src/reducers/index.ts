import { combineReducers } from 'redux'
import fetchData from './fetchData'
console.log(typeof fetchData)
export default combineReducers({
  fetchData
})