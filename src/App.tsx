import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './layouts/layout'
import Homepage from './pages/HomePage';
import AuthCallbackPage from './pages/AuthCallbackPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout><Homepage/></Layout>} />
      <Route path='/auth-callback' element={<AuthCallbackPage/>}/>
      <Route path='/user-profile' element={<span>User profile page</span>} />
      <Route path='*' element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App