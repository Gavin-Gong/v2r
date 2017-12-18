import { PLAYSONG } from './types'
import { getPlayListDetail } from 'api'
import { ActionsObservable } from 'redux-observable'
import { IAction } from 'typings'

export const playSong = (action$: ActionsObservable<IAction>) => {
  return action$
    .ofType(PLAYSONG)
    .mergeMap((action: any) => {
      return getPlayListDetail(action.id)
    })
}