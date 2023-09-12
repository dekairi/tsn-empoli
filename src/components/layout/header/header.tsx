import React, {FC} from "react";
import { StyledSection, StyledWrapper } from "./styles";
import Logo from "../../ui/logo/logo";
import Nav from "../nav/nav";

const Header: FC = () => {
    return (
        <StyledSection as="header">
            <StyledWrapper>
                <Logo />
                <Nav />
            </StyledWrapper>
        </StyledSection>
    );
}

export default Header;
