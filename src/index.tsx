import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux';
import { createEpicMiddleware } from 'redux-observable'
import logger from 'redux-logger'
import App from './views/App';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';
import { reducers, epics } from './views'

const store = createStore(
  reducers,
  compose(
    applyMiddleware(createEpicMiddleware(epics)),
    applyMiddleware(logger),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
