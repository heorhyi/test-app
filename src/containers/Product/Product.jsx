import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Spin } from 'antd';
import { productReviewsSelector, isProductLoadingSelector } from '../../modules/product/selectors';
import {
  Container,
  Title,
  Description,
  MainInfoContainer,
  ReviewsContainer,
  TextArea,
  Card,
  Rate,
  SpinContainer,
} from './styles';
import { createProductReviewRequested, getProductReviewsRequested } from '../../modules/product/actions';
import { isLoginSelector } from '../../modules/auth/selectors';

const ProductComponent = () => {
  const dispatch = useDispatch();
  const { state: { product } } = useLocation();
  const isProductLoading = useSelector(isProductLoadingSelector);
  const productReviews = useSelector(productReviewsSelector);
  const isLogin = useSelector(isLoginSelector);
  const [rate, setRate] = useState(0);
  const [reviewValue, setReviewValue] = useState('');

  useEffect(() => {
    dispatch(getProductReviewsRequested(product.id));
  }, [dispatch, product.id]);

  const handleChangeReviewValue = useCallback((e) => {
    setReviewValue(e.target.value)
  }, []);

  const handleSubmitReviewValue = useCallback(() => {
    dispatch(createProductReviewRequested({id: product.id, rate, text: reviewValue}));
    setRate(0);
    setReviewValue('');
  }, [dispatch, product.id, rate, reviewValue]);

  return (
    <>
        <Container>
          {isProductLoading && (
            <SpinContainer>
              <Spin size="large" />
            </SpinContainer>
          )}
          {!isProductLoading && (
            <>
              <MainInfoContainer>
                <Title>{product.name}</Title>
                <img
                  src={product.img}
                  alt="img"
                  width="200"
                  height="200"
                />
                <Description>{product.description}</Description>
              </MainInfoContainer>
              <ReviewsContainer>
                <>
                  {isLogin === 'true' && (
                    <>
                      <Rate onChange={setRate} value={rate} />
                      <div>
                        <TextArea
                          rows={3}
                          onChange={handleChangeReviewValue}
                          value={reviewValue}
                          placeholder="Type your review..."
                        />
                      </div>
                      <Button
                        type="primary"
                        disabled={!reviewValue}
                        onClick={handleSubmitReviewValue}
                      >
                        Submit Review
                      </Button>
                    </>
                  )}
                </>
                <Title>Reviews:</Title>
                {productReviews.map((review) => (
                  <Card key={review.id}>
                    <div>Rate: {review.rate}</div>
                    <div>Text: {review.text}</div>
                  </Card>
                ))}
              </ReviewsContainer>
            </>
          )}
        </Container>
    </>
  );
};

export const Product = React.memo(ProductComponent);
