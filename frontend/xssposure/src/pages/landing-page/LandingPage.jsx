import './LandingPage.css';
import Header from '../../components/Header';
import BasicInfo from './components/BasicInfo';
import LearnMore from './components/LearnMore';
import ReadyToTry from './components/ReadyToTry';
import Footer from '../../components/Footer';

function Home() {

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

export default Home;