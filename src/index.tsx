import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./theme/default";
import App from "./components/app/app";
import React from "react";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <ThemeProvider theme={defaultTheme}>
            <App />
        </ThemeProvider>
    </StrictMode>
);
