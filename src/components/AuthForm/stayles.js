import styled from 'styled-components';
import { Form as FormComponent} from 'antd';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

export const Form = styled(FormComponent)`
  width: 400px;
`;
