import './Posts.css';
import { Box, InputBase, Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Post from './Post';

function Posts({ posts }) {

    const postsContainerStyle = {
        marginTop: '20px',
        marginLeft: '100px'
    };

    return (
        <Box sx={postsContainerStyle}>
            <h1 className='homePageTitle'>Početna strana</h1>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '80%', background: '#E7EEF2', marginTop: '25px', marginBottom: '40px' }}
                >
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Pretražite postove..."
                    inputProps={{ 'aria-label': 'pretražite postove' }}
                />
            </Paper>
            <Box>
                <Post />
            </Box>
        </Box>
    );
}

export default Posts;