import React, {FC} from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {nanoid} from "nanoid";
import {Container} from "@mui/material";
import Regulations from "../../blocks/regulations/regulations";
import SrcArme from "../../../assets/arme-1.jpg";
import {Img} from "../../styled";
import Disciplines from "../../blocks/disciplines/disciplines";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const infoTabs = [
    {
        index: 0,
        title: "Regolamento",
        body: <Regulations />,
    },
    {
        index: 1,
        title: "Le nostre armi",
        body: <Img src={SrcArme} alt="Arme del poligono" />,
    },
    {
        index: 2,
        title: "Le nostre discipline",
        body: <Disciplines />,
    }
];

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

const InformationPage: FC = () => {
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
                        {infoTabs.map((tab) => (
                            <Tab key={nanoid()} label={tab.title} {...a11yProps(tab.index)} />
                        ))}
                    </Tabs>
                </Box>
                {infoTabs.map((tab) => (
                    <CustomTabPanel key={nanoid()} value={value} index={tab.index}>
                        {tab.body}
                    </CustomTabPanel>
                ))}
            </Box>
        </Container>
    );
}

export default InformationPage;

