import AppBar from '@mui/material/AppBar';
import { Toolbar, Typography, Button, Link } from '@mui/material';
import './Header.css';
import { useNavigate } from 'react-router-dom';

function Header() {

    const navigate = useNavigate();

    const handleLoginButton = () => {
        navigate("/login");
    }

    return (
        <AppBar className='homeHeader' position='static'>
            <Toolbar className='homeHeaderToolbar'>
            
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: '400' }}>
                <Link href="/" sx={{ textDecoration: 'none', color: 'black' }}>XSSPosure</Link>
            </Typography>
            <Button variant='contained' onClick={handleLoginButton}>Prijavite se</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;