import './Sidebar.css';
import { Box, Button, Divider } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Add, BookmarkBorderOutlined, ExploreOutlined, MailOutline, NotificationsOutlined, WhatshotOutlined } from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
    const [activeButton, setActiveButton] = useState('home');
    const navigate = useNavigate();

    const handleHomeButton = () => {
        navigate('/home');
    }

    const handleAddNewPost = () => {
        navigate('/add-post');
    };

    const buttonStyles = (isActive) => ({
        width: '100%',
        fontFamily: 'Sora',
        textTransform: 'capitalize',
        background: isActive ? '#E7EEF2' : '',
        color: '#11141A',
        padding: '10px 20px',
        borderRadius: '5px',
        marginTop: '10px',
        justifyContent: 'flex-start',
    });

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '90vh',
                justifyContent: 'space-between',
                padding: '10px',
                borderRight: '1px solid lightgray',
                position: 'sticky',
                top: 70,
                zIndex: 1000,
            }}
        >
            <Box>
                <Button sx={buttonStyles(activeButton === 'home')} onClick={handleHomeButton} startIcon={<HomeIcon />}>Početna strana</Button><br />
                <Button sx={buttonStyles(activeButton === 'explore')} startIcon={<ExploreOutlined />}>Istražite</Button><br />
                <Button sx={buttonStyles(activeButton === 'notification')} startIcon={<NotificationsOutlined />}>Notifikacije</Button><br />
                <Button sx={buttonStyles(activeButton === 'messages')} startIcon={<MailOutline />}>Poruke</Button><br />
                <Button sx={buttonStyles(activeButton === 'bookmark')} startIcon={<BookmarkBorderOutlined />}>Omiljeno</Button><br />
                <Button sx={buttonStyles(activeButton === 'popular')} startIcon={<WhatshotOutlined />}>Najpopularnije</Button><br />
            </Box>

            <Button
                sx={{
                    fontFamily: 'Sora',
                    textTransform: 'capitalize',
                    padding: '10px 20px',
                    width: '100%'
                }}
                variant='contained'
                onClick={handleAddNewPost}
                startIcon={<Add />}
            >
                Dodajte objavu
            </Button>
        </Box>
    );
}

export default Sidebar;