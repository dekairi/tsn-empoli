import styled from 'styled-components';
import {P} from '../../styled';

export const Name = styled(P)`
  font-size: 20px;
  line-height: 22px;
  font-weight: 700;
  margin-bottom: ${(props) => props.theme.indent};
`;

export const Dates = styled.div`
  font-size: 16px;
  line-height: 18px;
`;

export const DateRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Italic = styled(P)`
  font-style: italic;
  font-weight: 700;
`;
