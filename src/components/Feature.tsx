import { Box, Container, Grid, Typography } from "@mui/material";
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';

export default function Features() {
    return (
        <Box
            sx={{
                width: "100%",
                backgroundColor: "#f5f3ec",
                pt: '50px',
                pb: '100px'
            }}
            id={'about'}
        >
            <Container maxWidth="md">
                <Grid container spacing={4} justifyContent="center">
                    <Grid size={{ xs: 12 }}>
                        <Box display="flex" justifyContent="center" mb={1}>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontFamily: "Noto Serif, serif",
                                    fontWeight: 700,
                                    color: "primary.dark",
                                    backgroundColor: "white",
                                    px: 1,
                                    py: 0.5,
                                    textAlign: "center",
                                    display: "inline",
                                }}
                            >
                                Facilitamos la creación de
                            </Typography>
                        </Box>
                         <Box display="flex" justifyContent="center" mb={1}>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontFamily: "Noto Serif, serif",
                                    fontWeight: 700,
                                    color: "primary.dark",
                                    backgroundColor: "white",
                                    px: 1,
                                    py: 0.5,
                                    textAlign: "center",
                                    display: "inline",
                                }}
                            >
                                estrategia y diseño
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box
                            sx={{
                                backgroundColor: "#d9f2ec",
                                borderRadius: 2,
                                px: 4,
                                py:5,
                                height: "100%",
                            }}
                        >
                            <GroupOutlinedIcon
                            sx={{ fontSize: 75, color: "secondary.main", mb: '5px' }}/>
                            <Typography
                                variant="h6"
                                sx={{ fontFamily: "Noto Serif, serif", fontWeight: 600 }}
                            >
                                Cercano y humano
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 1, fontFamily: "Montserrat, sans-serif" }}>
                                Somos dos desarrolladores que convertimos ideas en productos
                                digitales simples, útiles y bien pensados.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box
                            sx={{
                                backgroundColor: "#e7f3fb", 
                                borderRadius: 2,
                                px: 4,
                                py:5,
                                height: "100%",
                            }}
                        >
                            <SettingsOutlinedIcon
                            sx={{ fontSize: 75, color: "secondary.main", mb: '5px' }}/>
                            <Typography
                                variant="h6"
                                sx={{ fontFamily: "Noto Serif, serif", fontWeight: 600 }}
                            >
                                Técnico y directo
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 1, fontFamily: "Montserrat, sans-serif" }}>
                                Diseñamos y desarrollamos soluciones eficientes, escalables y a
                                medida.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box
                            sx={{
                                backgroundColor: "#fde9e4", 
                                borderRadius: 2,
                                px: 4,
                                py:5,
                                height: "100%",
                            }}
                        >
                            <LightbulbOutlinedIcon
                             sx={{ fontSize: 75, color: "secondary.main", mb: '5px' }}/>
                            <Typography
                                variant="h6"
                                sx={{ fontFamily: "Noto Serif, serif", fontWeight: 600 }}
                            >
                                Creativo
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 1, fontFamily: "Montserrat, sans-serif" }}>
                                Transformamos desafíos en productos digitales con impacto real y
                                enfoque ágil.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
