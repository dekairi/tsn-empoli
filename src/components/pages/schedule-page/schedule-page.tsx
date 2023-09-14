import React, {FC} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {StyledSection, StyledTableCell, StyledTableRow} from "./styles";
import Title, {TitleSize} from "../../ui/title/title";

function createData(
    day: string,
    summerTime: string,
    winterTime: string,
) {
    return { day, summerTime, winterTime };
}

const rows = [
    createData('Martedì', "15:00-18:00", "14:30-17:30"),
    createData('Giovedì', "15:00-18:00", "14:30-17:30"),
    createData('Sabato', "15:00-18:00", "14:30-17:30"),
    createData('Domenica e Festivi', "10:00-12:30", "10:00-12:30"),
];

const SchedulePage: FC = () => {
    return (
        <StyledSection>
            <Title size={TitleSize.BIG}>
                Il poligono osserva i seguenti orari:
            </Title>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell></StyledTableCell>
                            <StyledTableCell align="right">Estivo ora legale</StyledTableCell>
                            <StyledTableCell align="right">Invernale ora solare</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.day}>
                                <StyledTableCell component="th" scope="row">
                                    {row.day}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.summerTime}</StyledTableCell>
                                <StyledTableCell align="right">{row.winterTime}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </StyledSection>
    );
}

export default SchedulePage;

