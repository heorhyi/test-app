import React from 'react';
import PropTypes from 'prop-types';
import { Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Container, Form } from './stayles';

const AuthFormComponent = ({ token, onSignUp, onLogin }) => {

  const handleSubmit = values => {
    const { userName, password } = values;
    token ? onLogin({ userName, password }) : onSignUp({ userName, password });
  };

  return (
    <Container>
        <Form onFinish={handleSubmit}>
          <Form.Item
            name="userName"
            rules={[{required: true, message: 'Please input your Username!',}]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="User name"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{required: true, message: 'Please input your Password!',}]}
          >
            <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
    </Container>
  );
};

AuthFormComponent.propTypes = {
  token: PropTypes.string.isRequired,
  onSignUp: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
};

export const AuthForm = React.memo(AuthFormComponent);
