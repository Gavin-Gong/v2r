// import { tabFilter } from './actions'

// const initState = {
//   status: 'init',
//   data: {
//     itemList: []
//   }
// }
export default {
  filterType (state: any, action: any) {

    // console.log(action)
    // switch (action.type) {
    //   case tabFilter.ALL:
    //     return {
    //       status: 'success'
    //     }
    
    //   default:
    //     break;
    // }

    // return initState
    return {
      status: 'init',
      data: action.data || { itemList: [] }
    }
  }
}
