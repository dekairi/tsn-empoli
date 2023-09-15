import styled from 'styled-components';
import { Section } from '../../styled';

export const StyledWrapper = styled.div`
  width: ${(props) => props.theme.desktopPageWidth};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledSection = styled(Section)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding-top: 0;
  padding-bottom: 0;
  height: 64px;
  margin: 0 auto;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.darkBlue};
`;

export const Copyright = styled.span`
  min-height: 43px;
  min-width: 148px;
  max-width: 700px;
  padding: 8px 12px;
  font-size: ${(props) => props.theme.fontSizeDefault};
  color: ${(props) => props.theme.colorWhite};
  vertical-align: middle;
  text-align: center;
  box-sizing: border-box;
`;
