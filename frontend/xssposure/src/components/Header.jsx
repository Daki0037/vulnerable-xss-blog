import AppBar from '@mui/material/AppBar';
import { Toolbar, Typography, Button, Link } from '@mui/material';
import './Header.css';
import { useNavigate } from 'react-router-dom';

function Header() {

    const navigate = useNavigate();

    const handleLoginButton = () => {
        navigate("/login");
    }

    const handleLogoutButton = () => {
        localStorage.removeItem('jwtToken');

        navigate("/");
    }

    const buttonStyle = {
        fontFamily: 'Sora',
        fontSize: '15px'
    };

    return (
        <AppBar className='homeHeader' position='sticky'>
            <Toolbar className='homeHeaderToolbar'>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: '400', fontFamily: 'Sora' }}>
                <Link href="/" sx={{ textDecoration: 'none', color: 'black' }}>XSSPosure</Link>
            </Typography>
            {localStorage.getItem('jwtToken') === null ? <Button sx={buttonStyle} variant='contained' onClick={handleLoginButton}>Prijavite se</Button> :  <Button sx={buttonStyle} variant='contained' onClick={handleLogoutButton}>Odjavite se</Button>}
            </Toolbar>
        </AppBar>
    );
}

export default Header;