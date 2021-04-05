import { takeEvery, call, put, all } from 'redux-saga/effects';
import { createProductReview, fetchProductReviews } from '../../api';
import {
  getProductReviewsRequested,
  getProductReviewsSuccess,
  getProductReviewsFailure,
  createProductReviewRequested,
  createProductReviewSuccess,
  createProductReviewFailure,
} from './actions';
import { addMessage } from '../messages/actions';

export function* fetchProductReviewsSaga({ payload }) {
  try {
    const { data: reviews } = yield call(fetchProductReviews, payload);
    yield put(getProductReviewsSuccess(reviews));
  } catch (e) {
    yield put(addMessage({ text: e.message }));
    yield put(getProductReviewsFailure(e));
  }
}

export function* createProductReviewSaga({ payload }) {
  try {
    const { id, rate, text } = payload;
    yield call(createProductReview, { data: { id, body: { rate, text } } });
    const { data: reviews } = yield call(fetchProductReviews, id);
    yield put(createProductReviewSuccess(reviews));
  } catch (e) {
    yield put(addMessage({ text: e.message }));
    yield put(createProductReviewFailure(e));
  }
}

export function* sagaWatcher() {
  yield all([
    takeEvery(getProductReviewsRequested, fetchProductReviewsSaga),
    takeEvery(createProductReviewRequested, createProductReviewSaga),
  ]);
}
