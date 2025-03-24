//App.jsx

import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'

function App(params) {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  )
}

export default App;
