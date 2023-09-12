import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const logoStyle = css`
  display: flex;
  height: 64px;
  align-items: center;
  flex-shrink: 0;
`;

export const StyledLogo = styled(Link)`
  text-decoration: none;
  ${logoStyle}

  &:hover {
    text-decoration: none;
  }
`;

export const StyledLogoMainPage = styled.span`
  ${logoStyle}
`;

export const Text = styled.span`
  display: flex;
  flex-shrink: 0;
  margin-left: 24px;
  font-weight: 700;
  font-size: 28px;
  line-height: 42px;
  color: ${(props) => props.theme.colorWhite};
`;
