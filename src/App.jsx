import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import FeedPage from './pages/FeedPage';
import LoginPage from './pages/LoginPage';
import ExplorePage from './pages/ExplorePage';
import UserPage from './pages/UserPage';
import RegistrationPage from './components/RegistrationPage';

import { useState, useEffect } from 'react'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetchContacts()
  }, [])

  const fetchContacts = async() => {
    const response = await fetch("http://127.0.0.1:5000/users")
    const data = await response.json()
    setUsers(data.users)
    console.log(data.users)
  }


  return (
    <Container fluid className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element = {<FeedPage />} />
          <Route path="/explore" element = {<ExplorePage />} />
          <Route path="/user/:username" element={<UserPage />} />
          <Route path="/login" element = {<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="*" element = {<Navigate />} />
        </Routes>
      </BrowserRouter>
    </Container>
  )
}

export default App