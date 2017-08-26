import { FETCH_DATA } from '../constants/ActionTypes';
import { Action, StoreState } from '../typings'
const initState = {
  name: 'name'
}

export default function fetchData(state: StoreState  = initState, action: Action) {
  if (action.type === FETCH_DATA) {
    return { name: 'Gavin' }
  } else {
    return { name: 'null'}
  }
}