import { UPDATE } from '../constants/ActionTypes';
import { Action, StoreState } from '../typings'
const initState = {
  name: 'Gavin'
}

export default function (state: StoreState  = initState, action: Action) {
  console.log(state, action, UPDATE)
  if (action.type === UPDATE) {
    return { name: action.name }
  } else {
    return { name: 'anomouys'}
  }
}
