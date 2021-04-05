import { createAction } from 'redux-actions';

const PREFIX = 'AUTH';

export const registerUserRequested = createAction(`${PREFIX}/REGISTER_USER_REQUESTED`, data => data);
export const registerUserSuccess = createAction(`${PREFIX}/REGISTER_USER_SUCCESS`);
export const registerUserFailure = createAction(`${PREFIX}/REGISTER_USER_FAILURE`, error => ({ error }));
export const loginRequested = createAction(`${PREFIX}/LOGIN_REQUESTED`, data => data);
export const loginSuccess = createAction(`${PREFIX}/LOGIN_SUCCESS`);
export const loginFailure = createAction(`${PREFIX}/LOGIN_FAILURE`, error => ({ error }));
export const logout = createAction(`${PREFIX}/LOGOUT`);
