import styled from "styled-components";
import {Section} from "../../styled";

export const StyledWrapper = styled.div`
  width: ${(props) => props.theme.desktopPageWidth};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledSection = styled(Section)`
  background-color: ${(props) => props.theme.colorBlue};
  height: 80px;
  padding-top: 0;
  padding-bottom: 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.04), 0 0 2px rgba(0, 0, 0, 0.06),
    0 0 1px rgba(0, 0, 0, 0.04);
  z-index: 5;
`;
