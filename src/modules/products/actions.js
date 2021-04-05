import { createAction } from 'redux-actions';

const PREFIX = 'PRODUCTS';

export const getProductsRequested = createAction(`${PREFIX}/GET_PRODUCTS_REQUESTED`);
export const getProductsSuccess = createAction(`${PREFIX}/GET_PRODUCTS_SUCCESS`, data => data);
export const getProductsFailure = createAction(`${PREFIX}/GET_PRODUCTS_FAILURE`, error => ({ error }));
