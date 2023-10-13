import React, {FC, useState} from "react";
import {useLocation} from "react-router-dom";
import Button from "../../ui/button/button";
import pages from "../../../data/pages";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import {nanoid} from "nanoid";

const Nav: FC = () => {
    const pageUrl = useLocation().pathname;
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <>
            <Box sx={{ flexGrow: 0, display: { xs: 'flex', lg: 'none' } }}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    onClick={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', lg: 'none' },
                    }}
                >
                    {pages.map((page) => (
                        <Button key={nanoid()} link={page.link} disabled={pageUrl === page.link} style={{color: "#1976d2"}}>
                            {page.title}
                        </Button>
                    ))}
                </Menu>
            </Box>
            <Box sx={{ flexGrow: 0, display: { xs: 'none', lg: 'flex' } }}>
                {pages.map((page) => (
                    <Button key={nanoid()} link={page.link} disabled={pageUrl === page.link}>
                        {page.title}
                    </Button>
                ))}
            </Box>
        </>
    );
}

export default Nav;

