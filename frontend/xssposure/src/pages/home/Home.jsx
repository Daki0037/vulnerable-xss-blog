import './Home.css';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Posts from './components/Posts';
import { Container, Grid2 } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("jwtToken") !== null;

        if(!isLoggedIn) {
            navigate("/");
        }
    });

    return (
        <>
            <Header></Header>
            <Container maxWidth={false}>
                <Grid2 container>
                    <Grid2 size={2}>
                        <Sidebar></Sidebar>
                    </Grid2>
                    <Grid2 size={10}>
                        <Posts posts={posts}></Posts>
                    </Grid2>
                </Grid2>
            </Container>
        </>
    );
}

export default Home;