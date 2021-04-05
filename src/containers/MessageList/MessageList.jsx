import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NotificationListContainer, NotificationContainer } from './styles';
import { removeMessage } from '../../modules/messages/actions';
import { messagesSelector } from '../../modules/messages/selectors';
import { Message } from '../../components/Message/Message';

const MessageListComponent = () => {
  const dispatch = useDispatch();
  const messages = useSelector(messagesSelector);

  const handleRemoveMessage = useCallback(
    (id) => {
      dispatch(removeMessage({ id }));
    },
    [dispatch],
  );

  return (
    <NotificationListContainer>
      {messages.length > 0 &&
      messages.map((message) => (
        <NotificationContainer key={message.id}>
          <Message message={message} onRemoveMessage={handleRemoveMessage} />
        </NotificationContainer>
      ))}
    </NotificationListContainer>
  );
};

export const MessageList = React.memo(MessageListComponent);
