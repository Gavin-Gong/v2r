 /* tslint:disable */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './views/App';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import app from './reducers'
import gql from './api/graphql'
import rest from './api/rest'

gql.fetchGithub()
  .then(function(res: any) {
    console.log(res.data)
  }).catch(function(err: any) {
    console.log(err)
  })

rest.fetchArticle()
  .then(res => {
    console.log(res.data)
  })
const store = createStore(
  app,
  // eslint-disable-next-line
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // tslint:disable-line
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
