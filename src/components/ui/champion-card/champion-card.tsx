import React, {FC} from "react";
import {Img, P} from "../../styled";
import Grid from "@mui/material/Unstable_Grid2";
import {Typography} from "@mui/material";
import Medal from "../medal/medal";

interface EventProps {
    date: string;
    isFinal: boolean;
    place: number;
    range: string;
}

interface MedalProps {
    year: number;
    data: Array<EventProps>;
}

interface ChampionProps {
    name: string;
    image: string;
    medals: Array<MedalProps>;
}

interface ChampionsProps {
    champion: ChampionProps;
}

const ChampionCard: FC<ChampionsProps> = ({champion}) => {
    return (
        <Grid container>
            <Grid
                xs={12}
                sm={4}
                style={{
                    height: "300px",
                    overflow: "hidden",
                    position: "relative",
                    paddingRight: "20px"
                }}
            >
                <Img
                    src={champion.image}
                    alt="Immagine del campione"
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        height: "100%",
                        width: "auto"
                    }}
                />
            </Grid>
            <Grid xs={12} sm={8} sx={{height: "300px", overflow: "hidden scroll", paddingLeft: {xs: '0', sm: '20px'}, paddingTop: {xs: '20px', sm: '0'}}}>
                <Typography variant="h4">{champion.name}</Typography>
                {champion.medals.map((medal) => (
                    <>
                        <Typography variant="h6" gutterBottom sx={{fontWeight: "bold"}}>{medal.year}</Typography>
                        {medal.data.map((data) => (
                            <Typography
                                variant="subtitle1"
                                gutterBottom
                                sx={{fontWeight: data.isFinal ? "bold" : "normal", verticalAlign: "bottom"}}
                            >
                                <Medal place={data.place}></Medal> {data.date} {data.range} {data.isFinal && "(LA FINALE)"}
                            </Typography>
                        ))}
                    </>
                ))}
            </Grid>
        </Grid>
    );
}

export default ChampionCard;
