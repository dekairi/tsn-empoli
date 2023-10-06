import React, {FC} from "react";
import {Typography} from "@mui/material";

interface PlacesAttr {
    str: string;
    backgroundColor: string;
}

interface PlacesTypes {
    [key: number]: PlacesAttr;
}

const Medal: FC<{ place: number }> = ({place}) => {
    const places: PlacesTypes = {
        1: {
            str: "PRIMO",
            backgroundColor: "#ffcf40",
        },
        2: {
            str: "SECONDO",
            backgroundColor: "#c0c0c0"
        },
        3: {
            str: "TERZO",
            backgroundColor: "#cd7f32"
        }
    }

    return (
        <Typography
            variant="overline"
            display="inline-block"
            sx={{
                backgroundColor: places[place].backgroundColor,
                color: "#fff",
                fontWeight: "bold",
                padding: "5px",
                fontSize: "12px",
                lineHeight: "12px",
                textShadow: "1px 1px 2px #000"
            }}
        >
            {places[place].str}
        </Typography>
    );
}

export default Medal;
