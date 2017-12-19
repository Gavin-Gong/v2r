import $http from './_http'
import { AxiosPromise } from 'axios';
import { IPaging } from 'typings'
export default {
  getSongDetail: 
    (sid: number): AxiosPromise => $http.get(`/song/detail?ids=${sid}`),
  getAlbumDetail: 
    (aid: number): AxiosPromise => $http.get(`/album?id=${aid}`),
  getPlaylistDetail:
    (pid: number): AxiosPromise => $http.get(`/playlist/detail?id=${pid}`),
  getArtistSongs: 
    (aid: number): AxiosPromise => $http.get(`/artist?id=${aid}`),
  getArtistMv: 
    (aid: number): AxiosPromise => $http.get(`/artist/mv?id=${aid}`),
  getArtistAlbum: 
    (aid: number, paging: IPaging): AxiosPromise => $http.get('/artist/album', {params: {id: aid, ...paging}}),
  getArtistDesc: 
    (aid: number): AxiosPromise => $http.get(`/artist/desc?id=${aid}`),
  getLyric: 
    (sid: number): AxiosPromise => $http.get(`/lyric?id=${sid}`)
}
