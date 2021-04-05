import styled from 'styled-components';
import { getTypographyStyles } from '../../theme';
import { Card as CardComponent, Rate as RateComponent, Input } from 'antd';

const { TextArea: TextAreaComponent } = Input;

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 10px;
  flex-grow: 1;
`;

export const MainInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const Title = styled.div`
  margin: 20px 0;
  ${getTypographyStyles({ variant: '16BoldL22' })};
`;

export const Description = styled.div`
  margin-top: 20px;
  ${getTypographyStyles({ variant: '16RegularL20', color: 'shuttleGray' })};
`;

export const TextArea = styled(TextAreaComponent)`
  width: 600px;
  margin-bottom: 20px;
`;

export const Card = styled(CardComponent)`
  width: 600px;
  margin: 5px 0;
`;

export const Rate = styled(RateComponent)`
  margin: 20px 0;
`;

export const SpinContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;
