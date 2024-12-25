import './LandingPage.css';
import Header from '../../components/Header';
import BasicInfo from './components/BasicInfo';
import LearnMore from './components/LearnMore';
import ReadyToTry from './components/ReadyToTry';
import Footer from '../../components/Footer';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {

    const navigate = useNavigate();

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('jwtToken') !== null;

        if(isLoggedIn) {
            navigate('/home');
        }
    });

    return (
        <>
            <Header></Header>
            <BasicInfo></BasicInfo>
            <LearnMore></LearnMore>
            <ReadyToTry></ReadyToTry>
            <Footer></Footer>
        </>

    );
}

export default LandingPage;