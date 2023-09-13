import React, {FC} from "react";
import { NavList } from "./styles";
import { useLocation } from "react-router-dom";
import Button from "../../ui/button/button";
import { nanoid } from "nanoid";
import pages from "../../../data/pages";
import { Li } from "../../styled";

const Nav: FC = () => {
    const pageUrl = useLocation().pathname;

    return (
        <nav>
            <NavList $isGridList>
                {pages.map((page) => (
                    <Li key={nanoid()}>
                        <Button link={page.link} disabled={pageUrl === page.link}>
                            {page.title}
                        </Button>
                    </Li>
                ))}
            </NavList>
        </nav>
    );
}

export default Nav;

