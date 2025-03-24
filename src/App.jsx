//App.jsx

import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import DashboardPage from './pages/DashboardPage'
import TopUpPage from './pages/TopUpPage'
import TransferPage from './pages/TransferPage'

function App(params) {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/topup" element={<TopUpPage />} />
      <Route path="/transfer" element={<TransferPage />} />
    </Routes>
  )
}

export default App;
