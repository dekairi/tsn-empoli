import { GlobalStyle } from "./styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FC } from "react";
import React from "react";
import ScrollTop from "../ui/scroll-top/scroll-top";
import { AppRoute } from "../../const";
import MainPage from "../pages/main-page/main-page";
import PageWrapper from "../layout/page-wrapper/page-wrapper";

const App: FC = () => {
    return (
        <>
            <GlobalStyle />
            <Router>
                <ScrollTop />
                <Routes>
                    <Route path={AppRoute.MAIN} element={<PageWrapper />}>
                        <Route index element={<MainPage />} />
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
