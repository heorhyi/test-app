import styled from 'styled-components';
import { getTypographyStyles } from '../../theme';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  flex-grow: 1;
`;

export const ProductContainer = styled.div`
  flex-grow: 1;
  cursor: pointer;
`;

export const SpinContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  margin-bottom: 10px;
  ${getTypographyStyles({ variant: '16BoldL22' })};
`;
