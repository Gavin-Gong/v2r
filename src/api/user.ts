import $http from './_http'
import { AxiosPromise } from 'axios';

export interface Paging {
  limit: number,
  offset: number
}
export interface Fetch {
  (uid: number): AxiosPromise
}
export default {
  getUserDetail: (uid: number) => $http.get(`user/detail?uid=${uid}`),
  getUserSub: (uid: number) => $http.get(`user/subcount`),
  getUserPlaylist: (uid: number) => $http.get(`user/playlist?uid=${uid}`),
  getUserRadio: (uid: number) => $http.get(`user/dj?uid=${uid}`),
  getUserFollows: (uid: number, paging: Paging) => $http.get(`user/follows?uid=${uid}`, {params: { ...paging }}),
  getUserEvent: (uid: number) => $http.get(`user/event?uid=${uid}`),

  /**@desc 获取用户播放记录
   * @param uid
   * @param type 0获取全部数据， 1获取本周数据
   */
  getUserRecord: (uid: number, type: 0 | 1) => $http.get(`user/record?uid=${uid}`)
}