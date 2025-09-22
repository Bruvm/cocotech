import { Box, Grid, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import node from '../assets/img/node.png'
import react from '../assets/img/react.png'
import next from '../assets/img/next.png'
import aws from '../assets/img/aws.png'
import nest from '../assets/img/nest.png'
import mui from '../assets/img/mui.png'
function Technology() {

    return (
        <Box
            sx={{
                width: "100%",
                backgroundColor: "#f5f3ec",
                pb: '80px',
                pt: { xs: '100px', md: '80px' } 
            }}
            id={'technology'}
        >
            <Container maxWidth="md">
                <Grid container spacing={0} justifyContent="center">
                    <Grid size={{ xs: 12 }} sx={{textAlign: 'center'}}>
                        <Typography variant="body1" sx={{color: '#5B5653', mb: { xs: 5, md: 3 } }}>
                            Somos expertos en
                        </Typography>
                    </Grid>
                </Grid>
                <Grid 
                    container 
                    spacing={0} 
                    justifyContent="center" 
                    alignItems={'center'} 
                >
                    <Grid 
                        size={{ xs: 6, sm: 4, md: 2 }} 
                        display="flex" 
                        justifyContent="center"  
                        sx={{ 
                            mb: { xs: 3, md: 0 } 
                    }}>
                        <Box
                            component="img"
                            src={node}
                            alt="NODE"
                            sx={{ height: 25, opacity: 0.5 }}
                        />

                    </Grid>
                    <Grid 
                        size={{ xs: 6, sm: 4, md: 2 }} 
                        display="flex" 
                        justifyContent="center"  
                        sx={{ 
                            mb: { xs: 3, md: 0 } 
                    }}>
                        <Box
                            component="img"
                            src={react}
                            alt="REACT"
                            sx={{ height: 25, opacity: 0.5}}
                        />
                    </Grid>
                    <Grid 
                        size={{ xs: 6, sm: 4, md: 2 }} 
                        display="flex" 
                        justifyContent="center"  
                        sx={{ 
                            mb: { xs: 3, md: 0 } 
                    }}>
                        <Box
                            component="img"
                            src={next}
                            alt="NEXT"
                            sx={{ height: 25, opacity: 0.5}}
                        />
                    </Grid>
                    <Grid 
                        size={{ xs: 6, sm: 4, md: 2 }} 
                        display="flex" 
                        justifyContent="center"  
                        sx={{ 
                            mb: { xs: 3, md: 0 } 
                    }}>
                        <Box
                            component="img"
                            src={aws}
                            alt="AWS"
                            sx={{ height: 45, opacity: 0.5}}
                        />
                    </Grid>
                    <Grid 
                        size={{ xs: 6, sm: 4, md: 2 }} 
                        display="flex" 
                        justifyContent="center"  
                        sx={{ 
                            mb: { xs: 3, md: 0 } 
                    }}>
                        <Box
                            component="img"
                            src={nest}
                            alt="NEST"
                            sx={{ height: 35, opacity: 0.5}}
                        />
                    </Grid>
                    <Grid 
                        size={{ xs: 6, sm: 4, md: 2 }} 
                        display="flex" 
                        justifyContent="center"  
                        sx={{ 
                            mb: { xs: 3, md: 0 } 
                    }}>
                        <Box
                            component="img"
                            src={mui}
                            alt="Material-UI"
                            sx={{ height: 45, opacity: 0.5 }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Technology
