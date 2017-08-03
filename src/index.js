import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

// import { saveState, loadState } from './helpers/localStorage';
import dataService from './helpers/data-service';
import App from './containers/App';
import reducers from './reducers/reducers';

// const persistedState = loadState();

const store = createStore(
  reducers,
  // persistedState
  applyMiddleware(dataService)
);

// store.subscribe(() => {
//   saveState(store.getState());
// });
//

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));

store.dispatch({type: 'GET_RECIPES'});
console.log(store.getState());
