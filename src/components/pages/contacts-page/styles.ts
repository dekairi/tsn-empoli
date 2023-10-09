import styled from 'styled-components';
import Button from "../../ui/button/button";

export const ContactWrap = styled.div`
  font-size: 20px;
  line-height: 22px;
  font-weight: 700;
`;

export const Address = styled.address`
  font-size: 20px;
  line-height: 22px;
  font-weight: 700;
  font-style: normal;
`;

export const ContactsLink = styled(Button)`
  display: inline-block;
  padding: 0;
  font-size: 20px;
  line-height: 22px;
  color: ${(props) => props.theme.colorBlue};
  
  &:hover {
    color: ${(props) => props.theme.darkBlue};
    text-decoration: underline;
    box-shadow: none;
  }
`;
