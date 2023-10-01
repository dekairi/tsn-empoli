import React, {FC} from "react";
import Title, {TitleSize} from "../../ui/title/title";
import {DateRow, Dates, Italic, Name} from "./styles";
import {nanoid} from "nanoid";
import management from "../../../data/management";
import {P} from "../../styled";
import stuff from "../../../data/stuff";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const UsPage: FC = () => {
    return (
        <Container maxWidth="lg">
            <Box sx={{ flexGrow: 1 }} >
                <Grid container spacing={5} disableEqualOverflow style={{paddingTop: "100px", paddingBottom: "145px"}}>
                    <Grid xs={12}>
                        <Title size={TitleSize.BIG} as="h2">
                            Organi della sezione:
                        </Title>
                    </Grid>
                    <Grid container xs={12}>
                        {management.map((person) => (
                            <Grid xs={12} sm={6} md={4} lg={3}>
                                <Card
                                    variant="outlined"
                                    key={nanoid()}
                                    style={{backgroundColor: "rgba(0, 0, 0, 0.04)"}}
                                >
                                    <CardContent>
                                        <Title size={TitleSize.SMALL} as="h3" style={{height: "62px"}}>{person.role}</Title>
                                        <Name>{person.name}</Name>
                                        <Dates>
                                            <DateRow><Italic>Elezione:</Italic><P>{person.election}</P></DateRow>
                                            <DateRow><Italic>Convalida:</Italic><P>{person.validate}</P></DateRow>
                                            <DateRow><Italic>Scadenza:</Italic><P>{person.expire}</P></DateRow>
                                        </Dates>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    <Grid xs={12}>
                        <Title size={TitleSize.BIG} as="h2">
                            Lo staff:
                        </Title>
                    </Grid>
                    <Grid container xs={12}>
                        {stuff.map((person) => (
                            <Grid xs={12} sm={6} md={4} lg={3}>
                                <Card
                                    variant="outlined"
                                    key={nanoid()}
                                    style={{backgroundColor: "rgba(0, 0, 0, 0.04)"}}
                                >
                                    <CardContent>
                                        <Title size={TitleSize.SMALL} as="h3" style={{height: "62px"}}>{person.role}</Title>
                                        <Name>{person.name}</Name>
                                        <Dates>
                                            <DateRow><Italic>Elezione:</Italic><P>{person.election}</P></DateRow>
                                            <DateRow><Italic>Convalida:</Italic><P>{person.validate}</P></DateRow>
                                            <DateRow><Italic>Scadenza:</Italic><P>{person.expire}</P></DateRow>
                                        </Dates>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default UsPage;

