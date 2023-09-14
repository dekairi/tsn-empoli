import React, {FC} from "react";
import {ContentWrapper, Image, StyledSection, StyledWrapper, Text} from "./styles";
import Title, {TitleSize} from "../../ui/title/title";
import SrcAbout from "../../../assets/about.jpg";

const About: FC = () => {
    return (
        <StyledSection>
            <StyledWrapper>
                <Title size={TitleSize.BIG}>
                    Tiro a Segno Nazionale a Empoli
                </Title>
                <ContentWrapper>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat gravida diam quis finibus. Proin tincidunt consequat rutrum. In dictum metus id arcu suscipit, ut rutrum nisl facilisis. Quisque non consequat urna, vitae sollicitudin sapien. Praesent at viverra velit. Aenean tempor felis eget libero imperdiet fringilla. Donec malesuada tortor libero, sit amet vulputate nunc ultrices a. Nullam felis dolor, finibus a risus a, aliquam condimentum magna. Aliquam vitae nunc malesuada, consequat neque et, dictum lacus. Donec pulvinar mauris ipsum, in aliquam risus vehicula vitae. Proin at ultrices turpis, a pharetra felis. Cras ullamcorper semper nunc, et consequat sapien sodales ac. Maecenas sit amet bibendum nunc. Morbi commodo tellus tellus, sit amet bibendum urna tristique ac. Vestibulum et metus sit amet neque varius gravida.
                        In nulla enim, pretium et metus id, condimentum semper sapien. Sed hendrerit ligula quis dolor lobortis fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed sit amet pharetra enim, vel eleifend eros. Nam condimentum luctus vulputate. Curabitur in dui sed ex ullamcorper vehicula eget in augue. Etiam a feugiat risus, fringilla consequat dui. Vivamus sollicitudin urna leo, in iaculis nulla sagittis sit amet. Proin tempus efficitur hendrerit. Quisque non eros finibus, pharetra est sed, tincidunt nunc. Praesent tempus posuere nunc, non sodales dolor suscipit non. Sed condimentum nulla tincidunt lacinia tempor.
                    </Text>
                    <Image src={SrcAbout} alt="Immagine del poligono" />
                </ContentWrapper>
            </StyledWrapper>
        </StyledSection>
    );
}

export default About;
