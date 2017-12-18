import { GET_PLAYLIST_DETAIL } from './types'
import { IAction } from 'typings';

export const getPlaylist = (action: IAction, id: number | string) => {
  return {
    type: GET_PLAYLIST_DETAIL,
    id
  }
}