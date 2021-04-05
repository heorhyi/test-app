import { takeEvery, call, put, all } from 'redux-saga/effects';
import { fetchProducts } from '../../api';
import { getProductsRequested, getProductsSuccess, getProductsFailure } from './actions';
import { addMessage } from '../messages/actions';

export function* fetchProductsSaga() {
  try {
    const { data: products } = yield call(fetchProducts);
    yield put(getProductsSuccess(products));
  }catch (e) {
    yield put(addMessage({ text: e.message }));
    yield put(getProductsFailure(e));
  }
}


export function* sagaWatcher() {
  yield all([
    takeEvery(getProductsRequested, fetchProductsSaga),
  ]);
}
