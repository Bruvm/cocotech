import React, { useRef, useState } from "react";
import { Typography, TextField, Button, Box, Container, Grid, Snackbar, Alert, useTheme, useMediaQuery } from "@mui/material";
import emailjs from "emailjs-com";

const SERVICE_ID = "service_km6xzs1";
const TEMPLATE_ID = "template_uavffls";
const PUBLIC_KEY = "XBUfeh_WPdM0TFIhx";


const Contact = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const form = useRef<HTMLFormElement | null>(null);
    const [sent, setSent] = useState(false);
    const [sending, setSending] = useState(false);
    const [open, setOpen] = useState(false);
    const [error, setError] = useState(false);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.current) return;
        setSending(true);
        try {
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
                .then(() => {
                    setSent(true);
                    setSending(false);
                    form.current?.reset();
                })
                .catch((err) => {
                    console.error("EmailJS error:", err);
                    setSending(false);
                    setError(true);

                });

            if (form.current) {
                form.current.reset();
            }

            setOpen(true);
        } catch (error) {
            console.error("Error enviando el email:", error);
        } finally {
            setSending(false);
        }
    };

    return (

        <Box
            sx={{
                width: "100%",
                backgroundColor: "#f5f3ec",
                pt: '50px',
                pb: '100px'
            }}
            id='contact'
        >
            <Container maxWidth="md">
                <Grid container spacing={4} justifyContent="center">
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Grid container>
                            <Grid size={{ xs: 12 }}>
                                <Box display="flex" justifyContent="left" mb={1}>
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            fontFamily: "Noto Serif, serif",
                                            fontWeight: 700,
                                            color: "secondary.light",
                                            backgroundColor: "white",
                                            px: 1,
                                            py: 0.5,
                                            textAlign: "left",
                                            display: "inline",
                                            fontSize: {
                                                xs: "2rem",
                                                sm: "2rem",
                                                md: "2.5rem",
                                            },
                                        }}
                                    >
                                        Cuentanos tu
                                    </Typography>
                                </Box>
                                <Box display="flex" justifyContent="left" mb={1}>
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            fontFamily: "Noto Serif, serif",
                                            fontWeight: 700,
                                            color: "secondary.light",
                                            backgroundColor: "white",
                                            px: 1,
                                            py: 0.5,
                                            textAlign: "left",
                                            display: "inline",
                                            fontSize: {
                                                xs: "2rem",
                                                sm: "2rem",
                                                md: "2.5rem",
                                            },
                                        }}
                                    >
                                        necesidad
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid size={{ xs: 12 }} mt={2}>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontSize: {
                                            xs: "0.9rem",
                                            sm: "1rem",
                                            md: "1.1rem",
                                        },
                                    }}
                                >
                                    Estamos aquí para ayudarte a materializar tus ideas. Compartí tu proyecto con nosotros y te contactaremos pronto.
                                </Typography>
                            </Grid>
                        </Grid>

                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <form ref={form} onSubmit={sendEmail}>
                            <TextField
                                fullWidth
                                name="from_name"
                                label="Nombre"
                                placeholder="Tu nombre"
                                margin="normal"
                                required
                                size="small"
                            />

                            <TextField
                                fullWidth
                                name="reply_to"
                                label="Email"
                                placeholder="Ingrese un email de contacto"
                                margin="normal"
                                required
                                size="small"
                            />

                            <TextField
                                fullWidth
                                name="company"
                                label="Empresa"
                                placeholder="Ingrese el nombre de tu empresa"
                                margin="normal"
                                required
                                size="small"
                            />

                            <TextField
                                fullWidth
                                name="message"
                                label="Cuéntanos sobre tu proyecto"
                                placeholder="Escribí tu proyecto, objetivos y como podemos ayudarte"
                                margin="normal"
                                multiline
                                rows={5}
                                required
                                size="small"
                            />

                            <Button
                                type="submit"
                                variant="contained"
                                disabled={sending}
                                size={isMobile ? "small" : "medium"}
                                sx={{ mt: 2, py: 1, px: 3, backgroundColor: 'secondary.light', borderRadius: '20px', "&:hover": { backgroundColor: "secondary.main" } }}>
                                {sending ? "Enviando..." : "Enviar"}
                            </Button>
                        </form>

                        <Snackbar
                            open={open}
                            autoHideDuration={4000}
                            onClose={() => setOpen(false)}
                            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                        >
                            <Alert
                                onClose={() => setOpen(false)}
                                severity="success"
                                sx={{ width: "100%" }}
                            >
                                Tu mensaje se envió con éxito. Te responderemos pronto.
                            </Alert>
                        </Snackbar>
                        <Snackbar
                            open={error}
                            autoHideDuration={4000}
                            onClose={() => setError(false)}
                            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                        >
                            <Alert onClose={() => setError(false)} severity="error" sx={{ width: "100%" }}>
                                Ocurrió un error al enviar el mensaje. Intentalo de nuevo.
                            </Alert>
                        </Snackbar>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default Contact;
