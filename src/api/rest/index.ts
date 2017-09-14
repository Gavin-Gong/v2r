import axios from 'axios'

// TODO: add global axios config

export default {
  fetchArticle: () => {
    return axios.get('https://interface.meiriyiwen.com/article/today?dev=1')
  }
}
