import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas';

const saga = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(saga),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

saga.run(rootSaga);
