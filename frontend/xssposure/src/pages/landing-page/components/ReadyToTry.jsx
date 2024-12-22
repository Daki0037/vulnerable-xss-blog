import { useNavigate } from 'react-router-dom';
import './ReadyToTry.css';
import { Button, Container, Box } from "@mui/material";

function ReadyToTry() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/login');
    }

    return (
        <Container>
            <h1 className="readyToTryTitle">Da li ste spremni da se upoznate sa Cross-Site Scripting (XSS) napadom?</h1>
            <p className='readyToTryText'>Počnite sa korišćenjem XSSPosure</p>
            <Box textAlign='center' marginBottom='240px'>
                <Button className='readyToTryButton' variant='contained' onClick={handleButtonClick}>Prijavite se</Button>
            </Box>
        </Container>
    );
}

export default ReadyToTry;