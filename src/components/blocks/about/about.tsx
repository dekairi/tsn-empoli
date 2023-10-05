import React, {FC} from "react";
import { Img, P } from '../../styled';
import Title, {TitleSize} from "../../ui/title/title";
import SrcAbout from "../../../assets/about.jpg";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Gallery from "../gallery/gallery";

const About: FC = () => {
    return (
        <Container maxWidth="lg">
            <Box sx={{ flexGrow: 1 }} >
                <Grid container spacing={5} disableEqualOverflow style={{paddingTop: "100px"}}>
                    <Grid xs={12}>
                        <Title size={TitleSize.BIG}>
                            Tiro a Segno Nazionale a Empoli
                        </Title>
                    </Grid>
                    <Grid xs={12} lg={8} order={{ xs: 2, lg: 1 }}>
                        <P>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat gravida diam quis finibus. Proin tincidunt consequat rutrum. In dictum metus id arcu suscipit, ut rutrum nisl facilisis. Quisque non consequat urna, vitae sollicitudin sapien. Praesent at viverra velit. Aenean tempor felis eget libero imperdiet fringilla. Donec malesuada tortor libero, sit amet vulputate nunc ultrices a. Nullam felis dolor, finibus a risus a, aliquam condimentum magna. Aliquam vitae nunc malesuada, consequat neque et, dictum lacus. Donec pulvinar mauris ipsum, in aliquam risus vehicula vitae. Proin at ultrices turpis, a pharetra felis. Cras ullamcorper semper nunc, et consequat sapien sodales ac. Maecenas sit amet bibendum nunc. Morbi commodo tellus tellus, sit amet bibendum urna tristique ac. Vestibulum et metus sit amet neque varius gravida.
                        </P>
                    </Grid>
                    <Grid xs={12} lg={4} order={{ xs: 1, lg: 2 }}>
                        <Img src={SrcAbout} alt="Immagine del poligono" />
                    </Grid>
                    <Grid xs={12} order={{ xs: 3 }}>
                        <Gallery />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default About;
