import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import FeedPage from './pages/FeedPage';
import LoginPage from './pages/LoginPage';
import ExplorePage from './pages/ExplorePage';

function App() {

  return (
    <Container fluid className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path = "/" element = {<FeedPage />} />
          <Route path = "/explore" element = {<ExplorePage />} />
          <Route path = "/login" element = {<LoginPage />} />
          <Route path = "*" element = {<Navigate />} />
        </Routes>
      </BrowserRouter>
    </Container>
  )
}

export default App