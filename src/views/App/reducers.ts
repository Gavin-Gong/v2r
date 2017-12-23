import { IAction } from 'typings';
import { PLAYSONG, PLAY_SONG_SUCCESS } from './types';

export const curSong = (state: any, action: IAction) => {
  switch (action.type) {
    case PLAYSONG:
      return {
        ...state,
        id: action.id
      }
    case PLAY_SONG_SUCCESS:
      console.log(state, 'name')
      return {
        ...state,
        ...action.playload
      }
    default:
      return state || {}
  }
}