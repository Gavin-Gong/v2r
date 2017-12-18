import { GET_PLAY_LIST, GET_PLAY_LIST_FALL, GET_PLAY_LIST_SUCCESS } from './types'

const initState = {
  data: [],
  status: 0
}

let reducer =  {
  /**
   * @description reducer的函数名将会作为state的入口 例如 state.getPlayList
   * @param state 
   * @param action 
   */
  playList (state: any = initState, action: any) {
    switch (action.type) {
      case GET_PLAY_LIST:
        return {
          ...state,
          isFetching: true,
        }
      case GET_PLAY_LIST_SUCCESS:
        return {
          ...state,
          isFetching: false,
          data: action.data
        }
      case GET_PLAY_LIST_FALL:
        return {
          ...state,
          isFetching: false
        }
      default:
        return state
    }
  }
}

export default reducer 