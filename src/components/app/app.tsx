import {GlobalStyle} from "./styles";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React, {FC} from "react";
import ScrollTop from "../ui/scroll-top/scroll-top";
import {AppRoute} from "../../const";
import MainPage from "../pages/main-page/main-page";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import UsPage from "../pages/us-page/us-page";
import RegistrationPage from "../pages/registration-page/registration-page";
import RegulationPage from "../pages/regulation-page/regulation-page";
import InformationPage from "../pages/information-page/information-page";
import SchedulePage from "../pages/schedule-page/schedule-page";
import ContactsPage from "../pages/contacts-page/contacts-page";

const App: FC = () => {
    return (
        <>
            <GlobalStyle />
            <Router>
                <ScrollTop />
                <Routes>
                    <Route path={AppRoute.MAIN} element={<PageWrapper />}>
                        <Route index element={<MainPage />} />
                        <Route
                            path={AppRoute.CHI_SIAMO.replace(AppRoute.MAIN, "")}
                            element={<UsPage />}
                        />
                        <Route
                            path={AppRoute.ISCRIZIONE.replace(AppRoute.MAIN, "")}
                            element={<RegistrationPage />}
                        />
                        <Route
                            path={AppRoute.REGOLAMENTO.replace(AppRoute.MAIN, "")}
                            element={<RegulationPage />}
                        />
                        <Route
                            path={AppRoute.CAMPIONI.replace(AppRoute.MAIN, "")}
                            element={<RegulationPage />}
                        />
                        <Route
                            path={AppRoute.INFORMAZIONI.replace(AppRoute.MAIN, "")}
                            element={<InformationPage />}
                        />
                        <Route
                            path={AppRoute.ORARI.replace(AppRoute.MAIN, "")}
                            element={<SchedulePage />}
                        />
                        <Route
                            path={AppRoute.CONTATTI.replace(AppRoute.MAIN, "")}
                            element={<ContactsPage />}
                        />
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
