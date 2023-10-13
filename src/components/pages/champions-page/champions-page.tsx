import React, {FC} from "react";
import {Container, Typography} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import {nanoid} from "nanoid";
import CardContent from "@mui/material/CardContent";
import champions from "../../../data/champions";
import ChampionCard from "../../ui/champion-card/champion-card";

const ChampionsPage: FC = () => {
    return (
        <Container maxWidth="lg" style={{paddingTop: "50px"}}>
            <Grid xs={12}>
                <Typography variant="h1" align="center" gutterBottom sx={{fontSize: "44px", fontWeight: "bold"}}>
                    I nostri campioni
                </Typography>
            </Grid>
            <Grid xs={12}>
                {champions.map((champion) => (
                    <Card
                        variant="outlined"
                        key={nanoid()}
                        style={{backgroundColor: "rgba(0, 0, 0, 0.04)", marginBottom: "20px"}}
                    >
                        <CardContent sx={{paddingBottom: "16px!important"}}>
                            <ChampionCard champion={champion}/>
                        </CardContent>
                    </Card>
                ))}
            </Grid>
        </Container>
    );
}

export default ChampionsPage;

