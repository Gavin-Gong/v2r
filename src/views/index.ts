/* 
  导出view， reducer， action 数组
*/
import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable';

import * as Playlist from './Playlist'
import * as PlaylistDetail from './PlaylistDetail'
// export const views = [Eye.view, One.view]
export const views = [
  Playlist.view,
  PlaylistDetail.view
]
export const reducers = combineReducers({
  ...Playlist.reducers,
  ...PlaylistDetail.reducers
})

export const epics = combineEpics(
  Playlist.epics.playListEpic,
  // PlaylistDetail.epics
)