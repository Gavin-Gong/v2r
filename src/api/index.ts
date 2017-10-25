import axios from 'axios'

// TODO: add global axios config

// export default {
//   fetchOne: () => {
//     return axios.get('https://interface.meiriyiwen.com/article/today?dev=1')
//   }
// }
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