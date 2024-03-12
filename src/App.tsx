import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './layouts/layout'
import Homepage from './pages/HomePage';
import AuthCallbackPage from './pages/AuthCallbackPage';
import UserProfilePage from './pages/UserProfilePage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout showHero><Homepage/></Layout>} />
      <Route path='/auth-callback' element={<AuthCallbackPage/>}/>
      <Route path='/user-profile' element={<Layout><UserProfilePage/></Layout>} />
      <Route path='*' element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App