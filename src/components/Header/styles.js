import styled from 'styled-components';
import { getTypographyStyles } from '../../theme';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: ${({ theme }) => theme.colors.shuttleGray};
`;

export const Title = styled.div`
  ${getTypographyStyles({ variant: '16BoldL22', color: 'white' })};
`;
