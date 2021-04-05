import { combineReducers } from 'redux';
import { reducer as products } from './modules/products/reducers';
import { reducer as product } from './modules/product/reducers';
import { reducer as messages } from './modules/messages/reducers';

export const rootReducer = combineReducers({
  messages,
  products,
  product,
});
