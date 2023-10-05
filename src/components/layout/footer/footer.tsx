import React from "react";
import {Copyright} from "./styles";
import Logo from "../../ui/logo/logo";
import {Box, Container, Toolbar} from "@mui/material";
import Button from "../../ui/button/button";
import ForwardToInboxTwoToneIcon from '@mui/icons-material/ForwardToInboxTwoTone';
import { ReactComponent as LinkedInImage } from "../../../assets/linkedin-24.svg";
import Grid from "@mui/material/Unstable_Grid2";

function Footer() {
    return (
        <Box sx={{ backgroundColor: "#1a2e67", boxShadow: "0 5px 15px 3px #000000"}}>
            <Container maxWidth="lg">
                <Box component="footer">
                    <Grid container style={{justifyContent: "space-between", alignItems: "center"}}>
                        <Grid xs={12} sm={6} style={{ padding: "12px 0"}}>
                            <Logo />
                        </Grid>
                        <Grid xs={12} sm={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
                            <Box sx={{ flexGrow: 0, display: { xs: 'flex' }, alignItems: "center" }}>
                                <Copyright>Creato nel 2023</Copyright>
                                <Box sx={{ flexGrow: 0, display: { xs: 'flex' } }}>
                                    <Button link="mailto:irina.decarlo@gmail.com" style={{padding: "5px"}}>
                                        <ForwardToInboxTwoToneIcon />
                                    </Button>
                                    <Button link="https://www.linkedin.com/in/irinadecarlo/" style={{padding: "5px"}}>
                                        <LinkedInImage />
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;
