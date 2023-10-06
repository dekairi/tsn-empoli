import styled from "styled-components";
import {P} from "../../styled";

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
