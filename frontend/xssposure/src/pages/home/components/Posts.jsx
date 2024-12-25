import './Posts.css';
import { Box, InputBase, Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Post from './Post';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Posts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const postsContainerStyle = {
        marginTop: '20px',
        marginLeft: '100px'
    };

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const token = localStorage.getItem('jwtToken');
                const response = await axios.get('http://localhost:8080/api/v1/posts', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setPosts(response.data);
            } catch (err) {
                setError('Failed to load posts');
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

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
                {loading ? (
                    <p className='postDefaultText'>Loading posts...</p>
                ) : error ? (
                    <p className='postDefaultText'>{error}</p>
                ) : (
                    <Box>
                        {posts.length === 0 ? (
                            <p>No posts available.</p>
                        ) : (
                            posts.map((post) => (
                                <Post key={post.id} post={post} />
                            ))
                        )}
                    </Box>
                )}
            </Box>
        </Box>
    );
}

export default Posts;