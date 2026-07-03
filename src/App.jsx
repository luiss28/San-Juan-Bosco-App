import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import WelcomePage from './pages/WelcomePage';
import RosarioPage from './pages/RosarioPage';
import RosarioJuvenilPage from './pages/RosarioJuvenilPage';
import DonBoscoPage from './pages/DonBoscoPage';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';

function App() {
  
  return (
    <Container fluid className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element = {<WelcomePage />} />
          <Route path="/rosario" element = {<RosarioPage />} />
          <Route path="/rosariojuvenil" element = {<RosarioJuvenilPage />} />
          <Route path="/donbosco" element = {<DonBoscoPage />} />
          <Route path="/register" element = {<RegistrationPage />} />
          <Route path="/login" element = {<LoginPage/>} />
          <Route path="*" element = {<Navigate />} />
        </Routes>
      </BrowserRouter>
    </Container>
  )
}

export default App