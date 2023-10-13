import React, {FC} from "react";
import {Img, Li, Ul} from '../../styled';
import Grid from '@mui/material/Unstable_Grid2';
import {Typography} from "@mui/material";
import SrcFuoco from "../../../assets/poligono-2.jpg";
import SrcAriaCompressa from "../../../assets/aria-compressa.jpg";

const Disciplines: FC = () => {
    return (
        <Grid xs={12}>
            <Ul>
                <Li>
                    <Typography variant="subtitle1" gutterBottom sx={{fontWeight: "bold"}}>
                        Stand a fuoco (15m e 25m)
                    </Typography>
                    <Img src={SrcFuoco} alt="Stand a fuoco" />
                </Li>
                <Li>
                    <Typography variant="subtitle1" gutterBottom sx={{fontWeight: "bold"}}>
                        Stand ad aria compressa
                    </Typography>
                    <Img src={SrcAriaCompressa} alt="Stand ad aria compressa" />
                </Li>
            </Ul>
        </Grid>
    );
}

export default Disciplines;
