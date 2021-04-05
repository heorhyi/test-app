import { createSelector } from 'reselect';

const productsListSelector = state => state.products.products;
export const areProductsLoadingSelector = state => state.products.areProductsLoading;

export const productsSelector = createSelector(
  productsListSelector,
    products => products.map(product => ({
      id: product.id,
      name: product.title,
      description: product.text,
      img: product.img,
    }))
);

