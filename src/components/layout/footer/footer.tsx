import React from "react";
import { StyledSection, Copyright, StyledWrapper } from "./styles";
import Logo from "../../ui/logo/logo";

function Footer() {
    return (
        <StyledSection as="footer">
            <StyledWrapper>
                <Logo />
                <Copyright>Creato 2023</Copyright>
            </StyledWrapper>
        </StyledSection>
    );
}

export default Footer;
