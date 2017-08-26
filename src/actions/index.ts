import * as types from '../constants/ActionTypes';

export const fetchData: (params: object) => object = params  => ({ type: types.FETCH_DATA, params })