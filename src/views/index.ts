/* 
  导出view， reducer， action 数组
*/
import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable';

import * as Eye from './Eyepetizer'
import * as One from './One'
import * as PlaylistDetail from './PlaylistDetail'
// export const views = [Eye.view, One.view]
export const views = [
  Eye.view,
  One.view,
  PlaylistDetail.view
]
export const reducers = combineReducers({
  ...Eye.reducers,
  ...One.reducers,
  ...PlaylistDetail.reducers
})

export const epics = combineEpics(
  One.epics.playListEpic,
  // PlaylistDetail.epics
)