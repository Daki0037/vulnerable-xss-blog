import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/landing-page/LandingPage';
import Login from './pages/login/Login';

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App