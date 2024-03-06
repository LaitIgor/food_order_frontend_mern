import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './layouts/layout'
import Homepage from './pages/HomePage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout><Homepage/></Layout>} />
      <Route path='/user-profile' element={<span>User profile page</span>} />
      <Route path='*' element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App