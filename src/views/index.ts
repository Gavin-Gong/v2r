/* 
  导出view， reducer， action 数组
*/
import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable';

import * as Playlist from './Playlist'
import * as PlaylistDetail from './PlaylistDetail'
import * as appEpic from './App/epics'
import * as appReducers from './App/reducers'
export const views = [
  Playlist.view,
  PlaylistDetail.view
]
export const reducers = combineReducers({
  ...Playlist.reducers,
  ...PlaylistDetail.reducers,
  ...appReducers
})

export const epics = combineEpics(
  Playlist.epics.playListEpic,
  appEpic.playSong
)