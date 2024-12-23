import './Post.css';
import { Paper, Box, Grid2, Divider, IconButton, Typography } from '@mui/material';
import UserImage from '../../../assets/images/user.png';
import { Comment, Favorite } from '@mui/icons-material';

function Post(post) {

    const paperStyle = {
        width: '80%'
    };

    return (
        <Paper sx={paperStyle}>
            <Box display="flex">
                <img src={UserImage} alt='user' className='postUserPfp' />
                <Box sx={{marginTop: '10px', marginLeft: '15px', fontFamily: 'Sora'}}>
                    <h3>username</h3>
                    <h4 className='postHandle'>@handle</h4>
                </Box>
            </Box>
            <p className='postContent'>XSS napadi nisu samo teorija - oni su stvarna pretnja! 💻🔓 Naučite kako da ih identifikujete i sprečite na našem projektu na fakultetu. 🛡️ #CyberSecurity #XSS</p>
            <p className='postTimestamp'>5:03 PM - Feb 25, 2024</p>
            <Divider sx={{width: '98%', marginX: 'auto'}} />
            <p className='postStats'>0 <span style={{paddingRight: '60px'}}>Komentara</span> 0 Sviđanja</p>
            <Divider sx={{width: '98%', marginX: 'auto'}} />
            <Box sx={{paddingBottom: '2px', paddingTop: '2px'}}>
                <IconButton type='button' sx={{marginLeft: 5}}>
                    <Favorite sx={{fontSize: 30}}></Favorite>
                </IconButton>
                <IconButton type='button' sx={{marginLeft: 4}}>
                    <Comment sx={{fontSize: 30}}></Comment>
                </IconButton>
            </Box>
        </Paper>
    );
}

export default Post;