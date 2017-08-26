import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './pages/App';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import app from './reducers'
const store = createStore(app)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
