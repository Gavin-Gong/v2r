import $http from './_http';
import { AxiosPromise } from 'axios';

// export interface Fetch {
//   (uid: number): AxiosPromise
// }
interface Fetch {
  
}

export default {
  getRecommendRadio: (): AxiosPromise => $http.get(`/dj/recommend`),
  getCateRadio: (type?: number): AxiosPromise => $http.get(`/dj/catelist?type=${type}`),
  subRadio: (rid: number): AxiosPromise => $http.get(`/dj/sub?rid=${rid}&t=1`),
  unSubRadio: (rid: number): AxiosPromise => $http.get(`/dj/sub?rid=${rid}&t=0`),
  getRadioDetail: (rid: number): AxiosPromise => $http.get(`/dj/detail?rid=${rid}`),
  getRaidoProgram: (rid: number): AxiosPromise => $http.get(`/dj/program?rid=${rid}`)
}