import React from "react";
import { ReactComponent as LogoImage } from "../../../assets/logo.svg";
import { Text, StyledLogo, StyledLogoMainPage } from "./styles";
import { useLocation } from "react-router-dom";
import { AppRoute } from "../../../const";

function Logo() {
    const { pathname } = useLocation();

    return pathname === AppRoute.MAIN ? (
        <StyledLogoMainPage>
            <LogoImage />
            <Text>TSN Empoli</Text>
        </StyledLogoMainPage>
    ) : (
        <StyledLogo to={AppRoute.MAIN}>
            <LogoImage />
            <Text>TSN Empoli</Text>
        </StyledLogo>
    );
}

export default Logo;
