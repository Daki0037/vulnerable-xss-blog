import './AddPost.css';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { Container, Grid2, Box, Button, TextField, Snackbar } from '@mui/material';
import { useRef, useState } from 'react';
import axios from 'axios';

function AddPost() {

    const textFieldRef = useRef("");
    const [open, setOpen] = useState(false);

    const handleAddButton = () => {
        let postContent = textFieldRef.current?.value;

        if(postContent === undefined || postContent.trim().length === 0) {
            setOpen(true);
            return;
        }

    };

    const handleClose = () => {
        setOpen(false);
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
            </Container>
        </>
    );
}

export default AddPost;