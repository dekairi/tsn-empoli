import React, {FC} from "react";
import {Container, Typography} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import SrcMap from "../../../assets/mappa.png";
import {Img} from "../../styled";
import {Address, ContactsLink, ContactWrap} from "./styles";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const ContactsPage: FC = () => {
    return (
        <Container maxWidth="lg" style={{paddingTop: "50px"}}>
            <Grid xs={12}>
                <Typography variant="h1" align="center" gutterBottom sx={{fontSize: "44px", fontWeight: "bold", paddingBottom: "30px"}}>
                    I nostri contatti
                </Typography>
            </Grid>
            <Grid xs={12} container>
                <Grid xs={12} md={4} sx={{paddingRight: "20px"}}>
                    <ContactWrap>Email: <ContactsLink link="mailto:tsnempoli@libero.it">tsnempoli@libero.it</ContactsLink></ContactWrap>
                    <ContactWrap>Tel: <ContactsLink link="tel:3775937450">377 593 74 50</ContactsLink></ContactWrap>
                    <Address>Indirizzo: <ContactsLink link="https://maps.app.goo.gl/v7UV1x1Ezewudue3A">Via Brotalupi, 5 Empoli (FI)</ContactsLink></Address>
                    <Grid>
                        <ContactsLink link="https://www.facebook.com/tsnempoli/">
                            <FacebookIcon color="primary" sx={{paddingRight: "10px"}} />
                        </ContactsLink>
                        <ContactsLink link="https://www.instagram.com/tsn_empoli/?hl=it">
                            <InstagramIcon color="primary" />
                        </ContactsLink>
                    </Grid>
                </Grid>
                <Grid xs={12} md={8}>
                    <Img src={SrcMap} alt="Via Brotalupi, 5 Empoli (FI)" />
                </Grid>
            </Grid>
        </Container>
    );
}

export default ContactsPage;

