import { LOGIN } from './actionTypes'
import { Action } from './actions'

export interface State {

}

function login(state: State, action: Action) {
  switch (action.type) {
    case LOGIN:
      return {
        login: 'mobx'
      }
    default:
      return state
  }
}

export default login