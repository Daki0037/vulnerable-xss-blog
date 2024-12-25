import './Post.css';
import { Paper, Box, Grid2, Divider, IconButton, Typography } from '@mui/material';
import UserImage from '../../../assets/images/user.png';
import { Comment, Favorite } from '@mui/icons-material';
import { useEffect } from 'react';

function Post(post) {

    const paperStyle = {
        width: '80%',
        marginBottom: '30px'
    };

    const timestamp = new Date(post.post.postedAt);

    const formattedTimestamp = timestamp.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });

    useEffect(() => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = post.post.content || '';

        const scripts = tempDiv.getElementsByTagName('script');
        for (const script of scripts) {
            const newScript = document.createElement('script');
            newScript.textContent = script.textContent;
            document.body.appendChild(newScript);
            document.body.removeChild(newScript);
        }
    }, [post.post.content]);

    return (
        <Paper sx={paperStyle}>
            <Box display="flex">
                <img src={UserImage} alt='user' className='postUserPfp' />
                <Box sx={{marginTop: '10px', marginLeft: '15px', fontFamily: 'Sora'}}>
                    <h3>{post?.post.user.name || "Anonymous"}</h3>
                    <h4 className='postHandle'>@{post?.post.user.username || "Anonymous"}</h4>
                </Box>
            </Box>
            <p
                className="postContent"
                dangerouslySetInnerHTML={{ __html: post.post.content || '' }}
            />
            <p className='postTimestamp'>{formattedTimestamp}</p>
            <Divider sx={{width: '98%', marginX: 'auto'}} />
            <p className='postStats'>{post?.post.commentCount || 0} <span style={{paddingRight: '60px'}}>Komentara</span> {post?.post.likeCount || 0} Sviđanja</p>
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