/* 
  导出view， reducer， action 数组
*/
import { combineReducers } from 'redux'

import * as Eye from './Eyepetizer'
import * as One from './One'

// export const views = [Eye.view, One.view]
export const views = [
  Eye.view,
  One.view
]
export const reducers = combineReducers({
  ...Eye.reducers,
  ...One.reducers
})