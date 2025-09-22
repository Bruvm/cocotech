import { Box, Container, Grid, Typography } from "@mui/material";
import logo from "../assets/img/logo.webp";
 import Divider from '@mui/material/Divider';

export default function Footer() {
    return (
        <Box
            sx={{
                width: "100%",
                backgroundColor: "secondary.dark",
                py: '50px',

            }}
        >
            <Container maxWidth="md">
                <Grid container spacing={0} justifyContent="center">
                    <Grid size={{ xs: 12 }}>
                        <Divider
                            sx={{
                                borderColor: "#fdf8e842", 
                                my:2,
                                borderBottomWidth: "0.3px"
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={0} justifyContent="center">
                    <Grid size={{ xs: 12, md: 6 }}>

                        <Typography
                            variant="caption"
                            noWrap
                            sx={{
                                color: "#FDF8E8",
                            }}
                        >
                            @COCOTECH | 2025
                        </Typography>
                        <Typography
                            variant="caption"
                            noWrap
                            sx={{
                                color: "#FDF8E8",
                                mx: 2
                            }}
                        >
                            ○
                        </Typography>
                        <Typography
                            variant="caption"
                            noWrap
                            component="a"
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=hola@cocotech.com.ar"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                color: "#FDF8E8",
                                textDecoration: "none",
                            }}
                        >
                            hola@cocotech.com.ar
                        </Typography>

                    </Grid>
                    <Grid
                        size={{ xs: 12, md: 6 }}
                        display={'flex'}
                        justifyContent={'flex-end'}
                        sx={{mt:{xs: 3, md: 0}}}
                    >
                        <Box
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: "flex"},
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
                                    display: { xs: "flex" },
                                    fontFamily: "Noto Serif, serif",
                                    fontWeight: 700,
                                    color: "#FDF8E8",
                                    textDecoration: "none",
                                }}
                            >
                                Cocotech
                            </Typography>
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
}
