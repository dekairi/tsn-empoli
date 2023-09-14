import React, {FC} from "react";
import {Outlet} from "react-router-dom";
import {Main} from "./styles";
import Header from "../header/header";
import Footer from "../footer/footer";

const PageWrapper: FC = () => {
    return (
        <>
            <Header />
                <Main>
                    <Outlet />
                </Main>
            <Footer />
        </>
    );
}

export default PageWrapper;
