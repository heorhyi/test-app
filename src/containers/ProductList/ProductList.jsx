import React, {useCallback, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Spin, List } from 'antd';
import { areProductsLoadingSelector, productsSelector } from '../../modules/products/selectors';
import { Container,SpinContainer, ProductContainer, Title } from './styles';
import { getProductReviewsRequested } from '../../modules/product/actions';
import { getProductsRequested } from '../../modules/products/actions';

const ProductListComponent = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const products = useSelector(productsSelector);
  const areProductsLoading = useSelector(areProductsLoadingSelector);

  useEffect(() => {
    dispatch(getProductsRequested());
  }, [dispatch]);

  const handleProductClick = useCallback((product) => () => {
    dispatch(getProductReviewsRequested(product.id));
    history.push({
      pathname: `/products/product/${product.id}`,
      state: { product }
    });
  }, [history, dispatch]);

  return (
    <Container>
      {areProductsLoading && (
        <SpinContainer>
          <Spin size="large" />
        </SpinContainer>
      )}
      {!areProductsLoading && (
        <>
          <Title>Products: {products.length}</Title>
          <List
            size="large"
            bordered
            dataSource={products}
            renderItem={product => (
              <List.Item>
                <ProductContainer onClick={handleProductClick(product)}>{product.name}</ProductContainer>
              </List.Item>
            )}
          />
        </>
      )}
    </Container>
  );
};

export const ProductList = React.memo(ProductListComponent);
