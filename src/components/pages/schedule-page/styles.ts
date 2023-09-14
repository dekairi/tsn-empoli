import {styled as styledMUI} from "@mui/material/styles";
import styled from "styled-components";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import {Section} from "../../styled";

export const StyledTableCell = styledMUI(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#2d52ad",
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

export const StyledTableRow = styledMUI(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export const StyledSection = styled(Section)`
  padding-left: ${(props) => props.theme.pagePadding};
  width: ${(props) => props.theme.desktopPageWidth};
  margin: 0 auto;
  padding-top: 100px;
  padding-bottom: 145px;
  flex-direction: column;
  align-items: center;
  
  h1 {
    margin-bottom: 30px;
  }
`;
