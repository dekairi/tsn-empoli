import styled from 'styled-components';
import {
  Li, P, Section, Ul,
} from '../../styled';

export const StyledSection = styled(Section)`
  width: ${(props) => props.theme.desktopPageWidth};
  margin: 0 auto;
  padding-top: 100px;
  padding-bottom: 145px;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  
  h2 {
    margin-bottom: 30px;
  }

  h3 {
    margin-bottom: 20px;
    color: ${(props) => props.theme.colorBlue};
    text-transform: uppercase;
  }
`;

export const StyledList = styled(Ul)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const StyledItem = styled(Li)`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.04);
  border: 1px solid #eee;
  padding: ${(props) => props.theme.indent};
  width: 260px;
`;

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
