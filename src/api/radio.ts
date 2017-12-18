import $http from './_http';
import { AxiosPromise } from 'axios';

// export interface Fetch {
//   (uid: number): AxiosPromise
// }
interface Fetch {
  
}

export default {
  getRecommendRadio: () => $http.get(`/dj/recommend`),
  getCateRadio: (type?: number) => $http.get(`/dj/catelist?type=${type}`),
  subRadio: (rid: number) => $http.get(`/dj/sub?rid=${rid}&t=1`),
  unSubRadio: (rid: number) => $http.get(`/dj/sub?rid=${rid}&t=0`),
  getRadioDetail: (rid: number) => $http.get(`/dj/detail?rid=${rid}`),
  getRaidoProgram: (rid: number) => $http.get(`/dj/program?rid=${rid}`)
}