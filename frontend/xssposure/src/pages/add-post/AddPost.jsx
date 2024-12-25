import './AddPost.css';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { Container, Grid2, Box, Button, TextField, Snackbar } from '@mui/material';
import { useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddPost() {

    const navigate = useNavigate();
    const textFieldRef = useRef("");
    const [open, setOpen] = useState(false);
    const [successOpen, setSuccessOpen] = useState(false);

    const handleAddButton = async () => {
        let postContent = textFieldRef.current?.value;
    
        if (postContent === undefined || postContent.trim().length === 0) {
            setOpen(true);
            return;
        }
    
        const token = localStorage.getItem("jwtToken");
    
        const postData = {
            content: postContent,
            likeCount: 0,
            commentCount: 0,
        };
    
        try {
            const response = await axios.post("http://localhost:8080/api/v1/posts/insert", postData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });
            textFieldRef.current.value = "";
            setSuccessOpen(true);
            navigate("/home");
        } catch (error) {
            console.error("Error creating post:", error.response?.data || error.message);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSuccessClose = () => {
        setSuccessOpen(false);
    };

    return (
        <>
            <Header></Header>
            <Container maxWidth={false}>
                <Grid2 container>
                    <Grid2 size={2}>
                        <Sidebar></Sidebar>
                    </Grid2>
                    <Grid2 size={10}>
                        <Container>
                            <h1 className='addPostTitle'>Podelite svoje mišljenje, hobi ili doživljaj sa celim svetom! </h1>
                            <Box
                                display="flex"
                                flexDirection="column"
                                alignItems="flex-start"
                                >
                                <TextField
                                    placeholder="Podelite svoje mišljenje sa svetom..."
                                    variant="outlined"
                                    fullWidth
                                    multiline
                                    inputProps={{ maxLength: 200 }}
                                    inputRef={textFieldRef}
                                    rows={6}
                                    sx={{
                                    mb: 2,
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "16px",
                                    },
                                    }}
                                />
                                <Button variant='contained' sx={{ position: 'relative', top: '-65px', left: 'calc(100% - 110px)', fontFamily: 'Sora' }} onClick={handleAddButton}>Postavi</Button>
                            </Box>
                        </Container>
                    </Grid2>
                </Grid2>
                <Snackbar
                    open={open}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    autoHideDuration={2000}
                    onClose={handleClose}
                    message="Polje mora biti popunjeno"
                />
                <Snackbar
                    open={successOpen}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    autoHideDuration={2000}
                    onClose={handleSuccessClose}
                    message="Post uspešno kreiran!"
                    ContentProps={{
                        style: { backgroundColor: '#198754', color: 'white' },
                    }}
                />
            </Container>
        </>
    );
}

export default AddPost;