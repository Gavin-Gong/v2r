import 'rxjs'
import { 
  GET_PLAY_LIST,
  GET_PLAY_LIST_SUCCESS,
  GET_PLAY_LIST_FALL
 } from './types'

export const getPlayList = (uid: number = 6938518) => {
  return {
    type: GET_PLAY_LIST,
    uid
  }
}
export const getPlayListSuccess = (data: any) => {
  return {
    type: GET_PLAY_LIST_SUCCESS,
    data
  }
}
export const getPlayListFail = () => {
  return {
    type: GET_PLAY_LIST_FALL,
  }
}