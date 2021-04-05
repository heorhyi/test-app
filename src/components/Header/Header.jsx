import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { Container, Title } from './styles';
import { useHistory } from 'react-router';

const HeaderComponent = ({ isLogin, onLogout }) => {
  const history = useHistory();

  const handleClick = useCallback(() => {
    isLogin === 'true' ? onLogout() : history.push('/auth');
  }, [history, isLogin, onLogout]);

  return (
    <Container>
      <Title>Test App</Title>
      <Button onClick={handleClick}>{isLogin === 'true' ? 'Logout' : 'Login'}</Button>
    </Container>
  );
};

HeaderComponent.propTypes = {
  isLogin: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export const Header = React.memo(HeaderComponent);
