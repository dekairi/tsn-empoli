import React, {FC, useState} from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

import PdfRegolamento from '../../../assets/regolamento_generale.pdf';
import { PDFDocumentWrapper } from './styles';
import {Box, Button, Typography} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Grid from "@mui/material/Unstable_Grid2";

const Regulations: FC = () => {
    const [numPages, setNumPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offset: number) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }

    return (
        <PDFDocumentWrapper>
            <Document
                file={PdfRegolamento}
                onLoadSuccess={onDocumentLoadSuccess}
                renderMode="svg"
            >
                <Page
                    pageNumber={pageNumber}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    width={1200}
                />
            </Document>
            <Box sx={{display: "flex", justifyContent: "space-between", maxWidth: {xs: "none", sm: "300px"}}}>
                <Button
                    variant="contained"
                    disabled={pageNumber <= 1}
                    onClick={previousPage}
                    sx={{marginRight: "20px", fontSize: "0", lineHeight: "0"}}
                >
                    Precedente
                    <ArrowBackIcon />
                </Button>
                <Typography variant="subtitle1" gutterBottom sx={{fontWeight: "bold", display: "inline-block"}}>
                    Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                </Typography>
                <Button
                    variant="contained"
                    disabled={pageNumber >= numPages}
                    onClick={nextPage}
                    sx={{marginLeft: "20px", fontSize: "0", lineHeight: "0"}}
                >
                    Prossima
                    <ArrowForwardIcon />
                </Button>
            </Box>
            <Button
                variant="contained"
                href={PdfRegolamento}
                download
                sx={{marginTop: "20px", width: "100%", maxWidth: {xs: "none", sm: "300px"}}}
            >
                Scarica
            </Button>
        </PDFDocumentWrapper>
    );
}

export default Regulations;
