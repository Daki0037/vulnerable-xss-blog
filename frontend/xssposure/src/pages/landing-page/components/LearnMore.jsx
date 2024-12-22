import './LearnMore.css';
import { Container, Grid2 } from "@mui/material";
import XSSImage from '../../../assets/images/xss-learn-more.png';
import XSSWorking from '../../../assets/images/xss-working.png';
import XSSPrevention from '../../../assets/images/xss-prevention.png';

function LearnMore() {

    return (
        <>
            <Container sx={{ marginTop: '7%'}}>
                <h1 className="learnMoreTitle">Šta su Cross-Site Scripting (XSS) napadi?</h1>
                <p className="learnMoreDescription">Cross-Site Scripting (XSS) napadi predstavljaju jedan od najčešćih sigurnosnih problema u web aplikacijama. 
                Ovi napadi omogućavaju napadačima da ubace maliciozni JavaScript kod u web stranice koje korisnici potom pregledaju.
                Kada korisnik otvori zaraženu stranicu, skripta se izvršava u njegovom pregledaču, što može dovesti do krađe osjetljivih podataka, poput kolačića (cookies), sesijskih tokena, ili čak omogućiti napadaču da preuzme kontrolu nad korisničkim računom. </p>
                <Grid2 container spacing={2}>
                    <Grid2 size={4}>
                        <img src={XSSImage} alt="XSS Image" className='learnMoreCardImage' />
                        <h2 className='learnMoreCardTitle'>Šta je XSS?</h2>
                        <p className='learnMoreCardText'>Cross-Site Scripting (XSS) je sigurnosni propust u web aplikacijama koji omogućava napadačima da ubace maliciozni JavaScript kod na sajtove koje posećuju korisnici. 
                            Kada se ovaj kod izvrši u pregledaču korisnika, može dovesti do krađe podataka poput kolačića ili čak do preuzimanja kontrole nad korisničkim nalozima.</p>
                    </Grid2>
                    <Grid2 size={4}>
                        <img src={XSSWorking} className='learnMoreCardImage' />
                        <h2 className='learnMoreCardTitle'>Kako funkcionišu XSS napadi?</h2>
                        <p className='learnMoreCardText'>XSS napadi se oslanjaju na nedostatak provere korisničkih unosa u aplikacijama. 
                        Napadač umeće štetan kod koji se učitava ili pokreće kada drugi korisnici posete određenu stranicu. Ovo omogućava napadaču da prevari sistem i iskoristi poverenje koje korisnici imaju u sajt.</p>
                    </Grid2>
                    <Grid2 size={4}>
                        <img src={XSSPrevention} className='learnMoreCardImage' />
                        <h2 className='learnMoreCardTitle'>Kako se zaštititi od XSS-a?</h2>
                        <p className='learnMoreCardText'>Zaštita od XSS-a podrazumeva pravilnu obradu svih korisničkih unosa, korišćenje sigurnosnih politika i pažljivo rukovanje podacima koji se prikazuju na sajtu. 
                        Implementacijom sigurnosnih pravila i savremenih alata moguće je značajno umanjiti rizik od ovakvih napada.</p>
                    </Grid2>
                </Grid2>
            </Container>
        </>
    );
}

export default LearnMore;