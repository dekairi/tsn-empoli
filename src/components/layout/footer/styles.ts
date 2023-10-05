import styled from 'styled-components';

export const Copyright = styled.span`
  min-width: 148px;
  max-width: 700px;
  padding: 8px 12px;
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: ${(props) => props.theme.fontSizeDefault};
  color: ${(props) => props.theme.colorWhite};
  vertical-align: middle;
  text-align: center;
  box-sizing: border-box;
`;
