import styled from "styled-components";
import {P, Section} from "../../styled";

export const StyledSection = styled(Section)`
  width: ${(props) => props.theme.desktopPageWidth};
  margin: 0 auto;
  padding-top: 100px;
  padding-bottom: 145px;
`;

export const MainTitle = styled(P)`
  font-size: 24px;
  line-height: 26px;
  font-weight: 700;
  color: ${(props) => props.theme.darkBlue};
  margin-bottom: 40px;
  text-align: center;
`;

export const MiniTitle = styled.b`
  display: inline-block;
  margin-bottom: ${(props) => props.theme.indent};
`;

export const MainText = styled(P)`
  margin-bottom: 40px;
`;
