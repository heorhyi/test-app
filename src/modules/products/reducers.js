import { handleActions } from 'redux-actions';
import { getProductsRequested, getProductsSuccess, getProductsFailure } from './actions';

export const initialState = {
  products: [],
  areProductsLoading: false,
};

export const reducer = handleActions(
  {
    [getProductsRequested]: (state) => ({
      ...state,
      areProductsLoading: true,
    }),
    [getProductsSuccess]: (state, { payload: products }) => ({
      ...state,
      areProductsLoading: false,
      products,
    }),
    [getProductsFailure]: (state) => ({
      ...state,
      areProductsLoading: false,
    }),
  },
  initialState
);
