import $http from './_http'
import { AxiosPromise } from 'axios';

export default {
  getSongDetail: (sid: number): AxiosPromise => $http.get(`/song/detail?ids=${sid}`),
  getAlbumDetail: (aid: number): AxiosPromise => $http.get(`/album?id=${aid}`),
  getArtistSongs: (sid: number): AxiosPromise => $http.get(`/artist?id=${sid}`),
}
