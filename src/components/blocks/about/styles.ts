import styled from "styled-components";
import {Section, P, Img} from "../../styled";


export const StyledSection = styled(Section)`
  width: ${(props) => props.theme.desktopPageWidth};
  margin: 0 auto;
  padding-top: 100px;
  padding-bottom: 145px;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  margin-top: 50px;
  display: flex;
`;

export const StyledWrapper = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: relative;
  z-index: 3;
`;

export const Text = styled(P)`
  padding-right: 122px;
`;

export const Image = styled(Img)`
  margin-left: ${(props) => props.theme.pagePadding};
  width: 30%;
`;
