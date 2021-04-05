import styled from 'styled-components';

export const NotificationListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: fixed;
  right: 24px;
  top: 80px;
  overflow: hidden;
  z-index: ${({ theme }) => theme.layers.notification};
`;

export const NotificationContainer = styled.div`
  margin-bottom: 5px;
`;
