import './Footer.css';
import { Grid2, Button, Container, Typography } from "@mui/material";

function Footer() {

    return (
        <Container className='footerContainer'>
            <Grid2 container marginTop='20px'>
                <Grid2 size={4} textAlign='center'>
                    <Button className='footerButton'>O Cross-Site Scripting napadu</Button>
                </Grid2>
                <Grid2 size={4} textAlign='center'>
                    <Button className='footerButton'>O projektu</Button>
                </Grid2>
                <Grid2 size={4} textAlign='center'>
                    <Button className='footerButton'>Kontakt</Button>
                </Grid2>
            </Grid2>
            <Typography textAlign='center' color="primary" fontFamily='Sora' marginTop='30px' marginBottom='15px'>© 2024 XSSPosure - Danilo Obradović 555/2024</Typography>
        </Container>
    );
}

export default Footer;