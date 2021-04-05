import { createAction } from 'redux-actions';

const PREFIX = 'PRODUCT';

export const getProductReviewsRequested = createAction(`${PREFIX}/GET_PRODUCT_REVIEWS_REQUESTED`, id => id);
export const getProductReviewsSuccess = createAction(`${PREFIX}/GET_PRODUCT_REVIEWS_SUCCESS`, data => data);
export const getProductReviewsFailure = createAction(`${PREFIX}/GET_PRODUCT_REVIEWS_FAILURE`, error => ({ error }));
export const createProductReviewRequested = createAction(`${PREFIX}/CREATE_PRODUCT_REVIEWS_REQUESTED`, data => data);
export const createProductReviewSuccess = createAction(`${PREFIX}/CREATE_PRODUCT_REVIEW_SUCCESS`, data => data);
export const createProductReviewFailure = createAction(`${PREFIX}/CREATE_PRODUCT_REVIEW_FAILURE`, error => ({ error }));
