import { handleActions } from 'redux-actions';
import {
  getProductReviewsRequested,
  getProductReviewsSuccess,
  getProductReviewsFailure,
  createProductReviewRequested,
  createProductReviewSuccess,
  createProductReviewFailure,
} from './actions';

export const initialState = {
  productReviews: [],
  isProductLoading: false,
};

export const reducer = handleActions(
  {
    [getProductReviewsRequested]: (state) => ({
      ...state,
      isProductLoading: true,
    }),
    [getProductReviewsSuccess]: (state, { payload }) => ({
      ...state,
      isProductLoading: false,
      productReviews: payload,
    }),
    [getProductReviewsFailure]: (state) => ({
      ...state,
      isProductLoading: false,
    }),
    [createProductReviewRequested]: (state) => ({
      ...state,
      isProductLoading: true,
    }),
    [createProductReviewSuccess]: (state, { payload }) => ({
      ...state,
      isProductLoading: false,
      productReviews: payload,
    }),
    [createProductReviewFailure]: (state) => ({
      ...state,
      isProductLoading: false,
    }),
  },
  initialState
);
