import React, {FC} from "react";
import Logo from "../../ui/logo/logo";
import Nav from "../nav/nav";
import {Container, AppBar, Toolbar, Box} from "@mui/material";

const Header: FC = () => {
    return (
        <Box sx={{ backgroundColor: "#1976d2", boxShadow: "0 -5px 15px 3px #000000"}}>
            <Container maxWidth="lg">
                <AppBar position="static" sx={{boxShadow: "none"}}>
                    <Toolbar sx={{justifyContent: "space-between", minHeight: "84px!important"}}>
                        <Logo />
                        <Nav />
                    </Toolbar>
                </AppBar>
            </Container>
        </Box>
    );
}

export default Header;
