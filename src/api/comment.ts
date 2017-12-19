import $http from './_http'
import { AxiosPromise } from 'axios';
import { IPaging } from 'typings'
export default {
  getMusicComment: (sid: number, paging: IPaging): AxiosPromise => {
    return $http.get(`/comment/music`, { params: { id: sid, ...paging } })
  },
  getAlbumComment: (aid: number, paging: IPaging): AxiosPromise => {
    return $http.get(`/comment/album`, { params: { id: aid, ...paging } })
  },
  getPlaylistComment: (aid: number, paging: IPaging): AxiosPromise => {
    return $http.get(`/comment/album`, { params: { id: aid, ...paging } })
  },
  getRadioComment: (aid: number, paging: IPaging): AxiosPromise => {
    return $http.get(`/comment/playlist`, { params: { id: aid, ...paging } })
  },
  getMvComment: (aid: number, paging: IPaging): AxiosPromise => {
    return $http.get(`/comment/album`, { params: { id: aid, ...paging } })
  },
  /**
   * @desc 点赞
   * @param id 资源id 
   * @param cid 评论id 
   * @param type 资源类型 
   */
  likeComment: (id: number, cid: number, type: 0|1|2|3|4): AxiosPromise => {
    return $http.get(`/comment/like`, { params: { id, cid, type, t: 1 } })
  },
  /**
   * @desc 取消赞
   * @param id 资源id 
   * @param cid 评论id 
   * @param type 资源类型 
   */
  unlikeComment: (id: number, cid: number, type: 0 | 1 | 2 | 3 | 4) => {
    return $http.get(`/comment/like`, { params: { id, cid, type, t: 0 } })
  }
  
}
