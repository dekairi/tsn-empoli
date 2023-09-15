import styled from "styled-components";
import {Section} from "../../styled";

export const StyledSection = styled(Section)`
  width: ${(props) => props.theme.desktopPageWidth};
  margin: 0 auto;
  padding-top: 100px;
  padding-bottom: 145px;
  flex-direction: column;
`;
