import { PLAYSONG, PLAY_SONG_SUCCESS, PLAY_SONG_FAIL } from './types'
import api from '../../api'
import { ActionsObservable } from 'redux-observable'
import { IAction } from 'typings'
import Rx from 'rxjs'
export const playSong = (action$: ActionsObservable<IAction>) => {
  return action$
    .ofType(PLAYSONG)
    .mergeMap((action: any) => {
      const url$ = Rx.Observable.fromPromise(api.getSongUrl(action.id))
      const song$ = Rx.Observable.fromPromise(api.getSongDetail(action.id))
      // 处理版权
      return Rx.Observable.forkJoin(url$, song$)
        .map(res => {
          console.log(res)
          // 处理数据并返回
          const url = res[0].data.data[0].url
          const id = res[0].data.data[0].id
          const songDetail = res[1].data.songs[0]
          const songInfo = {
            id: songDetail.id,
            name: songDetail.name,
            ablum: songDetail.al,
            artist: songDetail.ar
          }
          // 版权方未提供资源
          if (songDetail.copyright === 1) {
            return {
              type: PLAY_SONG_FAIL
            }
          }
          return { type: PLAY_SONG_SUCCESS, playload: {
            id,
            url,
            ...songInfo
          }}
        })
    })
}