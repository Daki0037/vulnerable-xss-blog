import Header from "../../components/Header";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Footer from '../../components/Footer';
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import axios from "axios";

function Login() {

    const navigate = useNavigate();
    const apiUrl = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("jwtToken") !== null;

        if(isLoggedIn) {
            navigate('/home');
        }
    });

    const [formData, setFormData] = useState({
        username: "",
        password: "",
        rememberMe: false,
    });

    const [errors, setErrors] = useState({
        username: "",
        password: "",
    });

    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const handleChange = (event) => {
        const { name, value, checked, type } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: type === "checkbox" ? checked : value,
        }));

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "",
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        let valid = true;

        if (!formData.username) {
        setErrors((prevErrors) => ({
            ...prevErrors,
            username: "Korisničko ime je obavezno.",
        }));
        usernameRef.current.focus();
        valid = false;
        } else if (!formData.password) {
        setErrors((prevErrors) => ({
            ...prevErrors,
            password: "Lozinka je obavezna.",
        }));
        passwordRef.current.focus();
        valid = false;
        }

        login(formData);
    };

    const login = async(formData) => {
        try {
            const response = await axios.post('http://localhost:8080/api/v1/auth/login', {
              username: formData.username,
              password: formData.password
            });
            
            localStorage.setItem('jwtToken', response.data.jwt);
            navigate("/");
        } catch (error) {
            console.error('Error logging in:', error.response ? error.response.data : error.message);
        }
    }

    const handleReturnButton = () => {
        navigate("/");
    }

    return <>
        <Header></Header>
        <Container>
            <Box
            sx={{  
            marginTop: 15,
            marginBottom: 30,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            }}
        >
            <Typography component="h1" variant="h4" fontFamily='Sora'>
            Prijavite se
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Korisničko ime"
                name="username"
                autoComplete="username"
                autoFocus
                value={formData.username}
                onChange={handleChange}
                error={!!errors.username}
                helperText={errors.username}
                inputRef={usernameRef}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Lozinka"
                type="password"
                id="password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
                inputRef={passwordRef}
            />
            <FormControlLabel
                control={<Checkbox value="remember" color="primary"/>}
                label="Zapamti me"
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Prijavite se
            </Button>
            <Button
                fullWidth
                variant="outlined"
                sx={{ mb: 2 }}
                onClick={handleReturnButton}
            >
                Povratak na početnu stranu
            </Button>
            </Box>
        </Box>
        </Container>
        <Footer></Footer>
    </>
}

export default Login;