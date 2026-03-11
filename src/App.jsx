import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import WelcomePage from './pages/WelcomePage';
import RosarioPage from './pages/RosarioPage';
import UserPage from './pages/UserPage';

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
          <Route path="/" element = {<WelcomePage />} />
          <Route path="/rosario" element = {<RosarioPage />} />
          <Route path="/user/:username" element={<UserPage />} />
          <Route path="*" element = {<Navigate />} />
        </Routes>
      </BrowserRouter>
    </Container>
  )
}

export default App