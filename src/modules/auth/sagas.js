import { takeEvery, call, put, all } from 'redux-saga/effects';
import {
  registerUserRequested,
  registerUserSuccess,
  registerUserFailure,
  loginRequested,
  loginSuccess,
  loginFailure,
} from './actions';
import { registerUser, login } from '../../api';
import { addMessage } from '../messages/actions';

export function* registerUserSaga({ payload }) {
  try {
    const { history, userName, password } = payload;
    const { data } = yield call(registerUser, { body: { username: userName, password } });
    const { token, message } = data;
    if (token) {
      localStorage.setItem('token', token);
      yield put(registerUserSuccess());
      history.push('/products');
    }
    if(message) {
      yield put(addMessage({ text: data.message }));
    }
  }catch (e) {
    yield put(addMessage({ text: e.message }));
    yield put(registerUserFailure(e));
  }
}

export function* signInSaga({ payload }) {
  try {
    const { history, userName, password } = payload;
    const { data } = yield call(login, { body: { username: userName, password } });
    const { success, message } = data;
    if (success) {
      localStorage.setItem('isLogin', 'true');
      yield put(loginSuccess());
      history.push('/products');
    }
    if (message) {
      yield put(addMessage({ text: data.message }));
    }
  }catch (e) {
    yield put(addMessage({ text: e.message }));
    yield put(loginFailure(e));
  }
}


export function* sagaWatcher() {
  yield all([
    takeEvery(registerUserRequested, registerUserSaga),
    takeEvery(loginRequested, signInSaga),
  ]);
}
