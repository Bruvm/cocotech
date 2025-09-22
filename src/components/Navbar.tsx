import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";


import logo from "../assets/img/logo.webp";

const pages = [
    { label: "Inicio", href: "/" },
    { label: "Recursos", href: "#technology" },
    { label: "Sobre nosotros", href: "#about" },
    { label: "Producto", href: "#product" },
    { label: "Contacto", href: "#contact" }
];

export default function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar
            position="static"
            elevation={0}
            sx={{
                backgroundColor: "transparent",
                color: "text.primary"
            }}>
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Box
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            alignItems: "center",
                            textDecoration: "none",
                        }}
                    >
                        <Box
                            component="img"
                            src={logo}
                            alt="Logo"
                            sx={{ height: 25, marginRight: '8px' }}
                        />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: "none", md: "flex" },
                                fontFamily: "Noto Serif, serif",
                                fontWeight: 700,
                                color: "text.primary",
                                textDecoration: "none",
                            }}
                        >
                            Cocotech
                        </Typography>
                    </Box>
                    <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" }, ml: "auto" }}>
                        <IconButton
                            size="large"
                            aria-label="menu de navegación"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                            keepMounted
                            transformOrigin={{ vertical: "top", horizontal: "right" }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: "block", md: "none" } }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.label} onClick={handleCloseNavMenu} component="a" href={page.href}>
                                    <Typography textAlign="center">{page.label}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* LOGO mobile */}
                    <Box
                        component="a"
                        href="/"
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                            alignItems: "center",
                            justifyContent: 'flex-end',
                            textDecoration: "none",
                        }}
                    >
                        <Box
                            component="img"
                            src={logo}
                            alt="Logo"
                            sx={{ height: 25 }}
                        />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                ml: 1, // margen entre logo y texto
                                display: { xs: "flex", md: "flex" }, // aquí se cambia xs a flex
                                fontFamily: "Noto Serif, serif",
                                fontWeight: 700,
                                color: "text.primary",
                                textDecoration: "none",
                            }}
                        >
                            Cocotech
                        </Typography>
                    </Box>


                    {/* ÍTEMS desktop */}
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "flex-start", gap: 3 }} >
                        {pages.map((page) => (
                            <Button
                                key={page.label}
                                onClick={handleCloseNavMenu}
                                href={page.href}
                                disableRipple
                                sx={{
                                    minWidth: "auto",
                                    my: 2,
                                    px: 0,
                                    py:0,
                                    color: "text.primary",
                                    fontFamily: "Montserrat, sans-serif",
                                    fontWeight: 500,
                                    textTransform: "none",
                                    position: "relative",
                                    "&:hover": {
                                        backgroundColor: "transparent",
                                    },
                                    "&::after": {
                                        content: '""',
                                        position: "absolute",
                                        left: 0,
                                        bottom: 0,
                                        width: "100%",
                                        height: "2px",
                                        backgroundColor: "transparent",
                                        transition: "background-color 0.3s ease",
                                    },
                                    "&:hover::after": {
                                        backgroundColor: "secondary.light",
                                    },
                                }}
                            >
                                {page.label}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
