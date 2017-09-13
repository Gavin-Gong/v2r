import ApolloClient, { createNetworkInterface } from 'apollo-client';
import config from '../config'
import github from './github'

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://api.github.com/graphql',
    opts: {
      headers: {
        Authorization: `bearer ${config.github}`
      }
    }
  }),
});

interface Api {
  [extraProp: string]: any
}
let api: Api = {}

for (var key in github) {
  if (github.hasOwnProperty(key)) {
    var ele = github[key];
    api[key] = () => client.query(ele)
    
  }
}
export default api