import { all } from 'redux-saga/effects';
import { sagaWatcher as authSaga } from './modules/auth/sagas';
import { sagaWatcher as productsSaga } from './modules/products/sagas';
import { sagaWatcher as productSaga } from './modules/product/sagas';

export function* rootSaga() {
  yield all([
    productsSaga(),
    productSaga(),
    authSaga(),
  ]);
}
