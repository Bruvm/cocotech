import { Box, Container, Grid, Typography } from "@mui/material";
import ExtensionIcon from "@mui/icons-material/Extension";
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DeviceHubOutlinedIcon from '@mui/icons-material/DeviceHubOutlined';

export default function Products() {
    return (
        <Box
            sx={{
                width: "100%",
                backgroundColor: "secondary.light",
                py: 6,
            }}
            id={'product'}
        >
            <Container maxWidth="md">
                <Grid container spacing={4} justifyContent="center">
                    <Grid size={{ xs: 12 }}>
                        <Box display="flex" justifyContent="center" mb={2} mt={5}>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontFamily: "Noto Serif, serif",
                                    fontWeight: 600,
                                    color: "white",
                                    textAlign: "center",
                                }}
                            >
                               Nuestros principales productos
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box
                            sx={{
                                borderRadius: 4,
                                px:2,
                                py:5,
                                height: "100%",
                                textAlign: "center",
                                color: 'white'
                            }}
                        >
                            <ExtensionIcon
                            sx={{ fontSize: 60, color: "white", mb: '25px' }}/>
                            <Typography
                                variant="h6"
                                sx={{fontWeight: 600}}
                            >
                                Sistemas a medida
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 1, fontFamily: "Montserrat, sans-serif" }}>
                                Desarrollamos plataformas adaptadas a tus procesos y necesidades.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box
                            sx={{
                                borderRadius: 4,
                                px:2,
                                py:5,
                                height: "100%",
                                textAlign: "center",
                                color: 'white'
                            }}
                        >
                            <LanguageOutlinedIcon
                            sx={{ fontSize: 60, color: "white", mb: '25px' }}/>
                            <Typography
                                variant="h6"
                                sx={{fontWeight: 600}}
                            >
                                Landing pages
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 1, fontFamily: "Montserrat, sans-serif" }}>
                                Páginas atractivas y optimizadas para captar clientes y leads.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box
                            sx={{
                                borderRadius: 4,
                                px:2,
                                py:5,
                                height: "100%",
                                textAlign: "center",
                                color: 'white'
                            }}
                        >
                            <DeviceHubOutlinedIcon
                             sx={{ fontSize: 60, color: "white", mb: '25px' }}/>
                            <Typography
                                variant="h6"
                                sx={{fontWeight: 600}}
                            >
                                Integraciones y APIs 
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 1, fontFamily: "Montserrat, sans-serif" }}>
                                Conectamos sistemas para mejorar la eficiencia de tu negocio.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
