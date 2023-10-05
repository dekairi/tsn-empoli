import styled from "styled-components";
import {Link} from "react-router-dom";

interface LinkProps {
    link?: string;
    to?: string;
    as?: string;
}

export const StyledButton = styled(Link)<LinkProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  font-size: ${(props) => props.theme.fontSizeDefault};
  padding: 5px 15px;
  font-weight: 700;
  line-height: ${(props) => props.theme.lineHeightDefault};
  color: ${(props) => props.theme.colorWhite};
  text-align: center;
  text-decoration: none;
  border: none;
  background-image: none;
  box-shadow: none;
  cursor: pointer;

  &:hover,
  &:active {
    box-shadow: 0 4px 0 0 rgba(0, 0, 0, 0.5);
  }

  &:active {
    box-shadow: none;
  }

  &[disabled] {
    cursor: default;
    box-shadow: 0 4px 0 0 rgba(255, 255, 255, 0.5);
  }
`;
