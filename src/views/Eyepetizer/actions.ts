import { fetchEye as request } from '../../api'

import { Dispatch } from 'redux'

export const tabFilter = {
  ALL: 'ALL',
  VIDEO: 'VIDEO',
  TEXT: 'TEXT',
  IMG: 'IMG'
}

export interface IAction {
  type: 'EYE_TAB_FILTER',
  filterKey: 'ALL' | 'VIDEO' | 'TEXT' | 'IMG'
}
export default {
  type: 'EYE_TAB_FILTER',
  filterKey: 'ALL'
} as IAction

export const FetchEye = (dispatch: Dispatch<any>) => {
  request()
    .then(res => {
      dispatch({
        type: 'EYE_TAB_FILTER',
        data: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: 'EYE_TAB_FILTER'
      })
    })
}
