import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import { Container, Content } from './styles';
import { Header } from '../../components/Header/Header';
import { Product } from '../Product/Product';
import { ProductList } from '../ProductList/ProductList';
import { AuthForm } from '../../components/AuthForm/AuthForm';
import { registerUserRequested, loginRequested, logout } from '../../modules/auth/actions';
import { MessageList } from '../MessageList/MessageList';
import { isLoginSelector, tokenSelector } from '../../modules/auth/selectors';

const LayoutComponent = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLogin = useSelector(isLoginSelector);
  const token = useSelector(tokenSelector);

  useEffect(() => {
    if(!token) {
      history.push('/auth');
    }
  }, [history, token]);

  const handleRegisterUser = useCallback(({ userName, password }) => {
    dispatch(registerUserRequested({ userName, password, history }));
  }, [history, dispatch]);

  const handleLogin = useCallback(({ userName, password }) => {
    dispatch(loginRequested({ userName, password, history }));
  }, [history, dispatch]);

  const handleLogout = useCallback(() => {
    localStorage.setItem('isLogin', 'false');
    dispatch(logout());
    history.push('/products');
  }, [history, dispatch]);

  return  (
    <Container>
      <Header isLogin={isLogin} onLogout={handleLogout} />
      <MessageList />
      <Content>
        <Switch>
          <Route exact path={'/products'}>
            <ProductList />
          </Route>
          <Route exact path={'/products/product/:productId'}>
            <Product />
          </Route>
          <Route exact path={'/auth'}>
            <AuthForm token={token} onSignUp={handleRegisterUser} onLogin={handleLogin} />
          </Route>
          <Redirect to="/products" />
        </Switch>
      </Content>
    </Container>
  );
};

export const Layout = React.memo(LayoutComponent);
