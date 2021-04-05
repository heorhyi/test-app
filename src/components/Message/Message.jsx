import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'antd';

const MessageComponent = ({ message, onRemoveMessage }) => {

  useEffect(() => {
    const timeout = setTimeout(() => onRemoveMessage(message.id), 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Alert message={message.text} type="error" showIcon />
  );
};

MessageComponent.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  onRemoveMessage: PropTypes.func.isRequired,
};

export const Message = React.memo(MessageComponent);
