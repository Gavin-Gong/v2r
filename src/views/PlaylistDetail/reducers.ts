import { GET_PLAYLIST_DETAIL } from './types'
import { Action } from 'redux'
const initState = {

}
export interface IPlaylistDetail extends Action {
  playload: object
}
export const curPlaylist = (state = initState, action: IPlaylistDetail) => {
  switch (action.type) {
    case GET_PLAYLIST_DETAIL:
      return {
        ...state,
        ...action.playload
      }
    default:
      return state
  }
}