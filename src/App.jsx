import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import WelcomePage from './pages/WelcomePage';
import RosarioPage from './pages/RosarioPage';
import RosarioJuvenilPage from './pages/RosarioJuvenilPage';
import DonBoscoPage from './pages/DonBoscoPage';
import InterestFormPage from './pages/InterestFormPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  
  return (
    <Container fluid className="App">
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element = {<WelcomePage />} />
          <Route path="/rosario" element = {<RosarioPage />} />
          <Route path="/rosariojuvenil" element = {<RosarioJuvenilPage />} />
          <Route path="/donbosco" element = {<DonBoscoPage />} />
          <Route path="/interes" element = {<InterestFormPage />} />
          <Route path="*" element = {<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Container>
  )
}

export default App