import { Box, Button, Container, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import hero from '../assets/img/hero.png'
import pattern_orange from '../assets/img/pattern_orange.png'
import Navbar from "./Navbar";

export default function Hero() {
const theme = useTheme();
const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Box
            sx={{
                width: "100%",
                height: "100vh",
                backgroundImage: `url(${hero})`,
                backgroundSize: "cover",
                backgroundPosition: "bottom",
                position: "relative",
                borderTopLeftRadius: 5,
                borderBottomLeftRadius: 5,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                overflow: "hidden",
            }}
        >
            <Box sx={{ position: "absolute", zIndex: 99, top: 0, left: 0, width: "100%" }}>
                <Navbar />
                <Container
                    maxWidth="lg"
                    sx={{
                        height: "calc(100vh - 69px)",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Grid container spacing={0} sx={{mb: '50px'}}>
                        <Grid size={{ xs: 12 }}>
                            <Box mb={'28px'}>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontFamily: "Noto Serif, serif",
                                        fontWeight: 700,
                                        color: "text.primary",
                                        backgroundColor: "white",
                                        px: 1,
                                        py: 0.5,
                                        textAlign: "center",
                                        display: "inline",
                                        fontSize: {
                                            xs: "2rem",
                                            sm: "2rem",
                                            md: "2.5rem",
                                        },
                                    }}
                                >
                                    Somos un {' '}
                                    <Box component="span" sx={{ color: "secondary.light" }}>
                                        equipo
                                    </Box>
                                </Typography>
                            </Box>
                            <Box mb={'28px'}>

                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontFamily: "Noto Serif, serif",
                                        fontWeight: 700,
                                        color: "text.primary",
                                        backgroundColor: "white",
                                        px: 1,
                                        py: 0.5,
                                        textAlign: "center",
                                        display: "inline",
                                        fontSize: {
                                            xs: "2rem",
                                            sm: "2rem",
                                            md: "2.5rem",
                                        },
                                    }}
                                >
                                    <Box component="span" sx={{ color: "secondary.light" }}>
                                        increible
                                    </Box> {' '}
                                    para
                                </Typography>
                            </Box>
                            <Box mb={'28px'}>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontFamily: "Noto Serif, serif",
                                        fontWeight: 700,
                                        color: "text.primary",
                                        backgroundColor: "white",
                                        px: 1,
                                        py: 0.5,
                                        textAlign: "center",
                                        display: "inline",
                                        fontSize: {
                                            xs: "2rem",
                                            sm: "2rem",
                                            md: "2.5rem",
                                        },
                                    }}
                                >
                                    darte soluciones
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 8, sm: 12 }}>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: "primary.dark",
                                    fontSize: {
                                        xs: "0.9rem",
                                        sm: "1rem",
                                        md: "1.1rem",
                                    },
                                }}
                                >
                                    ¿Tenés una idea? Te ayudamos a llevarla a producción.
                                </Typography>
                        </Grid>
                        <Grid size={{ xs: 12 }} mt={'25px'}>
                             <Button 
                                variant="contained" 
                                size={isMobile ? "small" : "medium"}
                                href="#contact"
                                sx={{ py: 1, px: 3, backgroundColor: 'secondary.light', borderRadius: '20px', "&:hover": { backgroundColor: "secondary.main" } }}
                                endIcon={<KeyboardArrowRightIcon />}
                            >
                                Contactanos
                                </Button>
                        </Grid>
                    </Grid>
                </Container>
            </Box>


            <Box
                component="img"
                src={pattern_orange}
                alt="pattern"
                sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: 180,
                    display: {
                        xs: "none",
                        sm: "none",
                        md: "block"
                    }
                }}
            />

            <Box
                component="img"
                src={pattern_orange}
                alt="pattern"
                sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: 180,
                    display: {
                        xs: "none",
                        sm: "none",
                        md: "block"
                    }
                }}
            />
        </Box>

    );
}

