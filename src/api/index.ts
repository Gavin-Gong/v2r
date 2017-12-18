import axios from 'axios'
const host = 'http://localhost:8888';

export function fetchOne() {
  return axios.get('https://interface.meiriyiwen.com/article/today?dev=1')
}

export function fetchOneRandom() {
  return axios.get('https://interface.meiriyiwen.com/article/random?dev=1')
}

export function fetchEye(params: object = {}) {
  return axios.get('http://baobab.kaiyanapp.com/api/v4/tabs/selected', {
    params
  })
}
/**
 * @description 获取用户歌单
 * @param params 
 */
export function getPlayList() {
  return axios.get(`${host}/user/playlist?uid=6938518`);
}
export function getPlayListDetail(params: {id: string}) {
  return axios.get(`${host}/playlist/detail`, {
    params,
  })
}
export function getSongDetail(params: {id: number}) {
  return axios.get(`${host}/song/detail`, {
    params,
  })
}