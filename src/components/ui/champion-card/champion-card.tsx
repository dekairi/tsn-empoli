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
        <Grid container spacing={2}>
            <Grid xs={12} sm={4}>
                <Img src={champion.image} alt="Immagine del campione" />
            </Grid>
            <Grid xs={12} sm={8} sx={{maxHeight: "200px", overflow: "hidden scroll"}}>
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
