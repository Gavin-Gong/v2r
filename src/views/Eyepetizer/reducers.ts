import { tabFilter } from './actions'

const initState = {
  status: 'init',
  data: {}
}
export default {
  filterType (state: any, action: any) {
    switch (action.type) {
      case tabFilter.ALL:
        return {
          status: 'success'
        }
    
      default:
        break;
    }

    return initState
  }
}
