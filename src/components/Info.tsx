import { Box, Container, Grid, Typography } from "@mui/material";
import info_one from '../assets/img/info_one.jpg'
import into_two from '../assets/img/info_two.jpg'
import pattern from "../assets/img/pattern_lightblue.png";
import pattern_green from '../assets/img/pattern_green.png'

export default function Info() {
    return (
        <Box
            sx={{
                width: "100%",
                backgroundColor: "#f5f3ec",
                py: '150px',

            }}
        >
            <Container maxWidth="md">
                <Grid container spacing={0} justifyContent="center">
                    <Grid size={{ xs: 12, md: 6 }}
                    >
                        <Box
                            sx={{
                                width: "100%",
                                height: "100%",
                                minHeight: 300,
                                backgroundImage: `url(${info_one})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                borderTopLeftRadius: 5,
                                borderBottomLeftRadius: { xs: 0, md: 5 },
                                borderTopRightRadius: { xs: 5, md: 0 },
                                borderBottomRightRadius: 0,
                            }}
                        />
                    </Grid>
                    <Grid
                        size={{ xs: 12, md: 6 }}
                        sx={{
                            backgroundColor: '#D1ECFF',
                            borderTopLeftRadius: 0,
                            borderBottomLeftRadius: { xs: 5, md: 0 },
                            borderTopRightRadius: { xs: 0, md: 5 },
                            borderBottomRightRadius: 5,
                        }}
                    >
                        <Box
                            sx={{
                                borderRadius: 4,
                                p: 5,
                                py: '70px',
                                height: "100%",
                                color: 'text.primary',
                                position: "relative",
                                backgroundImage: `url(${pattern})`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "right bottom",
                                backgroundSize: "120px auto",
                            }}
                        >
                            <Typography
                                variant="h4"
                                sx={{ fontWeight: 600 }}
                                mb={3}
                            >
                                Impulsamos tu éxito digital
                            </Typography>

                            <Typography
                                variant="caption"
                                sx={{ mt: 1, fontFamily: "Montserrat, sans-serif" }}
                            >
                                En un mundo digital en constante evolución, tu negocio necesita más que solo tecnología; necesita un socio estratégico. Te brindamos soluciones IT innovadoras que transforman tus desafíos en oportunidades y te posicionan a la vanguardia de tu sector
                            </Typography>
                        </Box>
                    </Grid>

                </Grid>

                <Grid container spacing={0} justifyContent="center" sx={{ mt: '100px' }}>

                    <Grid
                        size={{ xs: 12, md: 6 }}
                        sx={{
                            backgroundColor: '#DBECE4',
                            borderTopLeftRadius: 5,
                            borderBottomLeftRadius: { xs: 0, md: 5 },
                            borderTopRightRadius: { xs: 5, md: 0 },
                            borderBottomRightRadius: 0,
                        }}
                    >
                        <Box
                            sx={{
                                borderRadius: 4,
                                p: 5,
                                py: '70px',
                                height: "100%",
                                color: 'text.primary',
                                position: "relative",
                                backgroundImage: `url(${pattern_green})`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "left bottom",
                                backgroundSize: "120px auto",
                            }}
                        >
                            <Typography
                                variant="h4"
                                sx={{ fontWeight: 600 }}
                                mb={3}
                            >
                                Tu tranquilidad, nuestra prioridad
                            </Typography>

                            <Typography
                                variant="caption"
                                sx={{ mt: 1, fontFamily: "Montserrat, sans-serif" }}
                            >
                                Sabemos que la tecnología puede ser compleja. Por eso, nos encargamos de todo el aspecto técnico para que tú puedas concentrarte plenamente en dirigir tu negocio. Con nosotros, tienes la certeza de que tu infraestructura IT está en las mejores manos.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box
                            sx={{
                                width: "100%",
                                height: "100%",
                                minHeight: 300,
                                backgroundImage: `url(${into_two})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                borderTopLeftRadius: 0,
                            borderBottomLeftRadius: { xs: 5, md: 0 },
                            borderTopRightRadius: { xs: 0, md: 5 },
                            borderBottomRightRadius: 5,
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
