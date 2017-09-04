import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
// import reduxPromiseMiddleware from 'redux-promise-middleware';
import reducer from './ducks/reducer';


// export default createStore(reducer, applyMiddleware(reduxPromiseMiddleware()));
// export default createStore(reducer, applyMiddleware(promiseMiddleware()));
// createStore(reducer, applyMiddleware(promiseMiddleware()));

export default function configureStore() {
  let store = createStore(reducer, applyMiddleware(promiseMiddleware()))
  return store
}
