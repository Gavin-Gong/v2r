/* tslint-disable */
import * as types from '../constants/ActionTypes';
import  { Action } from '../typings'

//  const fetchData = params: object  => ({ type: types.FETCH_DATA, params })
export interface Params {
  [extraProp: string]: types.FETCH_DATA
}
  const fetchData = function(params: Params): Action {
    return {
      type: types.FETCH_DATA,
      params
    }
 }
 export default {
   fetchData
 }
