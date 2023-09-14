import React, {FC} from "react";
import Title, {TitleSize} from "../../ui/title/title";
import {DateRow, Dates, Italic, Name, StyledItem, StyledList, StyledSection} from "./styles";
import {nanoid} from "nanoid";
import management from "../../../data/management";
import {P} from "../../styled";

const UsPage: FC = () => {
    return (
        <StyledSection>
            <Title size={TitleSize.BIG} as="h2">
                Organi della sezione:
            </Title>
            <StyledList $isGridList>
                {management.map((person) => (
                    <StyledItem key={nanoid()}>
                        <Title size={TitleSize.SMALL} as="h3">{person.role}</Title>
                        <Name>{person.name}</Name>
                        <Dates>
                            <DateRow><Italic>Elezione:</Italic><P>{person.election}</P></DateRow>
                            <DateRow><Italic>Convalida:</Italic><P>{person.validate}</P></DateRow>
                            <DateRow><Italic>Scadenza:</Italic><P>{person.expire}</P></DateRow>
                        </Dates>
                    </StyledItem>
                ))}
            </StyledList>
        </StyledSection>
    );
}

export default UsPage;

