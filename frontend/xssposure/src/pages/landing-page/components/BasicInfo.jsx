import './BasicInfo.css';
import { Container, Grid2, Box, Button } from '@mui/material';
import pcImage from '../../../assets/images/pc.png';
import { useNavigate } from 'react-router-dom';

function BasicInfo() {

    const navigate = useNavigate();

    const handleGetStartedButton = () => {
        navigate("/login");
    }

    const handleLearnMoreButton = () => {

    }


    return (
        <Container>
                <Grid2 container sx={{ marginTop: '50px'}}>
                    <Grid2 size={6}>
                        <img src={pcImage} alt='PC with code' className='pcImage' />
                    </Grid2>
                    <Grid2 size={6}>
                        <Box>
                            <h1 className='landingPageTitle'>Prikaz cross-site scripting napada</h1>
                            <p className='landingPageDescription'>XSSposure ima za cilj da prikaže način na koji je moguće zloupotrebiti propust sajta koji se ne zaštiti od XSS napada,
                                kao i da prikaže opasnost ovih napada na internetu.
                            </p>
                            <Grid2 container spacing={2} sx={{ marginTop: '8%' }}>
                                <Grid2>
                                    <Button sx={{ width: '180px', height: '48px', fontFamily: 'Sora', fontWeight: '500', fontSize: '16px' }} variant='contained' onClick={handleGetStartedButton}>
                                        Počnite
                                    </Button>
                                </Grid2>
                                <Grid2>
                                    <Button sx={{ width: '200px', height: '48px', fontFamily: 'Sora', fontWeight: '500', fontSize: '16px' }} variant='outlined' onClick={handleLearnMoreButton}>
                                        Saznajte više
                                    </Button>
                                </Grid2>
                            </Grid2>
                        </Box>
                    </Grid2>
                </Grid2>
            </Container>
    );


}

export default BasicInfo;