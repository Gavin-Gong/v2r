import api from '../../api'
import { GET_PLAY_LIST } from './types'
import { getPlayListSuccess } from './actions'

export const playListEpic = (action$: any) => {
  return action$
    .ofType(GET_PLAY_LIST)
    .mergeMap((action: any) =>
      api.getUserPlaylist(6938518).then(res => {
        return getPlayListSuccess(res.data.playlist)
      })
    )
}