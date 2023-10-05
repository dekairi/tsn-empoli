import React, {FC} from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import registration from "../../../data/registration";
import {MainTitle, MiniTitle, MainText, StyledSection} from "./styles";
import {nanoid} from "nanoid";
import {Container} from "@mui/material";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const RegistrationPage: FC = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Container maxWidth="lg" style={{paddingTop: "50px"}}>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', flexWrap: 'wrap' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="Iscrizioni"
                        variant="scrollable"
                        scrollButtons="auto"
                    >
                        {registration.map((tab) => (
                            <Tab key={nanoid()} label={tab.title} {...a11yProps(tab.index)} />
                        ))}
                    </Tabs>
                </Box>
                {registration.map((tab) => (
                    <CustomTabPanel key={nanoid()} value={value} index={tab.index}>
                        <MainTitle>{tab.text.title}</MainTitle>
                        <MiniTitle>{tab.text.note1}</MiniTitle>
                        {tab.text.mainText.map((paragraph) => (
                            <MainText key={nanoid()}>{paragraph}</MainText>
                        ))}
                        <MiniTitle>Documenti:</MiniTitle>
                        <ol>
                            {tab.text.documenti.map((documento) => (
                                <li key={nanoid()}>{documento}</li>
                            ))}
                        </ol>
                        <MainText>{tab.text.note2}</MainText>
                    </CustomTabPanel>
                ))}
            </Box>
        </Container>
    );
}

export default RegistrationPage;

