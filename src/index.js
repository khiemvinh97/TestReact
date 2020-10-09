import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.scss';
import App from './app/App';
import store from './store/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import './i18n/i18n'

ReactDOM.render(
  <React.StrictMode>
    
    <Provider store={store}>
    <Suspense fallback={(<div className="loader"></div>)}>
      <App />
      </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
