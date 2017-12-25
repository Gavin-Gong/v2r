import { IAction } from 'typings';
import { PLAYSONG, PLAY_SONG_SUCCESS } from './types';

const initSate = {
  name: '',
  url: '',
  artist: [
    {
      name: '佚名',
      id: 1
    }
  ],
  ablum: {
    picUrl: ''
  }
}

export const curSong = (state: any = initSate, action: IAction) => {
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